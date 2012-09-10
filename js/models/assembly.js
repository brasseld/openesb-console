window.Assembly = Backbone.Model.extend({

    defaults: function() {
            return {
                name: "",
                state: "",
                description: ""
              };
        }

});

window.AssemblyCollection = Backbone.Collection.extend({

    model: Assembly,
    url: 'data/assemblies.json'

});