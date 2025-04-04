import { BadRequestException } from '@nestjs/common';
import { generate } from 'otp-generator';

export function generateOTP() {
  try {
    const otp = generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    return Number(otp);
  } catch (error) {
    throw new BadRequestException(`Error on generate OTP: ${error}`);
  }
}
