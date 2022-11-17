const fs = require('fs'); //파일을 읽어오기 위해 사용
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

if(input % 4 == 0){
    if(input % 100 !== 0 || input % 400 === 0) {
        console.log(1);
    }else {
        console.log(0);
    }
}else {
    console.log(0);
}
