import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedGamesComponent } from './picked-games.component';

describe('PickedGamesComponent', () => {
  let component: PickedGamesComponent;
  let fixture: ComponentFixture<PickedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
