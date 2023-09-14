import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });

  // Swagger configuration options
  const config = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const builder = new DocumentBuilder();

  const doc = SwaggerModule.createDocument(app, builder.build());

  console.log(JSON.stringify(doc, null, 2));

  await app.listen(3000);
}
bootstrap();
