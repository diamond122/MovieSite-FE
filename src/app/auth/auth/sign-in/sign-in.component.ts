import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { User } from '../../../global/models/User';
import { LocalStorageService } from '../../../global/service/local-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private _signInForm: FormGroup;
  private _error: boolean;
  private _modal: ElementRef;
  private _message: string;
  private _loading: boolean;
  private _title: string;

  public constructor(private authService: AuthService, private localStorageService: LocalStorageService, private router: Router) { }

  public ngOnInit(): void {
    this._signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public get signInForm(): FormGroup {
    return this._signInForm;
  }

  public get error(): boolean {
    return this._error;
  }

  public set error(_error: boolean) {
    this._error = _error;
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
    if (this._signInForm.value) {
      const values: { email: string, password: string } = <{ email: string, password: string }>this._signInForm.value;
      this._loading = true;
      this.authService.signInUser(values).subscribe((identity: {token: string, user: User}): void => {
        this.authService.identity = identity;
        this.localStorageService.setItem('token', identity.token);
        this.localStorageService.setItem('user', JSON.stringify(identity.user));

        this._message = 'You have logged in successfully!';
        this._title = 'Success';
        this._loading = false;
        this._modal.nativeElement.click();
      }, (_err: HttpErrorResponse): void => {
        this._title = 'Error';
        this._loading = false;
        if (_err.status === 401) {
          this._message = 'Please insert the correct email or password...';
        } else if (_err.status === 500) {
          this._message = 'There is a problem with the data base';
        } else {
          this._message = 'There is a problem with the connection';
        }
        this._modal.nativeElement.click();
      });
    }
  }

  public redirect(): void {
    if (this.title === 'Success') {
      this.authService.isAuthenticated().next(this.authService.identity);
      this.router.navigate(['user']);
    }
  }

}
