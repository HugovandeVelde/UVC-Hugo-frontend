import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

let database = null;
/**
 * 
 * @returns {Promise<import('sqlite').Database>}
 */
export async function getDatabase() {
    if (!database) {
        database = await open({
            filename: path.join(procces.cwd(), 'database.db'),
            driver: sqlite3.Database
        });
    }
    return database;
}