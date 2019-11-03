import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-event-page',
  templateUrl: './event-page.page.html',
  styleUrls: ['./event-page.page.scss'],
})
export class EventPagePage implements OnInit {
  selectedEvent = null

  constructor(private eventService: EventDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let eventIndex = this.route.snapshot.params.index
    this.eventService.allEvent.subscribe(data => {
      this.selectedEvent = data[eventIndex]
    })
  }

}
