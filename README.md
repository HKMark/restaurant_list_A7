# 我的餐廳清單

## 介紹

這是一個餐廳查詢平台，你可以查詢餐廳類型、餐廳圖片、餐廳電話、餐廳地址等資料。

### 功能描述

- 查看餐廳
- 點擊以查詢餐廳的詳細資料 
- 使用相關文字搜尋特定餐廳，可輸入餐廳名稱及類型
- 可以新增餐廳
- 可以修改餐廳的資訊
- 可以刪除餐廳

## 環境建置與需求
- [Node.js](https://nodejs.org/en/)
- [Node Package Manager](https://www.npmjs.com/)
- [Express](https://www.npmjs.com/package/express)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://mongoosejs.com/)

## 安裝與執行步驟

1. 開啟終端機(Terminal)，將專案 Clone 到本機電腦

```
git clone https://github.com/HKMark/restaurant_list.git
```

2. 進入存放此專案的資料夾

```
cd restaurant_list
```

3. 安裝 npm 套件

```
npm init -y
```

4. 安裝 Express 套件

```
npm install express@4.18.2
```

5. 安裝 Handlebars 套件

```
npm i express-handlebars@3.0.0
```

6. 安裝 Nodemon 套件

```
npm install -g nodemon
```

7. 安裝 body-parser 套件

```
npm install body-parser
```

8. 安裝 Mongoose 套件及設定你的 MongoDB 連接

```
npm i mongoose@5.9.7
```

9. 載入種子資料

```
npm run seed
```

10. 啟動伺服器
```
npm run dev
```

當終端機顯示"Express is listening on localhost:3000"，代表啟動成功，你可以在瀏覽器輸入 http://localhost:3000 瀏覽內容。
