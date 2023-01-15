import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {
  
constructor(private router: Router) {

  
}
  onAdd() {
    this.router.navigate(['book-form/form']);
  }

  onDeleteAll() {

  }

}


