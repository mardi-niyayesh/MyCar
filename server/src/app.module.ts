import {Module} from '@nestjs/common';
import * as Modules from "./modules";

@Module({
  imports: [Modules.PrismaModule, Modules.UsersModule]
})
export class AppModule {}