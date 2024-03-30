import express, { Express } from 'express';

import { ChattyServer } from './setupServer';
import dbConnection from './setupDatabase';
import { config } from './config';

class Application {
  public intialize(): void {
    this.loadConfig();
    dbConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();

application.intialize();
