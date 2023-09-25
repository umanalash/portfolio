import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skills:Skill[] = [
  {
    name:'Angular, Angular Material',
    level:'Intermediate',
    rating:80,
  },
  {
    name:'HTML',
    level:'Expert',
    rating:90,
  },
  {
    name:'CSS',
    level:'Expert',
    rating:90,
  },
  {
    name:'JS',
    level:'Intermediate',
    rating:87,
  },
]
  ngOnInit(): void {
    
  }
}
