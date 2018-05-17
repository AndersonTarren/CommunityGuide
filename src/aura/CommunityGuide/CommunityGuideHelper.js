({
    initialize : function(component){
        if(this.handleCookie(component)){
            this.adjustPosition(component);
        }
    },
    adjustPosition : function(component){
        var thisStep = component.get('v.step');
        var thisData = component.get('v.data');

        if(thisData && thisData[thisStep]){
            var dataStep = thisData[thisStep];
            component.set('v.disp', dataStep);
            component.set('v.dispClass', '');
            component.set('v.flagClass', dataStep.flag);
            var theFly = component.find('theFly').Ye;

            if(dataStep.isWelcome){
                theFly.style.top = (window.innerHeight / 2) - 100 + 'px';
                theFly.style.left = (window.innerWidth / 2) - 160 + 'px';
            } else{
                var thisTarget = document.getElementsByClassName(dataStep.target);
                if(thisTarget.length){
                    thisObj = thisTarget[0];
                    theFly.style.top = this.getOffset(thisObj).top + dataStep.offsetTop + 'px';
                    theFly.style.left = this.getOffset(thisObj).left + dataStep.offsetLeft + 'px';
                }
            }
            if(!this.checkVisible(theFly)){
                theFly.scrollIntoView(true);
                window.scrollBy(0, -10);
            }

        } else{
            component.set('v.dispClass', 'hide');
        }
    },
    getOffset : function(el){
        //solution from SO.
        el = el.getBoundingClientRect();
        return {
            left: el.left + window.scrollX,
            top: el.top + window.scrollY
        }
    },
    checkVisible : function(elm) {
        //solution from SO.
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    },
    handleCookie : function(component){
        if(!this.getCookie()){
            this.setCookie();
            return true;
        } else{
            component.set('v.dispClass', 'hide');
            return false;
        }
    },
    getCookie : function(){
        var name = 'CommGuide' + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    setCookie : function(){
        var d = new Date();
        document.cookie = 'CommGuide' + "=" + true + ";";
    }

})