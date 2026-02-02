export default function Tiny (options) {
    const element =
    typeof options.selector === 'string'
      ? document.querySelector(options.selector)
      : options.selector

    function _render() {
        element.innerHTML = options.template()
    };

    function _addEventlisteners() {
        const listenerElements = document.querySelectorAll("[tiny-listener]");

        for(const listenerElement of listenerElements) {
            const attribute = listenerElement.getAttribute("tiny-listener");

            const listenerInfo = attribute
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map(l => l.trim());

            console.log(listenerInfo)

            const [eventName, fn] = listenerInfo;

            listenerElement.addEventListener(eventName, options[fn])
        }
    }

    _render();
    _addEventlisteners();
}