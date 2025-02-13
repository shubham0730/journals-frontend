import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit-manuscript-details',
  templateUrl: './submit-manuscript-details.component.html',
  styleUrls: ['./submit-manuscript-details.component.scss']
})
export class SubmitManuscriptDetailsComponent implements OnInit {
  articleForm: FormGroup;
  articleTypes = ['Research Article', 'Review Article', 'Case Report'];

  constructor(private fb: FormBuilder,private router: Router) {
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

  ngOnInit(): void {
  }

  onSubmit() {
    // if (this.articleForm.valid) {
    //   console.log('Form Data:', this.articleForm.value);
    // } else {
    //   alert('Please fill all required fields.');
    // }
    this.router.navigate(['/submit-manuscript/institutional-details']);
  }

}
