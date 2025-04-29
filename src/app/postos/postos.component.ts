import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostosService } from '../../services/postos.service';

@Component({
  standalone: true,
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PostosComponent implements OnInit {
  postos: any[] = [];
  filtro: string = '';

  constructor(private postosService: PostosService) {}

  ngOnInit(): void {
    // Simula uma resposta da API
    this.postos = [
      { nome: 'Posto Shell', localizacao: 'Rua A' },
      { nome: 'Posto BR', localizacao: 'Avenida B' },
      { nome: 'Posto Ipiranga', localizacao: 'Centro' }
    ];
  }  

  get postosFiltrados() {
    return this.postos.filter(p =>
      p.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }  
}
