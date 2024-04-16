import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) {}

    async create(question: Question): Promise<Question> {
        return this.questionRepository.save(question);
    }

    async findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    async findById(id: number): Promise<Question> {
        return this.questionRepository.findOne({ where: { id } });
    }

    async update(id: number, question: Question): Promise<Question> {
        await this.questionRepository.update(id, question);
        return this.questionRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.questionRepository.delete(id);
    }
}