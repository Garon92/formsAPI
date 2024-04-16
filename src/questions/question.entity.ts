import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Form } from '../forms/form.entity';

@Entity({ name: 'questions' })
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({
        type: 'enum',
        enum: ['text', 'radio', 'checkbox', 'select'],
        default: 'text',
    })
    type: string;

    @Column({ type: 'json', nullable: true })
    options: any;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => Form, form => form.questions)
    form: Form;
}