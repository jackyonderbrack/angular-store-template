import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModel } from '../../models/navigation.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationItems: NavigationModel[] = [
    { title: 'Strona główna', href: '/' },
    { title: 'Kontakt', href: '/contact' },
    { title: 'Regulamin', href: '/conditions' },
  ];
}
