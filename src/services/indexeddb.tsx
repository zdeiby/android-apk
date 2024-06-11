import { CapacitorSQLite } from '@capacitor-community/sqlite';
import {  SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { useState, useEffect } from 'react';

const sqlite = new SQLiteConnection(CapacitorSQLite);
 

const ensureJeepSqliteIsAvailable = () => {
  const jeepSqliteElement = document.querySelector('jeep-sqlite');
  if (!jeepSqliteElement) {
    throw new Error('The jeep-sqlite element is not present in the DOM! Please check the @capacitor-community/sqlite documentation for instructions regarding the web platform.');
  }
  return jeepSqliteElement;
};

export const useDatabase = () => {
  const [db, setDb] = useState<SQLiteDBConnection | null>(null);

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        ensureJeepSqliteIsAvailable(); // Verificar que el elemento esté disponible
        const dbConnection: SQLiteDBConnection = await sqlite.createConnection('testDatabase', false, 'no-encryption', 1);

        await dbConnection.open();
        const createTable = `
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL
          );
        `;
        await dbConnection.execute(createTable);

        const insertUser = `
          INSERT INTO users (name) VALUES ('John Doe');
        `;
        await dbConnection.execute(insertUser);

        const users = await dbConnection.query('SELECT * FROM users;');
        console.log(users);

        setDb(dbConnection);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    initializeDatabase();
  }, []);

  return db;
};
