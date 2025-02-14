import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ManuscriptService } from '../services/manuscript-details.service';  // Import the ManuscriptService

@Component({
  selector: 'app-submit-manuscript-institution-details',
  templateUrl: './submit-manuscript-institution-details.component.html',
  styleUrls: ['./submit-manuscript-institution-details.component.scss']
})
export class SubmitManuscriptInstitutionDetailsComponent implements OnInit {
  authors = [
    {
      title: "Mr.",
      firstName: 'Shubham',
      middleName: '',
      lastName: 'Shinde',
      email: 'shubhamss0730@gmail.com',
      department: 'Therapeutics',
      institution: 'RGIT',
      orcid: "",
      state: "Maharashtra",
      country: "India",
      isCorresponding: true
    },
    {
      title: "Mr.",
      firstName: 'Adwait',
      middleName: 'V',
      lastName: 'Laud',
      email: 'adwait.laud@example.com',
      department: 'Biotechnology',
      institution: 'Harvard',
      orcid: "",
      state: "Maharashtra",
      country: "India",
      isCorresponding: false
    }
  ];

  coAuthorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private manuscriptService: ManuscriptService  // Inject the ManuscriptService
  ) {
    this.coAuthorForm = this.fb.group({
      searchEmail: [''],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      institution: ['', Validators.required],
      orcid: [''],
      isCorresponding: ['false']
    });
  }

  ngOnInit(): void {}

  // Method to add a co-author to the list
  addCoAuthor() {
    if (this.coAuthorForm.valid) {
      const newAuthor = this.coAuthorForm.value;
      newAuthor.isCorresponding = newAuthor.isCorresponding === 'true';
      this.authors.push(newAuthor);
      this.coAuthorForm.reset();
      let modal = document.getElementById('addCoAuthorModal') as any;
      modal?.classList.remove('show');
    } else {
      alert('Please fill all required fields!');
    }
  }

  // Method to edit an author (for now, just an alert)
  editAuthor(index: number) {
    alert(`Editing author: ${this.authors[index].firstName}`);
  }

  // Method to delete an author
  deleteAuthor(index: number) {
    if (confirm(`Are you sure you want to delete ${this.authors[index].firstName}?`)) {
      this.authors.splice(index, 1);
    }
  }

  // Drag-and-drop functionality to reorder authors
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.authors, event.previousIndex, event.currentIndex);
  }

  // Method to save reordered authors
  saveReorderedAuthors() {
    console.log('Updated Order:', this.authors);
  }

  // Method to save details and navigate to the next page
  saveDetails() {
    // Save the authors' data using the ManuscriptService
    this.manuscriptService.setAuthorsData(this.authors); // Ensure this method is defined in your service
    this.router.navigate(['/submit-manuscript/complete-submission']);
  }

  // Method to go back to the previous page
  goBack() {
    this.router.navigate(['/submit-manuscript/details']); // Replace with the actual route you want to go back to
  }
}
