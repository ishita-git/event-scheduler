const express = require('express');
const Scheduler = require('./Scheduler');
const app = express();
const scheduler = new Scheduler();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.post('/add-event', (req, res) => {
  const { start_time, end_time } = req.body;
  const success = scheduler.addEvent({ start_time, end_time });
  if (success) {
    res.status(200).send({ message: 'Event added successfully' });
  } else {
    res.status(409).send({ message: 'Event overlaps with an existing event' });
  }
});

app.get('/events', (req, res) => {
  res.status(200).json(scheduler.getEvents());
});

app.listen(3000, () => console.log('Server running on port 3000'));
