import { Controller, Post, Body, UnauthorizedException, Logger } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { LoginDto } from '../../dto/user-login.dto.ts/user-login.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('user')
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({
    description: 'login realizado com sucesso',
    schema: {
      example: {
        nome: 'João Silva',
        email: 'jaosilva@gmail.com',
        password: 'senha123',
      },
    },
  })
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Tentando login com: ${JSON.stringify(loginDto)}`);
    const user = await this.authService.validateUser(loginDto);
    if (!user) {
      this.logger.warn(`Login falhou para: ${loginDto.email}`);
      throw new UnauthorizedException('Credenciais inválidas');
    }
    this.logger.log(`Login bem-sucedido para: ${loginDto.email}`);
    return { message: 'user logado com sucesso', userId: user.id };
  }
}