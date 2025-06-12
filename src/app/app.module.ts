import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { onHoverColorChange } from './task-list/onhover.directive';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-list/task-detail/task-detail.component';
import { FilterStatusPipe } from './filter-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TaskListComponent,
    onHoverColorChange,
    TaskComponent,
    TaskDetailComponent,
    FilterStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
