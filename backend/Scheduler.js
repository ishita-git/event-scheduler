class Scheduler {
    constructor() {
      this.events = [];
    }
  
    addEvent({ start_time, end_time }) {
      for (const event of this.events) {
        if (
          (start_time < event.end_time && end_time > event.start_time) ||
          (end_time > event.start_time && start_time < event.end_time)
        ) {
          return false;
        }
      }
      this.events.push({ start_time, end_time });
      return true;
    }
  
    getEvents() {
      return this.events;
    }
  }
  
  module.exports = Scheduler;
  