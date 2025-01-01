import { Routes } from '@angular/router';

import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component';

export const routes: Routes = [
    {
        path: 'notes',
        title: 'Notes',
        component: NotesComponent
    },
    {
        path: 'notes/:id',
        title: 'Note',
        component: NoteComponent
    },
    {
        path: 'about',
        title: 'About',
        component: AboutComponent,
        children: [
            {
                path: 'projects',
                title: 'Projects',
                component: AboutProjectsComponent
            },
            {
                path: 'sponsors',
                title: 'Sponsors',
                component: AboutSponsorsComponent
            }
        ]
    },
    {
        path: '**',
        title: 'Page Not Found',
        component: PageNotFoundComponent
    },
    // {
    //     path: '', redirectTo: 'notes', pathMatch: 'full'
    // }
];
