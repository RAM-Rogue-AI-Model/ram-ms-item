import { CreateItemInput } from '../types/itemInput';
import { prisma } from '../utils/mariaConnection';

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
    return prisma.item.create({ data: dataSecured });
  }

  async list() {
    return prisma.item.findMany();
  }

  async getById(id: string) {
    return prisma.item.findUnique({
      where: {
        id: id,
      },
    });
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
    return prisma.item.update({
      where: {
        id: id,
      },
      data: dataSecured,
    });
  }

  async delete(id: string) {
    return prisma.item.delete({
      where: {
        id: id,
      },
    });
  }
}

export { ItemService };
