import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManuscriptService } from '../services/manuscript-details.service';  // Import the ManuscriptService

@Component({
  selector: 'app-submit-manuscript-details',
  templateUrl: './submit-manuscript-details.component.html',
  styleUrls: ['./submit-manuscript-details.component.scss']
})
export class SubmitManuscriptDetailsComponent implements OnInit {
  articleForm: FormGroup;
  articleTypes = ['Research Article', 'Review Article', 'Case Report'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private manuscriptService: ManuscriptService  // Inject ManuscriptService
  ) {
    this.articleForm = this.fb.group({
      articleType: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(500)]],
      runningTitle: ['', Validators.maxLength(500)],
      abstract: ['', Validators.maxLength(3500)],
      wordCount: [''],
      bwFigures: [''],
      colorFigures: [''],
      tables: [''],
      pages: [''],
      keywords: ['', Validators.required],
      trialRegistration: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.articleForm.valid) {
      // Save the form data using ManuscriptService
      this.manuscriptService.saveManuscriptData(this.articleForm.value);

      // Navigate to the next step
      this.router.navigate(['/submit-manuscript/institutional-details']);
    } else {
      alert('Please fill all required fields.');
    }
  }
  
}
