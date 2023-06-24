import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  formValidation = new FormGroup({
    taskName:new FormControl('',[Validators.required,Validators.pattern(/[\S]/g)]),
    taskDescription:new FormControl('',[Validators.required,Validators.pattern(/[\S]/g)]),
    statusOfTask:new FormControl('',[Validators.required]),
    dueDate:new FormControl('',[Validators.required]) ,
  });
  
  

  
  constructor(private location:Location) { }


date1 = new Date();
currentYear = this.date1.getUTCFullYear();
currentMonth = this.date1.getUTCMonth() + 1;
currentDay = this.date1.getUTCDate();
  
FinalMonth:any;
FinalDay:any;
minValue : any;
TodayDate : any;

  status=[ 
    { value:'Todo',indicator: '⚪'},
    { value:'Inprogress',indicator: '🟡' },
    { value:'Completed',indicator: '🟢' },
  ]
   
  selectedStatus:String = '';
  selectedOption: string = 'Todo';
   
radioHandler(selectedState: string) {
  this.selectedOption = selectedState;
  this.selectedStatus = selectedState;
}  
  ngOnInit(): void {
  if(this.currentMonth<10){
    this.FinalMonth ="0"+this.currentMonth;
  }
  else{
    this.FinalMonth = this.currentMonth;
  }

  if(this.currentDay<10){
    this.FinalDay = "0"+ this.currentDay;
  }
  else{
    this.FinalDay = this.currentDay;
  }
  this.TodayDate = this.currentYear+"-"+ this.FinalMonth+"-"+this.FinalDay;
  this.minValue = this.TodayDate;
  }

  get taskName(){
    return this.formValidation.get('taskName')
  }
  
  get taskDescription(){
    return this.formValidation.get('taskDescription')
  }

  onSubmit(){ 
    console.log(this.formValidation.value) ;
    if (this.formValidation.valid) {
     // Form is valid, perform the submission or other actions
     console.log('Form is valid');
   } else {
     console.log('Form is invalid');
   } 
   }
   
   onReset(){
    this.formValidation.reset();
  }

  onCancel():void{
    this.location.back();
  }
}
