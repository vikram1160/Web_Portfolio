import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getProjectById, ProjectDetail } from '../projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = id ? getProjectById(id) : undefined;

    if (!this.project) {
      this.router.navigate(['/pro']);
    }
  }
}
