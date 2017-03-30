# leaftlet-windbarb

使用最新的leaftlet@1.0.3版本API，绘制气象风矢图：

## Demo
[传送门](https://hulongping.github.io/windbarb/wind.html)

## 使用方法
var icon = L.WindBarb.icon({deg: 180, speed:16,pointRadius:0,strokeColor:'#ce3431'});
var marker = L.marker(31,121], {icon: icon}).addTo(map).on('click', markerOnClick);

## 可以自定义的参数
```javascript
 options: {
            pointRadius: 4, 
            pointColor:'#2B85C7',
            pointStroke:'#111',
            strokeWidth: 2,
            strokeColor:'#000',
            strokeLength: 12,
            barbSpaceing: 4,
            barbHeight: 10,
            forceDir: false
        }
  ```
        
   ## 预览效果图
   ![image](https://raw.githubusercontent.com/hulongping/windbarb/master/images/preview.png)
   
   