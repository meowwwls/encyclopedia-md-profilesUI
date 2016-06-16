# Math.PI

Math.PI is a static property that represents the ratio of the circumference to the diameter of a circle. PI is approximately 3.14159265…

It is a Number value for π.

## Syntax

Math.PI

### Properties

**Math.PI property attributes**

 Property     | Value
 ------------ | ---
 Writable     | false
 Enumerable   | false
 Configurable | false


## Usage

**To find the value of Math.PI, π:**

	Math.PI // 3.141592653589793

**To find the circumference of a circle with a diameter of d:**

	function findCircumference (d) {
	  return diameter * Math.PI;
	} 
	
	findCircumference(7) // 21.991148575128552

**To find the circumference of a circle with a radius of r:**

	function findCircumference (r) {
	  return radius * 2 * Math.PI;
	} 
	
	findCircumference(5) // 31.41592653589793

## Browser Support

Math.PI is supported across all browsers in both desktop and mobile.