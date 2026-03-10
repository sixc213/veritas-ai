export default function handler(req, res) {

const score = Math.floor(Math.random() * 40) + 60;

let status = score >= 70 
? "Verified Human"
: "Verification Failed";

const token = "VER-" + score + "-" + Math.random().toString(36).substring(2,8).toUpperCase();

res.status(200).json({
score: score,
status: status,
token: token
});

}
