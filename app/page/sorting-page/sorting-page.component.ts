import { Component, OnInit } from "@angular/core";

@Component({
    selector: "sort-app",
    templateUrl: "page/sorting-page/sorting-page.component.html",
    styleUrls: ["page/sorting-page/sorting-page-common.css"]
})

export class sortingPageComponent implements OnInit {

    sortedString: string = "";
    sortedNumber: any = 0;

    ngOnInit() {
        // this.sortingInputNumber;
    }


    sort(values) {

        for (var i = 0; i < values.length - 1; i++) {
            var min = i;
            for (var j = i + 1; j < values.length; j++) {
                if (values[j] < values[min]) {
                    min = j;
                }
            }
            if (min != i) {
                var temp = values[i];
                values[i] = values[min];
                values[min] = temp;
            }
        }
    }

    splitSortingInputNumber() {
        // console.dir(this.sortedString.split(",").map(i => parseInt(i)));
        // if(this.sortedString = "string"){}
        this.sortedNumber = this.sortedString.split(",").map(i => parseInt(i))
        console.log(this.sortedNumber); // split -method is used to split a string into an array of substrings, and returns the new array.
        this.sort(this.sortedNumber);


        console.log(this.sortedNumber);
    }

}