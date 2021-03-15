import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSearchResultComponent } from './room-search-result.component';

describe('RoomSearchResultComponent', () => {
  let component: RoomSearchResultComponent;
  let fixture: ComponentFixture<RoomSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
