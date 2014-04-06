/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {






















































Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
// insert code to be run at timeline play here
});
//Edge binding end





})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'rainDrop'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 899, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play(0);
// insert code here
});
//Edge binding end











})("rainDrop");
//Edge symbol end:'rainDrop'

//=========================================================

//Edge symbol: 'leftCloud'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
sym.playReverse();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.play();
// insert code here
});
//Edge binding end













})("leftCloud");
//Edge symbol end:'leftCloud'

//=========================================================

//Edge symbol: 'middleCloud'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.play();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
sym.playReverse();
// insert code here
});
//Edge binding end





Symbol.bindElementAction(compId, symbolName, "${_middleCloud}", "click", function(sym, e) {
sym.getSymbol("graphicsMenu").play
});
//Edge binding end







})("middleCloud");
//Edge symbol end:'middleCloud'

//=========================================================

//Edge symbol: 'rightCloud'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
sym.playReverse();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.play();
// insert code here
});
//Edge binding end


Symbol.bindElementAction(compId, symbolName, "${_rightCloud}", "click", function(sym, e) {
sym.getSymbol("contactInfo").play();
});
//Edge binding end










})("rightCloud");
//Edge symbol end:'rightCloud'

//=========================================================

//Edge symbol: 'rectangle'
(function(symbolName) {









})("rectangle");
//Edge symbol end:'rectangle'

//=========================================================

//Edge symbol: 'fineArtsMenu'
(function(symbolName) {








})("fineArtsMenu");
//Edge symbol end:'fineArtsMenu'

})(jQuery, AdobeEdge, "EDGE-228988727");