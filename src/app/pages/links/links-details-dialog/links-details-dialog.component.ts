import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from 'src/app/state/app.state';
import { ShortLinkActions } from 'src/app/state/shortlinkdetails/shortlinkdetails.actions';
import { IShortLinkDetailsDto } from 'src/app/state/shortlinkdetails/shortlinkdetails.models';

export interface IShortLinkDetailsDialogData {
  id: string;
}

@Component({
  selector: 'app-links-details-dialog',
  templateUrl: './links-details-dialog.component.html',
  styleUrls: ['./links-details-dialog.component.scss'],
})
export class LinksDetailsDialogComponent implements OnInit {
  private linkDetailsChangedSubscription?: Subscription;
  private linkDetails?: IShortLinkDetailsDto;

  shortLinkDetailsForm?: FormGroup;

  constructor(private store: Store<IAppState>) {}

  private constructForm(): void {
    if (this.linkDetails) {
      this.shortLinkDetailsForm = new FormGroup({
        shortLink: new FormControl(this.linkDetails.shortCode, [
          Validators.required,
        ]),
        targetUrl: new FormControl(this.linkDetails.targetUrl, [
          Validators.required,
        ]),
        expiresOn: new FormControl(this.linkDetails.expiresOn),
      });
      console.log(this.shortLinkDetailsForm);
    }
  }

  ngOnInit(): void {
    this.linkDetailsChangedSubscription = this.store
      .select((str) => str.shortLinkDetails)
      .subscribe((state) => {
        this.linkDetails = state.shortLink;
        this.constructForm();
      });
  }

  ngOnDestroy(): void {
    if (this.linkDetailsChangedSubscription) {
      this.linkDetailsChangedSubscription.unsubscribe();
    }
  }
}
