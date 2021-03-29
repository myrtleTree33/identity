import runApp from './app';

// load environment variables
import * as dotenv from 'dotenv';
dotenv.config();

const { PORT = 8080 } = process.env;

const app = runApp();
app.listen(PORT, () =>
  console.log(`Server started; Listening on port ${PORT}`),
);
