import express from 'express';
import helmet from 'helmet';
import { query, validationResult } from 'express-validator';

const app = express();
app.use(helmet());
app.get('/health', [query('check').optional().isString()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return res.json({ status: 'ok' });
});

export default app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`API running on port ${port}`));
}
