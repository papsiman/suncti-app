import mysql from 'mysql2/promise';

export async function execQuery(query: string): Promise<mysql.QueryResult> {
    try {
        const db = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            database: process.env.MYSQL_DB,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        })
        const [result] = await db.execute(query);
        await db.end();
        return result;
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}