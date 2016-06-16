# Array.prototype.unshift()

*The `unshift()`* *method allows you to add one or more items to the* ***beginning*** *of an array or array-like object.*

The `unshift` method can be used to add items to the beginning of any array. Using `call` or `apply` along with `unshift`, it can be used to add items to an array-like object. 

*Any* value can be added to an array using `unshift`. You can add literals (*number literals such as 5, string literals such as "Hello, world"*), other arrays, objects, variable references to objects and arrays, booleans, strings, or numbers.

If more than one argument is passed to `unshift` (*more than one item added to the array*), each argument **must be separated by a comma (<kbd>,</kbd>)**. If more than one item is added to the beginning of the array, the items will be in the order in which they are passed in the list of arguments.

**For example:**

If you're adding three items to an array (`array.unshift(item1, item2, item3)`), first `item3` will be added to the front of the array, then `item2` will be added to the front (placed before `item3`, and finally `item1` will be added to the front, which means `item1` will be the new first item in the array.

```javascript
var nums = [10, 15, 16, 20];
nums.unshift(3, 7, 9);
nums // [3, 7, 9, 10, 15, 16, 20]
```

## Syntax 

`array.unshift(item1[, itemN...])`

`itemN` represents an optional additional item or items to be added.

## Return Value

When adding items to an array or array-like object using the `unshift` method, the return value will be the length of the new array.

**Example:**


```javascript
var myArr = ["hello", "world"];
myArr.unshift("goodbye", "world");
4 // new length of myArr is returned
```

## Usage

### Adding One Item to the Beginning of an Array

```javascript
var oddNums = [3, 5, 7, 9];
oddNums.unshift(1);
5 // new length of oddNums
oddNums // [1, 3, 5, 7, 9]
```

### Adding Multiple Items to the Beginning of an Array

```javascript
var fruits = ["apple", "orange", "pear"];
fruits.unshift("banana", "mango", "kiwi");
6 // new length of fruits array
fruits // ["banana", "mango", "kiwi", "apple", "orange", "pear"]
```

### Adding Two Object References to an Array and Accessing Their Properties

```javascript
var volunteers = [];
var v1 = {
  name: "Eliza",
  position: "cat groomer",
  available: {
    sunday: false,
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: false,
    saturday: false
  }
}

var v2 = {
  name: "Sharon",
  position: "veterinarian",
  available: {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false
  }
}
// adding both volunteers separately to show that the second addition will become the first array element
volunteers.unshift(v1);
volunteers[0].name // "Eliza"
volunteers[0].available.tuesday // true

volunteers.unshift(v2); // now v2 will be the first element in the volunteers array
volunteers[0].name // "Sharon"
volunteers[0].available.tuesday // false
```

## Browser Support

### Desktop Browsers

| Chrome | Firefox | IE | Edge | Opera | Safari | 
| :---: | :---: | :-----: | :---: | :---: | :-----: |
| yes | yes | 5.5+ | yes | yes | yes |


### Mobile Browsers

| Android | Chrome | Firefox | IE | Opera | Safari | 
| :---: | :---: | :-----: | :---: | :---: | :-----: |
| yes | yes | yes | yes | yes | yes |
