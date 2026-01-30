import express, { Router } from 'express';

import { ItemController } from '../controllers/ItemController';

class ItemRouter {
  public router: Router;

  constructor(itemController: ItemController) {
    this.router = express.Router();

    this.router
      .route('/')
      .post(async (req, res) => {
        await itemController.create(req, res);
      })
      .get(async (req, res) => {
        await itemController.getAll(req, res);
      });

    this.router
      .route('/:id')
      .get(async (req, res) => {
        await itemController.getById(req, res);
      })
      .put(async (req, res) => {
        await itemController.update(req, res);
      })
      .delete(async (req, res) => {
        await itemController.delete(req, res);
      });
  }
}

export { ItemRouter };
