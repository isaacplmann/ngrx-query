import { Observable } from 'rxjs/Observable';

export function getLatest<T>(o$: Observable<T>): T {
  let result: T;
  o$.take(1).subscribe(x => result = x);
  return result;
}
