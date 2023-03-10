const express = require('express');
const { validate } = require('./src/middlewares/userValidation');
const { errorHandler } = require('./src/middlewares/errorHandler');
const contentRouter = require('./src/routes/content.routes');
const collectionRouter = require('./src/routes/collection.routes');
const cors = require('cors');
// const appRouter = require('./src/routes/app.routes');
//const authRouter = require('./src/routes/auth.routes');
const PORT = process.env.PORT || 7000;

const app = express();
app.use(express.json());
app.use(cors("*"));

// app.use('/', appRouter);
//app.use('/', authRouter);
app.get('/val', validate);

app.use('/content', validate, contentRouter);
app.use('/collection', validate, collectionRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`---Backend--- server is running on PORT: ${PORT}`);
});
