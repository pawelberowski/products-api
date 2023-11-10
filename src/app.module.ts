import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
