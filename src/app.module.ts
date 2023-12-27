import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsModule } from '@module/payments/payments.module';
import { GroupsModule } from '@module/groups/groups.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/individDb'),
    GroupsModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
