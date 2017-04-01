import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainviewComponent } from './mainview/mainview.component';
import { TopnavComponent } from './mainview/topnav/topnav.component';

import { UsersService } from './users.service';
import { PostsService } from './posts.service';
import { TaskService } from './task.service';
import { PopupService } from './popup.service';
import { DatepickerService } from './datepicker.service';
import { NotificationService } from './notification.service';
import { NavServiceService } from './nav-service.service';
import { PostComponent } from './mainview/post/post.component';
import { TasksComponent } from './mainview/tasks/tasks.component';
import { PopupComponent } from './popup/popup.component';
import { SearchPipe } from './search.pipe';
import { AddTaskComponent } from './add-task/add-task.component';
import { SearchEmployeePipe } from './search-employee.pipe';
import { OrderByIdPipe } from './order-by-id.pipe';
import { OrderByDonePipe } from './order-by-done.pipe';
import { TabFilterPipe } from './tab-filter.pipe';
import { UserPipe } from './user.pipe';
import { NotiPipePipe } from './noti-pipe.pipe';
import { StyleguideComponent } from './mainview/styleguide/styleguide.component';

// Must export the config
export const firebaseConfig = {
  apiKey: '',
  authDomain: 'ordbogen-dashboard.firebaseapp.com',
  databaseURL: 'https://ordbogen-dashboard.firebaseio.com',
  storageBucket: 'ordbogen-dashboard.appspot.com',
  messagingSenderId: '1047466307776'
};

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
    SearchEmployeePipe,
    OrderByIdPipe,
    OrderByDonePipe,
    TabFilterPipe,
    UserPipe,
    NotiPipePipe,
    StyleguideComponent,
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
    DropdownModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [
    UsersService,
    PostsService,
    TaskService,
    PopupService,
    DatepickerService,
    NotificationService,
    NavServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
