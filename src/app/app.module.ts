import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainviewComponent } from './mainview/mainview.component';
import { TopnavComponent } from './mainview/topnav/topnav.component';

import { UsersService } from './users.service';
import { PostsService } from './posts.service';
import { TaskService } from './task.service';
import { PopupService } from './popup.service';
import { DatepickerService } from './datepicker.service';
import { PostComponent } from './mainview/post/post.component';
import { TasksComponent } from './mainview/tasks/tasks.component';
import { PopupComponent } from './popup/popup.component';
import { SearchPipe } from './search.pipe';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainviewComponent,
    TopnavComponent,
    PostComponent,
    TasksComponent,
    PopupComponent,
    SearchPipe,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),

  ],
  providers: [
    UsersService,
    PostsService,
    TaskService,
    PopupService,
    DatepickerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
