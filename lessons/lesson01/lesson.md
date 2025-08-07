---
title: "Урок 1: Введение в курс JavaScript Professional"
description: "Знакомство с программой, командой и инфраструктурой. Повторение основ JavaScript"
---

# Введение в курс JavaScript Professional

<!-- v -->

## Как меня слышно и видно?

> Напишите в чат

- **+** если все хорошо
- **–** если есть проблемы со звуком или с видео

<!-- v -->

## Цели занятия

- Познакомиться с преподавателем и с программой курса
- Вспомнить основы JavaScript
- Понимать как построена программа курса
- Применять основные техники языка JavaScript для изучения фреймворков

<!-- v -->

## Краткое содержание

- Организационные вопросы по курсу
- Типы данных в JavaScript
- Принципы работы с JS кодом
- Современные возможности языка

<!-- v -->

## Результат занятия

Простейший скрипт на JavaScript с базовыми типами данных

<!-- v -->

## Компетенции по занятию

**Работа с современным стандартом языка программирования JavaScript**

- Понимание типов данных и их приведения
- Работа с переменными и областями видимости
- Использование функций и контекста исполнения
- Применение замыканий в практических задачах

<!-- s -->

## Расскажите о себе 😀

**Можно в telegram чат**

- Кто Вы?
- Какой Ваш опыт в программировании?
- Какие JavaScript фреймворки Вы используете?
- Какие JavaScript библиотеки Вы используете?
- Что Вы ждете от курса?

<!-- s -->

## Цели курса JavaScript Professional

- Понимать для чего нужны веб фреймворки
- Уметь применять паттерны проектирования (Virtual DOM, Dependency Injection, Observables, Event Loop)
- Знать подходы при проектировании, организации, контроля состояния и тестирования приложений
- Выбирать подходящие инструменты для проекта
- Создавать веб-приложения с использованием современных технологий

<!-- s -->

## Программа курса

https://otus.ru/lessons/javascript-professional/program/

<!-- s -->

## Организационные вопросы

- Вебинары: понедельник и четверг
- Материалы, теория и практика
- Домашние задания
- Выпускной проект
- Общение в Telegram

<!-- s -->

## Несколько вопросов и трюков 🤔

1. `setTimeout` и `setInterval` - часть JavaScript?
2. Как вернуть объект в данной arrow функции?
   ```javascript
   let f = () => {};
   f(); // -> undefined
   ```
3. Как удалить все элементы из массива `let a = [1, 2, 3, 4]`?
4. Как найти максимальный элемент в массиве?

<!-- s -->

## Темы для повторения

- **Типы данных**: Примитивные и сложные
- **Приведение типов**
- **Переменные**: var, let, const, destructuring
- **Функции**: FE, FD, FC, IIFE, call, apply, bind
- **Контекст исполнения**
- **Замыкания**

<!-- s -->

## Типы данных в JavaScript

**JavaScript - динамически типизированный интерпретируемый язык**

### Примитивные типы:

- `number` - числа
- `string` - строки
- `boolean` - логический тип
- `null` - пустое значение
- `undefined` - неопределенное значение
- `Symbol` - уникальные идентификаторы
- `BigInt` - большие целые числа

<!-- s -->

## Примеры с типами данных

```javascript
const n = 4;
n.a = 5;
n.a; // ?

parseInt("f*"); // -> ?
parseInt("0x11", 16); // -> ?

// number
1, 2, 3.5, 0x8, 0b11;

// string
"1", "2", `template ${variable}`;

// А так можно было?
"b" + "a" + +"a"; // ?
```

<!-- s -->

## Сложные типы данных

**Все другие типы данных в JavaScript - объекты**

```javascript
typeof null === // ?
typeof {} === // ?
typeof function() {} === // ?
typeof typeof null === // ?
```

<!-- s -->

## Приведение типов

**Может ли это выражение быть истинным?**

```javascript
a == 1 && a == 2 && (a == 3) === true; // ?
```

### Решение:

```javascript
const a = (function () {
  let i = 1;
  return {
    valueOf: function () {
      return i++;
    },
  };
})();
```

`valueOf()` и `toString()` - методы приведения типов

<!-- s -->

## Переменные: var, let, const

```javascript
// var - функциональная область видимости
if (true) {
  var b = 1;
}
console.log(b); // 1

// let, const - блочная область видимости
if (!false) {
  const c = 2;
}
// console.log(c) // ReferenceError: c is not defined
```

<!-- s -->

## Hoisting (всплытие)

```javascript
console.log(b); // undefined
// console.log(c) // ReferenceError: c is not defined

var b = 1;
const c = 2;

// var обрабатывается до исполнения кода
```

### Пример с функцией:

```javascript
var x = "global";
function f() {
  var x = "local";
  console.log(x); // ?
}
f();
console.log(x); // ?
```

<!-- s -->

## Destructuring

**Определение и присвоение переменных из объектов**

```javascript
// Shorthand notation
const name = "John";
const obj = { name }; // { name: "John" }

// Destructuring с default values
function h({ name, val = "default" }) {
  console.log(name, val);
}

const { operator: a, object: { operator: b, c = 1 } = {} } = someObject;
```

<!-- s -->

## Функции

```javascript
// Function Declaration
function a1() {}

// Function Expression
const a3 = function () {};

// Arrow Function
const a4 = () => {};

// Function Constructor
const a2 = new Function("a, b", "return a + b");
```

**Различия arrow функций:**

- Контекст исполнения `this`
- Отсутствие `arguments`
- Нельзя использовать как конструктор

<!-- s -->

## Контекст исполнения (this)

```javascript
const obj = {
  a: function () {
    console.log(this.prop);
  },
  prop: 1,
};

obj.a.prop = 2;
obj.a(); // ?

const fn = obj.a;
fn(); // ?
```

<!-- s -->

## Замыкания

**Концепция языка, позволяющая получать доступ к переменным функции**

```javascript
const counter = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

counter(); // 1
counter(); // 2
```

**Частая задача на интервью:**

```javascript
sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
```

<!-- s -->

## Классическая задача с замыканиями

**Что будет в консоли? Как это исправить?**

```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

### Решения:

1. Использовать `let` вместо `var`
2. Использовать `bind`
3. Использовать IIFE

<!-- s -->

## Решения задачи с замыканиями

```javascript
// 1. let
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 2. bind
for (var i = 0; i < 10; i++) {
  setTimeout(
    function (i) {
      console.log(i);
    }.bind(null, i),
    1000
  );
}

// 3. IIFE
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}
```

<!-- s -->

## Задание с bind

**Какой контекст будет у функции, если к ней применить bind() дважды?**

```javascript
var fn = function () {
  console.log(this);
};

var a = fn.bind(1);
a(); // ?

var b = a.bind(2);
b(); // ?
```

**Почему?** `bind` создает новую функцию и контекст нельзя изменить повторно

<!-- s -->

## Best Practices

- Правильное именование переменных
- Декларация переменных до их использования
- Использование `"use strict"`
- Не публиковать локальные переменные
- Приоритет: `const` → `let` → `var`

<!-- s -->

## Q&A

**Вопросы?**

Переходим к практическим заданиям и написанию простейшего скрипта на JavaScript!
