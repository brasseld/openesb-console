window.AssembliesView = Backbone.View.extend({

    el: $('#content'),

    initialize:function () {
        console.log('Initializing Assemblies View');
        this.collection.bind("reset", this.render, this);
    },

    render:function () {
        $(this.el).html(this.template());

        _.each(this.collection.models, function (assembly) {
            $('#assemblies-table > tbody:last').append(new AssemblyItemView({model:assembly}).render().el);
        }, this);

        // we have to do this using bootstrap tooltip
        $('.tip-bottom').tooltip({ placement: 'bottom' });  

        return this;
    }
});

window.AssemblyItemView = Backbone.View.extend({

    tagName: 'tr',
    
    initialize:function () {
        console.log('Initializing Assembly Item View');
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

window.AssemblyView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Assembly View');
    },

    events: {
        'click a.tab'    : 'toggleTab'
    },

    toggleTab: function (event) {
        $('ul.nav-tabs li.active').removeClass('active');
        $(event.target).closest("li").addClass('active');

        location.href = event.target.href;
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },
});

window.AssemblyGeneralTabView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Service Assembly General Tab View');
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },
});
