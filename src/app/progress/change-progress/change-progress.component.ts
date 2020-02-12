import { Component, Input, OnInit } from '@angular/core';
import { ProgressTypeEnum } from '../common/enum/progres-type.enum';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FullBookModel } from '../../book/common/model/full-book.model';
import { ChangeProgressStrategyContract } from '../common/service/strategy/change-progress/change-progress-strategy.contract';
import { ChangePageProgressStrategy } from '../common/service/strategy/change-progress/change-page-progress.strategy';
import { ChangePercentageProgressStrategy } from '../common/service/strategy/change-progress/change-percentage-progress.strategy';

@Component({
  selector: 'app-change-progress',
  templateUrl: './change-progress.component.html',
  styleUrls: ['./change-progress.component.scss']
})
export class ChangeProgressComponent implements OnInit {
  readonly progressType = ProgressTypeEnum;
  progressForm: FormGroup;

  progressProcessingStrategies: ChangeProgressStrategyContract[];

  @Input()
  book: FullBookModel;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly changePercentageProgressStrategy: ChangePercentageProgressStrategy,
    private readonly changePageProgressStrategy: ChangePageProgressStrategy,
  ) {
    this.progressProcessingStrategies = [
      changePageProgressStrategy,
      changePercentageProgressStrategy,
    ];

    this.progressForm = this.formBuilder.group({
      progress: new FormControl(0, [ Validators.required ]),
      type: new FormControl(ProgressTypeEnum.PAGES),
    });
  }

  ngOnInit(): void {
    this.progressForm.patchValue({
      progress: this.book.progress,
    });
  }

  submit() {
    if (!this.progressForm.valid) {
      return;
    }

    const strategy = this.progressProcessingStrategies.find(item => item.support(this.progressForm.value.type));

    if (!strategy) {
      return;
    }

    strategy.process(this.book, this.progressForm.value.progress);
  }
}
