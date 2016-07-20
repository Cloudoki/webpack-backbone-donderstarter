var BaseView = Backbone.View.extend ({

	alert: function(type, text) {

		Application.RootView.showModal('notification_modal', {type: type+'-modal', body: text});
	},

	errorAlert: function(text) {
		this.alert('error', text);
	}
});

module.exports = BaseView;