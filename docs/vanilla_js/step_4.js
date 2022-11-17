/*문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B,
70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 
출력하는 프로그램을 작성하시오.*/

/*입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고,
100보다 작거나 같은 정수이다.
*/

const fs = require('fs'); //파일을 읽어오기 위해 사용
const filepath =
process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");


if(inputs >= 90) {
    console.log('A');
}else if((inputs >= 80)&&(inputs<=90)) {
    console.log('B');
}else if((inputs >= 70)&&(inputs<=80)) {
    console.log('C');
}else if((inputs >= 60)&&(inputs<=70)) {
    console.log('D');
}else {
    console.log('F');
}








import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int sum = sc.nextInt();
        sc.close();

        if(sum>=90) System.out.println("A");
        else if(sum>=80)System.out.println("B");
        else if(sum>=70)System.out.println("C");
        else if(sum>=60)System.out.println("D");
        else System.out.println("F");
        



    }
}