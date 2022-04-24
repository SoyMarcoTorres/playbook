const UserService = require('./../../app/services/UserService')

describe('Tests for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, 'soymarcotorres', 'Marco')

        expect(user.username).toBe('soymarcotorres')
        expect(user.name).toBe('Marco')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, 'soymarcotorres', 'Marco')
        const userInfoInList = UserService.getInfo(user)
        
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('soymarcotorres')
        expect(userInfoInList[2]).toBe('Marco')
        expect(userInfoInList[3]).toBe('Sin bio')
    })

    test('3. Update username', () => {
        const user = UserService.create(1, 'soymarcotorres', 'Marco')
        UserService.updateUserUsername(user, 'marcot')
        expect(user.username).toBe('marcot')
    })

    test("4) Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, 'soymarcotorres1', 'Marco')
        const user2 = UserService.create(2, 'soymarcotorres2', 'Marco')
        const user3 = UserService.create(3, 'soymarcotorres3', 'Marco')

        const usernames = UserService.getAllUsernames([user1,user2,user3])

        expect(usernames).toContain('soymarcotorres1')
        expect(usernames).toContain('soymarcotorres2')
        expect(usernames).toContain('soymarcotorres3')
    })
})