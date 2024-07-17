import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, "email already exist"],
			required: [true, "email required"],
		},
		username: {
			type: String,
			
		},
		password: {
			type: String,
			
		},
	},
	{ timestamps: true }
);
const User = models.User || model("User", UserSchema);

export default User;
