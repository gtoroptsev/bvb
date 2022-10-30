import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewMode } from '../../models';

@Component({
  selector: 'app-view-mode-switcher',
  templateUrl: './view-mode-switcher.component.html',
  styleUrls: ['./view-mode-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewModeSwitcherComponent {

  @Input() viewMode!: ViewMode;

  @Output() changed = new EventEmitter<ViewMode>();

  changeMode(mode: string) {
    this.changed.emit(mode as ViewMode);
  }
}
