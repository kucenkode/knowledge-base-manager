import { applyDataSeeds } from './database/seeds';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  applyDataSeeds();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
