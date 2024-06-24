# Pentagon Image Mask Project

Этот проект демонстрирует использование SVG-масок для создания элемента в форме пентагона с внутренней картинкой. В проекте также реализована адаптивная верстка и возможность перемешивания элементов с использованием JavaScript.

## Содержание

1. [Описание](#описание)
2. [Установка](#установка)
3. [Использование](#использование)
4. [Структура проекта](#структура-проекта)
5. [Зависимости](#зависимости)

## Описание

Проект включает два основных варианта:
1. Верстка с использованием CSS и HTML для адаптивного отображения элементов.
2. Верстка с использованием Bootstrap 5 для более удобного и гибкого управления элементами.

Каждый вариант включает 8 дублей элемента в форме пентагона с внутренней картинкой. Реализована адаптивная верстка для различных разрешений экрана и кнопка для случайного перемешивания элементов.

## Установка

1. Склонируйте репозиторий:
   ```sh git clone https://github.com/safron64/test-assignment.git```

2. Перейдите в директорию проекта:
    ```cd pentagon-image-mask```

## Использование
1. Откройте файл index.html в браузере для просмотра варианта с использованием чистого CSS.
2. Откройте файл bootstrap.html в браузере для просмотра варианта с использованием Bootstrap 5.
3. Нажмите на кнопку "Перетасовать" для случайного перемешивания элементов.

## Структура проекта 

```pentagon-image-mask/
│
├── images/            # Папка с изображениями
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   ├── 5.jpg
│   ├── 6.jpg
│   ├── 7.jpg
│   └── 8.jpg
│
├── index.html                  # Вариант с использованием чистого CSS
├── bootstrap.html              # Вариант с использованием Bootstrap 5
├── styles.css                  # Стили для обоих вариантов
├── script.js                   # Скрипт для перемешивания элементов
├── bitrix-template.php         # Пример шаблона вывода элементов в компоненте 1C Битрикс
└── README.md                   # Описание проекта
```

## Зависимости 

Зависимости
Для работы проекта с Bootstrap необходимо подключение следующих внешних ресурсов:

1. Bootstrap 5
2. jQuery
3. Bootstrap JS Bundle

Эти зависимости уже подключены в файле bootstrap.html.



