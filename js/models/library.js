window.SharedLibrary = Backbone.Model.extend({

    defaults: function() {
            return {
                name: ""
              };
        }

});

window.SharedLibraryCollection = Backbone.Collection.extend({

    model: SharedLibrary,
    url: 'data/libraries.json'

});