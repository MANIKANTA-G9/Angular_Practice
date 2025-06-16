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
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductNamePipe } from './pipes/product-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TaskListComponent,
    onHoverColorChange,
    TaskComponent,
    TaskDetailComponent,
    FilterStatusPipe,
    ProductsComponent,
    ProductNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
