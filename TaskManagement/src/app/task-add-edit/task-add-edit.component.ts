import { Component, Inject } from '@angular/core';
import { CoreService } from '../core/core.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.css']
})
export class TaskAddEditComponent {

Teamleader: string[]=[
 'Pavi',
 'Pava',
 'Sandeep'

]
TeamMember: string[]=[
  'Pavi',
  'Pava',
  'Sandeep',
  'Sanjay',
  'rahul',
  'rohini',
  'pranesh'
 
 ]


  taskForm: FormGroup;
  
  constructor(private _fb: FormBuilder,
     private _taskService: TaskService, 
     private _dialogRef: MatDialogRef<TaskAddEditComponent>,
     @Inject(MAT_DIALOG_DATA) public  data: any,
     private _coreService:CoreService
     )
     
     {
    this.taskForm= this._fb.group({
      taskName:'',
      taskDescription:'',
      dueDate:'',
      Priority:'',
      addPeople:'',
      teamLeader:'',
      teamMember:'',
      status:'', 
     
      
    }) ;

  }

  ngOnInit(): void {
    this.taskForm.patchValue(this.data);

      
  }


  onFormSubmit(){
    if(this.taskForm.valid){
      if(this.data){
        this._taskService.updateTask(this.data.id,this.taskForm.value).subscribe({
          next: (val:any) => {
         
            this._coreService.openSnackBar('Task details Updated!!','done');
            this._dialogRef.close(true);
  
          },
          error:(err: any) => {
            console.error(err);
          },
        })

      }else{

        this._taskService.addTask(this.taskForm.value).subscribe({
          next: (val:any) => {
           
            this._coreService.openSnackBar('Task Added Successfully','done');
            this._dialogRef.close(true);
  
          },
          error:(err: any) => {
            console.error(err);
          },
        })
      }
     
    }
  }

}
