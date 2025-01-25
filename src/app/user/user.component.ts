import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const RANDOM_INDEX = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  } 

  getSelectedUser() {
    this.select.emit(this.user.id);
  }

  getActiveUser() {

  }
}
