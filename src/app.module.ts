import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { FormsModule } from './forms/forms.module';
import { QuestionsModule } from './questions/questions.module';
import { RespondentsModule } from './respondents/respondents.module';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            driver: require('mysql2'),
            host: process.env.MYSQL_HOST,
            port: +process.env.MYSQL_PORT,
            username: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        FormsModule,
        QuestionsModule,
        RespondentsModule,
        SubmissionsModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
