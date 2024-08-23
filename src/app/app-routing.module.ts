import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackTraceComponent } from './pack-trace/pack-trace.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'pack-trace', pathMatch: 'full' },
  { path: 'pack-trace', component: PackTraceComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
