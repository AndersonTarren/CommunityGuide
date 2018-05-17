({
    doInit : function(component, event, helper){

        var guideData = component.get('v.guideData');
        if(guideData){
            var thisData = JSON.parse(guideData);
            component.set('v.data', thisData);
            window.setTimeout(
                $A.getCallback(function() {
                    helper.initialize(component);
                }), 2000
            );
        }

    },
    didClick : function(component, event, helper){
        component.set('v.step', component.get('v.step')+ 1);
        helper.adjustPosition(component);
    },
    closeFly : function(component, event, helper){
        component.set('v.dispClass', 'hide');
    }

})