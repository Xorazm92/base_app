import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
  ParseUUIDPipe,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { PlatformService } from './platform.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageValidationPipe } from 'src/infrastructure/lib/pipe/image.validation.pipe';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { JwtGuard } from 'src/common/guard/jwt-auth.guard';

@ApiTags('Platform products API')
@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @ApiOperation({
    summary: 'Create platform product',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        icon: {
          type: 'string',
          format: 'binary',
        },
        name: {
          type: 'string',
          format: 'string',
          example: 'Parrandachilik',
        },
        route: {
          type: 'string',
          format: 'string',
          example: 'parrandachilik',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Platform product added success',
    schema: {
      example: {
        status_code: 201,
        message: 'success',
        data: {},
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed add platform product',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on creating platform',
      },
    },
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtGuard)
  @Post()
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('icon'))
  async createPlatform(
    @Body() createPlatformDto: CreatePlatformDto,
    @UploadedFile(new ImageValidationPipe()) icon: Express.Multer.File | any,
  ) {
    return this.platformService.createPlatform(createPlatformDto, icon);
  }

  @ApiOperation({
    summary: 'Get all platfrom products',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All platform products fetched successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: [
          {
            id: 'b2d4aa27-0768-4456-947f-f8930c294394',
            name: 'Parrandachilik',
            is_active: true,
            icon: 'parrandachilik.svg',
            route: 'https://parrandachilik.uz',
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetched all platform products',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetch all platform products',
      },
    },
  })
  @Get()
  async getAllPlatformProducts() {
    try {
      return this.platformService.findAll({
        where: { is_active: true },
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on fetching platform products: ${error}`,
      );
    }
  }

  @ApiOperation({
    summary: 'Get platfrom product by route',
  })
  @ApiParam({
    name: 'route',
    description: 'route of the platform',
    type: String,
    example: 'https://parrandachilik.uz',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Platform product by route fetched successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          id: 'b2d4aa27-0768-4456-947f-f8930c294394',
          name: 'Parrandachilik',
          is_active: true,
          icon: 'parrandachilik.svg',
          route: 'https://parrandachilik.uz',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetched platform product by route',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetch platform product by route',
      },
    },
  })
  @Get('route/:route')
  async getPlatformByRoute(@Param('route') route: string) {
    try {
      return this.platformService.findOneBy({
        where: { route, is_active: true },
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on fetching platform product by route: ${error}`,
      );
    }
  }

  @ApiOperation({
    summary: 'Get platfrom product by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the platform',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Platform product by ID fetched successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          id: 'b2d4aa27-0768-4456-947f-f8930c294394',
          name: 'Parrandachilik',
          is_active: true,
          icon: 'parrandachilik.svg',
          route: 'https://parrandachilik.uz',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetched platform product by ID',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetch platform product by ID',
      },
    },
  })
  @Get('id/:id')
  async getPlatformById(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.platformService.getRepository.findOne({
      where: { id, is_active: true },
    });
    if (!data) {
      throw new NotFoundException('Platform not found by ID');
    }
    return {
      status_code: 200,
      message: 'success',
      data,
    };
  }

  @ApiOperation({
    summary: 'Update platform product by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the platform',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        icon: {
          type: 'string',
          format: 'binary',
        },
        name: {
          type: 'string',
          format: 'string',
          example: 'Parrandachilik',
        },
        route: {
          type: 'string',
          format: 'string',
          example: 'https://parrandachilik.uz',
        },
        is_active: {
          type: 'boolean',
          format: 'boolean',
          example: false,
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Platform product updated success',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {},
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed update platform product',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on updating platform',
      },
    },
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('icon'))
  async updatePlatform(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePlatformDto: UpdatePlatformDto,
    @UploadedFile(new ImageValidationPipe()) icon?: Express.Multer.File | any,
  ) {
    return this.platformService.updatePlatform(id, updatePlatformDto, icon);
  }

  @ApiOperation({
    summary: 'Delete platfrom product by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the platform',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Platform product by ID deleted successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {},
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed delete platform product by ID',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on deleting platform product by ID',
      },
    },
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiBearerAuth()
  async deletePlatform(@Param('id', ParseUUIDPipe) id: string) {
    return this.platformService.deletePlatform(id);
  }
}
