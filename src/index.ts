/// <reference path="_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

/**
 * The server.
 *
 * @class Server
 */
class Server {
  public port: number = 7777;
  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //setup routes
    this.setupRoutes();
  }

  config() {
	   this.app.use(bodyParser.json());
  }

  setupRoutes() {
    this.app.route("/").get((req, res) => {
      res.json({demo: "test"});
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is listening on " + this.port);
    });
  }
}

var server = Server.bootstrap();
server.listen();
