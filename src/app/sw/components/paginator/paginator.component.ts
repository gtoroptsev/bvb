import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input() page!: number;
  @Input() next!: string;
  @Input() previous!: string;

  @Output() navigateToPreviousPage = new EventEmitter();
  @Output() navigateToNextPage = new EventEmitter();
}
