import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimoComponent } from './components/primo/primo.component';
import { SecondoComponent } from './components/secondo/secondo.component';

@Component({
  selector: 'sit-root',
  imports: [PrimoComponent, SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  //
}
