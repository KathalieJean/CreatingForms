import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {

  @Input() book: any | undefined;
  @Input() bookForm: FormGroup | undefined;

constructor(private router: Router) {

  
}
  onAdd() {
    this.router.navigate(['book-form/form']);
  }

  onDeleteAll() {

  }

}


