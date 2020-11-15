function Editor(){

    this.InitHtml = new InitHtml()
    this.FontControl = new FontControl()
    this.StateControl = new StateControl()

}

function InitHtml() {

}

InitHtml.prototype.initStyles = function(){}
InitHtml.prototype.readerDom = function(){}
function FontControl() {

}
FontControl.prototype.changeColor = function(){}
FontControl.prototype.changeFontSize = function(){}
function StateControl() {

}
StateControl.prototype.saveState = function(){}
StateControl.prototype.stateBack = function(){}
StateControl.prototype.stateGo = function(){}

window.Editor = Editor