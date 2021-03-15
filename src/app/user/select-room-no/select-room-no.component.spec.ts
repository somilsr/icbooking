import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRoomNoComponent } from './select-room-no.component';

describe('SelectRoomNoComponent', () => {
  let component: SelectRoomNoComponent;
  let fixture: ComponentFixture<SelectRoomNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRoomNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRoomNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
