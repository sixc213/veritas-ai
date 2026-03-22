let USERS = [];

export default function handler(req, res){

  if(req.method !== "POST"){
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if(!email){
    return res.status(400).json({ error: "Email required" });
  }

  // generate key
  const key = "veritas_pro_" + Math.random().toString(36).substring(2,10);

  // save user
  USERS.push({
    email,
    key,
    usage: 0
  });

  res.status(200).json({
    message: "Key created",
    apiKey: key
  });

}
