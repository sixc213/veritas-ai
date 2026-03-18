export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const score = req.body.score || 0;

  let status = score >= 70
    ? "Verified Human"
    : "Verification Failed";

  const token = "VER-" + score + "-" + Math.random().toString(36).substring(2,8).toUpperCase();

  res.status(200).json({
    status,
    score,
    token
  });

}
