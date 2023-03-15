import { AuthUser } from './../../../types/AuthUser';
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (credentials && credentials.email && credentials.password) {
            const user = await axios.post(process.env.BACKEND + "login", {
                email: credentials.email,
                password: credentials.password,
              });
              //console.log(user.data)
          return user.data
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
        if(user){
            token.user = user
        }
        return token;
    },
    session: async ({ session, token }) => {
        if(token){
            session.user = token.user as AuthUser;
        }
        return session;
    }
  },
  pages: {
    signIn: '/login'
  }
};

export default NextAuth(authOptions);
