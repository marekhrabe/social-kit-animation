/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'logo',
            type:'group',
            rect:['126px','38px','420px','268px','auto','auto'],
            transform:[],
            c:[
            {
               id:'shadow',
               type:'image',
               rect:['12px','242px','296px','27px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
            },
            {
               id:'back',
               type:'image',
               rect:['0px','94px','319px','155px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"back.png",'0px','0px']
            },
            {
               id:'twitter',
               type:'image',
               rect:['17px','-34px','126px','220px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"twitter.png",'0px','0px'],
               transform:[]
            },
            {
               id:'pencil',
               type:'image',
               rect:['-64px','-3px','127px','175px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"pencil.png",'0px','0px'],
               transform:[]
            },
            {
               id:'ruler',
               type:'image',
               rect:['-126px','72px','223px','150px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"ruler.png",'0px','0px'],
               transform:[]
            },
            {
               id:'facebook',
               type:'image',
               rect:['222px','-16px','71px','202px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"facebook.png",'0px','0px'],
               transform:[]
            },
            {
               id:'swatches',
               type:'image',
               rect:['196px','26px','224px','223px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"swatches.png",'0px','0px'],
               transform:[[],['-135']]
            },
            {
               id:'front',
               type:'image',
               rect:['0px','118px','319px','140px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"front.png",'0px','0px']
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_logo}": [
            ["style", "top", '38px'],
            ["transform", "scaleY", '1'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1'],
            ["style", "height", '268px'],
            ["style", "left", '126px'],
            ["style", "width", '420px']
         ],
         "${_twitter}": [
            ["style", "-webkit-transform-origin", [24,102], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [24,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [24,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [24,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [24,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-34px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '78deg']
         ],
         "${_front}": [
            ["style", "left", '0px'],
            ["style", "top", '118px']
         ],
         "${_pencil}": [
            ["style", "-webkit-transform-origin", [86,109], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86,109],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86,109],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86,109],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86,109],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-3px'],
            ["style", "left", '-64px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_swatches}": [
            ["style", "top", '22px'],
            ["transform", "rotateZ", '-127deg'],
            ["style", "height", '198px'],
            ["style", "-webkit-transform-origin", [25,84], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [25,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [25,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [25,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [25,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '227px'],
            ["style", "width", '190px']
         ],
         "${_facebook}": [
            ["style", "-webkit-transform-origin", [74,102], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [74,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [74,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [74,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [74,102],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-16px'],
            ["style", "left", '222px'],
            ["transform", "rotateZ", '-88deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(207,4,36,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '320px'],
            ["style", "width", '550px']
         ],
         "${_shadow}": [
            ["style", "top", '242px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '27px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '12px'],
            ["style", "width", '296px']
         ],
         "${_back}": [
            ["style", "left", '0px'],
            ["style", "top", '94px']
         ],
         "${_ruler}": [
            ["style", "-webkit-transform-origin", [77,78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [77,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [77,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [77,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [77,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '72px'],
            ["style", "left", '-126px'],
            ["transform", "rotateZ", '137deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid53", tween: [ "transform", "${_pencil}", "rotateZ", '0deg', { fromValue: '118deg'}], position: 383, duration: 901, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "transform", "${_pencil}", "rotateZ", '109deg', { fromValue: '0deg'}], position: 3682, duration: 1500, easing: "easeInQuad" },
            { id: "eid47", tween: [ "transform", "${_swatches}", "rotateZ", '0deg', { fromValue: '-127deg'}], position: 250, duration: 966, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "transform", "${_swatches}", "rotateZ", '-133deg', { fromValue: '0deg'}], position: 3919, duration: 1331, easing: "easeInQuad" },
            { id: "eid51", tween: [ "transform", "${_ruler}", "rotateZ", '0deg', { fromValue: '137deg'}], position: 276, duration: 830, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "transform", "${_ruler}", "rotateZ", '139deg', { fromValue: '0deg'}], position: 3000, duration: 1588, easing: "easeInQuad" },
            { id: "eid55", tween: [ "transform", "${_twitter}", "rotateZ", '0deg', { fromValue: '78deg'}], position: 423, duration: 911, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "transform", "${_twitter}", "rotateZ", '81deg', { fromValue: '0deg'}], position: 3500, duration: 1088, easing: "easeInQuad" },
            { id: "eid49", tween: [ "transform", "${_facebook}", "rotateZ", '0deg', { fromValue: '-88deg'}], position: 347, duration: 833, easing: "easeOutQuad" },
            { id: "eid93", tween: [ "transform", "${_facebook}", "rotateZ", '-83deg', { fromValue: '0deg'}], position: 3608, duration: 1142, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "socialkit");
