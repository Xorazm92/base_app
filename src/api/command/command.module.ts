import { Module } from '@nestjs/common';
import { CommandService } from './command.service';
import { CommandController } from './command.controller';

@Module({
  providers: [CommandService],
  controllers: [CommandController],
  exports: [CommandService],
})
export class CommandModule {}
