const db = require("../models");

// This info needs to be specific to the user
// AKA: John Smith's expenses, not everyone's expenses

module.exports = {
    // Find all expenses BY USER
    findAllExpenses: function(req, res) {
        db.expenseTracker
        // TO DO: fill in code for finding all expenses
        .catch(err => res.status(422).json(err));
    },
    // Find a specific expense
    findExpenseByID: function(req, res) {
        db.expenseTracker
        // TO DO: fill in code for finding a specific expense
        .catch(err => res.status(422).json(err));
    },
    // Create a new expense
    create: function(req, res) {
        db.expenseTracker
        // TO DO: fill in code for creating a new expense
        .catch(err => res.status(422).json(err));
    },
    // Update a past expense
    update: function(req, res) {
        db.expenseTracker
        // TO DO: fill in code for editing a past expense
        .catch(err => res.status(422).json(err));
    },
    // Permanently delete expense
    delete: function(req, res) {
        db.expenseTracker
        // TO DO: fill in code for deleting an expense
        .catch(err => res.status(422).json(err));
    }
};