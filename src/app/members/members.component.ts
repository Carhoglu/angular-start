import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  forbiddenUserNames = ['ahmet', 'ali', 'mustafa'];
  reactiveForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'memberData': new FormGroup({
        'member_name': new FormControl(
          null,
          Validators.required /* [Validators.required, this.forbiddenNames.bind(this)] */
        ),
        'member_surname': new FormControl(
          null,
          Validators.required /* [Validators.required, this.forbiddenSurnames.bind(this)  ]*/
        )
      }),
      'statuses': new FormArray([])
      /* ,
      'member_gender'  : new FormControl('male') */
      /* 'member_email'  : new FormControl(null, [ Validators.required , Validators.email]) */
    });

    // Value Changes
    this.reactiveForm.valueChanges.subscribe(value => console.log(value));
    // Status Changes
    this.reactiveForm.statusChanges.subscribe(status => console.log(status));
    // Setting Value
    this.reactiveForm.setValue({
      memberData: { 'member_name' : 'ibrahim',
      'member_surname' : 'carh'
      },
      'statuses' : []
    });
    // Pathing Value
    this.reactiveForm.patchValue({
        'memberData' : {
          'member_name' : 'aslı'
        }
      });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    // Reactive Form resetting
    this.reactiveForm.reset();
  }

  onAddStatus() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('statuses')).push(control);
  }
  // Custom Validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
  // Custom  Async Validator
  /* forbiddenSurnames(control: FormControl): Promise<any> | Observable<any> {
    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'demir') {
          resolve({'surnameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  } */
}
