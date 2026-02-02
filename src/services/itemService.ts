import { CreateItemInput } from '../types/itemInput';
import { prisma } from '../utils/mariaConnection';
import { sendLog } from '../utils/message';

class ItemService {
  async create(data: CreateItemInput) {
    const dataSecured = {
      name: data.name,
      description: data.description,
      price: data.price,
      level_gap: data.level_gap,
      effect_name: data.effect_name,
      effect_id: data.effect_id,
    };
    const result = await prisma.item.create({ data: dataSecured });
    if (result.id) {
      sendLog('Item', 'INSERT', 'INFO', `Item created with ID: ${result.id}`);
    } else {
      sendLog('Item', 'INSERT', 'ERROR', `Failed to create item`);
    }
    return result;
  }

  async list() {
    const result = await prisma.item.findMany();
    sendLog('Item', 'OTHER', 'INFO', `Listed all items`);
    return result;
  }

  async getByLevelGap(level: number) {
    return prisma.item.findMany({
      where: {
        level_gap: level,
      },
    });
  }

  async getById(id: string) {
    const result = await prisma.item.findUnique({
      where: {
        id: id,
      },
    });
    sendLog('Item', 'OTHER', 'INFO', `Retrieved item with ID: ${id}`);
    return result;
  }

  async update(id: string, data: CreateItemInput) {
    const dataSecured = {
      name: data.name,
      description: data.description,
      price: data.price,
      level_gap: data.level_gap,
      effect_name: data.effect_name,
      effect_id: data.effect_id,
    };

    const existingItem = await prisma.item.findUnique({
      where: { id: id },
    });
    if (!existingItem) {
      sendLog(
        'Item',
        'UPDATE',
        'WARN',
        `Item with ID: ${id} not found for update`
      );
      throw new Error('Item not found');
    }

    const result = await prisma.item.update({
      where: {
        id: id,
      },
      data: dataSecured,
    });
    sendLog('Item', 'UPDATE', 'INFO', `Updated item with ID: ${id}`);
    return result;
  }

  async delete(id: string) {
    const existingItem = await prisma.item.findUnique({
      where: { id: id },
    });
    if (!existingItem) {
      sendLog(
        'Item',
        'REMOVE',
        'WARN',
        `Item with ID: ${id} not found for deletion`
      );
      throw new Error('Item not found');
    }
    const result = await prisma.item.delete({
      where: {
        id: id,
      },
    });
    sendLog('Item', 'REMOVE', 'INFO', `Deleted item with ID: ${id}`);
    return result;
  }
}

export { ItemService };
