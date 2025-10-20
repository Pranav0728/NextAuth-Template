// // app/api/auth/signup/route.js
// import dbConnect from "../../../../lib/dbConnect";
// import User from "../../../../lib/models/users";

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     await dbConnect();
//     const { name, email, password } = await req.json();

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json({ error: "User already exists" }, { status: 400 });
//     }
//     if(!name ||!email ||!password){
//       return NextResponse.json({ error: "All fields are required" }, { status: 400 });
//     }
//     const user = new User({ name, email, password });
//     await user.save();

//     return NextResponse.json({ message: "User created successfully" });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }
