import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
  {
    collectionId: { type: mongoose.Schema.Types.ObjectId, ref: "Collection", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    method: { type: String, default: "GET" },
    url: { type: String, required: true },
    headers: { type: Object, default: {} },
    body: { type: Object, default: {} },
    response: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.Request || mongoose.model("Request", RequestSchema);
