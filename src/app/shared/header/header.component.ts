import { Component, OnInit } from '@angular/core';
import { MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;
  nameLogo: string = 'Renan Peixoto';

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Sobre', icon: 'pi pi-fw pi-user', routerLink: "about" },
            { label: 'Projetos', icon: 'pi pi-fw pi-briefcase',routerLink: "projects" },
            { label: 'Contato', icon: 'pi pi-fw pi-envelope', routerLink: "contact" },
        ];

        this.activeItem = this.items[0];
    }

}
