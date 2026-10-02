// src/app/models/skill.interface.ts

export type NivelSkill = 'Em aprendizado' | 'Introdução';
export type CategoriaSkill = 'Fundamentos' | 'Desenvolvimento' | 'Ferramentas';

export interface Skill {
  nome: string;
  categoria: CategoriaSkill;
  nivel: NivelSkill;
  icone: string;
}
