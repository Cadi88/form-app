import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  joke = '';

  constructor(
    private fb: FormBuilder,
    private requestsService: RequestsService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.requestsService.getJokes().subscribe((data) => {
      this.joke = data.value;
    });
  }
}
