import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class EditTablegridComponent implements OnInit, OnChanges {
  @Input() tableData: TableRow[] = [];  // Receives data dynamically
  @Input() tableColumns: string[] = []; // Receives column names dynamically
  @Input() isEditable: boolean = false; // Determines if table is editable

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<TableRow>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.initializeTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData'] && changes['tableData'].currentValue) {
      this.dataSource.data = this.tableData;
    }
    if (changes['tableColumns'] && changes['tableColumns'].currentValue) {
      this.displayedColumns = [...this.tableColumns];
      if (this.isEditable) {
        this.displayedColumns.push('actions'); // Add 'actions' column only if editable
      }
    }
  }

  initializeTable() {
    this.displayedColumns = [...this.tableColumns];
    if (this.isEditable) {
      this.displayedColumns.push('actions');
    }
    this.dataSource.data = this.tableData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleEdit(row: TableRow) {
    if (this.isEditable) {
      row.isEditing = !row.isEditing;
    }
  }

  saveRow(row: TableRow) {
    if (this.isEditable) {
      row.isEditing = false;
    }
  }

  deleteRow(row: TableRow) {
    if (this.isEditable) {
      this.dataSource.data = this.dataSource.data.filter(r => r['id'] !== row['id']);
    }
  }

  addRow() {
    if (this.isEditable) {
      const newRow: TableRow = this.tableColumns.reduce((acc, col) => ({ ...acc, [col]: '' }), { id: Date.now(), isEditing: true });
      this.dataSource.data = [newRow, ...this.dataSource.data];
    }
  }

  refreshTable() {
    this.dataSource.data = [...this.tableData];
  }
}

// tableColumns = ['id', 'name', 'email']; // Dynamic columns
//   tableData = [
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' }
//   ];

//   updateData() {
//     this.tableData = [
//       ...this.tableData,
//       { id: 3, name: 'Charlie', email: 'charlie@example.com' }
//     ];
//   }
