# The `background-attachment` Property

The `background-attachment` property specifies whether a background-image is fixed with regard to the viewport or scrolls along with the containing block. The initial value is scroll.

## Syntax

background-attachment: value;

## Values

*fixed*  
The value of `fixed` prevents the background from scrolling with the containing block. Instead, the background is fixed in relation to the viewport. Fixed background-images do not move along with elements that have a scrolling mechanism.

*scroll*  
The value of `scroll` allows the background to scroll along with the document while it is fixed with regard to the element itself. Therefore, inside a containing element, the background does not scroll along with the element’s content; it moves with the document’s scrolling mechanism. `scroll` is the default value.

*local*  
The value of `local` allows the background to scroll along with both the document and its containing element’s content. The background is fixed in relation to the element’s content. In other words, the background moves with the element’s scrolling mechanism.

*inherit*  
The value of `inherit` for the background-attachment property takes on the same value that is applied on the parent element.

## Usage

### Background with `scroll` value. 
`scroll` is the default value and specifying it is optional. The background will not move and it is fixed to the element, even if the element has a scrolling mechanism. Once the document itself moves, the background inside the containing element will move along with it.

	div {
	  background: url(“images/stars.jpg”);
	  background-attachment: scroll;
	  color: #000;
	  padding: 1em;
	}

### Background with `fixed` value. 
The background is fixed to the viewport and will not move along with content.

	div {
	  background: url(“images/stars.jpg”);
	  background-attachment: fixed;
	  color: #000;
	  padding: 1em;
	}

### Background with `local` value. 
The background is fixed to the element’s content. It will move along with the content and the document.

	div {
	  background: url(“images/stars.jpg”);
	  background-attachment: local;
	  color: #000;
	  padding: 1em;
	}

## Browser Support

The property and its values is compatible across all desktop browsers. There is partial to no support on mobile depending on the browser used.
