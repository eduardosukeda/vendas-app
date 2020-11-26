import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuarioLogado: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  logout() {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
