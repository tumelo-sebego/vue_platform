import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

export class SQLiteService {
  private sqlite: SQLiteConnection;
  
  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initializeDB() {
    try {
      await this.sqlite.createConnection({
        database: 'platform_cache',
        version: 1
      });
      
      await this.sqlite.open({
        database: 'platform_cache'
      });
      
      // Create tables
      await this.sqlite.execute({
        database: 'platform_cache',
        statements: `
          CREATE TABLE IF NOT EXISTS cached_content (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp INTEGER NOT NULL
          );
        `
      });
      
      return true;
    } catch (err) {
      console.error('Error initializing database:', err);
      return false;
    }
  }
}

export default new SQLiteService();