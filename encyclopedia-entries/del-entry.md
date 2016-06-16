# &lt;del&gt; element

The `del` element represents a removal of text from a document.

The purpose of the `del` element is to indicate a change has been made to content. Therefore, the element has semantic meaning and should not be used for styling purposes. The `del` element demarcates edited parts from the rest of the text. 

The `del` element can be used on inline or block-level elements but cannot do both at the same time. For example, nesting a block-level element inside the `del` element with inline context is not allowed.

When used, the element is rendered with strike-through text, but the text-decoration is not necessary. CSS styling can be applied.

## Usage

**Use the `del` element for inline text content or a block of content.** 

Inline `del` element  

	<p>
	  <del>Home, home</del> on the range.
	</p>

Block-level `del` element  

	<del>
	  <p>Where the deer and the antelope play.</p>
	  <p>Did you enjoy this song? Tell us!</p>
	  <p>Thanks for listening!</p>
	</del>

`del` element attributes: `cite` and `datetime` 

	<p>
	  <del cite="http://www.example.com" datetime="2016-06-11T12:01:05+02:09">Home, home div</del> 
	  on the range.
	</p>

## Attributes

The `del` element has two attributes: [cite](https://www.w3.org/TR/html5/edits.html#attr-mod-cite) and [datetime](https://www.w3.org/TR/html5/infrastructure.html#valid-date-string-with-optional-time).

*cite*  
The cite attribute, which contains a URI as its value, is used to direct users to a document that explains the reasons for the edit.

*datetime*  
This attribute contains the time and date of the change. To be an associated time stamp, it must be a valid date string that can be parsed. The time string is optional.

## Special Notes

* Avoid using a `del` element that crosses implied paragraph boundaries, even though `del` elements can span both explicitly wrapped `p` elements and implied ones. Paragraphs are implied when text is not wrapped inside a `p` tag. 

		 <del>
		  <p>
		   Delete the first sentence in this paragraph.
		  </p>
		   This isn't wrapped in a `p` tag, but it will still be deleted.
		 </del>
		   This paragraph will not be deleted because it is not inside the del element.

* It is not possible to use the `del` element to span two separate paragraph elements.

		<p>
		   Home, home on the range. <del>Delete only this part of the song.
		 </p>
		 <p>
		  Where the deer and the antelope play will not be deleted.</del> 
		  This will not work. Do not do this.
		 </p>

Both examples are bad practice and may cause confusion. Follow the recommended standard of marking up all paragraphs with the `p` element.

* The sister element of `del` is `ins`, which indicates the insertion of content into a document.

## Browser Support

The `del` element is supported on all browsers. 

## Interactive

[Interact with &lt;del>](del-index.html)

