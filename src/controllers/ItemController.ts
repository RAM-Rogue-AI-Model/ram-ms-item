import { Request, Response } from 'express';

import { ItemService } from '../services/itemService';
import { CreateItemInput } from '../types/itemInput';

class ItemController {
  service: ItemService;

  constructor(service: ItemService) {
    this.service = service;
  }
  async create(req: Request, res: Response) {
    try {
      const body = req.body as Partial<CreateItemInput>;
      if (
        !body.name ||
        !body.description ||
        body.price == null ||
        body.level_gap == null ||
        !body.effect_id ||
        !body.effect_name
      ) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const payload: CreateItemInput = body as CreateItemInput;
      const item = await this.service.create(payload);
      res.status(201).json(item);
    } catch (error) {
      console.error(error);
      res.status(400);
    }
  }

  async getById(req: Request, res: Response) {
    const id: string = req.params.id as string;
    if (!id) {
      return res.status(400).json({ error: 'Missing item id' });
    }
    const item = await this.service.getById(id);
    if(!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  }

  async getAll(req: Request, res: Response) {
    const level = req.query.level;
    let items;
    if (level) {
      const levelNum = parseInt(level as string);
      items = await this.service.getByLevelGap(levelNum);
    } else {
      items = await this.service.list();
    }
    res.json(items);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id as string;
    const body = req.body as Partial<CreateItemInput>;
    if (!id) {
      return res.status(400).json({ error: 'Missing effect id' });
    }
    const itemExists = await this.service.getById(id);
    if (!itemExists) {
      return res.status(404).json({ error: 'Item not found' });
    }
    if (
      !body.name ||
      !body.description ||
      body.price == null ||
      body.level_gap == null ||
      !body.effect_id ||
      !body.effect_name
    ){
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const payload: CreateItemInput = body as CreateItemInput;
    const updatedItem = await this.service.update(id, payload);
    res.json(updatedItem);
  }

  async delete(req: Request, res: Response) {
    const id: string = req.params.id as string;
    if (!id) {
      return res.status(400).json({ error: 'Missing Item id' });
    }
    await this.service.delete(id);
    res.status(204).send();
  }
}

export { ItemController };
