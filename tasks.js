const router  = require("express").Router();
const Task    = require("../models/Task");
const protect = require("../middleware/auth");

router.use(protect);

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch { res.status(500).json({ message: "Server error" }); }
});

// POST create task
router.post("/", async (req, res) => {
  try {
    const { title, assignee, deadline, status } = req.body;
    if (!title || !assignee || !deadline)
      return res.status(400).json({ message: "Title, assignee, deadline required" });
    const task = await Task.create({ title, assignee, deadline, status, owner: req.user._id });
    res.status(201).json(task);
  } catch (err) { res.status(500).json({ message: "Server error" }); }
});

// PATCH update task
router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    const { status, title, assignee, deadline } = req.body;
    if (status)   task.status   = status;
    if (title)    task.title    = title;
    if (assignee) task.assignee = assignee;
    if (deadline) task.deadline = deadline;
    await task.save();
    res.json(task);
  } catch { res.status(500).json({ message: "Server error" }); }
});

// DELETE task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Deleted" });
  } catch { res.status(500).json({ message: "Server error" }); }
});

module.exports = router;
