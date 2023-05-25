import { ProviderDAO } from '../dao/provider';
import { ProviderDTO } from '../dto/provider';

export class ProviderRepository {
  providerDao: ProviderDAO;

  constructor() {
    this.providerDao = new ProviderDAO();
  }

  async saveDb(providerDto: ProviderDTO): Promise<ProviderDTO> {
    return (await this.providerDao.saveDb(
      providerDto,
    )) as unknown as ProviderDTO;
  }

  async removeDb(providerId: string) {
    await this.providerDao.removeDb(providerId);
  }

  async findByIdDb(providerId: string): Promise<ProviderDTO> {
    return (await this.providerDao.findByIdDb(
      providerId,
    )) as unknown as ProviderDTO;
  }

  async findAllDb(): Promise<ProviderDTO[]> {
    const result =
      (await this.providerDao.findAllDb()) as unknown as ProviderDTO[];
    return result;
  }

  async countDb(): Promise<number> {
    return await this.providerDao.countDb();
  }
}
