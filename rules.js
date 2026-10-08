(function(root){
const rules={limit:level=>Math.max(1,Math.floor(10*Math.pow(.8,level-1))),points:level=>{let seed=level*971;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};return Array.from({length:5},(_,i)=>({x:125+i*235+(rand()-.5)*65,y:110+rand()*450,r:32,kind:(i+level)%5}));},hit:(points,x,y,found)=>points.findIndex((p,i)=>!found.has(i)&&Math.hypot(p.x-x,p.y-y)<=p.r+10)};
if(typeof module!=='undefined')module.exports=rules;else root.Rules=rules;
})(globalThis);
