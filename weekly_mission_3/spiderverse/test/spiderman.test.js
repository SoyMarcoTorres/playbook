const spiderman = require("../app/spiderman")

describe('Unit Tests for Spiderman class', () => {
    test('1) Create an spiderman object', () => {
        const andrewGarfield = new spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')

        expect(andrewGarfield.name).toBe('Spiderman Sony')
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe('Andrew Garfield')
        expect(andrewGarfield.numberOfMovies).toBe(2)
        expect(andrewGarfield.cinemaStudio).toBe('Sony')
    })

    test('2) Use the method getInfo()', () => {
        const tomHolland = new spiderman('SpiderMan Marvel', 25, 'Tom Holland', 5, 'Marvel Studios')

        expect(tomHolland.getInfo).toBe("Hey, I'm Tom Holland from Marvel Studios")
    })
})