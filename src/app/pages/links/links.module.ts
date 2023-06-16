import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksOverviewPageComponent } from './links-overview-page/links-overview-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LinksDetailsDialogComponent } from './links-details-dialog/links-details-dialog.component';

@NgModule({
  declarations: [LinksOverviewPageComponent, LinksDetailsDialogComponent],
  imports: [CommonModule, LinksRoutingModule, SharedModule, TranslateModule],
})
export class LinksModule {}
