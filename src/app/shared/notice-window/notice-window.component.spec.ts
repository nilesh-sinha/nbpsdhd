import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeWindowComponent } from './notice-window.component';

describe('NoticeWindowComponent', () => {
  let component: NoticeWindowComponent;
  let fixture: ComponentFixture<NoticeWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
