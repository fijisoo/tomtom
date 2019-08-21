import {Component, OnInit} from '@angular/core';
import {orderBy} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tomtom';
  tab = [
    {
      id: '235-231',
      name: 'Basia',
      level: 0,
      children: [{
        id: '534-23w',
        name: 'Wacek',
        level: 1,
        children: [{
          id: '134-23w',
          name: 'Zmalal',
          level: 2,
          children: []
        },
          {
            id: '3gg-222',
            name: 'Urus',
            level: 2,
            children: []
          }
        ]
      },
        {
          id: 'hgg-222',
          name: 'Placek',
          level: 1,
          children: []
        },
        {
          id: '111-w',
          name: 'Zadek',
          level: 1,
          children: [{
            id: 'www-23w',
            name: 'Milenka',
            level: 2,
            children: []
          },
            {
              id: 'aaa-222',
              name: 'Ilona',
              level: 2,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 'w30-444',
      name: 'Andrzej',
      level: 0,
      children: [{
        id: '534-23w',
        name: 'Wacek',
        children: [{
          id: '134-23w',
          name: 'Urus',
          children: []
        },
          {
            id: '3gg-222',
            name: 'Zmalal',
            children: []
          }
        ]
      }]
    },
    {
      id: '986-w',
      name: 'Ala',
      level: 0,
      children: [{
        id: '534-23w',
        name: 'Wacek',
        level: 1,
        children: [{
          id: '134-23w',
          name: 'Zmalal',
          level: 2,
          children: []
        },
          {
            id: '3gg-222',
            name: 'Urus',
            level: 2,
            children: []
          }
        ]
      },
        {
          id: '112-333',
          name: 'Kacek',
          level: 1,
          children: [{
            id: '134-23w',
            name: '2222',
            level: 2,
            children: []
          },
            {
              id: '3gg-222',
              name: '1111',
              level: 2,
              children: []
            }
          ]
        }
      ]
    }
  ];

  ngOnInit() {
    const newTab = this.sortTableAlphabetically(this.tab, (x) => x.name, (x) => x.children);
    console.log(newTab);
  }

  sortTableAlphabetically (tab: any, getName: any, getChildren: any) {
    if (Array.isArray(tab) && tab.length) {
      tab = orderBy(tab, (el) => getName(el));
      tab.map(({children}) => {
        if ((Array.isArray(children)) && children.length) {
          children = orderBy(children, (nestedEl) => getName(nestedEl));
          this.sortTableAlphabetically(children, getName, getChildren);
        }
      });
    }
    return tab;
  }

// użycie:
  /* sortTableAlphabetically<Group>(groups, (x: any) => x.name, (x: any) => x.children); */

}
