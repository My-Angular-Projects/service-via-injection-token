import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { BRIDGE_SERVICE } from '../../tokens';
import { IBridgeService, IPost } from '../../types';

@Component({
  selector: 'sit-secondo',
  imports: [AsyncPipe],
  templateUrl: './secondo.component.html',
  styleUrl: './secondo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondoComponent {
  posts$!: Observable<IPost[]>;

  constructor(
    @Inject(BRIDGE_SERVICE) private readonly bridgeService: IBridgeService
  ) {}

  getPosts(): void {
    this.posts$ = this.bridgeService.getPosts();
  }
}
