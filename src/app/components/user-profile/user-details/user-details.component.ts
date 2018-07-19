import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { User } from '../../../global/models/User';
import { LocalStorageService } from '../../../global/service/local-storage.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  modalRef: BsModalRef;
  available = true;
  cUsername: string;
  private _authenticated: { token: string | null; user: User | null } | null = {
    token: '',
    user: null
  };

  constructor(
    private modalService: BsModalService,
    private localStorageService: LocalStorageService
  ) {}

  public ngOnInit(): void {
    this._authenticated.token = this.localStorageService.getItem('token')
      ? this.localStorageService.getItem('token')
      : '';
    this._authenticated.user = this.localStorageService.getItem('user')
      ? JSON.parse(this.localStorageService.getItem('user'))
      : null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public get user(): { token: string | null; user: User | null } | null {
    return this._authenticated;
  }

  public checkAvailability() {
    // TODO: check if username is available
    this.changeUsername();
  }

  public changeUsername() {
    // TODO: call user service to change username
    this.modalRef.hide();
  }
}
