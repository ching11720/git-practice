# AWS 服務

### Region

多個（至少三個） AZ 聚集的實體地點，**且每個 Region 提供的服務單價、網路延遲速度不同。** 使用者可以根據需要的系統性能、成本方面選擇要使用的 Region。

### AZ (Available Zone)

一個有獨立電源的資料中心，若一個 Region 含有多個 AZ，那麼那個 Region 的規模、可用性及容錯度就比較高。（當然，因為有好多台機器）  
在一個 Region 中，每個 AZ 都以網路連接

### Edge Location

為 AWS 服務的最末端，可以與 AZ 互動。有點像電腦裡的 cache，可以進行一些簡單的運算及存取。

## 總結

全世界 AWS 有好幾個 Region，一個 Region 三個以上的 AZ 可以處理資料，而 local 端的 Edge Location 可以與 AZ 互相通訊。

每個 Region 提供的服務速度、價格有所不一。

## References

1. https://ithelp.ithome.com.tw/m/articles/10192075 (裡面有解釋 edge location, az, region 的關係圖)
2. https://aws.amazon.com/about-aws/global-infrastructure/regions_az/?nc1=h_ls (官網)

# Homework To-do

-   [x] callback.js
-   [x] promise.js
