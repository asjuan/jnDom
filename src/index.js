var newPresenter = require("./samplepresenter");
var newModel = require("./samplemodel");
var newView = require("./sampleview");

var p = newPresenter(newModel(), newView());
p.initDefault();
