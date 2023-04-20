import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksOverviewPageComponent } from './links-overview-page/links-overview-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LinksOverviewPageComponent
  ],
  imports: [
    CommonModule,
    LinksRoutingModule,
    SharedModule
  ]
})
export class LinksModule { }
