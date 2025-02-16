import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPaperService } from '../services/upload-paper.service';
import { ManuscriptService } from '../services/manuscript-details.service';

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
    private uploadService: UploadPaperService,
    private manuscriptService: ManuscriptService
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
    if (!this.uploadedFiles.length) {
      alert('Please upload at least one file before proceeding.');
      return;
    }

    // Extract valid files along with fileName & fileOrder
    const filesWithMetadata = this.uploadedFiles
      .filter((f) => f.fileData instanceof File) // Ensure fileData is a File object
      .map((f) => ({
        file: f.fileData as File,
        fileName: f.fileName,
        fileOrder: f.fileOrder,
        fileDesc: f.legend,
        fileType: f.fileType,
      }));
    const fileOrderMap: Record<
      string,
      { fileOrder: number; fileDesc: string; fileType: string }
    > = {};

    filesWithMetadata.forEach(({ fileName, fileOrder, fileDesc, fileType }) => {
      fileOrderMap[fileName] = { fileOrder, fileDesc, fileType };
    });

    // Convert to JSON if needed
    const fileOrderJson = fileOrderMap;
    if (filesWithMetadata.length === 0) {
      alert('Some file data is missing or invalid.');
      return;
    }

    // Retrieve manuscript & author metadata
    const manuscriptMetadata = this.manuscriptService.getManuscriptData() || {};
    const authorMetadata = this.manuscriptService.getAuthorsData() || [];

    // Combine metadata
    const mergedData = {
      manuscript: manuscriptMetadata,
      authors: authorMetadata,
      fileOrder: fileOrderJson,
    };

    // Prepare FormData
    const formData = new FormData();
    filesWithMetadata.forEach(({ file }) => {
      formData.append('files', file);
    });
    formData.append('metadata', JSON.stringify(mergedData));

    // Upload files
    this.uploadService.uploadPapers(formData).subscribe({
      next: (response) => {
        console.log('Upload successful:', response);
        alert('Files uploaded successfully!');
        this.router.navigate(['/submit-manuscript/details']);
      },
      error: (error) => {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
      },
    });
  }

  returnHome() {
    this.router.navigate(['submit-manuscript/institutional-details']);
  }
}
