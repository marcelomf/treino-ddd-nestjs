import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProviderService } from '../../services/sales/provider.service';
import { ProviderDTO } from 'src/contexts/sales/dto/provider';

@Controller()
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post('provider')
  save(@Body() postData: any): Promise<ProviderDTO> {
    return this.providerService.save(postData);
  }

  @Put('provider')
  update(@Body() postData: any): Promise<ProviderDTO> {
    return this.providerService.save(postData);
  }

  @Get('provider/all')
  findAll(): Promise<ProviderDTO[]> {
    return this.providerService.findAll();
  }

  @Get('provider/count')
  count(): Promise<number> {
    return this.providerService.count();
  }

  @Delete('provider/:id')
  remove(@Param('id') id: string) {
    this.providerService.remove(id);
  }

  @Get('provider/:id')
  findById(@Param('id') id: string): Promise<ProviderDTO> {
    return this.providerService.findById(id);
  }
}
