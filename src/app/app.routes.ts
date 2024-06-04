import { Routes } from '@angular/router';
import { VerificarFestivoComponent } from './components/verificar-festivo/verificar-festivo.component';
import { ListarFestivosComponent } from './components/listar-festivos/listar-festivos.component';

export const routes: Routes = [
  {
    path: 'verificar', component: VerificarFestivoComponent
  },
  {
    path: 'obtener', component: ListarFestivosComponent
  },
  {
    path: '**', redirectTo: '/verificar', pathMatch: 'full'
  }
];
