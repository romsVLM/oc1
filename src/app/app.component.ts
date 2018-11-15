import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oc1';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Contenu de mon premier post',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Contenu de mon deuxième post',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Contenu de mon troisième post',
      loveIts : 0,
      created_at : new Date()
    }
  ];
}
