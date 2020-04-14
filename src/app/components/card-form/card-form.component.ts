import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      numberCard: ['', Validators.required],
      nameCard: ['', Validators.required],
      expiredCard: ['', [Validators.required]],
      cvvCard: ['', [Validators.required]],
      installmentCard: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
 
    if (this.registerForm.invalid) {
        console.log('Campos invalidos');
        return;
    }
    
    alert('SUCCESS!!');
  }

}
