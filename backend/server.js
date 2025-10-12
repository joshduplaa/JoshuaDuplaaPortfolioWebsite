import express from "express";
import { exec } from "child_process";

const app = express();

app.post("/launch-env", (req, res) => {
  exec("bash ./scripts/launch_k8s_env.sh", (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

const PORT = process.env.PORT || 8080; // <- use Cloud Run's PORT
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
