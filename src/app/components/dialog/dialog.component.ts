import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MaterialUiReferencesModule } from '../../modulos/material-ui-references/material-ui-references.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MaterialUiReferencesModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
