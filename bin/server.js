const app = require(`../src/app`);
require(`dotenv`).config();
// require(`./src/middleware/RedisConnection`)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});