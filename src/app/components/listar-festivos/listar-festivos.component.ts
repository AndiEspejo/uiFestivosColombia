import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialUiReferencesModule } from '../../modulos/material-ui-references/material-ui-references.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Festivo } from '../../entidades/Festivo';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-listar-festivos',
  standalone: true,
  imports: [NgxDatatableModule, FormsModule, MaterialUiReferencesModule],
  templateUrl: './listar-festivos.component.html',
  styleUrl: './listar-festivos.component.css'
})
export class ListarFestivosComponent {
  public fechaBusqueda: string = "";
  @ViewChild('table') table: any;
  page = { pageNumber: 0 };
  totalRecords: number = 0;

  public festivos: Festivo[] = [];

  public columnas = [
    { name: "Festivo", prop: "festivo" },
    { name: "Fecha", prop: "fecha" },
  ];

  constructor(private servicioFestivo: FestivosService) { }

  verificarInput() {
    if (this.fechaBusqueda == "" || this.fechaBusqueda.length != 4 || isNaN(Number(this.fechaBusqueda))) {
      window.alert("Ingrese un año válido");
      return;
    }
    this.buscarFestivos();
  }

  buscarFestivos() {
    this.page.pageNumber = 0;
    this.servicioFestivo.listarFestivos(this.fechaBusqueda).subscribe({
      next: response => {
        this.festivos = response;
        this.totalRecords = this.festivos.length;
        this.table.offset = 0;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

  onPage(event: any) {
    this.page.pageNumber = event.offset;
  }
}
