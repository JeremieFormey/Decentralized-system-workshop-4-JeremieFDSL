import bodyParser from "body-parser";
import express from "express";
import { BASE_ONION_ROUTER_PORT } from "../config";

export async function simpleOnionRouter(nodeId: number) {
  const onionRouter = express();
  onionRouter.use(express.json());
  onionRouter.use(bodyParser.json());

  // Implémentation de la route /status
  onionRouter.get("/status", (req, res) => {
    res.send("live");
  });

  const port = BASE_ONION_ROUTER_PORT + nodeId;

  const server = onionRouter.listen(port, () => {
    console.log(`Onion router ${nodeId} is listening on http://localhost:${port}`);
  });

  return server;
}
