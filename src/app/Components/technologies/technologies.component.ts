import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  skills = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 70 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'Bootstrap', percentage: 65 },
    { name: 'Angular', percentage: 60 },
    { name: 'React', percentage: 30 },
    { name: 'Node.js', percentage: 30 },
    { name: '.NET', percentage: 15 },
  ];
}
