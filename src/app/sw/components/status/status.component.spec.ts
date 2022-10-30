import { TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StatusComponent
      ],
    }).compileComponents();
  });

  it('should create status component', () => {
    const fixture = TestBed.createComponent(StatusComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render counter', () => {
    const fixture = TestBed.createComponent(StatusComponent);
    const component = fixture.componentInstance;
    component.count = 1;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.count .count__value')?.textContent).toEqual('1');
  });

  it('should render loading status', () => {
    const fixture = TestBed.createComponent(StatusComponent);
    const component = fixture.componentInstance;
    component.loading = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.status .status__loading')?.textContent).toBeTruthy();
  });
});
