import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface TableRow {
  [key: string]: any;
  isEditing?: boolean;
}

@Component({
  selector: 'app-edit-tablegrid',
  templateUrl: './edit-tablegrid.component.html',
  styleUrls: ['./edit-tablegrid.component.scss']
})
export class EditTablegridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<TableRow>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  filterValue: string = '';

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const dummyData = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ];
    this.dataSource.data = dummyData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleEdit(row: TableRow) {
    row.isEditing = !row.isEditing;
  }

  saveRow(row: TableRow) {
    row.isEditing = false;
  }

  deleteRow(row: TableRow) {
    this.dataSource.data = this.dataSource.data.filter(r => r['id'] !== row['id']);
}

  addRow() {
    const newRow: TableRow = { id: Date.now(), name: '', email: '', isEditing: true };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  refreshTable() {
    this.loadData();
  }
}