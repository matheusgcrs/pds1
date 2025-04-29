import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VaPo';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      console.log('Evento de navegação:', event);
    });
  }
  
  mostrarSidebar(): boolean {
    return this.router.url !== '/';
  }
}
