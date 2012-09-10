window.Component = Backbone.Model.extend({

    defaults: function() {
            return {
                name: "",
                status: "",
                type: ""
              };
        }

});

window.ComponentCollection = Backbone.Collection.extend({

    model: Component,
    url: 'data/components.json'

});