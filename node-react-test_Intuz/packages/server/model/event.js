const mongoose = require("mongoose");
const rFields = require("./rFields");

var EventSchema = new mongoose.Schema(
  {
    title: rFields.rString,
    isMultipleDays: rFields.rString,
    startDate: rFields.rDate,
    endDate: rFields.rDate,
    location: {
      name: rFields.rString,
      address: rFields.rString,
      city: rFields.rString,
      state: rFields.rString,
      country: rFields.rString,
      lat: rFields.rString,
      lng: rFields.rString
    },
    email: rFields.rEmail,
    description: rFields.dString,
    guests: rFields.dArray
  },
  {
    collection: "event"
  }
).index({ id: 1 });

const Events = mongoose.model("event", EventSchema);

module.exports = { Events };
