import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingComponent } from './sorting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SortingComponent],
  template: `
    <sorting />
    <sorting sorting="asc" />
    <sorting direction="asc" />
    <sorting direction="asc1" />
    <sorting [sorting]="'asc'" />
    <sorting [direction]="'asc'" />
    <sorting [direction]="'asc1'" />
    <soritng />
  `,
})
export class AppComponent {
  title = 'angular-ts';
}
