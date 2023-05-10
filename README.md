## 웹디자인기능사 시험 연습

### 가로 슬라이드
#### display:flex로 이미지 가로 정렬
```
.slide {
    height: 300px;
    position: relative;
    overflow: hidden;
}

ul.slider {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
}

.slider img {
    display: block;
}

```
#### top 대신 left로 animate실행
```
//슬라이드
setInterval(function(){
    $('.slider').animate({left:-1200}, 'slow', function(){
        $('.slider li:first').appendTo($('.slider'))
        $('.slider').css('left', 0)
    })
},3000)
```