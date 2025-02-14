import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPaperService } from '../services/upload-paper.service';

interface UploadedFile {
  id: number;
  fileName: string;
  fileType: string;
  legend: string;
  fileSize: string;
  fileOrder: number;
  fileData?: File; // Store actual file
}

@Component({
  selector: 'app-upload-manuscript',
  templateUrl: './upload-manuscript.component.html',
  styleUrls: ['./upload-manuscript.component.scss'],
})
export class UploadManuscriptComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;

  uploadedFiles: UploadedFile[] = [];

  constructor(
    private router: Router,
    private uploadService: UploadPaperService
  ) {}

  ngOnInit() {}

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
      fileOrder: this.uploadedFiles.length + 1,
      fileData: file,
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
  }

  downloadFile(file: UploadedFile) {
    console.log('Download file:', file);
  }

  updateFile(file: UploadedFile) {
    console.log('Update file:', file);
  }

  deleteFile(file: UploadedFile) {
    this.uploadedFiles = this.uploadedFiles.filter((f) => f.id !== file.id);
  }

  saveAndContinue() {
    if (this.uploadedFiles.length === 0) {
      alert('Please upload at least one file before proceeding.');
      return;
    }

    const files: File[] = this.uploadedFiles
      .map((f) => f.fileData)
      .filter((file): file is File => file !== undefined);

    if (files.some((file) => !(file instanceof File))) {
      alert('Some file data is invalid.');
      return;
    }
    if (files.some((file) => !file || !(file instanceof File))) {
      alert('Some file data is missing or invalid.');
      return;
    }

    const metadata = this.uploadedFiles.map((file) => ({
      // title: file.title || "Untitled",
      // author: file.author || "Unknown",
      // abstractText: file.abstractText || "No abstract available",
      // allAuthors: file.allAuthors || ""
      title: 'Untitled',
      author: 'Unknown',
      abstractText: 'No abstract available',
      allAuthors: '',
    }));

    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    formData.append('metadata', JSON.stringify(metadata));

    this.uploadService.uploadPapers(formData).subscribe(
      (response) => {
        console.log('Upload successful:', response);
        alert('Files uploaded successfully!');
        this.router.navigate(['/submit-manuscript/details']);
      },
      (error) => {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
      }
    );
  }

  returnHome() {
    console.log('Saving files:', this.uploadedFiles);
    this.router.navigate(['/submit-manuscript/details']);
  }
}
