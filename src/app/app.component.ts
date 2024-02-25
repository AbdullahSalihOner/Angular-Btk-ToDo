import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, FormsModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  newTaskInput: string = "";
  tasks: string[] = [];

  constructor(public dialog: MatDialog){
    
  }

  addNewTask() {
    this.tasks.push(this.newTaskInput);
    this.newTaskInput = "";
  }

  editTask(index: number) {
    // let result = prompt("Lütfen Değer Giriniz");
    // if (result) {
    //   this.tasks[index] = result;
    // }

    const dialogRef = this.dialog.open(EditDialogComponent);
    dialogRef.afterClosed().subscribe(item =>{
      this.tasks[index]= item;
    })
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
