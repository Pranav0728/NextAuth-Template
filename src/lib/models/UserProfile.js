import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    plan: { type: String, enum: ["free", "pro"], default: "free" },
    subscription: { type: Object },
    preferences: {
      theme: { type: String, default: "light" },
    },
    creditsUsed: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.UserProfile || mongoose.model("UserProfile", UserProfileSchema);
