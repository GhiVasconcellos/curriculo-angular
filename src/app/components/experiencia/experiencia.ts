// src/app/components/experiencia/experiencia.ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  readonly trajetoria = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2026 — Presente',
      tipo: 'formacao',
      tipoLabel: 'Graduação em ADS',
      titulo: 'Graduação em Análise e Desenvolvimento de Sistemas (ADS)',
      instituicao: 'UniAteneu',
      descricao:
        'Início da formação acadêmica em tecnologia, desenvolvendo conhecimentos fundamentais em lógica de programação, sistemas computacionais e desenvolvimento de software.',
      tags: ['ADS', 'Lógica de Programação', 'Tecnologia', 'Fundamentos de TI'],
    },
    {
      id: 2,
      periodo: '2026 — Presente',
      tipo: 'estudos',
      tipoLabel: 'Estudos Acadêmicos',
      titulo: 'Início da Jornada em Tecnologia',
      instituicao: 'Estudos e projetos acadêmicos',
      descricao:
        'Construção dos primeiros conhecimentos práticos na área de tecnologia, explorando programação, ferramentas de desenvolvimento e fundamentos para criação de sistemas.',
      tags: ['Programação', 'VS Code', 'Fundamentos de TI'],
    },
  ]);
}
