# Vue Directives Library

This library is a beta and has only one directive at this moment.

## Directives

- <b>Outside</b> - Check for events outside an element.

## Install (with npm)
```
npm install vue-directive-library
```

# How to use

## Outside

Observe events outside of an element. For example a mouse click. Just import the outside directive into your component.

```
import { outside } from "vue-directives-library/lib/outside";

export default {
    ...
    directives: {
        outside
    },
    methods: {
        doSomething: function (){
            alert('You clicked the div!');
        }
    },
    ...
}
```

Now you can use the directive with your elements. The following example shows a div. If you click outside the div, the
method 'doSomething' will be done.

```
<template>
    <div>
        <div v-outside:click="{ handler: 'doSomething' }">CLICK HERE</div>
    </div>
</template>
```

You can also exclude elements from the directive. That means if you click on these elements outside the element with the
directive on it, nothing happens.

```
<div v-outside:click="{ exclude: ['mega', '#super', '.top'], handler: 'doSomething' }">CLICK HERE</div>
```

Now all elements with 'mega' as vue reference (ref), 'super' as element id or with class 'top' have no affect and dont do
the method 'doSomething'.
