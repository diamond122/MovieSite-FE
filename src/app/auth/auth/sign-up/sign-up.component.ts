import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../global/models/User';
import { AuthService } from '../../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private _signUpForm: FormGroup;
  private _message: string;
  private _loading: boolean;
  private _title: string;
  private _modal: ElementRef;

  public constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this._signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup({
        password: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required])
      }, this.matchPassword)
    });
  }

  public get signUpForm(): FormGroup {
    return this._signUpForm;
  }

  public get message(): string {
    return this._message;
  }

  public set message(_message: string) {
    this._message = _message;
  }

  public get loading(): boolean {
    return this._loading;
  }

  public set loading(_loading: boolean) {
    this._loading = _loading;
  }

  @ViewChild('modal')
  public set modal(_modal: ElementRef) {
    this._modal = _modal;
  }

  public get modal(): ElementRef {
    return this._modal;
  }

  public get title(): string {
    return this._title;
  }

  public onSubmit(): void {
    if (this._signUpForm.value) {
      const values: any = this._signUpForm.value;
      const user: { name: string, lastName: string, email: string, password: string } = {
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        password: values.passwords.password
      };
      this.authService.signUpUser(user)
        .subscribe((_newUser: { message: string, data: User }): void => {
          if (_newUser.data) {
            this._title = 'Success';
            this._message = '  You have been registered successfully. Please go to Sign-In tab to log In.';
            this._modal.nativeElement.click();
          }
        }, (_err: HttpErrorResponse): void => {
          this._title = 'Error';
          this._loading = false;
          if (_err.status === 401) {
            this._message = 'Please insert the correct email or password...';
          } else if (_err.status === 500) {
            this._message = 'There is a problem with the data base';
          } else if (_err.status === 400) {
            this._message = _err.error.message;
          } else {
            this._message = 'There is a problem with the connection';
          }
          this._modal.nativeElement.click();
        });
    }
  }

  private matchPassword(formGroup: AbstractControl): { [invalid: string]: boolean } | null {
    if (formGroup.get('password').value !== formGroup.get('confirmPassword').value) {
      return { invalid: true };
    }
    return null;
  }


}
