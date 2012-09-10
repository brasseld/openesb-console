$(function(){

    "use strict";
 
    var componentsArray = [
        { name: "sun-database-binding", status: "Activé sur toutes les cibles", type: "Liaison" },
        { name: "Contact 2", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" },
        { name: "Contact 3", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" },
        { name: "Contact 4", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" },
        { name: "Contact 5", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" },
        { name: "Contact 6", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" },
        { name: "Contact 7", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" },
        { name: "Contact 8", status: "1, a street, a town, a city, AB12 3CD", type: "0123456789" }
    ];

    //define component model
    var Components = Backbone.Model.extend({
        defaults: function() {
            return {
                name: "",
                status: "",
                type: ""
              };
        }
    });

    //define directory collection
    var ComponentsCollection = Backbone.Collection.extend({
        model: Components
    });

    var ComponentsView = Backbone.View.extend({
        template: _.template($('#tpl-table-list-item').html()),
        render: function (eventName) {
            var html = this.template(this.model.toJSON());
            this.setElement($(html));
            return this;
        }
    });

    var ComponentsTableView = Backbone.View.extend({
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
            var tableitemview = new ComponentsView({
                model: item
            });

            $('#components-table > tbody:last').append(tableitemview.render().el);
        //    this.$el.find('tbody').append(tableitemview.render().el);
        }
    });

    var componentsData = new ComponentsCollection(componentsArray);
    var view = new ComponentsTableView({collection : componentsData});  
    $("#components-table").append(view.render().el);
 
});