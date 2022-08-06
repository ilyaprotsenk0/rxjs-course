import { Component, OnInit } from "@angular/core";
// import { Store } from "./common/store.service";
import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // constructor(private store: Store) {}

  ngOnInit() {
    // this.store.init();

    const array = from([1, 2, 3, 4, 5]);
    array
      .pipe(filter((num) => num % 2 === 0))
      .subscribe((val) => console.log(val));
  }
}
