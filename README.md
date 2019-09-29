# table-tr-href
Simple library with no dependencies that wrap `<td>` cell content in a `<a>` tag for an entire `<tr>` row

[![Build Status](https://travis-ci.com/mp3000mp/table-tr-href.svg?branch=master)](https://travis-ci.com/mp3000mp/table-tr-href)
[![Coverage Status](https://coveralls.io/repos/github/mp3000mp/table-tr-href/badge.svg?branch=master)](https://coveralls.io/github/mp3000mp/table-tr-href?branch=master)
[![npm version](https://badge.fury.io/js/table-tr-href.svg)](https://badge.fury.io/js/table-tr-href)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
 
Table of Contents
-----------------

 - [Demo](#demo)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Examples](#examples)
 - [Style](#style)


Demo
----

[Try it on JSFiddle](https://jsfiddle.net/7s4juwfp/)


Installation
------------

```sh
npm install --save table-tr-href
```


Usage
-----

```js
// This will create window.TableTrHref
const TableTrHref = require('table-tr-href')
```


Examples
--------

You can force rendering a DOMElement:
```js
// on document ready
document.addEventListener('DOMContentLoaded', function(){
    // This will look for tr[data-href] in document
    TableTrHref.init();
    // This will look for tr[data-href] in #my-table
    TableTrHref.init(document.getElementById('my-table'));
});
```

The example above will transform this html:

```html
<table id="my-table">
    <tr>
        <th>Column A</th>
        <th>Column B</th>
    </tr>
    <tr data-href="/link1">
        <td>The entire row</td>
        <td>is a link</td>
    </tr>
    <tr data-href="/link2" data-target="_blank">
        <td>The entire row</td>
        <td>is a target _blank link</td>
    </tr>
</table>
```

Into:

```html
<table>
<tr>
    <th>Column A</th>
    <th>Column B</th>
</tr>
<tr class="tth">
    <td><a href="/link1">The entire row</a></td>
    <td><a href="/link1">is a link</a></td>
</tr>
<tr class="tth">
    <td><a href="/link2" target="_blank">The entire row</a></td>
    <td><a href="/link2" target="_blank">is a target _blank link</a></td>
</tr>
</table>
```


Style
-----

By default, `<a>` wrappers are:

```css
tr.tth > td > a{
    display: block;
}
```

You can easily customize the hover color:

```css
tr.tth:hover{
    background-color: #4d97ff;
}
```

Cancel default `<a>` style:

```css
tr.tth > td > a{
    color: black;
    text-decoration: none;
}
```

If your `<td>` tags have padding (let's take 0.75rem for this exammple), you can apply it to the `<a>` tags instead:

```css
tr.tth > td{
    padding: 0;
}
tr.tth > td > a{
    padding: 0.75rem;
}
```
