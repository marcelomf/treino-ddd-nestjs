import { Injectable } from '@nestjs/common';
import { Provider } from '../../contexts/sales/entities/provider';
import { ProviderDTO } from '../../contexts/sales/dto/provider';
import { ProviderRepository } from '../../contexts/sales/repositories/provider';

@Injectable()
export class ProviderService {
  save(dataProviderUI: any): Promise<ProviderDTO> {
    const providerDto = ProviderDTO.fromUI(dataProviderUI);
    const provider = new Provider(providerDto);
    const providerRepository = new ProviderRepository();
    return providerRepository.saveDb(provider.toDto());
  }

  remove(providerId: string) {
    const providerRepository = new ProviderRepository();
    return providerRepository.removeDb(providerId);
  }

  findById(providerId: string): Promise<ProviderDTO> {
    const providerRepository = new ProviderRepository();
    return providerRepository.findByIdDb(providerId);
  }

  findAll(): Promise<ProviderDTO[]> {
    const providerRepository = new ProviderRepository();
    return providerRepository.findAllDb();
  }

  count(): Promise<number> {
    const providerRepository = new ProviderRepository();
    return providerRepository.countDb();
  }
}
