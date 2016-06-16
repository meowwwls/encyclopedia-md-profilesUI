# &lt;frameset&gt;

*The `<frameset>` element is used to contain a collection of `<frame>`s to be displayed together.*

**IMPORTANT:** The `<frameset>` and `<frame>` elements are obsolete. They are deprecated elements and it is no longer advisable to use them in new web pages, or to continue to use them in existing projects. While most browsers will still display `<frameset>` and `<frame>`s when using the proper `DOCTYPE`, current browsers are in the process of dropping support, so web pages using these elements may stop working at any time.

## Syntax 

```html
<frameset rows[or cols]="val1, val2">
  <frame src="source1.html">
  <frame src="source2.html">
  ...
</frameset>
```

## Description

A `<frameset>` element serves as a container for `<frame>`s. Each `frameset` groups a collection of `frame`s together. The `frameset`s can display/stack enclosed `frame` elements vertically as rows, or horizontally as columns. A `frameset` can contain not only `frame`s, but other `frameset`s, allowing for more complex layouts of `frame` elements.

It is important to note that a `frameset` takes the place of `body` content in an HTML document. Whereas normally you would have something like this:

```html
<html>
<body>
	page content
</body>
</html>
```

when using `frameset`, your page would instead look like this:

```html
<html>
<frameset [attrs]>
    <frame>
    ...
</frameset>
</html>
```

The source of a `frame` inside of a `frameset` can be another HTML document, or even another website altogether. When layouts were harder to create with CSS, using `frameset`s and `frame`s was a popular way of laying out web pages.

By default, links clicked inside of a `frame` within a `frameset` will load inside of the frame in which it was clicked. To override that behavior, you can use the `target` attribute on anchor tags. 

## Attributes

`cols` - The `cols` attribute specifies the horizontal space each respective frame takes up

`rows` - The `rows` attribute specifies the vertical space each respective frame takes up

The order in which the values are specified will be applied to the frames in that order. (*The first value specified will be applied to the first frame, the second value to the second frame, and so on.*)

The `cols` and `rows` attributes can accept the following as values:

- numbers: `cols="1, 3"` will give you one column taking up 25% of the width of the frameset, and one column taking up 75% of the width of the frameset
- percentages: `rows="40%, 50%, 10%"` will give you a top row that is 40% the height of the frameset, a middle row that is 50% the height of the frameset, and a bottom row that is 10% the height of the frameset.
- fixed units: `cols="200px, 400px, 100px"` will make the first column 200px wide, the second column 400px wide, and the third column 100px wide. If there is space leftover that is not accounted for in the fixed widths, that space will be distributed proportionately to each frame.
- remainder: using an asterisk (`*`) will allow a frame to take up the rest of the available space. `rows="100px, *, 200px"` will give you a top frame that is 100px tall, a bottom frame that is 200px tall, and a middle frame that will take up the rest of the available vertical space. 

You can mix any of the above when assigning values to the `cols` and `rows` attributes.

## Usage

### Declaring a Doctype

When using `<frameset>`, you **must** use one of the following two `DOCTYPE` declarations at the very top of your HTML document. `frameset` is *not* supported in HTML5 and will not work in any browser using `<!DOCTYPE html>`.

#### HTML frameset:

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

#### XHTML frameset:

`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">`

### Two Column Layout

Here the column on the right will take up **66%** of the width of the `frameset`, while the column on the left will take up the rest of the available space:

<pre>  
 ---------------------
|       |             | 
|       |             |
|       |             |
| frame1|   frame2    |
|       |             |
|       |             |
|       |             |
 ---------------------
</pre>


```html
<frameset cols="*, 66%">
  <frame src="frame1.html">
  <frame src="frame2.html">
</frameset>
```

### Nested Framesets

The following will have a `frameset` made up of two rows. The first row will be 300px tall, and the second row will take up the rest of the available vertical space.

The first row will be comprised of another `frameset`. That frameset will have two columns, each **50%** wide:

<pre>
 ----------------------
|          |           | 
|  frame1  |  frame2   |
|          |           |
|----------------------|
|        frame3        |
|                      |
|                      |
 ----------------------
</pre>


```html
<frameset rows="300px, *">
  <frameset cols="50%, 50%">
    <frame src="frame1.html">
    <frame src="frame2.html">
  </frameset>
  <frame src="frame3.html">
</frameset>
```

## Browser Support

Currently, most major browsers still support `<frameset>` with the proper `DOCTYPE` declaration, but browsers are in the process of dropping support. Instead of using `<frameset>` and `<frame>`s, you should use `<iframe>`s.
