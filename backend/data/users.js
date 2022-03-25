import bcrypt from 'bcryptjs';

const users = [
    {
       name: 'Admin User',
       email:'admin@example.com',
       password: bcrypt.hashSync('123456',10),
       isAdmin: true
    },
    {
        name: 'Sophia',
        email:'sophia@example.com',
        password: bcrypt.hashSync('123456',10),
    },
     {
        name: 'Kate',
        email:'kate@example.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users;