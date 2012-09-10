
window.InstanceView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Instance View');
    },

    render:function () {
        $(this.el).html(this.template());

        return this;
    }
});

window.InstancesView = Backbone.View.extend({

	el: $('#content'),

    initialize:function () {
        console.log('Initializing Instances View');
        this.collection.bind("reset", this.render, this);
    },

    render:function () {
    	$(this.el).html(this.template());
    //	$(this.el).empty();

        _.each(this.collection.models, function (instance, index) {
        	if (index % 4 == 0) {
        		$('#instances-grid').append('<div class="row-fluid"></div>');
        	}
        	$('#instances-grid > .row-fluid:last').append(new InstanceItemView({model:instance}).render().el);
        //    $(this.el).append(new InstanceItemView({model:instance}).render().el);
        }, this);

        // we have to do this using bootstrap tooltip
        $('.tip-bottom').tooltip({ placement: 'bottom' });	

        return this;
    }
});

window.InstanceItemView = Backbone.View.extend({

//	template: _.template($('#tpl-instance-item').html()),

	className:'span3',

    initialize:function () {
        console.log('Initializing Instance Item View');
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});