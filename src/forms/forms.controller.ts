import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Form } from './form.entity';

@Controller('forms')
export class FormsController {
    constructor(private formsService: FormsService) {}

    @Post()
    async createForm(@Body() form: Form): Promise<Form> {
        return this.formsService.create(form);
    }

    @Get()
    async findAllForms(): Promise<Form[]> {
        return this.formsService.findAll();
    }

    @Get(':id')
    async findFormById(@Param('id') id: number): Promise<Form> {
        return this.formsService.findById(id);
    }

    @Put(':id')
    async updateForm(@Param('id') id: number, @Body() form: Form): Promise<Form> {
        return this.formsService.update(id, form);
    }

    @Delete(':id')
    async deleteForm(@Param('id') id: number): Promise<void> {
        return this.formsService.delete(id);
    }
}