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

# 心得

很喜歡這樣的作業！除了可以向老師、同學們學到各種關於網站架設的細節（尤其是 iptable 的部分，如果沒有好心人給的提示真的完全不會知道），真正解決問題之後又能得到成就感！

# bonus

rebooting server 之後，發現防火牆及 80 port 的問題又會跑出來。另外還有硬碟空間的問題。

### 硬碟空間

其實在做上面的 vim 修改時，會遇到`Can't open file for writing`  
![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/root不能修改檔案.png)  
查了資料才知道原來是硬碟空間已滿，所以無法存取我修改的資料（swap 空間，待補）  
`df -h`  
![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/disk用量.png)

-   檢查各檔案所佔的硬碟空間
    -   從 root 開始  
        `sudo du -h / --max-depth=1`  
        ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/根目錄硬碟空間.png)
    -   /var 有問題  
        `sudo du -h /var --max-depth=1`  
        ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/var硬碟空間.png)
    -   /var/log 有問題  
        `sudo du -h /var/log --max-depth=1`  
        ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/log硬碟空間.png)
    -   /var/log/system 有問題  
        ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/largefile.png)
-   刪掉大檔案（當然還是要檢查是否需要）  
    `sudo rm largefile1 ...`
-   清乾淨的 disk (avail 多了很多可用空間)  
    ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/disk/清完的disk.png)

### 防火牆

1. 修改 iptables 設定
    - `cd /etc/iptables`  
      `sudo vim rules.v4`
2. 把第 6 行加入 reject 的地方註解掉  
   ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/iptables設定.png)

### 80 port

1. `sudo lsof -i :80` 發現 PID: 500 佔據了 80 port  
   ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/80Port/80PortOccupiedPID.png)
2. `sudo systemctl status srv` 查看這個 process 的狀況  
   ![image](https://github.com/ching11720/git-practice/blob/main/week-09-graph/bonus/80Port/anotherSRV.png)
3. 停用這個 server  
   `sudo systemctl disable srv`
4. 將 nginx 設為自動啟動  
   `sudo systemctl enable nginx`

-   如果兩個都 enable 會發生什麼事  
    我試過 reboot 三次，都是 srv 先搶到 80，為什麼我也不知道（待補）
