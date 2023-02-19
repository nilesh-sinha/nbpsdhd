import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/notification';
import { NotificationManagementService } from 'src/app/services/notification-management.service';

@Component({
  selector: 'app-notice-window',
  templateUrl: './notice-window.component.html',
  styleUrls: ['./notice-window.component.scss']
})
export class NoticeWindowComponent implements OnInit {
  notice: Notice[] | undefined;
  constructor(private noticeService: NotificationManagementService) {
    this.notice = [];
  }

  ngOnInit() {
    this.noticeService.getActiveNotifications().subscribe(resp => this.notice = resp);
  }

}
