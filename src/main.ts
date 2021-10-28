import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('cch-api')
    .setDescription('Cartas contra Humanidade API documentation')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api/v1/docs', app, swaggerDocument);
}

bootstrap();
