import express, { Router } from 'express';

import { ItemController } from '../controllers/ItemController';
import { authenticate } from '../utils/auth';

class ItemRouter {
  public router: Router;

  constructor(itemController: ItemController) {
    this.router = express.Router();

    this.router
      .route('/')
      .post(authenticate, async (req, res) => {
        await itemController.create(req, res);
      })
      .get(authenticate, async (req, res) => {
        await itemController.getAll(req, res);
      });

    this.router
      .route('/:id')
      .get(authenticate, async (req, res) => {
        await itemController.getById(req, res);
      })
      .put(authenticate, async (req, res) => {
        await itemController.update(req, res);
      })
      .delete(authenticate, async (req, res) => {
        await itemController.delete(req, res);
      });
  }
}

export { ItemRouter };
