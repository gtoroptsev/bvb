import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SwComponent } from './sw.component';
import * as fromDirectives from './directives';
import * as fromComponents from './components';
import { ApiService } from './services';

describe('SwComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        fromDirectives.ScrollTrackerDirective,

        fromComponents.SearchComponent,
        fromComponents.StatusComponent,
        fromComponents.ViewModeSwitcherComponent,
        fromComponents.PaginatorComponent,
        fromComponents.PeopleTableComponent,

        SwComponent,
      ],
      providers: [
        ApiService
      ]
    }).compileComponents();
  });

  it('should create sw component', () => {
    const fixture = TestBed.createComponent(SwComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
