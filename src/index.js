import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/v1/users', (req, res) => {
  const users = [
    { id: 1, name: 'Pavel' },
    { id: 2, name: 'Joh' },
  ];

  return res.status(200).json({ users });
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
