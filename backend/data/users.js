import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('admin.123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joel Buenrostro',
    email: 'joel@email.com',
    password: bcrypt.hashSync('pass.1234', 10),
    isAdmin: false,
  },
  {
    name: 'Carlos Molina',
    email: 'carlos@email.com',
    password: bcrypt.hashSync('pass.1234', 10),
    isAdmin: false,
  },
  {
    name: 'Jorge Mora',
    email: 'jorge@email.com',
    password: bcrypt.hashSync('pass.1234', 10),
    isAdmin: false,
  },
  {
    name: 'Asesor UDG',
    email: 'asesor@email.com',
    password: bcrypt.hashSync('pass.1234', 10),
    isAdmin: true,
  },
];

export default users;