import 'dotenv/config';

import fs from 'node:fs';

import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yaml';

import { ItemController } from './controllers/ItemController';
import { ItemRouter } from './routes/itemRouter';
import { ItemService } from './services/itemService';
import { config } from './utils/config';

const app = express();
const port = config.PORT;

app.use(express.json());

app.use(
  cors({
    origin: [config.API_GATEWAY_URL],
    credentials: true,
  })
);

const itemService = new ItemService();
const itemController = new ItemController(itemService);
const file = fs.readFileSync('./openapi.yml', 'utf8');
const swaggerDocument = YAML.parse(file) as object;

app.use('/item', new ItemRouter(itemController).router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
  // eslint-disable-next-line no-console
  console.log(`docs available at http://localhost:${port}/docs`);
});
