import express from "express";
import React from "react";
import "isomorphic-fetch";
import path from "path";
import fs from "fs";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import { ServerStyleSheet } from "styled-components";
import { InitialDataContext } from "./src/InitialDataContext";

global.window = {};

const app = express();

/* Server is using the static files which is builded */
app.use(express.static("./build", { index: false }));

// Data
const articles = [
  { title: "Article 1", author: "Bob" },
  { title: "Article 2", author: "Betty" },
  { title: "Article 3", author: "Frank" },
];

// Route that we sent the data
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// We saying all the styles should be applied for all routes right here
app.get("/*", async (req, res) => {
  // Reaching styles in the app
  const sheet = new ServerStyleSheet();

  const contextObj = { _isServerSide: true, _requests: [], _data: {} };

  renderToString(
    // Covering the app with the styles
    sheet.collectStyles(
      <InitialDataContext.Provider value={contextObj}>
        {/* Server-Side routing */}
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )
  );

  await Promise.all(contextObj._requests);
  contextObj._isServerSide = false;
  delete contextObj._requests;

  const reactApp = renderToString(
    // Covering the app with the styles
    <InitialDataContext.Provider value={contextObj}>
      {/*    // Server-Side routing */}
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </InitialDataContext.Provider>
  );

  // We saying to the server that you need to render the html that end of the this path
  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      data
        .replace(
          '<div id="root"></div>',
          `<script>window.preloadedData = ${JSON.stringify(
            contextObj
          )}</script><div id="root">${reactApp}</div>`
        )
        .replace("{{ styles }}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log("Server is running");
});
