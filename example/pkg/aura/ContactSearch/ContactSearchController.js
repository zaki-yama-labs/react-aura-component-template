({
  doInit: function(component, event, helper) {
    var dataService = {
      findAll : $A.getCallback(function(callback) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
          var contacts = a.getReturnValue();
          callback(contacts);
        });
        $A.enqueueAction(action, false);
      }),
      findByName : $A.getCallback(function(name, callback) {
        var action = component.get("c.findByName");
        action.setParams({name: name});
        action.setCallback(this, function(a) {
          var contacts = a.getReturnValue();
          callback(contacts);
        });
        $A.enqueueAction(action, false);
      })
    };
    var root = component.find('root').getElement();
    contactSearch.init(root, dataService);
  }
})
