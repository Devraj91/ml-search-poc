import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { SearchContainerComponent } from './search-container.component';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
  //  it('should searching data', (done) => {
  //     component.performSearch("Java");      
  //     // component.performSearch.subscribe( sb => {
  //     //   expect(sb).toEqual("Java");
  //     //   done();
  //     // });           
  //    // component.performSearch("java");      
  //   });
});
