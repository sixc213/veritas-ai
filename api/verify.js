let API_KEYS = {
  "veritas_free_123": { limit: 5, used: 0 },
  "veritas_pro_456": { limit: 1000, used: 0 }
};

export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = req.headers["x-api-key"];

  if (!API_KEYS[apiKey]) {
    return res.status(401).json({ error: "Invalid API Key" });
  }

  // 🚫 LIMIT CHECK
  if (API_KEYS[apiKey].used >= API_KEYS[apiKey].limit) {
    return res.status(403).json({ error: "Limit reached. Upgrade plan." });
  }

  // ✅ INCREASE USAGE
  API_KEYS[apiKey].used++;

  const score = req.body.score || 0;

  const status = score >= 70
    ? "Verified Human"
    : "Verification Failed";

  const token = "VER-" + score + "-" + Math.random().toString(36).substring(2,8).toUpperCase();

  res.status(200).json({
    status,
    score,
    token,
    remaining: API_KEYS[apiKey].limit - API_KEYS[apiKey].used
  });

}
