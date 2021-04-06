import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckListComponent } from './truck-list.component';

describe('TruckListComponent', () => {
  let component: TruckListComponent;
  let fixture: ComponentFixture<TruckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
