const user = require("../../app/models/User")

describe('Unit Tests for User class', () => {
    test('Create an User object', () => {
        const userNew = new user(1, 'soymarcotorres', 'Marco', 'Bio')

        expect(userNew.id).toBe(1)
        expect(userNew.username).toBe('soymarcotorres')
        expect(userNew.name).toBe('Marco')
        expect(userNew.bio).toBe('Bio')
        expect(userNew.dateCreated).not.toBeUndefined()
        expect(userNew.lastUpdate).not.toBeUndefined()
    })

    test('Add getters', () => {
        const userNew = new user(1, 'soymarcotorres', 'Marco', 'Bio')

        expect(userNew.getUsername).toBe('soymarcotorres')
        expect(userNew.getBio).toBe('Bio')
        expect(userNew.dateCreated).not.toBeUndefined()
        expect(userNew.lastUpdate).not.toBeUndefined()
    })

    test('Add setters', () => {
        const userNew = new user(1, 'soymarcotorres', 'Marco', 'Bio')

        userNew.setUsername = 'Antonio'
        expect(userNew.username).toBe('Antonio')

        userNew.setBio = 'New bio'
        expect(userNew.bio).toBe('New bio')
    })
})