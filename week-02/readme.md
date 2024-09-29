# NodeJS 安裝

#### 版本：v20.11.1

我是大概今年3、4月的時候安裝的，當初安裝時會先看LTS版本（相對穩定）。

# nvm, npm 差異

### 1. nvm (node version manager)

由於不同專案可能會使用不同的 NodeJS 版本，nvm 可以幫助切換不同版本的 NodeJS。

#### 常用指令

-   `nvm install <版本號>` 安裝指定版本node
-   `nvm list *available*` 用來查詢安裝過的node版本（加上available則可查詢所有可使用版本）
-   `nvm use <版本號>` 切換使用node版本

### 2. npm (node package manager)

npm 可以用來管理專案所使用到的套件。

#### module

代表功能的一段程式碼，且通常只處理一個功能，可以被封裝讓其他人下載使用。

#### package

通常是一個資料夾，且裡面會包含多個 module。一個 package 是一個專案，也可以封裝被其他專案下載使用。

#### 常用指令

-   `npm init` 建立一個npm專案，此時會出現 package.json
-   `npm install <套件>` 用來安裝套件且套件會被存放到node_modules資料夾。安裝完後，package.json 會多 dependencies，紀錄我們安裝的module。另外還會新增 package-lock.json 以及 node_modules資料夾

```
  "dependencies": {
    "give-me-a-joke": "^0.5.1"
  }
```

# Reference

1. https://a0910288060.medium.com/了解node-js-nvm-npm差別-47cda7c1d569
2. https://vocus.cc/article/655dc3dffd89780001a8f2da (npm install -g 會出現錯誤，有空的話再來看看)
3. https://hackmd.io/@gdsc-ntcu/SkRH6qaWK (nodejs module, package)
