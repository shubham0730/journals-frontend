import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManuscriptService {
  private manuscriptData: any = {};
  private authorsData: any[] = [];
  constructor() { }

  // Save manuscript data
  saveManuscriptData(data: any) {
    this.manuscriptData = data;
  }

  setAuthorsData(authors: any[]) {
    this.authorsData = authors;
  }

  // Get manuscript data
  getManuscriptData() {
    return this.manuscriptData;
  }
}
