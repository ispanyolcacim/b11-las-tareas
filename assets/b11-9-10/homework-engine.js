(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.B11Homework=api;})(typeof window==='object'?window:this,function(){
'use strict';
function stats(questions,answers){let correct=0,wrong=0;questions.forEach((q,i)=>{const a=answers[i];if(a===null||a===undefined)return;if(a===q.a)correct++;else wrong++;});return{correct,wrong,blank:questions.length-correct-wrong,answered:correct+wrong,score:correct*2};}
function payload(config,name,questions,answers){const s=stats(questions,answers);return{ogrenci:name,grup:config.GROUPS[name]||'B1.1',odev:config.ODEV_ADI,puan:s.score,dogru:s.correct,yanlis:s.wrong};}
return{stats,payload};
});
