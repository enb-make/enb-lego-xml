enb-lego-xml [![Build Status](https://travis-ci.org/enb-make/enb-lego-xml.png?branch=master)](https://travis-ci.org/enb-make/enb-lego-xml) [![NPM version](https://badge.fury.io/js/enb-lego-xml.png)](http://badge.fury.io/js/enb-lego-xml)
===========

Поддержка Lego XML для ENB. Пакет содержит технологии:
 * `enb-lego-xml/techs/xsl`
 * `enb-lego-xml/techs/xsl-2lego`
 * `enb-lego-xml/techs/xsl-convert2xml`
 * `enb-lego-xml/techs/xsl-html5`
 * `enb-lego-xml/techs/xsl-html5-i18n`
 * `enb-lego-xml/techs/xslt`

Установка:
----------

```
npm install enb-lego-xml
```

xsl
===

Собирает `?.xsl` по deps'ам.

**Опции**

* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
  (его предоставляет технология `files`). По умолчанию — `?.files`.
* *String* **target** — Результирующий таргет. По умолчанию — `?.xsl`.
* *String* **prependXsl** — Xsl для вставки в начало документа. По умолчанию пусто.
* *String* **appendXsl** — Xsl для вставки в конец документа. По умолчанию пусто.

**Пример**

```javascript
nodeConfig.addTech(require('enb-lego-xml/techs/xsl'));
```

xsl-2lego
=========

Собирает `?.2lego.xsl` по deps'ам.

**Опции**

* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
  (его предоставляет технология `files`). По умолчанию — `?.files`.
* *String* **target** — Результирующий таргет. По умолчанию — `?.2lego.xsl`.
* *String* **prependXsl** — Xsl для вставки в начало документа. По умолчанию пусто.
* *String* **appendXsl** — Xsl для вставки в конец документа. По умолчанию пусто.

**Пример**

```javascript
nodeConfig.addTech(require('enb-lego-xml/techs/2lego.xsl'));
```

xsl-convert2xml
===============

Собирает `?.convert2xml.xsl` по deps'ам.

**Опции**

* *String* **transformXslFile** — Путь к convert2xml.xsl из lego/tools.
* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
  (его предоставляет технология `files`). По умолчанию — `?.files`.
* *String* **target** — Результирующий таргет. По умолчанию — `?.convert2xml.xsl`.
* *String* **prependXsl** — Xsl для вставки в начало документа. По умолчанию пусто.
* *String* **appendXsl** — Xsl для вставки в конец документа. По умолчанию пусто.

**Пример**

```javascript
nodeConfig.addTech([ require('enb-lego-xml/techs/xsl-convert2xml'), {
  transformXslFile: config.resolvePath('blocks/lego/tools/convert2xml.xsl')
} ]);
```

xsl-html5
=========

Собирает `?.xsl` по deps'ам для HTML5-страницы.

Имя результирующего файла в данный момент не настраивается (нет запросов на эту функцию).

**Опции**

* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
  (его предоставляет технология `files`). По умолчанию — `?.files`.
* *String* **target** — Результирующий таргет. По умолчанию — `?.xsl`.
* *String* **prependXsl** — Xsl для вставки в начало документа. По умолчанию пусто.
* *String* **appendXsl** — Xsl для вставки в конец документа. По умолчанию пусто.

**Пример**

```javascript
nodeConfig.addTech(require('enb-lego-xml/techs/xsl-html5'));
```

xsl-html5-i18n
==============

Собирает `?.<язык>.xsl`-файл по deps'ам, добавляя `?.lang.<язык>.xsl`-файл.

**Опции**

* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
  (его предоставляет технология `files`). По умолчанию — `?.files`.
* *String* **target** — Результирующий таргет. По умолчанию — `?.{lang}.xsl`.
* *String* **prependXsl** — Xsl для вставки в начало документа. По умолчанию пусто.
* *String* **appendXsl** — Xsl для вставки в конец документа. По умолчанию пусто.


**Пример**

```javascript
nodeConfig.addTech([ require('enb-lego-xml/techs/xsl-html5-18n'), { lang: '{lang}' } ]);
```

xslt
====

Выполняет XSLT-преобразование.

**Опции**

* *String* **sourceTarget** — Исходный таргет. Обязательная опция.
* *String* **destTarget** — Результирующий таргет. Обязательная опция.
* *String* **xslSource** — XSL-Таргет, с помощью которого производится трансформация.
* *String* **xslFile** — XSL-Файл, с помощью которого производится трансформация
  (используется, если XSL-файл не является таргетом).
* *String[]* **args** — Аргументы для xsltproc. По умолчанию — `[]`.

**Пример**

```javascript
nodeConfig.addTech([ require('enb-lego-xml/techs/xslt'))({
    sourceTarget: '?.keysets.{lang}.xml',
    destTarget: '?.lang.{lang}.xsl',
    xslFile: config.resolvePath('blocks/lego/tools/tanker/tools/generate/i18n.xsl.xsl'),
    args: ['--xinclude']
}]);
```
