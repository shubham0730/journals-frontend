import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial-board',
  templateUrl: './editorial-board.component.html',
  styleUrls: ['./editorial-board.component.scss']
})
export class EditorialBoardComponent implements OnInit {
  editorialBoard = [
    { role: 'Editor in Chief', name: 'Dr. John Doe', designation: 'Professor and Head, Department of Oncology, Fake University Medical Center, Fake City, Fictionland', email: 'eicjcrt@fakeemail.com' },
    { role: 'Associate Editor', name: 'Dr. Jane Smith', designation: 'Associate Professor, Dept. of Oncology, Fake Medical Institute, Fakesville, Fictionland' },
    { role: 'Associate Editor', name: 'Dr. Richard Roe', designation: 'Associate Professor, Department of Oncology, Fiction University, Fictiontown, Fictionland' },
    { role: 'Editorial Committee', name: 'Dr. Emily White', designation: 'Professor, Department of Oncology, Fake Health Institute, Faketown, Fictionland' },
    { role: 'Editorial Committee', name: 'Dr. Robert Black', designation: 'Professor, Department of Oncology, Fictional Medical Center, Imaginary City, Fictionland' },
    { role: 'Editorial Committee', name: 'Dr. Susan Green', designation: 'Senior Consultant, Department of Oncology, Imaginary Health Center, Imaginetown, Fictionland' },
    { role: 'Consulting Statistician', name: 'Dr. Michael Brown', designation: 'Scientist, Fake Cancer Registry, Fake Health Institute, Fictional City, Fictionland' },
    { role: 'China Editor', name: 'Prof. Lin Wei', designation: 'Director and Chief Physician, Department of Oncology, Fictional University Medical Center, Fake City, P.R. Fictionland' }
  ];

  // Explicitly type the arrays
  associateEditors: { role: string, name: string, designation: string, email?: string }[] = [];
  editorialCommittee: { role: string, name: string, designation: string, email?: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    // Filter the editorial board for specific roles
    this.associateEditors = this.editorialBoard.filter(e => e.role === 'Associate Editor');
    this.editorialCommittee = this.editorialBoard.filter(e => e.role === 'Editorial Committee');
  }
}
