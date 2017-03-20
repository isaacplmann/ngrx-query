import { TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

import {ConnectRequestDirective} from './connect.directive';

describe('ConnectRequestDirective', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ConnectRequestDirective
      ]
    });
  });

  it('should add a class', () => {
    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').getAttribute('class')).toBe('sample-class');
  });

});

@Component({
  selector: 'my-test-cmp',
  template: `
  <div nqConnect></div>
  `
})
class TestComponent { }
