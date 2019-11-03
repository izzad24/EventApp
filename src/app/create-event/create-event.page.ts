import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventDataService } from '../event-data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  currDate = new Date()

  EventFormgroup = new FormGroup({
    eventName: new FormControl('',Validators.required),
    categories: new FormControl('',Validators.required),
    subCategories: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    dateTime: new FormControl(this.currDate),
    details: new FormControl(),
  })

  categoryOptions = ["Corporate","Personal"]
  subCategoryOptions = {
    Corporate: ["Meeting", "Townhall", "Team Building", "General"],
    Personal: ["Wedding","Movies","Hangout","Concert","Camping","Others"]
  }

  constructor(private eventService: EventDataService,private authService: AuthService) { }

  ngOnInit() {
  }

  onSelect(optionValue, fieldName){
    console.log(`${fieldName} and value ${optionValue} clicked`)
    this.EventFormgroup.controls[fieldName].setValue(optionValue)
  }

  isValid(){
    return this.EventFormgroup.valid
  }

  onSubmit(){
    // let currUserValue = this.authService.currUser.getValue()
    this.eventService.setFormValues(this.EventFormgroup.value)
    this.eventService.saveEventToDb()
  }
}
