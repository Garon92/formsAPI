import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { Submission } from './submission.entity';

@Controller('submissions')
export class SubmissionsController {
    constructor(private submissionsService: SubmissionsService) {}

    @Post()
    async createSubmission(@Body() submission: Submission): Promise<Submission> {
        return this.submissionsService.create(submission);
    }

    @Get(':userId')
    async findSubmissionsByUserId(@Param('userId') userId: number): Promise<Submission[]> {
        return this.submissionsService.findByUserId(userId);
    }
}