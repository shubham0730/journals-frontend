import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UploadedFile {
  id: number;
  fileName: string;
  fileType: string;
  legend: string;
  fileSize: string;
  fileOrder: number;
}

@Component({
  selector: 'app-upload-manuscript',
  templateUrl: './upload-manuscript.component.html',
  styleUrls: ['./upload-manuscript.component.scss']
})


export class UploadManuscriptComponent implements OnInit {

  constructor(private router: Router) { }

  uploadedFiles: UploadedFile[] = [];

  ngOnInit() {
    // Initialize with sample data
    
      
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    // Check if file is a Word document
    if (!file.name.match(/\.(doc|docx)$/)) {
      alert('Please upload only Word documents (.doc or .docx)');
      return;
    }

    const newFile: UploadedFile = {
      id: this.uploadedFiles.length + 1,
      fileName: file.name,
      fileType: '',
      legend: '',
      fileSize: this.formatFileSize(file.size),
      fileOrder: 1
    };

    this.uploadedFiles.push(newFile);
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + 'B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + 'KB';
    return (bytes / 1048576).toFixed(1) + 'MB';
  }

  previewFile(file: UploadedFile) {
    console.log('Preview file:', file);
    // Implement preview functionality
  }

  downloadFile(file: UploadedFile) {
    console.log('Download file:', file);
    // Implement download functionality
  }

  updateFile(file: UploadedFile) {
    console.log('Update file:', file);
    // Implement update functionality
  }

  deleteFile(file: UploadedFile) {
    this.uploadedFiles = this.uploadedFiles.filter(f => f.id !== file.id);
  }

  saveAndContinue() {
    console.log('Saving files:', this.uploadedFiles);
    this.router.navigate(['/submit-manuscript/details']);
  }

  returnHome(){
    this.router.navigate(['/home']);
  }

}
