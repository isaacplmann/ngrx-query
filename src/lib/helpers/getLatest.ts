import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

export function getLatest<T>(o$: Observable<T>): T {
  let result: T;
  o$.pipe(take(1)).subscribe(x => result = x);
  return result;
}
