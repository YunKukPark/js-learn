# js-learn

> Who are you? Javascript

동적인 WebSite 를 만들기 위해 Scripting 언어를 추가

하지만, 너무 많은 Browser ⇒ 표준화 X

2008년 Chrome 이 나오면서, **ECMAScript 표준안(ES5+)** 개정

> To-be

SPA ⇒ Single Page Application

FrontEnd : 쉽게 구현하기 위해 React, Angular, Vue 등 Framework 가 등장

BackEnd : node.js , react native ⇒ Mobile, electron ⇒ PC application

> Learn Javascript

### 공식사이트

[MDN Web Docs](https://developer.mozilla.org/ko/)

[Home - Ecma International](https://www.ecma-international.org/)

### Leran JavaScript

[기초 (Hello world ~ if , for)](https://www.notion.so/Hello-world-if-for-74222b22e3c54d9a9a8e0b68012564d7)

## TIL

# 21. 5 월 3주차

# 5월 17일

### 1. 모르는 점 :

Javascript ES6 문법
arrow function

Javascript ES6 문법 에 대해 공부가 더 필요하다고 느낀다.

특히 Javascript 의 object, array, class 에 대한 개념이 부족하다.

### 2. 배운 점 :

AirPod Pro 웹 사이트를 Clone 코딩을 하면서, offsetY 에 대한 control 방법에 대해서 배웠다.

아직까지는 layout setting 까지만 진행 하였다.

```jsx
(() => {
  const sceneInfo = [
    // 각 scene 에 대한 정보를 배열로 담는다.
    {
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
      },
    },
    // ......  총 4개 Scene 을 선언 하였으니 4개 선언
  ];

  function setLayout() {
    // 각 스크롤 섹션의 높이 셋팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }

  window.addEventListener('resize', setLayout);
  // window 가 resize 되었을 때 setLayout 함수 실행
  // 평소에는 대기중
  // 근데 여기서는 왜 **setLayout()** 을 쓰지 않는가?

  setLayout(); // Layout function 실행
})();
```

### 3. 개선할 점 :

ES6 문법에 대한 공부 필요!!

# 5월 19일

### 1. 모르는 점 :

Javascript 에서 **"this"** 는 진짜 모르겠다..

왜 this 를 쓸까..

그리고 this 는 왜 계속해서 바뀔까..

getter setter 에서의 this 는 왜 쓸까??

**⇒ this 에 대해 정리를 잘 해놓은 기술블로그**

[this??](https://kkan0615.github.io/youngjin.github.io/javascript_this/)

### 2. 배운 점 :

어제부터 Javascript 의 기초 강의 (ES6 +) 에 대한 것을 공부하고 있다..

if, for loop 까지는 별 문제 없었는데,

Arrow Function 부터 막히기 시작한다..

그리고 그다음 getter setter 에서부터 사용되는 this 를 진!짜! 모르겠다.

### 3. 개선할 점 :

javascript 코드가 읽히는 과정에 대해서 조금 더 생각하면서 코드 짜기!

![img](./handNote/JavaScript-2.jpg)
![img](./handNote/JavaScript-3.jpg)

# 5월 20일

### 1. 모르는 점 :

함수에 함수를 부르고 뭔가를 계속 연속적으로 호출하는 것을 잘 못하겠다.

> 예를 들어, `const deleteUser = (user) => users = users.filter(aUser => aUser !== user)` 이런..

### 2. 배운 점 :

this 에 대한 감이 아주 조금 잡혔다.

Array Interface 를 공부하고 있다.  
다른 function 이나 this 등등 모르는게 있으면 **⌘ + Click** 을 하면 문서를 볼 수 있더라

코드를 치는 것도 좋지만 이론 공부 할 때는 손코딩이 더 좋은 것 같다.

### 3. 개선할 점 :

공부하다가 모를 때에는 googling 전에 공식 문서 확인 할 것

![img](handNote/JavaScript-4.jpg)

# 0. 왜 객체를 써야할까요?

## 객체란 무엇일까요?

객체는 자바스크립트 데이터 타입 중의 하나입니다. 영어로는 object라고 표현합니다.

key값과 value값을 쌍으로 이루어져 있고, 배열과는 다르게 순서가 중요하지 않습니다.

![https://storage.googleapis.com/replit/images/1600762009152_d417d12b27cd55f594246c10c142de37.png](https://storage.googleapis.com/replit/images/1600762009152_d417d12b27cd55f594246c10c142de37.png)

예를 들어 다음과 같은 배열이 있다고 생각해봅시다.

```js
let person1 = ['곽철용', 'AB형', 'ENFP', '바닐라라떼'];
```

위의 배열에는 특정 사람의 이름과 혈액형, MBTI, 좋아하는 커피에 대한 정보가 담겨있습니다.

우리가 원하는 정보를 얻기 위해서는 해당 배열에 있는 Index number를 기억해야 합니다.

또 다른 사람이 있다고 생각해봅시다.

```js
let person2 = ['아이스아메리카노', 'INTP', '홍혁팔', 'O형'];
```

person2는 person1의 정보와 다른 순서로 값이 뒤섞여 있습니다.

사람이 두 명일 때는 괜찮지만, 100명이라면 어떻게 될까요? 자료를 처리하기 힘들어지겠죠?

그래서 나온 개념이 바로 객체입니다.

## 객체만들기

객체를 생성할 때는 {} 안에 key와 value를 쌍으로 묶어서 만들어 줍니다.

key값이 여러개일 때는 쉼표(,)로 구분해줍니다.

객체를 만드는 방법은 여러가지인데 그 중에 아래와 같이 중괄호를 이용해 만드는 방식을 Object Literal이라고 합니다.

```js
let person1 = {
  name: '곽철용',
  bloodType: 'AB형',
  mbti: 'ENFP',
  favoriteCoffee: '바닐라라떼',
};
```

객체로 표현하면 순서가 없기 때문에 index number를 기억하지 않아도 됩니다.

우리가 원하는 정보의 key값만 알면 정보에 접근할 수 있습니다.
