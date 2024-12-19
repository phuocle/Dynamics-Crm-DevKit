'use strict';
var devKit = (function () {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function add2(a, b) { }
    return {
        Add: add,
        Subtract: subtract,
        Add2: add2
    };
})();
(function (devKit) {
    devKit.Add2 = function (a, b) {
        return a + b;
    };
})(devKit || (devKit = {}));
var OptionSet;
(function (OptionSet) {
    OptionSet.FormType = {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 5
    };
})(OptionSet || (OptionSet = {}));
