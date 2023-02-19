import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Notice } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationManagementService {

  constructor(private http: HttpClient) { }

  getActiveNotifications() {
    const notifications: Notice[] = [{
      notifId: 101,
      title: 'New Website',
      priority: 1,
      content: 'It gives us immense joy to announce the launch of our new website in order to facilitate better connectivity and communication with students and their parents & guardians.',
      createdTs: (new Date(2023, 1, 19)).toLocaleDateString()
    }
    // , {
    //   notifId: 101,
    //   title: 'Republic Day Celebration',
    //   priority: 1,
    //   content: 'January 26th, 2023. See you all there!'
    // }
  ];
    return of(notifications);
  }
}
