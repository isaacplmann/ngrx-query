import { EventEmitter, forwardRef, Provider, ChangeDetectorRef } from '@angular/core';

export abstract class NqConnectedComponent {
  changeDetector?: ChangeDetectorRef;
  nqData: any;
  nqRefresh: EventEmitter<any>;
}

export function provideNqConnectedComponent(component: any, parentType?: any): Provider {
  return { provide: parentType || NqConnectedComponent, useExisting: forwardRef(() => component) };
};
