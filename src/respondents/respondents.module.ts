import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespondentsController } from './respondents.controller';
import { RespondentsService } from './respondents.service';
import { Respondent } from './respondent.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Respondent])],
    controllers: [RespondentsController],
    providers: [RespondentsService],
})
export class RespondentsModule {}