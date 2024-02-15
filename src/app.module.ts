import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsModule } from '@module/payments/payments.module';
import { GroupsModule } from '@module/groups/groups.module';
import { StudentsModule } from '@module/students/students.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/individDb'),
    GroupsModule,
    PaymentsModule,
    StudentsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
