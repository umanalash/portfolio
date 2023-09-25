import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit{
myData:string[][] = [
  ['Name', 'Umanalash'],
  ['DOB', '14/03/2002'],
  ['Work Exp', 'Fresher'],
  ['Education', 'B.Sc (2022)'],
  ['Interest','Listening Music'],
  ['Class Representative', 'B.Sc,2019 & 2022'],
  ['Road Safety Patrol', 'Sri Parasakthi College for Women,2021-22'],
];

aboutMe:string[] = [
 
'I am a recent graduate with a degree in Mathematics (2022) and a strong passion for problem-solving and data analysis. During my academic journey, I honed my analytical and critical thinking skills, which I am eager to apply in a professional setting. My dedication to mastering mathematical concepts and my curiosity about their real-world applications drive my desire to pursue a career in the field.',
'I had the valuable opportunity to participate in an incubation program at Zoho, a renowned technology company. During my time there, I worked on cutting-edge projects . This experience not only enriched my technical skills but also exposed me to the dynamic and innovative world of software development and product management.',
'As a fresh graduate, I am enthusiastic about embarking on a career where I can continue to learn and grow while contributing my mathematical knowledge and analytical abilities to tackle complex challenges. I thrive in collaborative environments and am known for my attention to detail and commitment to excellence. I am confident that my unique background and unwavering dedication make me a valuable asset to any team, and I am excited to take the next steps in my professional journey.'

]
  constructor() { }

  ngOnInit(): void {
    
  }
}
