import session from 'express-session';
import pg from 'pg';
import expressPgSession from 'express-pg-session';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export default class SessionConfig {
  static memoryStore = new session.MemoryStore();

  static pgSession = expressPgSession(session);

  static applySession(app) {
    app.use(session({
      secret: 'this session',
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
      saveUninitialized: false,
      secure: true,
      store: new this.pgSession({ // Use another table-name than the default "session" one
        conString: process.env.connString,
        createTableIfMissing: true,
      }),
    }));
  }
}
