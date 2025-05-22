import express from 'express';

const router = express.Router();

const functions = {
}

router.post('/', (req, res) => {
  const event = req.body
  functions[event.type](event.data)
  res.end()  
});

export default router;
