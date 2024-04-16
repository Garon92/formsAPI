import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
    constructor(private questionsService: QuestionsService) {}

    @Post()
    async createQuestion(@Body() question: Question): Promise<Question> {
        return this.questionsService.create(question);
    }

    @Get()
    async findAllQuestions(): Promise<Question[]> {
        return this.questionsService.findAll();
    }

    @Get(':id')
    async findQuestionById(@Param('id') id: number): Promise<Question> {
        return this.questionsService.findById(id);
    }

    @Put(':id')
    async updateQuestion(@Param('id') id: number, @Body() question: Question): Promise<Question> {
        return this.questionsService.update(id, question);
    }

    @Delete(':id')
    async deleteQuestion(@Param('id') id: number): Promise<void> {
        return this.questionsService.delete(id);
    }
}