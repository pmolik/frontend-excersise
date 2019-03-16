import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) {
  }


  onHomeClick(): void {
    this.route.navigate(['home']);
  }

  onPageOneClick(): void {
    this.route.navigate(['page/one']);
  }

  onPageTwoClick(): void {
    this.route.navigate(['page/two']);
  }

  ngOnInit() {
  }

}
