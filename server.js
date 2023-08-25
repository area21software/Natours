const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const dbUrl = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}....`);
});
