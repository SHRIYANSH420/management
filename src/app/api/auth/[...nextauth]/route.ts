import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";


 
export const authOptions:any = {

providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: {label: "Email", type: "text"},
            password: {label: "Password", type: "password"},
        },
        async authorize(credentials: any) {
            await connect();
            try {
                const user = await User.findOne({email: credentials.email});
                if(user) {
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    )
                    if(isPasswordCorrect) {
                        return user;
                    }
                }
            } catch (err: any) {
                throw new Error(err);
            }
        }
    }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  }),

],
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
