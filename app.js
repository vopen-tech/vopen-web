const path = require("path");
const express = require("express");
const app = express();

const assets = path.join(__dirname, "build");

// Serve index.html page
app.get("/", (req, res) => res.sendFile(path.join(assets, "index.html")));

// Serve all assets files
app.use("/", express.static(assets));

const port = process.env.port || 8080;
app.listen(port, () => {
  const host = (process.env.host && `https://${process.env.host}`) || `http://localhost:${port}`;
  console.log(`Running in host: ${host}, port ${port}`);
});
