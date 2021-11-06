# Expense tracker 記帳本
一個可以紀錄支出、計算總金額的網站。

### Features
+ 可以註冊帳號、使用facebook登入
+ 在首頁查看所有支出項目
+ 在首頁查看所有支出的總金額
+ 點擊新增支出可以新增一筆支出項目
+ 點擊修改可以編輯支出項目
+ 點擊刪除可以刪除支出項目

### Installation and execution
1. 打開 terminal 將此專案 clone 到本機電腦
```
git clone https://github.com/Sin0001/expense-tracker.git
```
2. 安裝
```
cd expense-tracker
```
```
npm install
```
```
將檔案.env.example改為.env
```
```
npm run seed
```
3. 執行程式
```
npm run dev
```
4. 當 terminal 出現以下字樣，表示伺服器已啟動，連結成功
```
App is listening on http://localhost:3000
```
### 測試帳號
```
name: 廣志 , email: user1@example.com , password: 12345678
name: 小新 , email: user2@example.com , password: 12345678
```
### 開發環境
- Node.js
- Express
- Express-Handlebars
- mongoose

### 使用的套件
- express-handlebars
- method-override
- nodemon
- bcryptjs
- connect-flash
- dotenv
- moment
- passport
- passport-local
- passport-facebook
- express-session
