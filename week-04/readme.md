# AWS EC2 服務

## Launch a new instance

-   OS: 選擇虛擬機的作業系統
-   instance type: 虛擬機的 CPU，越大越大越貴
-   public IP: 13.236.86.88
-   security group: 類似防火牆的概念，可以限制特定的 port
    -   建議只要建立最少數量的 security group，避免出錯。
    -   避免 port 設定範圍過大，或直接設定 0.0.0.0/0，這樣防火牆也就沒意義了（因為任何人都能連線）

## Nginx

有點像是一個 server，介在 client 跟後端伺服器之間，當後端有多台伺服器在服務時，Nginx 可以去分配每個伺服器的負載量，也可以讓 client 在進行加密傳輸時更方便（只需要讓 Nginx 去做加密就好）。

#### proxy

透過中介去傳遞訊息，就像上面提到的 Nginx 功能，他可以讓後端 server 跟 client 之間的互動更順利（分配負載量、加密等）

#### setting file

```
server {
  listen 80;
  server_name git-practice.com;
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
  }
}
```

#### log

在 `/var/log/nginx` 中找到的，根據下面那篇文章

```
140.119.96.81 - - [14/Oct/2024:15:53:57 +0000] "GET / HTTP/1.1" 200 12 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15"
```

裡面會有連線用戶的 IP，時間以及連線方式、狀態（像這裡就是單純 get hello world，然後 200 代表成功）

## pm2

管理 NodeJS process 的工具，用以最大化使用 CPU。  
`pm2 start app.js`

### sudo

下了這個指令，直接開啟最高管理員的權限。像是安裝軟體的時候就可能遇到 permission denied 之類的問題，這時候就要下 sudo 處理。

## 遭遇的問題

無

## References

-   https://5xruby.com/zh/articles/starting-ec2-instance (新增 instance 步驟)
-   https://aws.amazon.com/tw/ec2/instance-types/ (AWS instance 官網介紹)
-   https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/vpc-security-groups.html (security group)
-   https://www.youtube.com/watch?v=7VAI73roXaY (Nginx 介紹影片)
-   https://www.pressplay.cc/project/F720CEB1D6057D7ABB5614722AB18FFF/articles/660A57208C29FF94453548ED21F284EF (proxy)
-   https://medium.com/@yunandarpalilati/monitoring-access-log-and-error-log-in-nginx-d5ea089dd7b0 (nginx log)
-   https://ithelp.ithome.com.tw/m/articles/10214173 (pm2)
