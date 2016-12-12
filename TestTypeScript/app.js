var CreateContent = (function () {
    function CreateContent(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        this.incre = 0;
        this.start();
    }
    CreateContent.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 200);
        this.appendDiv();
    };
    CreateContent.prototype.appendDiv = function () {
        this.div = document.createElement('div');
        this.element.appendChild(this.div);
    };
    CreateContent.prototype.innerDiv = function (person) {
        if (this.incre <= 10) {
            this.div.innerHTML += person + this.incre + " ";
            this.incre++;
        }
        else {
            this.incre = 0;
        }
    };
    CreateContent.prototype.startAappendDiv = function () {
        var _this = this;
        this.timerDiv = setInterval(function () { return _this.innerDiv("Hello World "); }, 2000);
    };
    CreateContent.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return CreateContent;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var createContent = new CreateContent(el);
    createContent.startAappendDiv();
};
//# sourceMappingURL=app.js.map