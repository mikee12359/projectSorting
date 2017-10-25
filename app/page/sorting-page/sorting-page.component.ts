import { Component, OnInit } from "@angular/core";

@Component({
    selector: "sort-app",
    templateUrl: "page/sorting-page/sorting-page.component.html",
    styleUrls: ["page/sorting-page/sorting-page-common.css"]
})

export class sortingPageComponent implements OnInit {

    sortedString: string = "";
    sortedNumber: any = 0;
    // number1: string = "";
    // number2: string = "";
    // result: number = 0;

    ngOnInit() {
        // this.sortingInputNumber;
    }
    sortingInputNumber() {
        // console.dir(this.sortedString.split(",").map(i => parseInt(i)));
        // if(this.sortedString = "string"){}
        this.sortedNumber = this.sortedString.split(",").map(i => parseInt(i))
        console.log(this.sortedNumber);
        sorting(this.sortedNumber);
            
            function sorting(values){
            //   alert(values);
        
                for (var i = 0; i < values.length - 1; i++){
                    var min = i ;
                    for(var j = i + 1; j < values.length; j++){
                        if(values[j]< values[min]){
                            min = j;
                        }
                    }
                    if (min != i){
                        var temp = values[i];
                        values[i] = values[min];
                        values[min] = temp;
                    }
                }
                // alert(values);
                // return this.sortedNumber;
            }
            console.log(this.sortedNumber);
        // let inputtedString = this.sortedString;
        // var inputtedString = "54321";
        // console.log(inputtedString);
        // this.sortedNumber = parseInt(this.sortedString);
        // console.log(this.sortedNumber);
    }
    

    // calculate() {
    //     this.result = parseInt(this.number1) + parseInt(this.number2);
    //     console.log(this.result)
    // }

    // var numbers = [2,1,9,8,5,11,3,4,10,6,7];
    
}