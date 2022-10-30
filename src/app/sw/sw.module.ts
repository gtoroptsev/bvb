import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fromDirectives from './directives';
import * as fromComponents from './components';
import { SwComponent } from './sw.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    fromDirectives.ScrollTrackerDirective,

    SwComponent,
    fromComponents.SearchComponent,
    fromComponents.StatusComponent,
    fromComponents.ViewModeSwitcherComponent,
    fromComponents.PaginatorComponent,
    fromComponents.PeopleTableComponent,
  ],
  exports: [
    SwComponent
  ]
})
export class SwModule {
}
