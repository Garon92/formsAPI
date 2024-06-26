import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { Form } from './form.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Form])],
    controllers: [FormsController],
    providers: [FormsService],
})
export class FormsModule {}