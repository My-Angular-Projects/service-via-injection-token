import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { IBridgeService, IUser } from '../../types';
import { BRIDGE_SERVICE } from '../../tokens';

@Component({
  selector: 'sit-primo',
  imports: [AsyncPipe],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimoComponent {
  users$!: Observable<IUser[]>;

  constructor(
    @Inject(BRIDGE_SERVICE) private readonly bridgeService: IBridgeService
  ) {}

  getUsers(): void {
    this.users$ = this.bridgeService.getUsers();
  }
}
