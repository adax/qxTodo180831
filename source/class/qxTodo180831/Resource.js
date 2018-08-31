/**
 * REST API resource
 */
qx.Class.define("qxTodo180831.Resource", {
    extend: qx.io.rest.Resource,

    construct: function (description) {
        this.base(arguments, description);

        this.configureRequest(function (req) {
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json");
        });
        this.setBaseUrl("http://localhost:3000");
    }
});
