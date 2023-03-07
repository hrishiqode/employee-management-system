import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import pg from 'pg';
import expressPgSession from 'express-pg-session';

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
        conString: 'postgres://hjadhav:ZfAJS85UxOse@ep-fancy-sound-837594.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
        createTableIfMissing: true,
      }),
    }));
  }
}
