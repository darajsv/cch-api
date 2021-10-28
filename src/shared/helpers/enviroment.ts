import * as path from 'path';

export const envFile = () => {
  return process.env.NODE_ENV === 'test'
    ? path.join(process.cwd(), '.env.test')
    : path.join(process.cwd(), '.env');
};
