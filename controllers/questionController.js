var questionModel = require('../models/questionModel.js');

module.exports = {


    list: function(req, res) {
        questionModel.find(function(err, questions){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting question.'
                });
            }
            return res.json(questions);
        });
    },


    show: function(req, res) {
        var id = req.params.id;
        questionModel.findOne({_id: id}, function(err, question){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting question.'
                });
            }
            if(!question) {
                return res.status(404).json({
                    message: 'No such question'
                });
            }
            return res.json(question);
        });
    }
  };
