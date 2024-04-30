import mongoose from "mongoose";

const paperRouter = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  Sector: String,
  topic: String,
  insight: String,
  Url: String,
  region: String,
  start_year: Number,
  impact: Number,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});
export default mongoose.model("paper", paperRouter);
