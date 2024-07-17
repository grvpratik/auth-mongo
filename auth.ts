import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import connect from "./lib/connect";
import User from "./schema/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [google],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log({ user, account, profile, email, credentials });
			try {
				await connect();
				const user = await User.create({
					email: profile?.email,
                });
console.log(await user)
                return true;
			} catch (error) {}

			return true;
		},
	},
});
