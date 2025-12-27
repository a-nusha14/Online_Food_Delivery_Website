const Food = require("../models/Food");

// Get all foods
exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new food
exports.addFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.json({ message: "Food added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
