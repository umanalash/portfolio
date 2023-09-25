import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  isHeading(item: any): boolean {
    return typeof item === 'string';
  }
  
projects:(Project)[]=[
  
  {
    title:'Weatherapp',
    webpageUrl:'https://umanalash.github.io/angularproject/',
    image:'weather.png',
  },
  
  {
    title:'Currency Converter',
    webpageUrl:'https://umanalash.github.io/currency-app/',
    image:'currency.png',
  },
  {
    title:'Select',
    webpageUrl:'https://umanalash.github.io/select/',
    image:'select.png',
  },
  {
    title:'XYCoordinates',
    webpageUrl:'https://umanalash.github.io/coordinates/parent',
    image:'coordinate.png',
  },
  {
    title:'NgModel',
    webpageUrl:'https://umanalash.github.io/project/',
    image:'slider.png',
  },
  
  {
    title:'Flickr',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/flickr/layouts.html',
    image:'flickr.png',
  },
  {
    title:'Countdown',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/demo/demo1.html',
    image:'countdown.png',
  },
  {
    title:'Digital Clock',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/demo/demo2.html',
    image:'clock.png',
  },
  {
    title:'Registration Form',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/demo/demo3.html',
    image:'form.png',
  },
  {
    title:'Onlinequiz',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/onlinequiz/onlinequiz.html',
    image:'quiz.png',
  },
  {
    title:'Todomvc',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/todomvc/todo.html',
    image:'todo.png',
  },
  {
    title:'Assignments',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/javascript/javascript.html',
    image:'jsassign.png',
  },
 
  {
    title:'LayoutsGrid',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/gridlayouts.html',
    image:'layoutflex.png',
  },
  {
    title:'LayoutsFlex',
    webpageUrl:'https://incubationwork.github.io/umanalash-s/flexlayouts.html',
    image:'layoutgrid.png',
  },
]
}
