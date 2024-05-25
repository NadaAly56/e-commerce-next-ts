import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // Credential({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = null;
    //     // const match = await bcrypt.compare(credentials.password, user.password)
    //     // if (!match || !user)
    //     //   return res.json({ msg: "Email or Password is incorrect" });
    //     return user;
    //   },
    // }),
  ],
};
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
