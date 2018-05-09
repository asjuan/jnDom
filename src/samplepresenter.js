var present = function(model, view) {
    return {
        "login": function () {
            model.isLoginVisible = true;
            view.update();
        }
    }
}
module.exports = present;