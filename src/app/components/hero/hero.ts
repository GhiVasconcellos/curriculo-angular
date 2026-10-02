// src/app/components/hero/hero.ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly nome = signal('Guilherme Vasconcellos');
  readonly papel = signal('ESTUDANTE DE ADS');
  readonly titulo = signal('Estudante de Análise e Desenvolvimento de Sistemas');
  readonly bio = signal(
    'Estudante de ADS, iniciando minha trajetória na área de tecnologia. Atualmente construindo minha base em lógica de programação, fundamentos de sistemas e desenvolvimento de software, explorando diferentes possibilidades dentro da área de TI.'
  );
  readonly avatarUrl = signal('perfil.jpg');
  readonly githubUrl = signal('https://github.com/GhiVasconcellos');
  readonly status = signal('Em formação | Aberto a aprender');
  readonly selo = signal('🎓 UniAteneu · ADS');
}
