import { Component } from '@angular/core';
import { headerComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, UserComponent , TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  names = DUMMY_USERS;

  onSelectUser(id: string){
    console.log(' select user with id ' + id)
  }

  onSelectName(name: string){
    console.log('select user with id ' + name) 
  }
}
