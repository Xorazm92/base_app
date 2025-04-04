export interface LoginDto {
  username: string;
  password: string;
}

export interface RegisterDto {
  username: string;
  email: string;
  full_name: string;
  password: string;
}

export interface UpdatePasswordDto {
  old_password?: string;
  new_password: string;
  user_id?: number;
}

export interface UpdateProfileDto {
  username?: string;
  email?: string;
  full_name?: string;
}

export interface JwtPayload {
  id: number;
  username: string;
  role: string;
}
