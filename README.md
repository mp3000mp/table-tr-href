# table-tr-href
Simple library that wrap `<td>` cell content in a `<a>` tag for an entire `<tr>` row


Demo
----

[Try it online](https://mp3000mp.github.io/table-tr-href/demo1)

[Try it on jsfiddle](https://jsfiddle.net/)


Installation
------------

```sh
npm install --save table-tr-href
```


Usage
-----

```js
// This will look for tr[data-href] on document ready
const TableTrHref = require('table-tr-href')
```


Examples
--------

You can force rendering a DOMElement:
```js
// This will look for tr[data-href] in #py-popup element
TableTrHref.init(document.getElementById('my-table'))
```

The example above will transform this html:

```html
<table id="my-table">
<tr>
    <th>Column A</th>
    <th>Column B</th>
</tr>
<tr data-href="/link1">
    <td>Value A1</td>
    <td>Value B1</td>
</tr>
<tr data-href="/link2" data-target="_blank">
    <td>Value A2</td>
    <td>Value B2</td>
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
    <td><a href="/link1">Value A1</a></td>
    <td><a href="/link1">Value B1</a></td>
</tr>
<tr class="tth">
    <td><a href="/link2" target="_blank">Value A2</a></td>
    <td><a href="/link2" target="_blank">Value B2</a></td>
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
