import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
educationList: Education[] = [
  {
    institute:'A.G.Matric Hr.Sec.School',
    course:'SSC',
    duration:'2016-2017',
    score:'90%',
  },
  {
    institute:'St.Michael\'s Girls Hr.Sec.School',
    course:'HSC',
    duration:'2018-2019',
    score:'77.5%',
  },
  {
    institute:'Sri Parasakthi College for Women',
    course:'B.Sc in Maths',
    duration:'2019-2022',
    score:'84%',
  },
]
constructor() { }
ngOnInit(): void {
  
}
}
