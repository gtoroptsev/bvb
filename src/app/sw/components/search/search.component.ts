import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  @Output() changed = new EventEmitter<string>();

  onSearch(event: KeyboardEvent | Event) {
    this.changed.emit((event.target as HTMLInputElement)?.value?.trim());
  }
}
