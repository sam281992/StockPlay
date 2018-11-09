import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStockComponent } from './play-stock.component';

describe('PlayStockComponent', () => {
  let component: PlayStockComponent;
  let fixture: ComponentFixture<PlayStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
