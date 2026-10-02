// src/app/components/skills/skills.ts
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  readonly filtroAtivo = signal<string>('Todos');

  // Habilidades reais organizadas por área de estudo
  readonly skills = signal<Skill[]>([
    // Fundamentos
    { nome: 'Lógica de Programação', categoria: 'Fundamentos', nivel: 'Em aprendizado', icone: '🧠' },
    { nome: 'Algoritmos', categoria: 'Fundamentos', nivel: 'Em aprendizado', icone: '⚙️' },
    { nome: 'Fundamentos de TI', categoria: 'Fundamentos', nivel: 'Em aprendizado', icone: '💻' },

    // Desenvolvimento
    { nome: 'HTML e CSS', categoria: 'Desenvolvimento', nivel: 'Introdução', icone: '🌐' },
    { nome: 'Programação', categoria: 'Desenvolvimento', nivel: 'Introdução', icone: '⌨️' },

    // Ferramentas
    { nome: 'VS Code', categoria: 'Ferramentas', nivel: 'Em aprendizado', icone: '📝' },
    { nome: 'Git e GitHub', categoria: 'Ferramentas', nivel: 'Introdução', icone: '🐙' },
  ]);

  readonly categorias = computed(() => {
    const cats = [...new Set(this.skills().map((s) => s.categoria))];
    return ['Todos', ...cats];
  });

  readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') return this.skills();
    return this.skills().filter((skill) => skill.categoria === filtro);
  });

  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
