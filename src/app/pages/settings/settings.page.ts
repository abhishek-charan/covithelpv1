import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  volunteer(){

    this.router.navigate(['/home/volunteer'])
      }

  dod(){

        this.router.navigate(['/home/dod'])
          }    
  quarantined(){

    this.router.navigate(['/home/quarantined'])
          }  
}
