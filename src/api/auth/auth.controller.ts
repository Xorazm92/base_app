import { Controller, Post, Body, Put, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, UpdatePasswordDto, UpdateProfileDto } from '../../common/dto/auth.dto';
import { JwtGuard } from '../../common/guard/jwt-auth.guard';
import { SuperAdminGuard } from '../../common/guard/super-admin.guard';
import { SelfGuard } from '../../common/guard/self.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @UseGuards(JwtGuard, SuperAdminGuard)
  async register(@Body() registerDto: RegisterDto, @Request() req) {
    return this.authService.register(registerDto, req.user);
  }

  @Put('update-password')
  @UseGuards(JwtGuard, SelfGuard)
  async updatePassword(@Body() updatePasswordDto: UpdatePasswordDto, @Request() req) {
    return this.authService.updatePassword(updatePasswordDto, req.user);
  }

  @Put('update-profile')
  @UseGuards(JwtGuard, SelfGuard)
  async updateProfile(@Body() updateProfileDto: UpdateProfileDto, @Request() req) {
    return this.authService.updateProfile(updateProfileDto, req.user);
  }
}
