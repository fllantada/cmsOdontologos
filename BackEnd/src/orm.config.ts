// import { ConnectionOptions } from 'typeorm';
// /* eslint-disable @typescript-eslint/no-var-requires */
// const dotenv = require('dotenv');
// const path = require('path');

// const srcPath = __dirname;

// const envPath = path.resolve(srcPath, '../.env');

// dotenv.config({ path: envPath });

// const mongoUri =
//   'mongodb+srv://' +
//   process.env.DATABASE_USER +
//   ':' +
//   process.env.DATABASE_PASSWORD +
//   '@' +
//   process.env.DATABASE_HOST +
//   '/' +
//   process.env.DATABASE_NAME +
//   '?retryWrites=true&w=majority';

// const config: ConnectionOptions = {
//   type: 'mongodb',
//   url: mongoUri,
//   synchronize: true,
//   useNewUrlParser: true,
//   entities: [srcPath + '/*/.entity{.ts,.js}'],
//   migrations: [srcPath + '/database/migrations/*/{.ts,.js}'],
//   cli: {
//     migrationsDir: 'src/database/migrations',
//   },
//   useUnifiedTopology: true,
// };

// export default config;