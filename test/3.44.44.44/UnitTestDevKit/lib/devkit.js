(function(global) {
    function publicFunction() {
        return 'I am a public function';
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    // Expose public methods to the global object
    global.devKit = {
        publicFunction,
        add,
        subtract
    };
})(this);
