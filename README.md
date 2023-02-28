# 我的餐廳清單

## 介紹

這是一個餐廳查詢平台，你可以查詢餐廳類型、餐廳圖片、餐廳電話、餐廳地址等資料。

### 功能描述

- 查詢餐廳及詳細資料 
- 使用相關文字搜尋特定餐廳，可輸入餐廳名稱及類型
- 新增餐廳
- 修改餐廳的資訊
- 刪除餐廳
- 餐廳排序功能

2023/03/01更新：

- 建立帳戶功能

## 環境建置與需求
- [Node.js](https://nodejs.org/en/)
- [Node Package Manager](https://www.npmjs.com/)
- [Express](https://www.npmjs.com/package/express)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://mongoosejs.com/)

<img width="1257" alt="Screenshot 2023-01-08 at 00 11 31" src="https://user-images.githubusercontent.com/32502651/211160051-e482a5fb-653e-4b5a-8e6a-64fdff1304e0.png">

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
npm install express@4.16.4
```

4. 安裝專案相關套件

```
npm install
```

5. 設定你的 MongoDB 連接

6. 載入種子資料

```
npm run seed
```

7. 啟動伺服器
```
npm run dev
```

當終端機顯示"Express is listening on localhost:3000"，代表啟動成功，你可以在瀏覽器輸入 http://localhost:3000 瀏覽內容。