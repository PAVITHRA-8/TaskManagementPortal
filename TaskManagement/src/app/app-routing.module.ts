import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path:'task', component: TaskComponent},
  { path:'sidenav', component:SidenavComponent},
  {path:'create-task',component:CreateTaskComponent},
  {path:'user',component:UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
