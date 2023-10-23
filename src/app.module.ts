import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      UsersModule,
      AddressModule,
      TypeOrmModule.forRoot({
        type: process.env.DB_TYPE as any,
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT),
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  ],
})
export class AppModule {}
