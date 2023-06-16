import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [ToolbarComponent, ConfirmationDialogComponent],
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [ToolbarComponent],
})
export class ComponentsModule {}
