import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Res,
  UseGuards,
  BadRequestException,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SigninAdminDto } from './dto/signin-admin.dto';
import { Response } from 'express';
import { CookieGetter } from 'src/common/decorator/cookie-getter.decorator';
import { JwtGuard } from 'src/common/guard/jwt-auth.guard';
import { RoleAdmin } from 'src/common/enum';
import { SelfGuard } from 'src/common/guard/self.guard';
import { SuperAdminGuard } from 'src/common/guard/super-admin.guard';

@ApiTags('Admin API')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({
    summary: 'Create super admin (one time API)',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Super admin created',
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
    description: 'Failed creating super admin',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on creating super admin',
      },
    },
  })
  @Post('super')
  async createSuperAdmin(@Body() createAdminDto: CreateAdminDto) {
    const admins = await this.adminService.findAll();
    if (admins.data.length) {
      throw new HttpException('Endpoint no longer active', HttpStatus.GONE);
    }
    return this.adminService.createSuperAdmin(createAdminDto);
  }

  @ApiOperation({
    summary: 'Create admin',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Admin created successfully',
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
    description: 'Failed creating admin',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on creating admin',
      },
    },
  })
  @UseGuards(SuperAdminGuard)
  @UseGuards(JwtGuard)
  @Post()
  @ApiBearerAuth()
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }

  @ApiOperation({
    summary: 'Signin admin',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Admin signed in successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjRkMGJ',
          access_token_expire: '24h',
          refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjRkMGJ',
          refresh_token_expire: '15d',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed signing admin',
    schema: {
      example: {
        status_code: 400,
        message: 'Invalid username or password',
      },
    },
  })
  @Post('signin')
  async confirmOTPSignin(
    @Body() signinDto: SigninAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.signin(signinDto, res);
  }

  @ApiOperation({ summary: 'New access token for admin' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get new access token success',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjRkMGJ',
          expire: '24h',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Fail new access token',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on refresh token',
      },
    },
  })
  @Post('refresh-token')
  refreshToken(@CookieGetter('refresh_token_admin') refresh_token: string) {
    return this.adminService.refreshToken(refresh_token);
  }

  @ApiOperation({ summary: 'Logout admin' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Admin logged out success',
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
    description: 'Fail on logging out admin',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on logout',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Post('logout')
  @ApiBearerAuth()
  logout(
    @CookieGetter('refresh_token_admin') refresh_token: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.logout(refresh_token, res);
  }

  @ApiOperation({
    summary: 'Get all admins',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All admins fetched successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: [
          {
            id: 'b2d4aa27-0768-4456-947f-f8930c294394',
            created_at: '1730288822952',
            updated_at: '1730288797974',
            username: 'admin1',
            phone_number: '+998901234567',
            email: null,
            hashed_password: 'ajdkfq234hg324j0ijklj.234hi23',
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetching admins',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetching admins',
      },
    },
  })
  @UseGuards(SuperAdminGuard)
  @UseGuards(JwtGuard)
  @Get()
  @ApiBearerAuth()
  async getAllAdmins() {
    try {
      return this.adminService.findAll({
        where: { role: RoleAdmin.ADMIN },
      });
    } catch (error) {
      throw new BadRequestException(`Error on fetching admins: ${error}`);
    }
  }

  @ApiOperation({
    summary: 'Get admin by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the admin',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Admin fetched by id successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          id: 'b2d4aa27-0768-4456-947f-f8930c294394',
          created_at: '1730288822952',
          updated_at: '1730288797974',
          username: 'admin1',
          phone_number: '+998901234567',
          email: null,
          hashed_password: 'ajdkfq234hg324j0ijklj.234hi23',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetching admin by ID',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetching admin by ID',
      },
    },
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiBearerAuth()
  async getAdminById(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.adminService.getRepository.findOne({
      where: { id, role: RoleAdmin.ADMIN },
    });
    if (!data) {
      throw new NotFoundException('Admin not found by ID');
    }
    return {
      status_code: 200,
      message: 'success',
      data,
    };
  }

  @ApiOperation({
    summary: 'Edit profile of admin',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the admin',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Profile of admin edited',
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
    description: 'Failed edit profile of admin',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on update profile of admin',
      },
    },
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiBearerAuth()
  async editProfile(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.editProfile(id, updateAdminDto);
  }

  @ApiOperation({
    summary: 'Delete admin by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of admin',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Admin by ID deleted successfully',
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
    description: 'Failed delete admin by ID',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on deleting admin by ID',
      },
    },
  })
  @UseGuards(SuperAdminGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiBearerAuth()
  async deleteAdmin(@Param('id', ParseUUIDPipe) id: string) {
    try {
      return this.adminService.delete(id);
    } catch (error) {
      throw new BadRequestException(`Error on deleting admin by ID: ${error}`);
    }
  }
}
