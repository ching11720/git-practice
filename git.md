# git init 之後的 .git
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
