import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://pruthvipurohit:v9DgoZ3iIJmO@ep-white-band-05524902.us-east-2.aws.neon.tech/assignments?sslmode=require");
    await client.connect();
    return client;
}