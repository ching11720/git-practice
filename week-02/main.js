// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

// 確認push正常執行
stack.push(5);
stack.push(8);
stack.push(1);
stack.push(117);
stack.print();

// 確認peek正常執行
console.log(stack.peek());

// 確認pop正常執行
stack.pop();
stack.print();

// 確認size正常執行
console.log(stack.size());

// 確認clear正常執行
stack.clear();
stack.print();

// 確認isEmpty正常執行
console.log(stack.isEmpty());

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？