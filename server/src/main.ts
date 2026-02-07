import {AppModule} from './app.module';
import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from "@nestjs/common";

/** run application */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** global configs */
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch(e => console.error(e));