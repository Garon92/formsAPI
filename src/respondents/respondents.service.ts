import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Respondent } from './respondent.entity';

@Injectable()
export class RespondentsService {
    constructor(
        @InjectRepository(Respondent)
        private respondentRepository: Repository<Respondent>,
    ) {}

    async create(respondent: Respondent): Promise<Respondent> {
        return this.respondentRepository.save(respondent);
    }

    async findAll(): Promise<Respondent[]> {
        return this.respondentRepository.find();
    }

    async findById(id: number): Promise<Respondent> {
        return this.respondentRepository.findOne({ where: { id } });
    }

    async update(id: number, respondent: Respondent): Promise<Respondent> {
        await this.respondentRepository.update(id, respondent);
        return this.respondentRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.respondentRepository.delete(id);
    }
}