import { Injectable } from '@angular/core';
import { BehaviorSubject, Timestamp } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user'
import { HttpHeaders } from '@angular/common/http';

interface EventForm {
  eventName?: string
  categories?: string
  subCategories?: string
  location?: string
  dateTime?: Date
  details?: string
  createBy?: number
}

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  currUser = new BehaviorSubject<User>({})

  formValues = new BehaviorSubject<EventForm>({})


  constructor(public httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    // let userValue = this.authService.currUser.getValue()
    // this.currUser.next(userValue)
    // console.log(`event services currUser: ${this.currUser.getValue()}`)
  }

  setFormValues(formData) {
    this.formValues.next(formData)
  }

  joinEvent() {

  }

  saveEventToDb(currUser) {

    console.log("save event called")
    let currentValue = this.formValues.getValue()
    let userValue = currUser
    console.log(`event services currUser.id: ${userValue.id}`)
    let data = {
      "eventName": currentValue.eventName,
      "categories": currentValue.categories,
      "subCategories": currentValue.subCategories,
      "location": currentValue.location,
      "dateTime": currentValue.dateTime,
      "details": currentValue.details,
      "createBy": userValue.id
    }
    console.log(data)
    this.httpClient.post("http://localhost:3000/createEvent", data)
      .subscribe(response => {
        console.log(response)
      });
  }
}
