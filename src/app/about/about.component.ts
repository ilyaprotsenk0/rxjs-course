import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
  from,
} from "rxjs";
import { delayWhen, filter, map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    // const test = timer(3000, 1000);
    // test.subscribe((val) => {
    //   console.log(`Timer 1 | Value: ${val}`);
    // });
    // const http$ = createHttpObservable("/api/courses");
    // const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));
    // courses$.subscribe(
    //   (courses) => console.log(courses),
    //   noop,
    //   () => console.log("completed")
    // );

    // const source1$ = of(1, 2, 3);
    // const source2$ = from([1, 2, 3]);

    // const results$ = concat(source1$, source2$);
    // results$.subscribe((result) => console.log(result));

    const interval1$ = interval(1000);
    const interval2$ = interval(1000).pipe(map((value) => value * 100));
    const result$ = merge(interval1$, interval2$);
    result$.subscribe((result) => console.log(result));
  }
}

// function createHttpObservable(url: string) {
//   return Observable.create((observer) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((body) => {
//         observer.next(body);
//         observer.complete();
//       })
//       .catch((err) => {
//         observer.error(err);
//       });
//   });
// }
