/* ************************************************************************

Copyright: 2018 undefined

License: MIT license

Authors: undefined

 ************************************************************************ */

/**
 * This is the main application class of "qxTodo180831"
 *
 * @asset(qxTodo180831/*)
 */
qx.Class.define("qxTodo180831.Application", {
    extend: qx.application.Standalone,

    /*
     *****************************************************************************
    MEMBERS
     *****************************************************************************
     */

    members: {
        __employeesRes: null,
        __employeeRes: null,
        __employeesStore: null,
        __employeeStore: null,
        __list: null,
        __employee: null,

        /**
         * This method contains the initial application code and gets called
         * during startup of the application
         *
         * @lint ignoreDeprecated(alert)
         */
        main: function () {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Environment.get("qx.debug")) {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
                // support additional cross-browser console. Press F7 to toggle visibility
                qx.log.appender.Console;
            }

            /*
            -------------------------------------------------------------------------
            Below is your actual application code...
            -------------------------------------------------------------------------
             */

            this._setUpResources();
            this._setUpStores();
            this._createGui();
            this._setUpBinding();

            this.__employeesRes.get();

            // Select first item in list
            this.__list.addListener("changeModel", function (evt) {
                var model = evt.getData();
                this.__list.getSelection().push(model.getItem(0));
            }, this);

            // On selection of item populate gist view
            this.__list.getSelection().addListener("change", function (evt) {
                var id = this.__list.getSelection().getItem(0).getId();
                this.__employeeRes.get({
                    id: id
                });
            }, this);
        },

        _setUpResources: function () {
            // Index of gists
            this.__employeesRes = new qxTodo180831.Resource({
                    // retrieve list of employees
                    get: {
                        method: "GET",
                        url: "/employees"
                    },
                    // create list of employees
                    post: {
                        method: "POST",
                        url: "/employees"
                    },
                    // delete all employees
                    delete : {
                        method: "DELETE",
                        url: "/employees"
                    }
                });

            // Single gist
            this.__employeeRes = new qxTodo180831.Resource({
                    get: {
                        method: "GET",
                        url: "/employees/{id}"
                    },
                    // update employee
                    put: {
                        method: "PUT",
                        url: "/employees/{id}"
                    },
                    // delete employee
                    delete : {
                        method: "DELETE",
                        url: "/employees/{id}"
                    }
                });
        },

        _setUpStores: function () {
            // Attach particular resource action to stores
            this.__employeesStore = new qx.data.store.Rest(this.__employeesRes, "get");
            this.__employeeStore = new qx.data.store.Rest(this.__employeeRes, "get");
        },

        _createGui: function () {
            var dockContainer = new qx.ui.container.Composite(new qx.ui.layout.Dock());
            dockContainer.setPadding(10);

            var label = new qx.ui.basic.Label("Employees");
            label.setFont("bold");
            label.setPaddingBottom(10);
            dockContainer.add(label, {
                edge: "north"
            });

            this.__list = new qx.ui.list.List();
            this.__list.setWidth(200);
            this.__employee = new qxTodo180831.Employee();

            dockContainer.add(this.__list, {
                edge: "west"
            });
            dockContainer.add(this.__employee, {
                edge: "center"
            });

            this.getRoot().add(dockContainer, {
                edge: 0
            });
        },

        _setUpBinding: function () {
            var list = this.__list,
            employeesStore = this.__employeesStore,
            employeeStore = this.__employeeStore;

            // List
            list.setLabelPath("last_name");
            list.setLabelOptions({
                converter: function (label, model, source, target) {
                    if (label === null || !label.length) {
                        return model.getId();
                    }
                    return label;
                }
            });

            employeesStore.bind("model", list, "model");

            // Eemployees
            var employee = this.__employee;

            employeeStore.bind("model.id", employee.getId(), "value");
            employeeStore.bind("model.first_name", employee.getFirstName(), "value");
            employeeStore.bind("model.last_name", employee.getLastName(), "value");
            employeeStore.bind("model.email", employee.getEmail(), "value");

        }

    }
});


