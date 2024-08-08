{
    function getString() {
        return "This is a JS string";
    }

    function getNumber() {
        return 1234;
    }

    function getBool() {
        return true;
    }

    function getObject() {
        postMessage({ varA: "test", varB: 1234 });
    }

    function postMessage(message) {
        window.postMessage(message);
    }
}