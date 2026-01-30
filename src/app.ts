import 'dotenv/config';

import express from 'express';

import { ItemController } from './controllers/ItemController';
import { ItemRouter } from './routes/itemRouter';
import { ItemService } from './services/itemService';
import { config } from './utils/config';

const app = express();
const port = config.PORT;

app.use(express.json());

const itemService = new ItemService();
const itemController = new ItemController(itemService);

app.use('/item', new ItemRouter(itemController).router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
