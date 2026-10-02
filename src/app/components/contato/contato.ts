// src/app/components/contato/contato.ts
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent implements OnInit {
  readonly email = signal('ghi.vasconcellos@gmail.com');
  readonly githubUrl = signal('https://github.com/GhiVasconcellos');
  readonly copiado = signal(false);
  readonly temaAtual = signal<'dark' | 'light'>('dark');

  ngOnInit(): void {
    // Carrega preferência de tema salva anteriormente no navegador
    const temaSalvo = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (temaSalvo) {
      this.aplicarTema(temaSalvo);
    }
  }

  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    } catch {
      // Fallback em caso de restrição estrita de clipboard
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    }
  }

  alternarTema(): void {
    const proximoTema = this.temaAtual() === 'dark' ? 'light' : 'dark';
    this.aplicarTema(proximoTema);
  }

  private aplicarTema(tema: 'dark' | 'light'): void {
    this.temaAtual.set(tema);
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('theme', tema);
  }
}
