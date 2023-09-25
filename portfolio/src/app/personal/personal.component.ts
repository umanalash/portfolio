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
 
  `Recent mathematics graduate with a passion for problem-solving and a background in Zoho's incubation program.

  Fresh graduate in mathematics (2022) with exposure to Zoho's incubation program, eager to apply analytical skills to real-world challenges.`
]
  constructor() { }

  ngOnInit(): void {
    
  }
}
