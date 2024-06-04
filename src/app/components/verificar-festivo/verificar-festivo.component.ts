import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialUiReferencesModule } from '../../modulos/material-ui-references/material-ui-references.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { FestivosService } from '../../services/festivos.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-verificar-festivo',
  standalone: true,
  imports: [FormsModule, MaterialUiReferencesModule],
  templateUrl: './verificar-festivo.component.html',
  styleUrl: './verificar-festivo.component.css',
  providers: [provideNativeDateAdapter()]
})
export class VerificarFestivoComponent {
  selectedDate: Date | null = null;

  constructor(private dialog: MatDialog, private servicioFestivos: FestivosService) { }

  onSubmit() {
    if (this.selectedDate) {
      this.servicioFestivos.validarFestivo(this.selectedDate).subscribe({
        next: response => {
          this.dialog.open(DialogComponent, {
            data: { message: response.mensaje }
          });
        },
        error: error => {
          window.alert(error.message);
        }
      });
    } else {
      alert('Por favor seleccione una fecha.');
    }
  }
}
