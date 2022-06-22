const User = require('../models/User') 
const { initConnection } = require('../db_config/dbconfig')

describe('User', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await initConnection;
        db = await connection.db(process.env.DB_NAME);
    });

    afterAll(async () => {
        await connection.close();
    });


    describe('findByEmail', () => {
        test('it resolves with a user on a successful db query', async () => {
            let userData = {
                userEmail: "test@email.com",
                userName: "testtest",
                password: "testpassword",
                // token input

            };
            const result = await User.findByEmail({userEmail: "test@email.com"});
            expect(result).toBeInstanceOf(User)
        });
    });
});
