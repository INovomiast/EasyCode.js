/**
 * EasyCode.js || Dev by INovomiast
 * 
 * Website and Docs:
 * https://easycodejs.org
 * https://docs.easycodejs.org/getting-started/
 * 
 * 
 * If you contribute to EasyCode.js, put your gh username in the file ./contribs.md
 */



export var easyc = {
    element: {
        id: function(element_id){
            document.getElementById(element_id)
        },
        class: function(element_class){
            document.getElementsByClassName(element_class)
        }
    },
    events: {
        click: function({
            element,
            command
        }){
            element.addEventListener('click', () => {
                command
            });
        }
    }
}

