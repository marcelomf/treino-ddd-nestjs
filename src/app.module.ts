import { Module } from '@nestjs/common';
import { HelloController } from './controllers/hello';
import { CustomerController } from './controllers/sales/customer';
import { ProviderController } from './controllers/sales/provider';
import { OrderController } from './controllers/sales/order';
import { PrismaService } from './services/prisma';
import { CustomerService } from './services/sales/customer';
import { ProviderService } from './services/sales/provider';
import { OrderService } from './services/sales/order';

@Module({
  imports: [],
  controllers: [
    HelloController,
    CustomerController,
    ProviderController,
    OrderController,
  ],
  providers: [PrismaService, CustomerService, ProviderService, OrderService],
})
export class AppModule {}
