export default function handler(req, res) {

  const VALID_KEYS = [
    "VERITAS-12345-PRO",
    "VERITAS-67890-PRO"
  ];

  const key = req.headers["x-api-key"];

  if (VALID_KEYS.includes(key)) {
    return res.status(200).json({ valid: true });
  }

  return res.status(403).json({ valid: false });
}
