import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [JsonPipe , UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {


  userlist = [ 
  {    login : 'spyros' ,    pw : '1'  } ,
  {    login : 'giwta' ,    pw : '2'  } , 
  {    login : 'thomas' ,    pw : '3'  } , 
  {    login : 'mike' ,    pw : '4'  } ,
]
 

//   u1 = {
//     l1 : 'spyros' ,
//     p1 : '1'
// }

// u2 = {
//   l2 : 'giwta' ,
//   p2 : '2'
// }

// u3 = {
//   l3 : 'thomas' ,
//   p3 : '3'
// }

// u4 = {
//   l4 : 'mike' ,
//   p4 : '4'
// }


}
