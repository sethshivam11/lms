import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOSTNAME,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
});

pool.on("connect", () => console.log("Connected to the database"));

export const query = (text: string, params?: any[]) => pool.query(text, params);
