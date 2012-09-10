window.SharedLibrariesView = Backbone.View.extend({

    el: $('#content'),

    initialize:function () {
        console.log('Initializing Shared Libraries View');
        this.collection.bind("reset", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template());

        _.each(this.collection.models, function (library) {
            $('#libraries-table > tbody:last').append(new SharedLibraryItemView({model:library}).render().el);
        }, this);

        // we have to do this using bootstrap tooltip
        $('.tip-bottom').tooltip({ placement: 'bottom' });  

        return this;
    }
});

window.SharedLibraryItemView = Backbone.View.extend({

    tagName: 'tr',
    
    initialize:function () {
        console.log('Initializing Shared Library Item View');
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});