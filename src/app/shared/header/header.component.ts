import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.notifyAdminLogin$.subscribe((data) => {
      this.isAdmin = data;
    });
  }

  logOut() {
    const tologOut = this.authService.logOut();
    if (tologOut) this.router.navigate(['']);
  }
}
