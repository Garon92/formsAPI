import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';
import { Submission } from './submission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Submission])],
    controllers: [SubmissionsController],
    providers: [SubmissionsService],
})
export class SubmissionsModule {}