beforeEach(function () {
    jasmine.addMatchers({
        toStartsWith: function () {
            return {
                compare: function (actual, expected) {
                    var value = false;
                    if (actual === undefined || actual === null) {
                        value = false;
                    }
                    else {
                        value = actual.slice(0, expected.length) === expected;
                    }
                    return { pass: value }
                }
            };
        }
    });
});