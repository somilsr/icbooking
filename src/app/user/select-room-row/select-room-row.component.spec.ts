import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRoomRowComponent } from './select-room-row.component';

describe('SelectRoomRowComponent', () => {
  let component: SelectRoomRowComponent;
  let fixture: ComponentFixture<SelectRoomRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRoomRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRoomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
