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
    },

    findByServer:function (server) {
        var url = (key == '') ? '../api/employees' : "../api/employees/search/" + key;
        console.log('findByName: ' + key);
        var self = this;
        $.ajax({
            url:url,
            dataType:"json",
            success:function (data) {
                console.log("search success: " + data.length);
                self.reset(data);
            }
        });
    }
});