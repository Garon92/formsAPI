import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from './submission.entity';

@Injectable()
export class SubmissionsService {
    constructor(
        @InjectRepository(Submission)
        private submissionRepository: Repository<Submission>,
    ) {}

    async create(submission: Submission): Promise<Submission> {
        return this.submissionRepository.save(submission);
    }

    async findByUserId(userId: number): Promise<Submission[]> {
        return this.submissionRepository.find({ where: { respondent: { id: userId } } });
    }
}