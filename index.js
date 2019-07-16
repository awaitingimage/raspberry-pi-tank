import express from "express";
import path from "path";

const app = express();
const port = 4000;

// app.get("/", (req, res) => res.send("Hello World!"));

// Serve the static files from the React app
app.use(express.static(`${path.resolve()}/client/build/`));

app.get("*", (req, res) => {
  res.sendFile(`${path.resolve()}/client/build/index.html`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
