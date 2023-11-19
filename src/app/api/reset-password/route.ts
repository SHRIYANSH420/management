import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Cryptr from "cryptr";
import Env from "@/utils/env";
import bcrypt from "bcryptjs";

export const POST = async (request: any) => {
  const { email, password, signature } = await request.json();

  await connect();

  const crypter = new Cryptr(Env.SECRET_KEY);
  const Email = crypter.decrypt(email);


  const user = await User.findOne({
    email: Email,
    resetToken: signature,
  });

  if (user == null || user == undefined) {
    return NextResponse.json({
      status: 400,
      message: "Reset url is not correct. pls double check it .",
    });
  }

  user.password = await bcrypt.hash(password, 5);
  user.resetToken = null;
  await user.save();

  return NextResponse.json({
    status: 200,
    message: "Password changed successfully. please login with new password.",
  });
};
