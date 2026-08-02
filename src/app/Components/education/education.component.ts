// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-education',
//   standalone: true,
//   imports: [],
//   templateUrl: './education.component.html',
//   styleUrl: './education.component.css'
// })
// export class EducationComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationDetails = [
    {
      year: '2017',
      degree: 'SSC',
      percentage: '62%',
      institution: 'SP High School Kalimath',
      description: '',
      image: 'assets/ssc.jpg',
    },
    {
      year: '2019',
      degree: 'HSC',
      percentage: '56%',
      institution: 'Bhairavnath College Bhatana',
      description: 'I studied Bio and science and gained hands-on experience through freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.',
      image: 'assets/hsc.jpg',
    },
    {
      year: '2023',
      duration: '3 years',
      degree: 'BSC',
      percentage: '63%',
      institution: 'Shivaji College Kannad',
      description: 'My skills and stay updated with the latest technologies. I strive for excellence in every project I undertake and aim to deliver valuable and impactful results.',
      image: 'assets/bca.jpg',
    }
  ];
}
