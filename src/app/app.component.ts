import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialUiReferencesModule } from './modulos/material-ui-references/material-ui-references.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialUiReferencesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uiFestivosColombia';
}
