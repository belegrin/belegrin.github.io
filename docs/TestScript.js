{
    // window.webkit.messageHandlers.casinoverse.postMessage("this is a message");
    function getString() {
        return "This is a JS string";
    }

    function getNumber() {
        return 1234;
    }

    function getBool() {
        return true;
    }

    function postMessage(message) {
        window.postMessage(message);
    }
}