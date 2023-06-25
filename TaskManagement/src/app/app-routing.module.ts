import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [

  { path:'task', component: TaskComponent},
  { path:'sidenav', component:SidenavComponent},
  {path:'create-task',component:CreateTaskComponent},
  {path:'user',component:UserComponent},
  {path:'userdetails',component:UserDetailsComponent},
  {path:'taskdetails',component:TaskDetailsComponent},
  {path:'summary',component:SummaryComponent},
  {path:'profile',component:ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
