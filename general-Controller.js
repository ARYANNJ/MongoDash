import Paper from "../models/Paper.js";
export const sendPaper = async (req, res, next) => {
  const {
    end_year,
    intensity,
    Sector,
    topic,
    insight,
    Url,
    region,
    start_year,
    impact,
    added,
    published,
    country,
    relevance,
    pestle,
    source,
    title,
    likelihood,
  } = req.body;
  const newPaper = Paper({
    end_year,
    intensity,
    Sector,
    topic,
    insight,
    Url,
    region,
    start_year,
    impact,
    added,
    published,
    country,
    relevance,
    pestle,
    source,
    title,
    likelihood,
  });
  try {
    await newPaper.save();
  } catch (err) {
    console.log(err);
  }
  res.status(201).json({ newPaper });
};
export const getPapers = async (req, res, next) => {
  try {
    const papers = await Paper.find();
    res.status(200).json({ papers });
  } catch (error) {
    console.log(error);
  }
};
