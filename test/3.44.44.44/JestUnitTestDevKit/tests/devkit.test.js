describe('devKit', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(global.devKit.Add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(global.devKit.Subtract(5, 2)).toBe(3);
    });

    test('Add2 adds 1 + 2 to equal 3', () => {
        expect(global.devKit.Add2(1, 2)).toBe(3);
    });
});
