import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './form.entity';

@Injectable()
export class FormsService {
    constructor(
        @InjectRepository(Form)
        private formRepository: Repository<Form>,
    ) {}

    async create(form: Form): Promise<Form> {
        return this.formRepository.save(form);
    }

    async findAll(): Promise<Form[]> {
        return this.formRepository.find();
    }

    async findById(id: number): Promise<Form> {
        return this.formRepository.findOne({ where: { id } });
    }

    async update(id: number, form: Form): Promise<Form> {
        await this.formRepository.update(id, form);
        return this.formRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.formRepository.delete(id);
    }
}