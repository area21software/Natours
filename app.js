const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routers/tourRoutes');
const userRouter = require('./routers/userRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Cant find ${req.originalUrl} on this server`,
  });
});

module.exports = app;

// Old version: keeping on purpose
// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);

// app.get("/api/v1/tours/:id", getTourById);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);
