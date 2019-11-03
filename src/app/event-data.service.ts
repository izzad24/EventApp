import { Injectable } from '@angular/core';
import { BehaviorSubject, Timestamp, Observable } from 'rxjs';
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
  allEvent = new BehaviorSubject<EventForm[]>([])
  formValues = new BehaviorSubject<EventForm>({})


  constructor(public httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  setFormValues(formData) {
    this.formValues.next(formData)
  }

  setCurrentUser(userData){
    this.currUser.next(userData)
    let data = this.currUser.getValue()
    console.log(data)
  }

  getAllEvent():EventForm[]{
    let userData = this.currUser.getValue();
    console.log("current user is : " + userData.name);
    let url = `http://localhost:3000/users/${userData.id}`
    this.httpClient.get(url).subscribe((response: EventForm[]) =>{
      console.log(response)
      this.allEvent.next(response)
      console.log(this.allEvent.value)
    })
    return this.allEvent.value
  }

  joinEvent() {
    
  }

  saveEventToDb() {

    console.log("save event called")
    let currentValue = this.formValues.getValue()
    let userValue = this.currUser.getValue()
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
