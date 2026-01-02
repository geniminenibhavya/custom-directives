import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsyncSubject, BehaviorSubject, catchError, combineLatest, concatMap, debounceTime, delay, distinctUntilChanged, forkJoin, from, fromEvent, interval, map, mergeMap, Observable, of, ReplaySubject, Subject, switchMap, take, tap, throwError, toArray } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  search = '';
  obs1$: Observable<number>=from([1,2,3,4,5]);
  @ViewChild('searchInput') inputElement!: ElementRef;
  
  ngOnInit(): void {
     //SwitchMap
    // this.obs1$.pipe(
    //   switchMap(val => this.fakeApi(val))
    // ).subscribe(res => console.log('SwitchMap Result: ', res));
  // MergeMap
  // this.obs1$.pipe(mergeMap(val => this.fakeApi(val))).subscribe(res => console.log('MergeMap Result: ', res));
  //ConcatMap
  // this.obs1$.pipe(concatMap(val => this.fakeApi(val))).subscribe(res => console.log('ConcatMap Result:', res));

    //take operator
    of('a','a','b','b','c','d').pipe(take(5)).subscribe(res => console.log('Take Operator: ', res));
    //disctintUntilchanged
    of('a','a','b','b','c').pipe(distinctUntilChanged()).subscribe(res => console.log('Distinct Until Changed: ', res));
    //catchError
    throwError(() => new Error('Test Error')).pipe(catchError(err => of('Error handdled'))).subscribe(res => console.log(res));
    //combineLatest
    const obs1 = interval(1000);
    const obs2 = interval(2000);
    combineLatest([obs1, obs2]).pipe(take(5)).subscribe(([a, b]: [number, number]) => console.log('Combine Latest: ', a, b));
    //forkJoin
    forkJoin([interval(1000).pipe(take(3)), interval(2000).pipe(take(2))]).subscribe(console.log)
    
    //subjects
    const subject$ = new Subject<number>();
    subject$.subscribe(v => console.log('Subject Subscriber 1: ', v));
    subject$.next(1);
    subject$.next(2);
    subject$.subscribe(v => console.log('Subject Subscriber 2: ', v));
    subject$.next(3);
    //BehaviorSubject
    const behvaior$ = new BehaviorSubject<number>(0);
    behvaior$.subscribe(v => console.log('Behavior Subject Subscriber 1: ', v));
    behvaior$.next(1);
    behvaior$.next(2);
    behvaior$.subscribe(v => console.log('Behavior Subject Subscriber 2: ', v));
    behvaior$.next(3);
    //ReplaySubject
    const r$ = new ReplaySubject<number>(2);
    r$.subscribe(v => console.log('Replay Subject Subscriber 1: ', v));
    r$.next(1);
    r$.next(2);
    r$.next(3);
    r$.subscribe(v => console.log('Replay Subject Subscriber 2: ', v));
    r$.next(4);
    //AsyncSubject
    const a$ = new AsyncSubject<number>();
    a$.next(1);
    a$.next(2);
    a$.complete();
    a$.subscribe(v => console.log('Async Subject Subscriber: ', v));
  }
  ngAfterViewInit(): void {
    //debounceTime
    fromEvent(this.inputElement.nativeElement, 'keyup').pipe(debounceTime(500),map(() => this.inputElement.nativeElement.value)).subscribe(res => console.log('Debounce Time: ', res));
  }
  users = [
    {id: 1, name: 'Bhavya'},
    {id: 2, name: 'Alice'},
    {id: 3, name: 'Bob'},
    {id: 4, name: 'Charlie'},
    {id: 5, name: 'David'},
  ]

  dataPromise = new Promise(resolve => {
    setTimeout(() => resolve('Promise Data'), 2000)});

    // rxjs operators-----------------------------------------
    data : Observable<any> = of([1,2,3,4,5]);
    dataArray : Observable<any> = from([10,20,30]).pipe(toArray())


    // switchMap, mergeMap, concatMap
    fakeApi(value: number): Observable<number>{
      return of(value).pipe(tap(() => console.log(`Calling API for ${value}`)),
        delay(2000)
      );
    }
}
