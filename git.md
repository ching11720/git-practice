# .git 的變化
#### blob、tree、commit
1. blob: （binary large object）用來儲存文件內容。
2. tree <檔案夾名稱> 可以看見該檔案夾以下所有的子檔案夾互相的關係
3. commit: 表示一次提交，記錄了一次對儲存庫的更改。

#### 觀察
先新增一個檔案 **git-practice**，然後執行`git init`，確定檔案多了一個 `.git`，之後針對執行各種git指令後，以tree指令觀察 `.git`的檔案變化
#### 執行 `git init` 之後
```
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```
1. HEAD: 指向本地分支的的最新commit（但如果協作的情況下又太久沒pull，本地分支及遠端分支的最新commit會衝突）
2. 在 `.git` 目錄結構中，blob 物件是儲存在 `objects` 目錄下。

#### git add 之後
```
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── index       #新增
├── info
│   └── exclude
├── objects
│   ├── 2d      #新增
│   │   └── 884543cd0f97815468d526c3f122ec13e6029b  #新增
│   ├── 44      #新增
│   │   └── f8ea5fd1b8ecf6d2ad502ec0afddfd4df90268  #新增
│   ├── e2      #新增
│   │   └── 4a7561daf99b89691d8696d372b917ce14e0c7  #新增
│   ├── e6      #新增
│   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391  #新增
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```
新增了四個dir及五個file  
1. index: 儲存即將被提交的變更的狀態及內容
2. 2d, 44, e2, e6是新增的資料夾，而底下的檔案是`git add`之後所新增的blob  

#### git commit之後
```
.git
├── COMMIT_EDITMSG   #新增
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs   #新增
│   ├── HEAD   #新增
│   └── refs   #新增
│       └── heads   #新增
│           └── master   #新增
├── objects
│   ├── 2d
│   │   └── 884543cd0f97815468d526c3f122ec13e6029b
│   ├── 44
│   │   └── f8ea5fd1b8ecf6d2ad502ec0afddfd4df90268
│   ├── 4b   #新增
│   │   └── cc6687563ff783948ff1c75736225d4a787da3   #新增
│   ├── 96   #新增
│   │   └── 672feb653af41a505343907e3d9c2679830a62   #新增
│   ├── e2
│   │   └── 4a7561daf99b89691d8696d372b917ce14e0c7
│   ├── e6
│   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   └── master   #新增
    └── tags
```
新增了五個dir及六個file  
1. COMMIT_EDITMSG: 儲存提交訊息
2. logs：
    - logs/HEAD：記錄了 HEAD 的變更歷史，可以看到分支的歷史紀錄。
    - logs/refs/heads/master：記錄了 master 分支的變更歷史。
3. 4b, 96是新增的資料夾（但why？） 
4. refs/heads/master：這個檔案指向 master 分支的最新提交。當提交新變更時，這個檔案會被更新，以指向新的提交。（推上遠端repo之前會先改成`main`）

#### git push 之後
在github上開心的branch 之後，執行`git push`
```
.git
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│       ├── heads
│       │   └── main
│       └── remotes   #新增
│           └── origin   #新增
│               └── main   #新增
├── objects
│   ├── 2d
│   │   └── 884543cd0f97815468d526c3f122ec13e6029b
│   ├── 44
│   │   └── f8ea5fd1b8ecf6d2ad502ec0afddfd4df90268
│   ├── 4b
│   │   └── cc6687563ff783948ff1c75736225d4a787da3
│   ├── 96
│   │   └── 672feb653af41a505343907e3d9c2679830a62
│   ├── e2
│   │   └── 4a7561daf99b89691d8696d372b917ce14e0c7
│   ├── e6
│   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   └── main
    ├── remotes   #新增
    │   └── origin   #新增
    │       └── main   #新增
    └── tags
```
1. refs 及 logs 在接上github的遠端repo之後，都新增了remotes的部分

#### git branch test
branch: 在分支上的開發動作都不會影響到main的程式碼，很適合共同開發時使用  
執行`git branch test`，然後查看tree
```
├── logs
│   ├── HEAD
│   └── refs
│       ├── heads
│       │   ├── main
│       │   └── test   #新增
│       └── remotes
│           └── origin
│               └── main
├── objects
│   ├── 2d
│   │   └── 884543cd0f97815468d526c3f122ec13e6029b
│   ├── 44
│   │   └── f8ea5fd1b8ecf6d2ad502ec0afddfd4df90268
│   ├── 4b
│   │   └── cc6687563ff783948ff1c75736225d4a787da3
│   ├── 96
│   │   └── 672feb653af41a505343907e3d9c2679830a62
│   ├── e2
│   │   └── 4a7561daf99b89691d8696d372b917ce14e0c7
│   ├── e6
│   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   ├── main
    │   └── test   #新增
    ├── remotes
    │   └── origin
    │       └── main
    └── tags
```
發現在logs, refs都新增了test指向test這個branch

# commit message 應該怎麼寫？
主要是要讓自己及他人能夠一目瞭然這次的commit針對哪個部分做了什麼樣的改動，以方便版本回溯等。  
  
根據以前開發專案的經驗，PM會要我們commit message按照特定格式寫，像是feat開頭的message是告訴其他人多新增了一個功能，例如：新增一個修改密碼的api就寫「feat(login): create changed_password api」。  
  
其他網站找到的commit message類別  
類型必須包含在標題中，且符合下列類型。  
（來源：https://hackmd.io/@dh46tw/S1NPMsy5L）
|類型	|說明	|程式碼改動|
|------|---------|---------|
|Feat	|新功能。|	有|
|Modify	|既有功能需求調整的修改。|	有|
|Fix	|錯誤修正。	|有|
|Docs	|更新文件，如 README.md。	|沒有|
|Style	|程式碼格式調整(formatting)、缺少分號(missing semi colons)等。	|沒有|
|Refactor	|重構。針對已上線的功能程式碼調整與優化，且不改變記有邏輯。	|有|
|Test	|測試。新增測試、重構測試等	|沒有|
|Chore	|更新專案建置設定、更新版本號等瑣事。	|沒有|
|Revert	|撤銷之前的commit。 revert: type(scope): subject (回覆版本：xxxx)	|有|
