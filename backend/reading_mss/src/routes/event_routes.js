import express from 'express';

const router = express.Router();

const functions = {
  UserValidate: async () => {
    await axios.post('http://localhost:3003/eventos', {
      type: 'UserValidate'
    })
  }
}

router.post('/', async (req, res) => {
  const event = req.body
  await functions[event.type](event.data)
  res.end()  
});

export default router;
