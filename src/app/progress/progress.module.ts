import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeProgressComponent } from './change-progress/change-progress.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePageProgressStrategy } from './common/service/strategy/change-progress/change-page-progress.strategy';
import { ChangePercentageProgressStrategy } from './common/service/strategy/change-progress/change-percentage-progress.strategy';

@NgModule({
  declarations: [ChangeProgressComponent],
  providers: [
    ChangePageProgressStrategy,
    ChangePercentageProgressStrategy,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [ChangeProgressComponent]
})
export class ProgressModule { }
