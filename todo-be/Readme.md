## Getting Started

- Make sure mysql is installed and running.
- Go to `db.js` and edit the credentials part. Where `todo` is the database, `root` is user, `password` is the password required to connect, `host` is host url.
```js
const sequelize = new Sequelize('todo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
```

- Install the dependencies, then, run the development server:

```bash
npm install
npm run dev
```

Server will be running on `process.env.PORT || 3001;`, check on the console for exact port.