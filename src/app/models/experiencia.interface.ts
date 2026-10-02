// src/app/models/experiencia.interface.ts

export type TipoExperiencia = 'hackathon' | 'estudos' | 'formacao';

export interface Experiencia {
  id: number;
  periodo: string;
  tipo: TipoExperiencia;
  tipoLabel: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  tags: string[];
}
