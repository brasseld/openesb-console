window.Router = Backbone.Router.extend({

    routes: {
        "":                                         "dashboard",
        ":instance/assemblies":                     "assemblies",
        ":instance/assembly/:assembly":             "assembly",
        ":instance/assembly/:assembly/general":     "assemblyGeneral",
        ":instance/assembly/:assembly/description": "assemblyDescription",
        ":instance/assembly/:assembly/target":      "assemblyTarget",
        ":instance/assembly/:assembly/stats":       "assemblyStats",
        ":instance/assembly/:assembly/monitoring":  "assemblyMonitoring",
        ":instance/components":                     "components",
        ":instance/libraries":                      "libraries",
        ":instance/instance":                       "instance",
        "instances":                                "instances"
    },

    initialize: function () {
        this.listAssemblies = new AssemblyCollection();
        this.listSharedLibraries = new SharedLibraryCollection();
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

    libraries: function (instance) {
        console.log('List shared libraries using server id : ' + instance);
        this.sharedLibrariesView = new SharedLibrariesView({collection: this.listSharedLibraries});
        this.listSharedLibraries.fetch();
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
        this.assemblyView = new AssemblyView();
        $('#content').html(this.assemblyView.render().el);
    },

    assemblyGeneral: function (instance, assembly) {
        console.log('View assembly general tab ' + assembly + ' from instance ' + instance);
        this.assemblyGeneralTabView = new AssemblyGeneralTabView();
        $('#tabContent').html(this.assemblyGeneralTabView.render().el);
    }

});

templateLoader.load(["AssembliesView", "InstancesView", "InstanceItemView", "ComponentsView", "AssemblyItemView", "ComponentItemView", "InstanceView", "SharedLibrariesView", "SharedLibraryItemView", "AssemblyView", "AssemblyGeneralTabView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });