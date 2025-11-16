import { AppDataSource } from "../database";
import { Turma } from "../entities/Turma";

const repoTurma = AppDataSource.getRepository(Turma);

export class FaculdadeController {
    async criarTurma(nome: string, semestre: string, id_disciplina: number) {
      const turma = repoTurma.create({nome, semestre, id_disciplina});
      return await repoTurma.save(turma);

    }
}