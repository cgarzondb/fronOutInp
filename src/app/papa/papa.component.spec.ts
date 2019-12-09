import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PapaComponent } from './papa.component';

describe('PapaComponent', () => {
  let component: PapaComponent;
  let fixture: ComponentFixture<PapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
