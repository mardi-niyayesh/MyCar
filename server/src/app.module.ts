import {Module} from '@nestjs/common';
import {PrismaModule} from "./modules/prisma";

@Module({
  imports: [PrismaModule]
})
export class AppModule {}