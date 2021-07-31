import './app1.css'
import $ from 'jquery'
const $btn1 = $('#add1')
const $btn2 = $('#minus1')
const $btn3 = $('#mul2')
const $btn4 = $('#divide2')
const $number = $("#number");
const getNum = (n) => {
    return parseInt($number.text());
}
const setNum = (n) => {
    localStorage.setItem('num', n)
    $number.text(n)
}
let num = localStorage.getItem("num");
$number.text(num || 100)
$btn1.on("click", () => {
    let n = getNum()
    n += 1;
    setNum(n)
});
$btn2.on("click", () => {
    let n = getNum()
    n -= 1;
    setNum(n)
    
});
$btn3.on("click", () => {
    let n = getNum()
    n*=2
    setNum(n)
    
});
$btn4.on("click", () => {
    let n = getNum()
    n/=2
    setNum(n)
    
})


