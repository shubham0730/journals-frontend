import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-submit',
  templateUrl: './complete-submit.component.html',
  styleUrls: ['./complete-submit.component.scss']
})
export class CompleteSubmitComponent implements OnInit {

  submissionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.submissionForm = this.fb.group({
      confirmPreview: [false, Validators.requiredTrue],
      conflictOfInterest: ['', Validators.required],
      copyrightAgreement: [false, Validators.requiredTrue]
    });
  }

  submitForm() {
    if (this.submissionForm.valid) {
      console.log('Form submitted successfully', this.submissionForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
  }

}
