import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', passwordValidators],
      role: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.accountService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => {
          this.forms.firstName.setValue(x.firstName);
          this.forms.lastName.setValue(x.lastName);
          this.forms.role.setValue(x.role);
          this.forms.username.setValue(x.username);
        });
    }
  }
  get forms() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.accountService
      .register(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['.', { relativeTo: this.route }]);
        },
        (error) => {
          this.loading = false;
        }
      );
  }

  private updateUser() {
    this.accountService
      .update(this.id, this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['..', { relativeTo: this.route }]);
        },
        (error) => {
          this.loading = false;
        }
      );
  }
}
