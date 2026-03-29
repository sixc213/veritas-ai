// /api/create-key.js

const keys = [];

function generateKey() {
  return "VERITAS-" + Math.random().toString(36).substring(2,10).toUpperCase();
}

import { keys } from "./create-key";

export default function handler(req, res) {
  const key = req.headers["x-api-key"];

  const valid = keys.find(k => k.key === key);

  if (!valid) {
    return res.status(403).json({ valid:false });
  }

  res.status(200).json({ valid:true });
}
