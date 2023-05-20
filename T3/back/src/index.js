import koa from "koa";
import KoaLogger from "koa-logger";
import { koaBody } from "koa-body";
import router from "./routes.js";
import cors from 'koa2-cors';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

const app = new koa();

const corsOptions = { origin:'http://localhost:5173', credentials:true, optionSuccessStatus:200 };
app.use(cors(corsOptions));

app.use(KoaLogger());
app.use(koaBody());

// koa-router
app.use(router.routes());

app.listen(port, () => {
  console.log(`Servidor esta corriendo en http://localhost:${port}`);
});
