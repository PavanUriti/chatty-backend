import express, { Express } from 'express';

import { ChattyServer } from '@root/setupServer';
import dbConnection from '@root/setupDatabase';
import { config } from '@root/config';

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
