import { Component, Input } from '@angular/core';

@Component({
  selector: 'sorting',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Hello {{ direction }}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  `,
})
export class SortingComponent {
  @Input() direction?: 'asc' | 'desc';
}
