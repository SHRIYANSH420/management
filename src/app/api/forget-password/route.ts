import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import cryptoRandomString from "crypto-random-string";
import Cryptr from "cryptr";
import Env from "@/utils/env";
import { sendEmail } from "@/utils/mail";
import ForgotPasswordEmail from "@/emails";
import { render } from "@react-email/render";

export const POST = async (request: any) => {
  const { email } = await request.json();

  await connect();

  // checking user email

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return new NextResponse("Email doesn't exist.", { status: 400 });
  }

  //generate random string

  const randomStr = cryptoRandomString({
    length: 64,
    type: "alphanumeric",
  });

  existingUser.resetToken = randomStr;

  await existingUser.save();

  // Encrypt user email

  const crypt = new Cryptr(Env.SECRET_KEY);
  const encryptedEmail = crypt.encrypt(existingUser.email);

  const url = `${Env.APP_URL}/reset-password/${encryptedEmail}?signature=${randomStr}`;

  try {
    const html = render(
      ForgotPasswordEmail({
        params: {
          name: existingUser.name,
          url: url,
        },
      })
    );
    
    // send mail to user
    
    await sendEmail(email, "Reset Password", html);
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully.please check your email.",
    });
  } catch (error) {
    console.log("the error is", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong.please try again!",
    });
  }
};
