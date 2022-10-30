import { TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
    }).compileComponents();
  });

  it('should create search component', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should emit on keyup', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    spyOn(component.changed, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'KeyA' }));

    fixture.detectChanges();

    expect(component.changed.emit).toHaveBeenCalled();
  });
});
