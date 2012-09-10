window.Instance = Backbone.Model.extend({

    defaults: function() {
            return {
                id: "",
                name: "",
                host: "",
                port: "",
                access: "",
                state: ""
              };
        }

});

window.InstanceCollection = Backbone.Collection.extend({
	model: Instance,
	url: 'data/instances.json'
});