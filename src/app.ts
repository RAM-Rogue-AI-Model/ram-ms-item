import 'dotenv/config';

import express from 'express';

import { ItemController } from './controllers/ItemController';
import { ItemRouter } from './routes/itemRouter';
import { ItemService } from './services/itemService';
import { config } from './utils/config';
import fs from 'node:fs';
import * as YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = config.PORT;

app.use(express.json());

const itemService = new ItemService();
const itemController = new ItemController(itemService);

app.use('/item', new ItemRouter(itemController).router);

const file = fs.readFileSync('./openapi.yml', 'utf8');
const swaggerDocument = YAML.parse(file) as object;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`docs available at http://localhost:${port}/docs`);
});
