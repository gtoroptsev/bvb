import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {

  @Input() offset: number = 0;

  @Output() scrollEnd = new EventEmitter();

  @HostListener('scroll', ['$event'])
  onScroll(event: MouseEvent) {
    let tracker = event.target as HTMLInputElement;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    if ((tracker.scrollTop + this.offset) >= limit) {
      this.scrollEnd.emit();
    }
  }
}
