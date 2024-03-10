import { MethodNotAllowedException, MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { TranscationModule } from './transcation/transcation.module';
import { CurrentUserMiddleware } from './utility/middleware/current-user.middleware';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'root',
        database: 'Ecommerce',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      UsersModule,
      ProductsModule,
      OrderModule,
      TranscationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({path: '*', method: RequestMethod.ALL});
  }

}
