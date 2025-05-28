import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: 'http://localhost:5173',  
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("MoneyMap API")
    .setDescription("API do backend MoneyMap")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();