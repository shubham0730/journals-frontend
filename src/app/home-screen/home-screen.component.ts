import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  latestJournals = [
    { id: 1, title: 'Advancements in Oncology Research', summary: 'Exploring new methods for early cancer detection.' },
    { id: 2, title: 'Neuroscience Breakthroughs 2024', summary: 'Recent studies on brain function and neuroplasticity.' },
    { id: 3, title: 'COVID-19 Vaccine Developments', summary: 'An overview of vaccine research and its effectiveness.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
