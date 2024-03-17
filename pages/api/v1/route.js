const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello World" });
  } else if (req.method === "POST") {
    const prompt = req.body.prompt;
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response;

    res.status(200).json({ photo: image });
  }
}
