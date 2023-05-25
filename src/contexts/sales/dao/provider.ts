import { Provider as ProviderModel } from '@prisma/client';
import { PersistenceDb, Orm } from '../../../utils/persistence_db';
import { ProviderDTO } from '../dto/provider';
export class ProviderDAO extends Orm implements PersistenceDb {
  async saveDb(providerDto: ProviderDTO): Promise<ProviderModel> {
    const dataProvider = providerDto.toORM();
    dataProvider.addresses = { create: dataProvider.addresses };
    dataProvider.orders = { create: dataProvider.orders };
    dataProvider.complaints = { create: dataProvider.complaints };

    if (dataProvider.id) {
      return await this.prisma.provider.update({
        data: dataProvider,
        where: { id: dataProvider.id },
      });
    } else {
      return await this.prisma.provider.create({
        data: dataProvider,
        include: {
          addresses: true,
        },
      });
    }
  }

  async removeDb(providerId: string) {
    await this.prisma.provider.delete({
      where: {
        id: providerId,
      },
      include: {
        addresses: true,
      },
    });
  }

  async findByIdDb(providerId: string) {
    return await this.prisma.provider.findUnique({
      where: {
        id: providerId,
      },
      include: {
        addresses: true,
      },
    });
  }

  async findAllDb() {
    return await this.prisma.provider.findMany({
      include: {
        addresses: true,
      },
    });
  }

  async countDb() {
    return await this.prisma.provider.count();
  }
}
