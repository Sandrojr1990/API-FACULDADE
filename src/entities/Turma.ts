import  { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("turma")

export class Turma {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false

    })

    nome!: string;

    @Column()
      semestre!: string;

    

    @Column()
        id_disciplina!: number;
    
    
}