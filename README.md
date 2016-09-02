# ProgressBar 模拟异步进度条!

启动命令: 

```js
**Run the script**. `npm run dev` 

```

## 调用插件方法

###要依赖于jquery

###初始化:

```js

   var $progressBar = $(this.refs.progress).progressBar({duration : file.size});

```
### 根据文件大小 计算加速度和走完的时间  从而模拟异步进度条。

## 开放接口

| **序号** | **API** | **功能** |
|-------|-------|----------|
| 1 | complete  | 结束进度条调用此方法 |
| 2 | stop | 暂停进度条 |
| 3 | contining | 继续 |
| 4 | reset | 重置进度条 |

## 实例地址

基于react jquery写的一个实例:[点击此处](http://103.213.250.62:84)