import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

import config from "./config/config";
import { checkUser, requireAuth } from "./middlewares/auth.middleware";

import { greet } from "@this/common";
import { User } from "@this/common/class/User";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

require('./config/database');

app.use(checkUser);

app.use("/", express.static(path.join(__dirname, "../client")));
app.use("/cdn/uploads", express.static(path.join(__dirname, '../uploads/')));

app.get('/api/hello', (_req, res) => {
  const msg = greet();
  res.send(msg);
});

app.get('/api/dev', (_req, _res) => {
  let user = new User({username: "oui", password: "non", avatar: "oui", role: "dev"});
  console.log(user);
});

app.get('/api/jwtid', requireAuth, (_req:express.Request, res:express.Response) => {
    res.status(200).send(res.locals.user.id);
});

import ApiRoutes from "./routes";
app.use('/api', ApiRoutes);

app.use((_res, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"))
})

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
