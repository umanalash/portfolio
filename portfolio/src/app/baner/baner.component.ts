import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit{
  constructor(private breakpointObserver:BreakpointObserver) { }
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Tablet,Breakpoints.WebLandscape])
      .subscribe({next: (result:any) =>  {
        console.log(result);
      },
    });
  }
}
