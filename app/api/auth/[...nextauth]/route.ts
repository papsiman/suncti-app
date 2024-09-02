import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUser } from "@/app/db";
import { execQuery } from "@/app/db/db";

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60*60 // s
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req){
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const data: IUser = {
          Id: 0,
          Username: credentials.username,
          Email: '',
          Password: credentials.password,
        }

        const results: IUser[] = await execQuery(
          "SELECT * FROM `user` WHERE `Username` = '"+data.Username+"' AND `Password` = '"+data.Password+"'"
        );

        if(results.length > 0){
          return {name: credentials.username, email: credentials.username};
        }
        else{
          return null;
        }

      },
    }),
  ],
});

export { handler as GET, handler as POST };
