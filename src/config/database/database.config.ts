import * as dotenv from 'dotenv';
import { envFile } from 'src/shared/helpers/enviroment';

dotenv.config({ path: envFile() });

export const TypeOrmConfig = {
  database: process.env.DATABASE_NAME || 'your_database_name',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASS || 'password',
  synchronize: process.env.NODE_ENV !== 'production',
};
