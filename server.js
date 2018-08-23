const path=require('path');
const express = require('express');

const PORT = process.env.PORT || 2009;
const rootPath = path.resolve(__dirname,'../..');   // 根目录是当前目录的上两级
console.log('rootPath is:', rootPath);

const app = express();
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('现在的根目录置于'+rootPath+'下，你可以使用node来访问静态文件了!');
});
app.use('/', router);
app.use(express.static(rootPath));

app.listen(PORT);
console.log('Magic happens on port http://localhost:' + PORT + '/');
