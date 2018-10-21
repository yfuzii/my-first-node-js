// process.argv[2] : コマンドラインの引数を取得
// $ node app.js 100 #=> 5050
// 上記命令において100が引数
'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
