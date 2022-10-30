import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { People, ViewMode } from '../../models';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleTableComponent {

  @Input() page!: number;
  @Input() viewMode!: ViewMode;
  @Input() items!: People[];

  trackByFn(index: number){
    return index;
  }
}
