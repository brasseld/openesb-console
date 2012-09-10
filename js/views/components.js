window.ComponentsView = Backbone.View.extend({

    el: $('#content'),

    initialize:function () {
        console.log('Initializing Components View');
        this.collection.bind("reset", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template());
        _.each(this.collection.models, function (component) {
            $('#components-table > tbody:last').append(new ComponentItemView({model:component}).render().el);
        }, this);

        // we have to do this using bootstrap tooltip
        $('.tip-bottom').tooltip({ placement: 'bottom' });  

        return this;
    }
});

window.ComponentItemView = Backbone.View.extend({

    tagName: 'tr',

    initialize:function () {
        console.log('Initializing Component Item View');
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
});