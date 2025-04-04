
import { Controller } from '@nestjs/common';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  constructor(private readonly commandService: CommandService) {}
  // Command controller metodlari
}
