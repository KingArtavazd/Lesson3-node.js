// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//     console.log(mySquareObject.getArea());
// }
// main();

// var fs = require('fs');

// function main() {
//     var file = "hello.txt";
//     fs.appendFileSync(file, "Hello world\n");
// }
// main();

// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "Hello world\n", function(err){
//        console.log("fs.writeFile ended");
//    });
//    console.log("fs.writeFile");
// }
// main();

// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();

// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple", "Microsoft")
//     );
// }
// main();

var fs = require('fs');

var obj = 
{
    "first_name": "Vardan",
    "last_name": "Hovsepyan",
    "age": 13,
    "tumo_student": true
}

function main() {
    var JSO = JSON.stringify(obj);
    fs.writeFileSync("obj.json", JSO);
}

main();