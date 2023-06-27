import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  private id?: string;
  isLoading: boolean = false;

  shortLinkDetailsForm?: FormGroup;

  constructor(
    private store: Store<IAppState>,
    private dialogRef: MatDialogRef<LinksDetailsDialogComponent>
  ) {}

  private constructForm(): void {
    if (this.linkDetails && this.id !== this.linkDetails.id) {
      this.shortLinkDetailsForm = new FormGroup({
        id: new FormControl(this.linkDetails.id, [Validators.required]),
        shortCode: new FormControl(this.linkDetails.shortCode, [
          Validators.required,
        ]),
        targetUrl: new FormControl(this.linkDetails.targetUrl, [
          Validators.required,
        ]),
        expiresOn: new FormControl(this.linkDetails.expiresOn),
      });
      this.id = this.linkDetails.id;
    }
  }

  save(): void {
    if (this.linkDetails && this.shortLinkDetailsForm?.valid) {
      let shortLinkDetails: IShortLinkDetailsDto =
        this.shortLinkDetailsForm.value;
      this.store.dispatch(
        ShortLinkActions.update({
          id: this.linkDetails?.id,
          dto: shortLinkDetails,
        })
      );
    }
  }

  ngOnInit(): void {
    this.linkDetailsChangedSubscription = this.store
      .select((str) => str.shortLinkDetails)
      .subscribe((state) => {
        this.linkDetails = state.shortLink;
        this.isLoading = state.isLoading;
        this.constructForm();
        if (state.state == 'updated') {
          this.dialogRef.close();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.linkDetailsChangedSubscription) {
      this.linkDetailsChangedSubscription.unsubscribe();
    }
  }
}
