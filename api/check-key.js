// /api/create-key.js

const keys = [];

function generateKey() {
  return "VERITAS-" + Math.random().toString(36).substring(2,10).toUpperCase();
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  const newKey = generateKey();

  keys.push({
    email,
    key: newKey,
    plan: "PRO",
    createdAt: Date.now()
  });

  res.status(200).json({
    success: true,
    key: newKey
  });
}
