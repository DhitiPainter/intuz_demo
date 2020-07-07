var mongoose = require("mongoose");
const event = require("../model/event").Events;
// var request = require("request");

async function getEvents(params, res) {
  try {
    let data = await event.find().lean();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getEventByEmail(email, res) {
  try {
    let data = await event.findOne({ email: email }).lean();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function create(e, res) {
  try {
    let data = {};
    let duplicateEvent = await event.findOne({ email: e.email });
    if (duplicateEvent) {
      data.duplicateEvent = true;
      return res.status(400).json({ data, message: "Duplicate event" });
    }
    data = await event.create(e);
    data.duplicateEvent = false;
    return res.status(200).json({ data, message: "Event created" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function update(e, res) {
  try {
    let data = await event.findOneAndUpdate({ email: e.email }, e).lean();
    return res.status(200).json({ data, message: "Event updated" });
  } catch (error) {
    return res.status(500).json({error, message: "Something went wrong updating event"});
  }
}

async function deleteEvent(email, res) {
  try {
    let data = await event.findOneAndDelete({ email: email }).lean();
    res.status(200).json({ data, message: "Event deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getEvents,
  create,
  update,
  deleteEvent,
  getEventByEmail
};
