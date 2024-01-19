import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsModule } from '@module/payments/payments.module';
import { GroupsModule } from '@module/groups/groups.module';
import { StudentsModule } from '@module/students/students.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/individDb'),
    GroupsModule,
    PaymentsModule,
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
