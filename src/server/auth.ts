import { Environments } from "@/constants/enums";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma";


export const authOptions: NextAuthOptions = {
   session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug:process.env.NODE_ENV === Environments.DEV,
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",  
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize:  (credentials) => {
        const user = credentials;
        return{
          id: '1',
          ...user,
        }
      },
    }),
  ],
};
