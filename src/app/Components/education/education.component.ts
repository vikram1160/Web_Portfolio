import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationDetails = [
    {
      year: 'Professional Training',
      degree: 'IT Training',
      percentage: '',
      institution: 'Techrel IT Institute Pune',
      description:
        'Completed professional IT training at Techrel IT Institute, where I gained practical knowledge of web development and modern programming technologies. The training included HTML, CSS, JavaScript, Bootstrap, Angular, React Native, Git/GitHub, REST APIs, and real-world project development, helping me build a strong foundation in software development.',
      image: 'assets/mca.jpg',
    },
    {
      year: '2017',
      degree: 'SSC',
      percentage: '63%',
      institution: 'SP High School Kalimath',
      description:
        'Completed secondary school education at SP High School Kalimath, building a strong academic foundation and developing discipline, curiosity, and a love for learning.',
      image: 'assets/ssc.jpg',
    },
    {
      year: '2019',
      degree: 'HSC',
      percentage: '56%',
      institution: 'Bhairavnath College Bhatana',
      description:
        'I studied Bio and science and gained hands-on experience through freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.',
      image: 'assets/hsc.jpg',
    },
    {
      year: '2023',
      degree: 'BSC',
      percentage: '63%',
      institution: 'Shivaji College Kannad',
      description:
        'Completed degree from BAMU University. I strive to stay updated with the latest technologies and deliver valuable, impactful results in every project.',
      image: 'assets/bca.jpg',
    },
  ];
}
