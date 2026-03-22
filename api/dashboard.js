global.USERS = global.USERS || [];
let USERS = global.USERS;

export default function handler(req, res){
  res.status(200).json(USERS);
}
