import "../easycode.js";


const test_element = easyc.element.id('button');

easyc.events.click({
    element: test_element,
    command: alert('Hello World!')
})