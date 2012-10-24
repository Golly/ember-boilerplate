/******************************************************************************
* Notification App
******************************************************************************/
Notification = Em.Application.create({
        notify: function(content, state, timeout) {
            var view, timeout, model;
            timeout = timeout || 3000;
            
            model = Notification.notification.create({
                content: content,
                state: state
            });
            
            view = Notification.notificationView.create({
			notification: model
            }).appendTo("#notification");
            
            setTimeout(function () {
                view.$().fadeOut(function () {
                        view.remove();
                });
            }, timeout);
        }
});

Notification.notification = Em.Object.extend({
        content: "",
        state: "info"
});

Notification.notificationView = Em.View.extend({
        templateName: "notification-center",
        cssState: function () {
                return "notification-" + this.notification.get("state");
        }.property()
});

/**************************
* Application
**************************/

App = Em.Application.create({ //change App name   
        ready:function(){ //fire when DOM is ready
            Notification.notify('nejaka veta', 'info', 2000);
        }
}); 

/**************************
* Models
**************************/


/**************************
* Views
**************************/


/**************************
* Controllers
**************************/
