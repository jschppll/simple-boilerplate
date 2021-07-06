import express from "express";
import cors from "cors";

import type { Request } from "express";
import type { CorsOptionsDelegate } from "cors";

const app = express();
const port = 3001;

// List of allowed origins
const allowList = [ "http://localhost:3000" ];

// Middleware that checks the request origin against the allowlist
const optionsDelegate: CorsOptionsDelegate<Request> = (req, callback) => {
    const corsOptions = {
        origin : false,
    };

    if (allowList.includes(req.header("Origin") || "")) {
        corsOptions.origin = true;
    }

    callback(null, corsOptions);
};

app.get("/test", cors(optionsDelegate), (req, res) => {
    res.send("Hi there");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
