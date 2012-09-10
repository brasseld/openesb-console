window.Router = Backbone.Router.extend({

    routes: {
        "":                             "dashboard",
        ":instance/assemblies":         "assemblies",
        ":instance/assembly/:assembly": "assembly",
        ":instance/components":         "components",
        ":instance/instance":           "instance",
        "instances":                    "instances"
    },

    initialize: function () {
        this.listAssemblies = new AssemblyCollection();
        this.listComponents = new ComponentCollection();
    //    this.headerView = new HeaderView();
    //    $('.header').html(this.headerView.render().el);

        // Close the search dropdown on click anywhere in the UI
    //    $('body').click(function () {
    //        $('.dropdown').removeClass("open");
    //    });
    },

    dashboard: function () {
        // Since the dashboardView view never changes, we instantiate it and render it only once
        /*
        if (!this.dashboardView) {
            this.dashboardView = new HomeView();
            this.dashboardView.render();
        } else {
            this.dashboardView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.dashboardView.el);
        */
    },

    instances: function () {
        this.listInstances = new InstanceCollection();
        this.instancesView = new InstancesView({collection: this.listInstances});
        this.listInstances.fetch();
    //    $('#content').html(this.instancesView.render().el);
    },

    assemblies: function (instance) {
        console.log('List assemblies using server id : ' + instance);
        this.assembliesView = new AssembliesView({collection: this.listAssemblies});
        this.listAssemblies.fetch();
    },

    components: function (instance) {
        console.log('List components using server id : ' + instance);
        this.componentsView = new ComponentsView({collection: this.listComponents});
        this.listComponents.fetch();
    },

    instance: function (instance) {
        console.log('View instance: ' + instance);
        this.instanceView = new InstanceView();
        $('#content').html(this.instanceView.render().el);
    },

    assembly: function (instance, assembly) {
        console.log('View assembly ' + assembly + ' from instance ' + instance);
    }

});

templateLoader.load(["AssembliesView", "InstancesView", "InstanceItemView", "ComponentsView", "AssemblyItemView", "ComponentItemView", "InstanceView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });