import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject, combineLatest, debounce, distinctUntilChanged,
  filter, Subject, switchMap, tap, timer
} from 'rxjs';
import * as fromModels from './models';
import { ApiService } from './services';

const SEARCH_MIN_CHARACTERS = 3;
const SEARCH_DEBOUNCE = 300;


@Component({
  selector: 'app-sw',
  templateUrl: './sw.component.html',
  styleUrls: ['./sw.component.scss']
})
export class SwComponent implements OnInit, OnDestroy {

  loading = false;
  page: number = 1;
  response: fromModels.ApiResponse<fromModels.People> | undefined | null;
  scrollOffset: number = 150;
  viewMode: fromModels.ViewMode = 'paginate';

  private viewModeSubject = new BehaviorSubject<fromModels.ViewMode>(this.viewMode);
  private viewMode$ = this.viewModeSubject.asObservable();

  private search$ = new BehaviorSubject<string>('');
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    combineLatest([
      this.viewMode$,
      this.search$.pipe(
        debounce((search: string) => timer(search.length ? SEARCH_DEBOUNCE : 0)),
        distinctUntilChanged(),
        filter((search: string) => search.length ? search.length >= SEARCH_MIN_CHARACTERS : true),
      )
    ])
      .pipe(
        tap(() => this.loading = true),
        tap(() => this.response = null),
        switchMap(([_, search]) => this.apiService.getPeople(search)),
      )
      .subscribe({
        next: (response: fromModels.ApiResponse<fromModels.People>) => {
          this.page = 1;
          this.response = response;
          this.loading = false;
          if (this.isDynamicViewMode) {
            this.onScrollEnd();
          }
        },
        error: () => this.loading = false
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  get isDynamicViewMode(): boolean {
    return this.viewMode === 'dynamic';
  }

  onSearchChanged(search: string) {
    this.search$.next(search);
  }

  onViewModeChanged(viewMode: fromModels.ViewMode) {
    this.viewMode = viewMode;
    this.viewModeSubject.next(this.viewMode);
  }

  onScrollEnd() {
    if (!this.isDynamicViewMode) {
      return;
    }
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    if (this.loading || !this.response || !this.response.next) {
      return;
    }
    this.navigate(this.response.next, this.page + 1);
  }

  navigateToPreviousPage() {
    if (this.loading || !this.response || !this.response.previous) {
      return;
    }
    this.navigate(this.response.previous, this.page - 1);
  }

  private navigate(url: string, page: number) {
    this.loading = true;
    this.apiService
      .getPeople('', url)
      .subscribe({
        next: (response: fromModels.ApiResponse<fromModels.People>) => {
          this.page = page;
          if (this.isDynamicViewMode && this.response) {
            response.results = [...this.response.results, ...response.results];
          }
          this.response = response;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }
}
