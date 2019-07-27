import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Dar control de acceso a dominios cruzados
  await app.listen(4000);
}
bootstrap();
