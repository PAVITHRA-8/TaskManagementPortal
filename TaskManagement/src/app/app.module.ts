import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import{MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UserComponent } from './user/user.component';
import { MatSelectModule } from '@angular/material/select';
import { ProfileComponent } from './profile/profile.component';


import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { userService } from './user-service.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SummaryComponent } from './summary/summary.component';
import { VerificationComponent } from './verification/verification.component';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    SidenavComponent,
    FooterComponent,
    CreateTaskComponent,
    UserComponent,
    ProfileComponent,
    TaskDetailsComponent,
    UserDetailsComponent,
    SummaryComponent,
    VerificationComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    FontAwesomeModule
    
    
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}