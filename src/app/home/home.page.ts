import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventDataService } from '../event-data.service';
import { AuthService } from '../auth/auth.service';

interface EventInterface {
  eventName?: string
  categories?: string
  subCategories?: string
  location?: string
  dateTime?: Date
  details?: string
  createBy?: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  allEvent = [];
  
  constructor(private navCtrl: NavController, private eventService: EventDataService, private authService:AuthService) {}

  ngOnInit() {
    this.eventService.getAllEvent()
    this.eventService.allEvent.subscribe(value =>{
      this.allEvent = value
    })
  }

  navigate(index){
    this.navCtrl.navigateForward(`/event/${index}`)
  }
  navCreatePage(){
    this.navCtrl.navigateForward("/create")
  }
}
