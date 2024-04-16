import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Form } from '../forms/form.entity';
import { Respondent } from '../respondents/respondent.entity';

@Entity({ name: 'submissions' })
export class Submission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'json' })
    answers: any;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => Form)
    form: Form;

    @ManyToOne(() => Respondent)
    respondent: Respondent;
}