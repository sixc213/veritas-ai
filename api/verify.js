export default function handler(req, res) {

  const { score } = req.body;

  let status = "Bot";

  if(score > 60){
    status = "Verified Human";
  }

  res.status(200).json({
    score: score,
    status: status,
    token: "VER-" + score + "-" + Math.random().toString(36).substring(7)
  });

}
