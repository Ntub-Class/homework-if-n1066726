// 請介紹兩個字串方法跟數字方法

let chr: string = 'abcde'; //宣告變數chr為字串,並設定值'abcde'
console.log(chr.charAt(2)); //輸出訊息 chr.charAt(2)為chr字串從0算起的第2個字,也就是c

let idx: string = 'qwerty'; //宣告變數idx為字串,並設定值'qwerty'
console.log(idx.indexOf('t')); //輸出訊息 idx.indexOf('t') 找出't'在idx字串從0算起是第4個字

let fix: number = 123/456; //宣告變數fix為數字,並設定值 123/456
console.log(fix.toFixed(4)); //輸出訊息 fix.toFixed(4) fix的運算結果取到小數點第4位,也就是0.2697

let str: number = 789; //宣告變數str為數字,並設定值 789
console.log(typeof(str.toString())); //輸出訊息 typeof(str.toString()), str.toString()將str從數字轉變為字串,用typeof()確認是否已變為字串


// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > limit){
    console.log('大乾爹');
}else if(money <= limit && money >= 40000){
    console.log('乾爹');
}else{
    console.log('滾');
}
