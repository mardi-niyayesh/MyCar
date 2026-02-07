import {Module} from '@nestjs/common';
import {UsersModule} from './modules/users';
import {PrismaModule} from "./modules/prisma";

@Module({
  imports: [PrismaModule, UsersModule]
})
export class AppModule {}