import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('alfa-auth'); // Prefixando globalmente todas as rotas
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
