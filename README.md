## Move To Container
[live demo](https://move-to-container.hejian.club/)

指定一个容器，将内容包裹在容器中，并且在容器范围内可拖拽

## 安装
```shell
npm install move-to-container

app.component('MoveToContainer', moveToContainer)
```

## 参数
```shell
  props: {
    to: {
      type: String,
      default: 'body',
    },
    finish: {
      type: Function,
      default: (e: DragEvent | MouseEvent) => { },
    },
  }

```

## 使用

![usage](/assets/template.jpg)

## 依赖

`vue`
