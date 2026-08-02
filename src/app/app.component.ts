import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';

type AppTheme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showNavbar = false;
  theme: AppTheme = 'dark';

  ngOnInit(): void {
    const saved = localStorage.getItem('portfolio-theme') as AppTheme | null;
    this.theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    this.applyTheme();
  }

  toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', this.theme);
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}
