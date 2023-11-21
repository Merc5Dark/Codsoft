const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/project-management-tool', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Routes
const tasksRouter = require('./routes/tasks');
const projectsRouter = require('./routes/projects');

app.use('/tasks', tasksRouter);
app.use('/projects', projectsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
