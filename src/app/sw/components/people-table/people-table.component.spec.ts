import { TestBed } from '@angular/core/testing';
import { PeopleTableComponent } from './people-table.component';
import { MOCK_PEOPLE } from '../../mocks';

describe('PeopleTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PeopleTableComponent
      ],
    }).compileComponents();
  });

  it('should create people table component', () => {
    const fixture = TestBed.createComponent(PeopleTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display no records found message in appropriate conditions', () => {

    const fixture = TestBed.createComponent(PeopleTableComponent);
    const component = fixture.componentInstance;
    component.items = [];

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('tbody tr td')?.textContent?.trim()).toEqual('Не найдено ни одной записи');
  });


  it('should display proper rows quantity and set correct row id', () => {

    const fixture = TestBed.createComponent(PeopleTableComponent);
    const component = fixture.componentInstance;
    component.page = 1;
    component.items = MOCK_PEOPLE.slice();

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('tbody tr td:nth-child(1)')?.textContent?.trim()).toEqual('1');
    expect(compiled.querySelector('tbody tr td:nth-child(2)')?.textContent?.trim()).toEqual(component.items[0].name);
  });

  it('should set correct row id for page > 1', () => {

    const fixture = TestBed.createComponent(PeopleTableComponent);
    const component = fixture.componentInstance;
    component.page = 2;
    component.items = MOCK_PEOPLE.slice();

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('tbody tr td:nth-child(1)')?.textContent?.trim()).toEqual('11');
  });

});
