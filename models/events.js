module.exports = function(sequelize, Sequelize) {
    const events = sequelize.define('Events', {
      summary: Sequelize.STRING,
      location: Sequelize.STRING,
      description: Sequelize.STRING,
      timeZone: Sequelize.INTEGER,
      startDateTime: Sequelize.STRING,
      endDateTime: Sequelize.STRING,
      attendees: Sequelize.STRING,
      reminders: Sequelize.STRING
    });
  
    return events;
  }