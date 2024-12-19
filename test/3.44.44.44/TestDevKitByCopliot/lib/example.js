(function(global) {
    const privateVariable = 'I am private';

    function privateFunction() {
        return 'I am a private function';
    }

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
    global.myModule = {
        publicFunction,
        add,
        subtract
    };
})(this);
