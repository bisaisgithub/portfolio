import Messages from "../../../model/Messages";
import dbConnect from "../../../util/mongoDB"


export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    return res.json({message: 'api route test'})
  }
  if(req.method === 'POST'){
    console.log('post')
    try {
      const message = await Messages.create(req.body);
      return res.status(200).json(message);
    } catch (error) {
      console.log('catch messages error: ', error)
      return res.status(500).json({message: error})
    }
  }
  res.status(403).json({ message: 'Forbidden Method' });
}