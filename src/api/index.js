import express from 'express';

import courses from './courses.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/courses', courses);

export default router;
