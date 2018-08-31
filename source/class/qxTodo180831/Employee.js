/**
 * view
 */
qx.Class.define("qxTodo180831.Employee", {
    extend: qx.ui.container.Composite,

    construct: function () {
        this.base(arguments);

        var gridLayout = new qx.ui.layout.Grid(5, 5);
        gridLayout.setColumnFlex(3, 1);
        //gridLayout.setRowFlex(2, 1);

        this.setLayout(gridLayout);
        this.setPadding(0, 10);

        var label;

        // Id
        var idContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        label = new qx.ui.basic.Label("ID");
        label.setFont("bold");
        this.__id = new qx.ui.basic.Label();
        idContainer.add(label);
        idContainer.add(this.__id);
        this.add(idContainer, {
            row: 0,
            column: 0
        });

        // First Name
        var firstNameContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        label = new qx.ui.basic.Label("First Name");
        label.setFont("bold");
        this.__firstName = new qx.ui.basic.Label();
        firstNameContainer.add(label);
        firstNameContainer.add(this.__firstName);
        this.add(firstNameContainer, {
            row: 0,
            column: 1
        });

        // Last Name
        var lastNameContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        label = new qx.ui.basic.Label("Last Name");
        label.setFont("bold");
        this.__lastName = new qx.ui.basic.Label();
        lastNameContainer.add(label);
        lastNameContainer.add(this.__lastName);
        this.add(lastNameContainer, {
            row: 0,
            column: 2
        });

        // Email
        var emailContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        label = new qx.ui.basic.Label("Email");
        label.setFont("bold");
        this.__email = new qx.ui.basic.Label();
        emailContainer.add(label);
        emailContainer.add(this.__email);
        this.add(emailContainer, {
            row: 0,
            column: 3
        });

        /*
        // Description
        var descriptionContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        label = new qx.ui.basic.Label("Description");
        label.setFont("bold");
        this.__description = new qx.ui.basic.Label();
        descriptionContainer.add(label);
        descriptionContainer.add(this.__description);
        this.add(descriptionContainer, {row: 0, column: 0});

        // User
        var userContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        this.__gravatar = new qx.ui.basic.Image();
        this.__gravatar.set({
        width: 40,
        height: 40,
        scale: true,
        backgroundColor: "#fff"
        });
        this.__username = new qx.ui.basic.Label();
        userContainer.add(this.__gravatar);
        userContainer.add(this.__username);
        this.add(userContainer, {row: 0, column: 1});

        // Content
        label = new qx.ui.basic.Label("Content");
        label.setFont("bold");
        var scroll = new qx.ui.container.Scroll();
        this.__content = new qx.ui.embed.Html();
        this.__content.setMinHeight(1000);      // TODO: Determine height/width to fit
        scroll.add(this.__content);
        this.add(label, {row: 1, column: 0});
        this.add(scroll, {row: 2, column: 0, colSpan: 2});
         */
    },

    members: {
        __id: "",
        __firstName: "",
        __lastName: "",
        __email: "",

        getId: function () {
            return this.__id;
        },

        getFirstName: function () {
            return this.__firstName;
        },

        getLastName: function () {
            return this.__lastName;
        },

        getEmail: function () {
            return this.__email;
        }

        /*,


        __description : "",

        __gravatar : "",

        __username : "",

        __content : "",

        getDescription: function() {
        return this.__description;
        },

        getGravatar: function() {
        return this.__gravatar;
        },

        getUsername: function() {
        return this.__username;
        },

        getContent: function() {
        return this.__content;
        }
         */
    }
});
