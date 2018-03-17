({
  doInit: function(component, event, helper) {
    var dataService = {
      doSomething: $A.getCallback(function(callback) {
        var action = component.get('c.doSomething');
        action.setCallback(this, function(a) {
          var result = a.getReturnValue();
          callback(result);
        });
        $A.enqueueAction(action, false);
      })
    };
    var root = component.find('root').getElement();
    window.App.init(root, dataService);
  }
})
