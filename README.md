# color-parser
Parser for CSS color strings.

Usage
---

```javascript
const parseColor = require("colorparser");

const red   = parseColor(0xFFFF0000); // = [255, 0, 0, 1.0]
const green = parseColor("rgb(0, 255, 0)"); // [0, 255, 0, 1.0]
const blue  = parseColor("rgba(0, 0, 255, 0.5)"); // [0, 0, 255, 0.5]
const magenta = parseColor("#FF00FF"); // [255, 0, 255, 1.0]

// ...
```
