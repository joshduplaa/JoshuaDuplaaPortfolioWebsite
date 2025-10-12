import express from "express";
import { exec } from "child_process";

const app = express();

app.post("/launch-env", (_, res) => {
  exec("bash ./scripts/launch_k8s_env.sh", (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

app.listen(8080);