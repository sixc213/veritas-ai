const VALID_API_KEYS = [
  "veritas_free_123",
  "veritas_pro_456"
];

export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = req.headers["x-api-key"];

  if (!VALID_API_KEYS.includes(apiKey)) {
    return res.status(401).json({ error: "Invalid API Key" });
  }

  const score = req.body.score || 0;

  const status = score >= 70
    ? "Verified Human"
    : "Verification Failed";

  const token = "VER-" + score + "-" + Math.random().toString(36).substring(2,8).toUpperCase();

  res.status(200).json({
    status,
    score,
    token
  });

}
