import * as dotenv from 'dotenv';
dotenv.config();

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { agent as request } from "supertest";
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let randomSuffix: string;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        randomSuffix = Math.random().toString(36).substring(7);
    }, 10000);

    afterAll(async () => {
        await app.close();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello, Forms API!');
    });

    describe('Forms', () => {
        it('should create a new form', async () => {
            const response = await request(app.getHttpServer())
                .post('/forms')
                .send({ title: `Test Form ${randomSuffix}`, description: 'This is a test form' })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.title).toBe(`Test Form ${randomSuffix}`);
        });

        it('should get all forms', async () => {
            await request(app.getHttpServer())
                .get('/forms')
                .expect(200);
        });

        // Add more test cases for updating and deleting forms
    });

    describe('Questions', () => {
        it('should create a new question', async () => {
            const form = await request(app.getHttpServer())
                .post('/forms')
                .send({ title: `Test Form ${randomSuffix}`, description: 'This is a test form' });

            const response = await request(app.getHttpServer())
                .post('/questions')
                .send({ text: `Test Question ${randomSuffix}`, type: 'text', formId: form.body.id })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.text).toBe(`Test Question ${randomSuffix}`);
        });
    });

    describe('Respondents', () => {
        it('should create a new respondent', async () => {
            const response = await request(app.getHttpServer())
                .post('/respondents')
                .send({ name: `John Doe ${randomSuffix}`, email: `john${randomSuffix}@example.com` })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(`John Doe ${randomSuffix}`);
        });
    });

    describe('Submissions', () => {
        it('should create a new submission', async () => {
            const form = await request(app.getHttpServer())
                .post('/forms')
                .send({ title: `Test Form ${randomSuffix}`, description: 'This is a test form' });

            const respondent = await request(app.getHttpServer())
                .post('/respondents')
                .send({ name: `Test Form ${randomSuffix}`, email: `john${randomSuffix}@example.com` });

            const response = await request(app.getHttpServer())
                .post('/submissions')
                .send({
                    formId: form.body.id,
                    respondentId: respondent.body.id,
                    answers: { question1: 'Answer 1', question2: 'Answer 2' },
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.answers).toEqual({
                question1: 'Answer 1',
                question2: 'Answer 2',
            });
        });
    });
});