import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CreateOrgTypeComponent, ViewOrgTypeComponent, OrganizationUploadComponent,
  UserUploadComponent, BulkUploadComponent, StatusComponent
} from './components';
import { AuthGuard } from '../core/guard/auth-gard.service';

const routes: Routes = [
  {
    path: 'orgType', component: ViewOrgTypeComponent,
    data: { breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Organization Type', url: '' }] },
    children: [
      { path: 'create', component: CreateOrgTypeComponent },
      { path: 'update/:orgId', component: CreateOrgTypeComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgManagementRoutingModule { }

