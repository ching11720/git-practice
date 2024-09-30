# 建立 express 專案

### 1. `npm install`

觀察package.json

```
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prettier": "prettier --write '**/*.js'"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

-   name: 專案名稱。
-   version: 專案的版本號。
-   main: 專案的主程式。
-   scripts: 定義了一些在專案中可以被執行的指令，可以用 `npm run [script name]` 執行，而 `npm run` 可以查閱專案中的所有 script。
-   author: 作者。
-   license: 專案的證照，從license屬性可以得知**版權的歸屬**、**是否可修改**等。
-   description: 對於專案的簡介。

### 2. `npm install express`

會發現除了新增 package-lock.json & node_modules 以外，package.json 的 dependencies 多了 express。

而 dependencies 主要是放一些這個專案會用到的套件。

```
"dependencies": {
    "express": "^4.21.0"
}
```

另外，node_modules 裡面也會有叫做 express 的資料夾，裡面就直接 import 了 express 這個專案。

#### \* 關於 devDependencies

概念跟上面的 dependencies 很像，但放在這邊的套件目的不是給專案用，是輔助**專案開發**的套件。（如：prettier，幫助整理程式碼格式的套件）  
執行 `npm install --save-dev prettier`，就會出現

```
"devDependencies": {
    "prettier": "^3.3.3"
}
```

### 3. 新增 `app.js`

如果想要由環境變數來設定port number，可以先在本地端加入 `.env` 檔，並在檔案中寫入想要的port number

```
PORT = xxxx
```

建議將`.env`放入 `.gitignore` 當中，因為 `.env` 可能會含有資料庫密碼、使用者名稱等敏感資訊。  
另外為了專案的資料夾整潔，以及避免不同電腦間的套件衝突，node_modules 也是建議放進 `.gitignore`。

```
**/node_modules/   #將此專案下所有node_modules忽略
*.env              #將此專案下所有.env忽略
```

### 4. CommonJS vs. ES Module

|     | 引入            | 輸出           | 使用                                 |
| --- | --------------- | -------------- | ------------------------------------ |
| ESM | require（靜態） | module.exports | 需要加入 `"type": "module"` 即可使用 |
| CJS | import（動態）  | export         | 在NodeJS環境下就能用                 |

-   兩者互不相容

-   ESM的靜態引入: 在編譯期間即建立dependencies之間的連結，以便編譯器優化程式碼。  
    但無法在程式碼中途引入，通常都是在頂部進行import，且編譯時間可能因為引入的套件而變長。  
    適合在知道整個程式碼都用得到這個套件時使用。

-   CJS的動態引入: 在執行期間即建立dependencies之間的連結，以便根據程式的邏輯條件性地引入套件。  
    適合在特定情境下，在需要時再引入套件。

```js
// ESM
// 輸出
export function add(a, b) {
    return a + b;
}
// 引入
import { add } from './math.js';

// CSJ
// 輸出
exports.add = function (a, b) {
    return a + b;
};
// 引入
var math = require('./math.js');
```

## 總結

1. NodeJS 會藉由 package.json 來記錄所專案的各項資料及需要的套件，封裝專案後，需要的套件其他使用者可以直接以 `npm install` 下載即可，就不需要下載體積龐大的 node_modules 資料夾才能使用專案。

2. dependencies 及 devDependencies 的區別有助於區分哪些套件是專案需要的，哪些套件是工程師開發時的輔助工具。

3. ESM 及 CJS 兩種不同的套件引入輸出方式，可以依情境來抉擇要使用哪個方法來寫專案。

## References

1. https://tempura-good-good.coderbridge.io/2022/05/14/package-json/ package.json的內容說明
2. https://vocus.cc/article/649cc0e0fd89780001a7d34d ESM vs. CSJ
