import { Component, ViewChild } from '@angular/core';
import { TaskAddEditComponent } from '../task-add-edit/task-add-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  displayedColumns: string[] = [
    'id',
    'taskName', 
    'taskDescription', 
    'dueDate',
    'addPeople',
    'teamLeader',
    'teamMember',
    'Priority',
    'status',
    
     'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  
constructor(
  private _dialog: MatDialog, 
  private _taskService: TaskService,
  private _coreService: CoreService
  ){}

  ngOnInit(): void {
    this.getTaskList();
  }
  
  openAddEditTaskForm(){
    const MatDialogRef= this._dialog.open(TaskAddEditComponent);
    MatDialogRef.afterClosed().subscribe({
      next: (val) =>{
        if(val){
          this.getTaskList();
        }
      }
    })
  }

  getTaskList(){
    this._taskService.getTaskList().subscribe({
      next: (res) =>{
    this.dataSource=new MatTableDataSource(res);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
    
    

      },
      error: console.log,
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    deleteTask(id:number){
      this._taskService.deleteTask(id).subscribe({
        next: (res) =>{
         
          this._coreService.openSnackBar('Task Deleted!!','done');
          this.getTaskList();
        },
        error: console.log,
      });
    }

    openEditTaskForm(data: any){
       const dialogRef=this._dialog.open(TaskAddEditComponent, {
        data,
      });
        dialogRef.afterClosed().subscribe({
        next: (val) =>{
          if(val){
            this.getTaskList();
          }
        },
      });
    }

    
  

 

}
