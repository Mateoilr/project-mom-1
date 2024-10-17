import { Module } from '@nestjs/common';
import { TheoryService } from './theory.service';
import { TheoryController } from './theory.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [TheoryController],
  providers: [TheoryService],
  imports: [PrismaModule]
})
export class TheoryModule {}
