import mongoose from "mongoose";




const connect = async () => {
	try {
		const clusterUrl: any = process.env.MONGO_URI;
		await mongoose.connect(clusterUrl);
		console.log("Database connection completed");
		
	} catch (error) {
		console.log(error);
		throw new Error("Connection failed!");
	}
};

export default connect;
