$(function(){

    "use strict";
 
    var assembliesArray = [
        { name: "CA_Donnees_Reference", state: "Démarré", description: "Represents the Service Assembly of CA_Donnees_Reference" },
        { name: "CA_Entreprise", state: "Démarré", description: "Represents the Service Assembly of CA_Entreprise" },
        { name: "CA_Habitation", state: "Démarré", description: "Represents the Service Assembly of CA_Habitation" },
        { name: "CA_Individu", state: "Démarré", description: "Represents the Service Assembly of CA_Individu" },
        { name: "CA_Technique", state: "Démarré", description: "Represents the Service Assembly of CA_Technique" }
    ];

    //define component model
    var ServiceAssembly = Backbone.Model.extend({
        defaults: function() {
            return {
                name: "",
                state: "",
                description: ""
              };
        }
    });

    //define directory collection
    var ServiceAssembliesCollection = Backbone.Collection.extend({
        model: ServiceAssembly
    });

    var ServiceAssemblyView = Backbone.View.extend({
        template: _.template($('#tpl-table-list-item').html()),
        render: function (eventName) {
            var html = this.template(this.model.toJSON());
            this.setElement($(html));
            return this;
        }
    });

    var ServiceAssembliesTableView = Backbone.View.extend({
        initialize: function () {
            this.collection.bind("reset", this.render, this);
        },
        render: function (eventName) {
            this.$el.html();
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderComponentItem(item);
            }, this);

            return this;
        },
        renderComponentItem: function (item) {
            var tableitemview = new ServiceAssemblyView({
                model: item
            });

            $('#assemblies-table > tbody:last').append(tableitemview.render().el);
        //    this.$el.find('tbody').append(tableitemview.render().el);
        }
    });

    var asssembliesData = new ServiceAssembliesCollection(assembliesArray);
    var view = new ServiceAssembliesTableView({collection : asssembliesData});  
    $("#assemblies-table").append(view.render().el);
 
});