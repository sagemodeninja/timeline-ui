### Introduction

A user-interface that let's users/viewers scrolls into a timeline.

### Usage & Examples

```javascript
var today = new Date("12/31/1998");
var timeline = new Timeline(today.getFullYear(), today.getMonth(), today.getDate());

console.log(timeline.year, timeline.month, timeline.date, timeline.dayOfWeek);
// Expected output: 1998 11 31 4

timeline.nextDay();
console.log(timeline.year, timeline.month, timeline.date, timeline.dayOfWeek);
// Expected output: 1999 0 1 5
```

### Features

+ Create a Timeline object.
+ Move current date to +1 day(s). (forward)
+ Move current date to -1 day(s). (backward)

### Credits

Copyright © 2021 Gary Antier.

### License

This project is released under the [MIT license](https://github.com/sagemodeninja/timeline-ui/blob/main/License.md).

### Bug reports

Please send your bug reports to [contact@garyantier.com](mailto:contact@garyantier.com).
