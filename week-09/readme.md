# TroubleShooting

## 1. EC2 檢查 nginx 是否正常運行

`sudo systemctl status nginx`

結果：  
![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/分號/檢查nginx狀況.png)

## 2. 檢查 nginx error log

`cd /var/log/nginx` 查看 error.log

### 2.1 當 nginx error log 沒有資料時

#### 檢查 nginx 設定檔有無文法錯誤

-   進入 nginx 設定檔  
    ` cd /etc/nginx`
-   檢查文法  
    `sudo nginx -t`
-   發現錯誤  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/分號/檢查nginx設定的語法.png)
-   尋找錯誤訊息提到的檔案及其位置（像這裡是說錯誤發生在 nginx.conf 的第 8 行  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/分號/分號錯誤.png)
-   修正錯誤，重啟 nginx  
    `sudo systemctl restart nginx`

### 2.2 當 nginx error log 有資料時

#### 檢查 nginx error log

-   檢查 nginx 狀態時，發現 port 被佔用  
     ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/80佔用/檢查nginx狀況.png)

    -   顯示 80 port 已被佔用
    -   nginx error log 也是顯示 80 port 佔用  
        `vim /var/log/myweb/error.log`  
        ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/80佔用/檢查nginx%20error%20log.png)

-   停掉佔用 80 port 的 process  
    `sudo fuser -k 80/tcp`
-   重啟 nginx  
    `sudo systemctl restart nginx`
-   正常運行  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/80佔用/砍掉佔用80的process%2B正常畫面.png)

## 3. 查看 web server 的 error log

若 nginx 已經正常運行，但`curl localhost`卻出現錯誤訊息  
![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/html權限/不能連接server.png)

-   進入 web server error log 的所在地  
    `vim /var/log/myweb/error.log`
-   發現錯誤訊息  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/html權限/myweb%20error%20log.png)

#### 權限問題

-   index.html 權限不足，開啟權限即可
-   開啟 html 的權限  
    `cd /var/myweb`  
    `sudo chmod 664 index.html`

#### 防火牆

-   防火牆擋住 request
-   檢查防火牆設定  
    ` sudo iptables -L`  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/防火牆/檢查防火牆.png)
    -   input 那邊 reject 所有 tcp 的請求
-   把防火牆打開  
    ` sudo iptables -D INPUT 1`  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/防火牆/截圖%202024-11-07%20下午3.20.01.png)
    -   這裡有多加入 accept 所有 tcp 請求在 input 跟 output 的地方，但因為是加在 reject 後面，所以在執行 accept 之前就已經被 reject 了。
