import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import path from "path";
import fs from "fs";
import { ServerStyleSheet } from "styled-components";
const app = express();

/* Server is using the static files which is builded */
app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  // Reaching styles in the app
  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    // Covering the app with the styles
    sheet.collectStyles(
      // Server-Side routing
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  // We saying to the server that you need to render the html that end of the this path
  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
        .replace("{{ styles }}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log("Server is running");
});
