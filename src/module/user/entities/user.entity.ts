import { User as PrismaUser, Profile } from '@prisma/client';

export class User implements PrismaUser {
  id: string;
  full_name: string;
  email: string;
  password: string;
  telephone: string;
  active: boolean;
  auth_2fa: boolean;
  image: string;
  password_recovery_token: string | null;
  data_recovery_token: string | null;
  createdAt: Date;
  updatedAt: Date;
  userProfiles?: Profile[];
}
