import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { RespondentsService } from './respondents.service';
import { Respondent } from './respondent.entity';

@Controller('respondents')
export class RespondentsController {
    constructor(private respondentsService: RespondentsService) {}

    @Post()
    async createRespondent(@Body() respondent: Respondent): Promise<Respondent> {
        return this.respondentsService.create(respondent);
    }

    @Get()
    async findAllRespondents(): Promise<Respondent[]> {
        return this.respondentsService.findAll();
    }

    @Get(':id')
    async findRespondentById(@Param('id') id: number): Promise<Respondent> {
        return this.respondentsService.findById(id);
    }

    @Put(':id')
    async updateRespondent(@Param('id') id: number, @Body() respondent: Respondent): Promise<Respondent> {
        return this.respondentsService.update(id, respondent);
    }

    @Delete(':id')
    async deleteRespondent(@Param('id') id: number): Promise<void> {
        return this.respondentsService.delete(id);
    }
}