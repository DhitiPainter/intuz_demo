var eventService = require("../services/event.service");

module.exports = router => {
  /* GET events listing. */
  router.get("/events", async function(req, res) {
    try {
      const { data } = await eventService.getEvents(req.body, res);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  /* GET events listing. */
  router.get("/event/:email", async function(req, res) {
    try {
      const { data } = await eventService.getEventByEmail(
        req.params.email,
        res
      );
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  /* POST  add new event. */
  router.post("/event", async function(req, res) {
    try {
      const { data } = await eventService.create(req.body, res);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  /* PUT  update selected event. */
  router.put("/event/:email", async function(req, res) {
    try {
      const { data, message } = await eventService.update(req.body, res);
      return res.status(200).json({ data, message });
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  /* DELETE selected event. */
  router.delete("/event/:email", async function(req, res) {
    try {
      const { data, message } = await eventService.deleteEvent(
        req.params.email,
        res
      );
      return res.status(200).json({ data, message });
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
