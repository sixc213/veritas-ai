let USERS = [];

export default function handler(req, res){

  if(req.method !== "POST"){
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = req.headers["x-api-key"];

  const user = USERS.find(u => u.key === apiKey);

  if(!user){
    return res.status(401).json({ error: "Invalid API Key" });
  }

  // increase usage
  user.usage++;

  const score = req.body.score || 0;

  const status = score >= 70
    ? "Verified Human"
    : "Verification Failed";

  const token = "VER-" + score + "-" + Math.random().toString(36).substring(2,8);

  res.status(200).json({
    status,
    score,
    token,
    usage: user.usage
  });

}
