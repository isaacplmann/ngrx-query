import { EventEmitter, forwardRef, Provider } from '@angular/core';

export abstract class NqConnectedComponent {
  nqData: any;
  nqRefresh: EventEmitter<any>;
}

export function provideNqConnectedComponent(component: any, parentType?: any): Provider {
  return { provide: parentType || NqConnectedComponent, useExisting: forwardRef(() => component) };
};
