import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome completo é obrigatório.' })
  @IsString({ message: 'O nome completo deve ser uma string.' })
  @Length(3, 100, {
    message: 'O nome completo deve ter entre 3 e 100 caracteres.',
  })
  full_name!: string;

  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'O e-mail deve ser válido.' })
  email!: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString({ message: 'A senha deve ser uma string.' })
  @Length(6, 50, { message: 'A senha deve ter entre 6 e 50 caracteres.' })
  @Matches(/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d@$!%*?&]{6,}$/, {
    message:
      'A senha deve conter pelo menos uma letra, um número e ter no mínimo 6 caracteres.',
  })
  password!: string;

  @IsNotEmpty({ message: 'O telefone é obrigatório.' })
  @IsString({ message: 'O telefone deve ser uma string.' })
  @Length(9, 15, { message: 'O telefone deve ter entre 9 e 15 caracteres.' })
  telephone!: string;

  @IsBoolean({ message: 'O campo "ativo" deve ser um valor booleano.' })
  active?: boolean;

  @IsBoolean({
    message:
      'O campo "autenticação em dois fatores" deve ser um valor booleano.',
  })
  auth_2fa?: boolean;

  @IsString({ message: 'A imagem deve ser uma string.' })
  image?: string;

  @IsString({
    message: 'O token de recuperação de senha deve ser uma string.',
  })
  password_recovery_token?: string;

  @IsString({
    message: 'O token de recuperação de dados deve ser uma string.',
  })
  data_recovery_token?: string;
  profiles?: string[];
}
