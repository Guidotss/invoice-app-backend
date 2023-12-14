import express, { Router } from "express";
import morgan from "morgan";

interface Options {
  port: number;
  routes: Router;
}
export class Server {
  private port: number;
  private routes: Router;
  private app = express();

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  start() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use("/api", this.routes);

    this.app.listen(this.port, () => {
      console.log(`🚀Server running on port ${this.port}🚀`);
    });
  }
}
