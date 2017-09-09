'use strict';
const list = require('./list.json');
const items = [];
const duplicates = [];

Array.prototype.contains = function(obj) {
  let i = this.length;
  while (i--) {
    if (this[i] == obj) {
        return true;
    }
  }
  return false;
}

for (let i = 0; i < list.length; i++){
  const title = list[i].title;
  if(!items.contains(title)){
    items.push(title);
  }else{
    duplicates.push(title);
  }
}
console.log(duplicates)

