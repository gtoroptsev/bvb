import { TestBed } from '@angular/core/testing';
import { ViewModeSwitcherComponent } from './view-mode-switcher.component';

describe('ViewModeSwitcherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewModeSwitcherComponent
      ],
    }).compileComponents();
  });

  it('should create view mode switcher component', () => {
    const fixture = TestBed.createComponent(ViewModeSwitcherComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should emit on radio selection change', () => {
    const fixture = TestBed.createComponent(ViewModeSwitcherComponent);
    const component = fixture.componentInstance;
    component.viewMode = 'paginate';

    spyOn(component.changed, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.view-mode-switcher__dynamic');
    button.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.changed.emit).toHaveBeenCalled();
  });
});
