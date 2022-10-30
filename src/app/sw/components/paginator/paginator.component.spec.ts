import { TestBed } from '@angular/core/testing';
import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaginatorComponent
      ],
    }).compileComponents();
  });

  it('should create paginator component', () => {
    const fixture = TestBed.createComponent(PaginatorComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should emit on previous button click', () => {

    const fixture = TestBed.createComponent(PaginatorComponent);
    const component = fixture.componentInstance;
    component.previous = 'https://example.com';

    spyOn(component.navigateToPreviousPage, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.previous__button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.navigateToPreviousPage.emit).toHaveBeenCalled();
  });

  it('should emit on next button click', () => {

    const fixture = TestBed.createComponent(PaginatorComponent);
    const component = fixture.componentInstance;
    component.next = 'https://example.com';

    spyOn(component.navigateToNextPage, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.next__button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.navigateToNextPage.emit).toHaveBeenCalled();
  });

  it('should display proper page number', () => {

    const fixture = TestBed.createComponent(PaginatorComponent);
    const component = fixture.componentInstance;
    component.page = 3;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.paginator__page')?.textContent?.trim()).toEqual('3');
  });

});
