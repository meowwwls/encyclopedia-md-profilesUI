# :nth-last-child()

*`:nth-last-child` is a psuedo-class selector which allows you to apply a ruleset to children of a containing element depending on their source order, starting from the bottom working upwards.*

  

## Syntax

`element:nth-last-child( integer | even or odd | an+b ) { style declarations }`

## Values

The `:nth-last-child()` selector can accept three types of values as arguments:

- an integer – this will select the **one element** with an index matching the integer. For example, `li:nth-last-child(2)` will select the *second to last* `li` element (*the second from the bottom in the source order*)
- one of two pre-defined keywords (***odd*** or ***even***) — `li:nth-last-child(even)` will select all `li` elements at an *even* index (*2, 4, 6, 8, etc.*) starting from the bottom of the source order (*the last element)*, while `li:nth-last-child(odd)` will select all `li` elements at an *odd* index (*1, 3, 5, 7, etc.*) starting from the last element. 
- a variation of the equation `an+b`
	- `a` represents an integer; it represents how many elements will be in a group
	- `n` is the literal `n` character, representing an element
	- `+` is an operator (*which can also be `-`*) to be applied to the right operand (`b`)
	- `b` is an integer; it represents what element of a group the ruleset will apply to. It *must* be included if a `+` or `-` operator is being used

	The way the formula works is that the parent element's children are divided into groups of `a` elements. The number of children is divided by `a`. The result (if evenly divisible) is the number of groups of `a` elements you will have. If the number of children divided by `a` elements has a remainder, there will be one final group containing `r` (remainder) elements. Then, the `b`th element in each group will have the ruleset applied to it.
	
	**For example:**
	
	Given the following selector:
	
	`li:nth-last-child(3n+2)`
	
	in a group of **10 `li`** elements:
	
	![](https://i.imgur.com/QWX9ZHy.png)
	
	- we will divide **10** (our number of elements) by **3** (`a`, the amount of elements in a group) to find the number of groups. If our element count is not evenly divisible by `a`,  the remainder will be in a group of its own.
	- 10 / 3 = 3 (3 groups of `a` elements) + 1 (our remainder). This means we will have 4 groups; 3 groups of `a` (3) elements and 1 group with 1 element.
	- `3` will be how many elements are in a group, starting from the bottom of the source order. Our first group will start from the bottom, with the remainder being the leftover elements at the top of the source order.
	- the *b*th (2nd) element in each group will have the ruleset applied to it.
	- if there is no *b*th (2nd) element in the last group, that group will not be affected by the ruleset.

	```html
	<ul>
	  <li>item 01</li>
	  <li>item 02</li>
	  <li>item 03</li>
	  <li>item 04</li>
	  <li>item 05</li>
	  <li>item 06</li>
	  <li>item 07</li>
	  <li>item 08</li>
	  <li>item 09</li>
	  <li>item 10</li>
	</ul>
	```
 
	```css
	li:nth-last-child(3n+2) {
	  background: #1DBEA4; /* a shade of teal */
	}
	``` 
	
	**Result:**
	
	![](https://i.imgur.com/wBhtlKJ.png)
	
## Usage

### Selecting All Odd List Items

```css
li:nth-last-child(2n+1) {
  background: salmon;
}
```

```css
li:nth-last-child(odd) {
  background: salmon;
}
```

### Selecting All Even List Items

```css
li:nth-last-child(2n) {
  background: tomato;
}
```

```css
li:nth-last-child(even) {
  background: tomato;
}
```

### Selecting Every 3rd `span` Element in Every Group of 4 `span`s

```css 
span:nth-last-child(4n+3) {
	font-style: italic;
}
```

### Selecting the Last 4 Rows of a Table

```css
tr:nth-last-child(-n+4) {
  background: yellow;
}
```

### Select All List Items *Except* for the Last

(*This can also be done with the `:not` selector, which is more explicit*)

```css
li:nth-last-child(n+2) {
  margin-right: 5px;
}
```

## Special Notes

The `:nth-last-child()` selector works the same as the `:nth-child()` selector, **except** it starts at the bottom of the source order. `:nth-child` starts at the *top* of the source order.

## Browser Support

All modern browsers support the `:nth-last-child` selector. 

| Chrome | Firefox | IE | Edge | Safari | Opera | Android | iOS |  
| :------: | :-----: | :-----: |:-----: |:-----: |:-----: |:-----: |:-----: |
| yes | yes | 9+ | yes | 3.2+ | 9.5+ | yes | yes |
