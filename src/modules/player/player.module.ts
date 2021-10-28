import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

const Controllers = [];
const Services = [];
const Repositories = [];
const Providers = [];

@Module({
  imports: [
    RouterModule.register([
      {
        path: '/api/v1/players',
        module: PlayerModule,
      },
    ]),
  ],
  controllers: [...Controllers],
  providers: [...Services, ...Repositories, ...Providers],
  exports: [...Services],
})
export class PlayerModule {}
