import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyreqPage } from './myreq.page';

describe('MyreqPage', () => {
  let component: MyreqPage;
  let fixture: ComponentFixture<MyreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
