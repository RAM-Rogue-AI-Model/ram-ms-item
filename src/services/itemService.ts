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

    try {
      const result = await prisma.item.create({ data: dataSecured });
      void sendLog(
        'Item',
        'INSERT',
        'INFO',
        `Created item with ID: ${result.id}`
      );
      return result;
    } catch (error) {
      void sendLog(
        'Item',
        'INSERT',
        'ERROR',
        `Failed to create item: ${String(error)}`
      );
      throw new Error('Item creation failed');
    }
  }

  async list() {
    try {
      const result = await prisma.item.findMany();
      void sendLog('Item', 'OTHER', 'INFO', `Listed all items`);
      return result;
    } catch (error) {
      void sendLog(
        'Item',
        'OTHER',
        'ERROR',
        `Failed to list items: ${String(error)}`
      );
      throw new Error('Failed to list items');
    }
  }

  async getByLevelGap(level: number) {
    return prisma.item.findMany({
      where: {
        level_gap: {
          lte:level
        },
      },
    });
  }

  async getById(id: string) {
    try {
      const result = await prisma.item.findUnique({
        where: {
          id: id,
        },
      });
      if (result === null) {
        void sendLog('Item', 'OTHER', 'WARN', `Item with ID: ${id} not found`);
        return null;
      }
      void sendLog('Item', 'OTHER', 'INFO', `Retrieved item with ID: ${id}`);
      return result;
    } catch (error) {
      void sendLog(
        'Item',
        'OTHER',
        'ERROR',
        `Failed to retrieve item with ID: ${id}, Error: ${String(error)}`
      );
      throw new Error('Failed to retrieve item');
    }
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

    try {
      const existingItem = await prisma.item.findUnique({
        where: { id: id },
      });

      if (existingItem === null) {
        void sendLog(
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
      return result;
    } catch (error) {
      void sendLog(
        'Item',
        'UPDATE',
        'ERROR',
        `Failed to update item with ID: ${id}, Error: ${String(error)}`
      );
      throw new Error('Item update failed');
    }
  }

  async delete(id: string) {
    try {
      const existingItem = await prisma.item.findUnique({
        where: { id: id },
      });
      if (existingItem === null) {
        void sendLog(
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
      void sendLog('Item', 'REMOVE', 'INFO', `Deleted item with ID: ${id}`);
      return result;
    } catch (error) {
      void sendLog(
        'Item',
        'REMOVE',
        'ERROR',
        `Failed to delete item with ID: ${id}, Error: ${String(error)}`
      );
      throw new Error('Item deletion failed');
    }
  }
}

export { ItemService };
