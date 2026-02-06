import express, { Router } from 'express';

import { ItemController } from '../controllers/ItemController';
import { authenticate, requestDetails } from '../utils/auth';

class ItemRouter {
  public router: Router;

  constructor(itemController: ItemController) {
    this.router = express.Router();

    this.router
      .route('/')
      .post(requestDetails, authenticate, async (req, res) => {
        await itemController.create(req, res);
      })
      .get(requestDetails, authenticate, async (req, res) => {
        await itemController.getAll(req, res);
      });

    this.router
      .route('/:id')
      .get(requestDetails, authenticate, async (req, res) => {
        await itemController.getById(req, res);
      })
      .put(requestDetails, authenticate, async (req, res) => {
        await itemController.update(req, res);
      })
      .delete(requestDetails, authenticate, async (req, res) => {
        await itemController.delete(req, res);
      });
  }
}

export { ItemRouter };
