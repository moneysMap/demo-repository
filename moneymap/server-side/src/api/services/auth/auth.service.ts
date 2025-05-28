import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../entities/user/user.entity';
import { LoginDto } from '../../dto/user-login.dto.ts/user-login.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<User | null> {
    this.logger.log(`Buscando usuário: ${loginDto.email}`);
    const user = await this.usersRepository.findOneBy({ email: loginDto.email });
    if (user) {
      this.logger.log(`Usuário encontrado: ${user.email}`);
      if (user.password === loginDto.password) {
        this.logger.log('Senha correta');
        return user;
      } else {
        this.logger.warn('Senha incorreta');
      }
    } else {
      this.logger.warn('Usuário não encontrado');
    }
    return null;
  }
}