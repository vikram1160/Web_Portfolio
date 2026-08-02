import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PROJECTS, ProjectDetail } from './projects.data';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: ProjectDetail[] = PROJECTS;

  constructor(private router: Router) {}

  onReadMore(projectId: string): void {
    this.router.navigate(['/pro', projectId]);
  }
}
