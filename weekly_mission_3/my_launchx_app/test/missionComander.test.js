const MissionComander = require('./../app/missionComander')

describe("Unit Tests for Mission Comander Class", () => {
    test('1) Create a mission comander object', () => {
        const myMissionComander = new MissionComander('Woopa')
        expect(myMissionComander.name).toBe('Woopa')
    })
})