import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data.data[0].b64_json;

    if (!image) {
      return res.status(500).json({ message: "Image generation failed" });
    }

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error("Error generating image:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: "Something went wrong", error: error.response ? error.response.data : error.message });
  }
});

export default router;
