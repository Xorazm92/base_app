import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ConfirmOTPDto } from './dto/confirm-otp.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { PasscodeDto } from './dto/passcode.dto';
import { SigninDto } from './dto/signin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FullnameDto } from './dto/fullname.dto';
import { ImageValidationPipe } from 'src/infrastructure/lib/pipe/image.validation.pipe';
import { JwtGuard } from 'src/common/guard/jwt-auth.guard';
import { SelfGuard } from 'src/common/guard/self.guard';
import { Response } from 'express';
import { CookieGetter } from 'src/common/decorator/cookie-getter.decorator';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { UserID } from 'src/common/decorator/user-id.decorator';
import { EmailDto } from './dto/email.dto';
import { ConfirmEmailDto } from './dto/confirm-email.dto';
import { EditPasscodeDto } from './dto/passcode-edit.dto';

@ApiTags('User API')
@Controller('user')
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Send OTP for registration',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'OTP sent to phone number',
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
    description: 'Failed to send OTP to phone number',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on generate OTP',
      },
    },
  })
  @Post('signup')
  async signup(@Body() signupDto: SigninDto) {
    return this.userService.signup(signupDto);
  }

  @ApiOperation({
    summary: 'Confirm OTP on registration',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Confirm OTP successfully',
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
    description: 'Failed verifying OTP',
    schema: {
      example: {
        status_code: 400,
        message: 'OTP expired or invalid phone number',
      },
    },
  })
  @Post('signup-confirm')
  async confirmOTPSignup(
    @Body() confirmOTPDto: ConfirmOTPDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.confirmOTPSignup(confirmOTPDto, res);
  }

  @ApiOperation({
    summary: 'Set passcode on registration',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Passcode assigned for user',
    schema: {
      example: {
        status_code: 201,
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
    description: 'Failed set passcode for user',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on creating passcode',
      },
    },
  })
  @Post('passcode')
  async setPasscode(
    @Body() passcodeDto: PasscodeDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.setPasscode(passcodeDto, res);
  }

  @ApiOperation({
    summary: 'Send OTP for login',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'OTP sent to phone number',
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
    description: 'Failed to send OTP to phone number',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on generate OTP',
      },
    },
  })
  @Post('signin')
  async signin(@Body() signinDto: SigninDto) {
    return this.userService.signin(signinDto);
  }

  @ApiOperation({
    summary: 'Confirm OTP on login',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Confirm OTP successfully',
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
    description: 'Failed verifying OTP on login',
    schema: {
      example: {
        status_code: 400,
        message: 'OTP expired or invalid phone number',
      },
    },
  })
  @Post('signin-confirm')
  async confirmOTPSignin(
    @Body() confirmOTPDto: ConfirmOTPDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.confirmOTPSignin(confirmOTPDto, res);
  }

  @ApiOperation({ summary: 'New access token for user' })
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
  refreshToken(@CookieGetter('refresh_token_user') refresh_token: string) {
    return this.userService.refreshToken(refresh_token);
  }

  @ApiOperation({ summary: 'Logout user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User logged out success',
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
    description: 'Fail on logging out user',
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
    @CookieGetter('refresh_token_user') refresh_token: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.logout(refresh_token, res);
  }

  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All users fetched successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: [
          {
            id: 'b2d4aa27-0768-4456-947f-f8930c294394',
            created_at: '1730288822952',
            updated_at: '1730288797974',
            full_name: 'John Doe',
            phone_number: '+998901234568',
            passcode: '1234',
            email: null,
            image: null,
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetching users',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetching users',
      },
    },
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtGuard)
  @Get()
  @ApiBearerAuth()
  async getAllUsers() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new BadRequestException(
        `Error on fetching users: ${error.message}`,
      );
    }
  }

  @ApiOperation({
    summary: 'Get user by token',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User fetched by token successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          id: 'b2d4aa27-0768-4456-947f-f8930c294394',
          created_at: '1730288822952',
          updated_at: '1730288797974',
          full_name: 'John Doe',
          phone_number: '+998901234568',
          passcode: '1234',
          email: null,
          image: null,
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetching user by token',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetching user by token',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Get('me')
  @ApiBearerAuth()
  async getUserByToken(@UserID() id: string) {
    try {
      const data = await this.userService.getRepository.findOne({
        where: { id, is_active: true },
      });
      if (!data) {
        throw new HttpException('not found', 404);
      }
      return {
        status_code: 200,
        message: 'success',
        data,
      };
    } catch (error) {
      throw new BadRequestException(
        `Error on fetching user by token: ${error.message}`,
      );
    }
  }

  @ApiOperation({
    summary: 'Get user by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the user',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User fetched by id successfully',
    schema: {
      example: {
        status_code: 200,
        message: 'success',
        data: {
          id: 'b2d4aa27-0768-4456-947f-f8930c294394',
          created_at: '1730288822952',
          updated_at: '1730288797974',
          full_name: 'John Doe',
          phone_number: '+998901234568',
          passcode: '1234',
          email: null,
          image: null,
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed fetching user by ID',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on fetching user by ID',
      },
    },
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiBearerAuth()
  async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    try {
      return this.userService.findOneById(id);
    } catch (error) {
      throw new BadRequestException(`Error on fetching user by ID: ${error}`);
    }
  }

  @ApiOperation({
    summary: 'Edit avatar of user',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Avatar of user edited',
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
    description: 'Failed edit avatar of user',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on update avatar of user',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Patch('avatar')
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('image'))
  async editAvatar(
    @UserID() id: string,
    @UploadedFile(new ImageValidationPipe()) image: Express.Multer.File | any,
  ) {
    return this.userService.editAvatar(id, image);
  }

  @ApiOperation({
    summary: 'Edit full name of user',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Full name of user edited',
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
    description: 'Failed edit full name of user',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on update full name of user',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Patch('fullname')
  @ApiBearerAuth()
  async editFullname(@UserID() id: string, @Body() fullnameDto: FullnameDto) {
    return this.userService.editFullname(id, fullnameDto);
  }

  @ApiOperation({
    summary: 'Edit passcode of user',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Passcode of user edited',
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
    description: 'Failed edit passcode of user',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on update passcode of user',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Patch('edit-passcode')
  @ApiBearerAuth()
  async editPasscode(
    @UserID() id: string,
    @Body() editPasscodeDto: EditPasscodeDto,
  ) {
    return this.userService.editPasscode(id, editPasscodeDto);
  }

  @ApiOperation({
    summary: 'Send OTP for edit phone number',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'OTP sent to phone number',
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
    description: 'Failed to send OTP to phone number',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on generate OTP',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Patch('edit-phone')
  @ApiBearerAuth()
  async editPhoneWithOTP(@Body() signinDto: SigninDto) {
    return this.userService.editPhoneWithOTP(signinDto);
  }

  @ApiOperation({
    summary: 'Confirm OTP on edit phone number',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Confirm OTP successfully',
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
    description: 'Failed updating phone number',
    schema: {
      example: {
        status_code: 400,
        message: 'OTP expired or invalid phone number',
      },
    },
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Patch('edit-phone-confirm')
  @ApiBearerAuth()
  async confirmOTPPhone(
    @UserID() id: string,
    @Body() confirmOTPDto: ConfirmOTPDto,
  ) {
    return this.userService.confirmOTPPhone(id, confirmOTPDto);
  }

  @ApiOperation({
    summary: 'Send OTP for edit email address',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'OTP sent to email address',
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
    description: 'Failed to send OTP to email address',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on generate OTP',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Patch('edit-email')
  @ApiBearerAuth()
  async editEmailWithOTP(@Body() emailDto: EmailDto) {
    return this.userService.editEmailWithOTP(emailDto);
  }

  @ApiOperation({
    summary: 'Confirm OTP on edit email address',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Confirm OTP successfully',
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
    description: 'Failed updating email address',
    schema: {
      example: {
        status_code: 400,
        message: 'OTP expired or invalid email address',
      },
    },
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Patch('edit-email-confirm')
  @ApiBearerAuth()
  async confirmOTPEmail(
    @UserID() id: string,
    @Body() confirmEmailDto: ConfirmEmailDto,
  ) {
    return this.userService.confirmOTPEmail(id, confirmEmailDto);
  }

  @ApiOperation({
    summary: 'Delete user by token',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User by token deleted successfully',
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
    description: 'Failed deactivate user by token',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on deactivating user by token',
      },
    },
  })
  @UseGuards(JwtGuard)
  @Delete('delete')
  @ApiBearerAuth()
  async userDelete(@UserID() id: string) {
    return this.userService.userDelete(id);
  }

  @ApiOperation({
    summary: 'Delete user by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID of user',
    type: String,
    example: 'b2d4aa27-0768-4456-947f-f8930c294394',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User by ID deleted successfully',
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
    description: 'Failed delete user by ID',
    schema: {
      example: {
        status_code: 400,
        message: 'Error on deleting user by ID',
      },
    },
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiBearerAuth()
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.deleteUser(id);
  }
}
