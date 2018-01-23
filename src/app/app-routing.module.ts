import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from './components/layout1/layout1.component';
import { Layout2Component } from './components/layout2/layout2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonComponent } from './components/common/common.component';
import { MainComponent } from './components/main/main.component';

const ROUTES: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'layout1',
                component: Layout1Component
            },
            {
                path: 'layout2',
                component: Layout2Component
            },
            {
                outlet: 'common',
                path: 'open',
                component: CommonComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            useHash: true
        })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
