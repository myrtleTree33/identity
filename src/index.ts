import runApp from './app';

// load environment variables
import * as dotenv from 'dotenv';
dotenv.config();

const { PORT = 8080, POSTGRES_DB_URI } = process.env;

import db from './db';

const app = runApp(db);

app.listen(PORT, () =>
  console.log(`Server started; Listening on port ${PORT}`),
);
