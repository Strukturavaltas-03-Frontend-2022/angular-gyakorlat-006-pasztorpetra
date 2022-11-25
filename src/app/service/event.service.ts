import { Injectable } from '@angular/core';
import { Event } from 'src/app/model/event';
import { Location } from 'src/app/model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events: Event[] = [
    {
      name: 'event1',
      date: '2022.11.25.',
      time: '12:00',
      location: {
        address: 'xy street',
        city: 'Budapest',
        country: 'Hungary',
      },
    },
    {
      name: 'event2',
      date: '2023.11.25.',
      time: '12:00',
      location: {
        address: 'xy street',
        city: 'New York',
        country: 'USA',
      },
    },
    {
      name: 'event3',
      date: '2023.11.25.',
      time: '12:00',
      location: {
        address: 'xy street',
        city: 'Sidney',
        country: 'Australia',
      },
    },
  ];

  constructor() {}

  getAll(): Event[] {
    return this.events;
  }
}
