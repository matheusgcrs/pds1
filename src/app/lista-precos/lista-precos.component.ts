import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-precos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-precos.component.html',
  styleUrls: ['./lista-precos.component.css']
})
export class ListaPrecosComponent {
  filtro: string = '';

  postos = Array.from({ length: 40 }, (_, i) => ({
    nome: 'Posto Avenida',
    localizacao: 'Av. Central, 3000',
    gasolina: 'R$ 5,69',
    etanol: 'R$ 4,39',
    diesel: 'R$ 6,29',
    data: '12/04/2025',
    ativo: true,
    online: i % 2 === 0
  }));

  constructor() {
    this.postos[3].nome = 'Posto São Jorge';
  }

  get postosFiltrados() {
    const texto = this.filtro.trim().toLowerCase();
    if (!texto) return this.postos;
    return this.postos.filter(p =>
      p.nome.toLowerCase().includes(texto)
    );
  }
}
