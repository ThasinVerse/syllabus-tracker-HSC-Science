(function(){
  var bn=function(n){return String(n).replace(/\d/g,function(d){return '০১২৩৪৫৬৭৮৯'[d]})};
  var STAGES=['পড়া','অনুশীলন','রিভিশন'];
  var SUBJECTS=[
    {id:'phy',name:'পদার্থবিজ্ঞান',groups:[
      {n:'১ম পত্র',ch:['ভৌত জগৎ ও পরিমাপ','ভেক্টর','গতিবিদ্যা','নিউটনিয়ান বলবিদ্যা','কাজ, শক্তি ও ক্ষমতা','মহাকর্ষ ও অভিকর্ষ','পদার্থের গাঠনিক ধর্ম','পর্যাবৃত্ত গতি','তরঙ্গ','আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব']},
      {n:'২য় পত্র',ch:['তাপগতিবিদ্যা','স্থির তড়িৎ','চল তড়িৎ','তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব','তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ','জ্যামিতিক আলোকবিজ্ঞান','ভৌত আলোকবিজ্ঞান','আধুনিক পদার্থবিজ্ঞানের সূচনা','পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান','সেমিকন্ডাক্টর ও ইলেকট্রনিক্স','জ্যোতির্বিজ্ঞান']}
    ]},
    {id:'chem',name:'রসায়ন',groups:[
      {n:'১ম পত্র',ch:['ল্যাবরেটরির নিরাপদ ব্যবহার','গুণগত রসায়ন','মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন','রাসায়নিক পরিবর্তন','কর্মমুখী রসায়ন']},
      {n:'২য় পত্র',ch:['পরিবেশ রসায়ন','জৈব রসায়ন','পরিমাণগত রসায়ন','তড়িৎ রসায়ন','অর্থনৈতিক রসায়ন']}
    ]},
    {id:'math',name:'উচ্চতর গণিত',groups:[
      {n:'১ম পত্র',ch:['ম্যাট্রিক্স ও নির্ণায়ক','ভেক্টর','সরলরেখা','বৃত্ত','বিন্যাস ও সমাবেশ','ত্রিকোণমিতিক অনুপাত','সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত','ফাংশন ও ফাংশনের লেখচিত্র','অন্তরীকরণ','যোগজীকরণ']},
      {n:'২য় পত্র',ch:['বাস্তব সংখ্যা ও অসমতা','যোগাশ্রয়ী প্রোগ্রাম','জটিল সংখ্যা','বহুপদী ও বহুপদী সমীকরণ','দ্বিপদী বিস্তৃতি','কনিক','বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ','স্থিতিবিদ্যা','সমতলে বস্তুকণার গতি','বিস্তার পরিমাপ ও সম্ভাবনা']}
    ]},
    {id:'bio',name:'জীববিজ্ঞান',groups:[
      {n:'১ম পত্র (উদ্ভিদবিজ্ঞান)',ch:['কোষ ও এর গঠন','কোষ বিভাজন','কোষ রসায়ন','অণুজীব','শৈবাল ও ছত্রাক','ব্রায়োফাইটা ও টেরিডোফাইটা','নগ্নবীজী ও আবৃতবীজী উদ্ভিদ','টিস্যু ও টিস্যুতন্ত্র','উদ্ভিদ শারীরতত্ত্ব','উদ্ভিদ প্রজনন','জীবপ্রযুক্তি','জীবের পরিবেশ, বিস্তার ও সংরক্ষণ']},
      {n:'২য় পত্র (প্রাণিবিজ্ঞান)',ch:['প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস','প্রাণীর পরিচিতি','পরিপাক ও শোষণ','রক্ত ও সঞ্চালন','গ্যাসীয় বিনিময়','বর্জ্য ও নিষ্কাশন','চলন ও অঙ্গচালনা','সমন্বয় ও নিয়ন্ত্রণ','মানব জীবনের ধারাবাহিকতা','মানবদেহের প্রতিরক্ষা','জীনতত্ত্ব ও বিবর্তন','প্রাণীর আচরণ']}
    ]},
    {id:'ban',name:'বাংলা',groups:[
      {n:'১ম পত্র',ch:['গদ্য','কবিতা','উপন্যাস','নাটক','ছোটগল্প']},
      {n:'২য় পত্র',ch:['ধ্বনি ও বর্ণ','শব্দ ও পদ','বাক্য ও বাগধারা','বানান ও অশুদ্ধি সংশোধন','সারাংশ ও সারমর্ম','ভাব-সম্প্রসারণ','প্রতিবেদন ও চিঠিপত্র','প্রবন্ধ রচনা']}
    ]},
    {id:'eng',name:'ইংরেজি',groups:[
      {n:'1st Paper',ch:['Seen Comprehension','Unseen Comprehension','Vocabulary & Word Meaning','Completing Story & Dialogue','Summary & Gap Filling']},
      {n:'2nd Paper',ch:['Parts of Speech','Tense & Right Form of Verbs','Voice & Narration','Sentence Transformation','Prepositions & Connectors','Paragraph & Letter Writing','Report, CV & Composition']}
    ]},
    {id:'ict',name:'ICT',groups:[
      {n:'পূর্ণ সিলেবাস',ch:['তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্বগ্রাম','কমিউনিকেশন সিস্টেমস ও কম্পিউটার নেটওয়ার্কিং','সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস','ওয়েব ডিজাইন পরিচিতি ও এইচটিএমএল','প্রোগ্রামিং ভাষা','ডেটাবেজ ম্যানেজমেন্ট সিস্টেম']}
    ]}
  ];

  var KEY='hsc-science-tracker-v1';
  var S={done:{},star:{},custom:{},exam:'',log:{}};
  try{var raw=localStorage.getItem(KEY);if(raw){var p=JSON.parse(raw);if(p&&typeof p==='object'){for(var k in S){if(p[k]!==undefined)S[k]=p[k]}}}}catch(e){}
  var current='phy',confirmReset=false;

  function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
  function dayKey(d){d=d||new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

  function chapters(s){
    var out=[];
    s.groups.forEach(function(g,gi){
      g.ch.forEach(function(name,ci){out.push({id:s.id+'-'+gi+'-'+ci,gi:gi,name:name,custom:false})});
      (S.custom[s.id]||[]).forEach(function(c){if(c.gi===gi)out.push({id:c.id,gi:gi,name:c.name,custom:true})});
    });
    return out;
  }
  function stages(id){return S.done[id]||[0,0,0]}
  function chDone(id){var d=stages(id);return d[0]+d[1]+d[2]}
  function stat(list){
    var done=0,full=0;
    list.forEach(function(c){var n=chDone(c.id);done+=n;if(n===3)full++});
    var total=list.length*3;
    return {done:done,total:total,full:full,count:list.length,pct:total?Math.round(done/total*100):0};
  }
  function allStat(){
    var all=[];SUBJECTS.forEach(function(s){all=all.concat(chapters(s))});
    return stat(all);
  }
  function streak(){
    var d=new Date(),n=0;
    if(!(S.log[dayKey(d)]>0))d.setDate(d.getDate()-1);
    while(S.log[dayKey(d)]>0){n++;d.setDate(d.getDate()-1)}
    return n;
  }
  function daysLeft(){
    if(!S.exam)return null;
    var p=S.exam.split('-');if(p.length!==3)return null;
    var t=new Date(+p[0],+p[1]-1,+p[2]);var now=new Date();now=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    return Math.round((t-now)/86400000);
  }

  var ICON_CHECK='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.8"/></svg>';
  var ICON_STAR='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8z"/></svg>';
  var ICON_DEL='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  function renderHero(){
    var st=allStat(),C=2*Math.PI*52,off=C*(1-st.pct/100);
    var dl=daysLeft(),cd;
    if(dl===null){cd='<div class="big">তারিখ দাওনি</div>'}
    else if(dl>0){cd='<div class="big">'+bn(dl)+'<small>দিন বাকি</small></div>'}
    else if(dl===0){cd='<div class="big">আজই পরীক্ষা</div>'}
    else{cd='<div class="big">পরীক্ষার তারিখ পেরিয়েছে</div>'}
    var today=S.log[dayKey()]||0;
    document.getElementById('hero').innerHTML=
      '<svg class="ring" width="116" height="116" viewBox="0 0 120 120" role="img" aria-label="মোট অগ্রগতি '+bn(st.pct)+' শতাংশ">'+
      '<defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38d0ff"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>'+
      '<circle cx="60" cy="60" r="52" fill="none" stroke="#232d52" stroke-width="10"/>'+
      '<circle cx="60" cy="60" r="52" fill="none" stroke="url(#rg)" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+C.toFixed(2)+'" stroke-dashoffset="'+off.toFixed(2)+'" transform="rotate(-90 60 60)"/>'+
      '<text x="60" y="68" text-anchor="middle" fill="#e9edff" font-size="26" font-weight="800">'+bn(st.pct)+'%</text></svg>'+
      '<div class="hero-info">'+
        '<div class="count"><span class="lbl">HSC পরীক্ষা</span>'+cd+
        '<label class="lbl" for="examDate">পরীক্ষা শুরুর তারিখ</label>'+
        '<input class="date" type="date" id="examDate" value="'+esc(S.exam)+'"></div>'+
        '<div class="stats">'+
          '<div class="stat"><b>'+bn(st.full)+'/'+bn(st.count)+'</b><span>অধ্যায় শেষ</span></div>'+
          '<div class="stat"><b>'+bn(today)+'</b><span>আজকের ধাপ</span></div>'+
          '<div class="stat"><b>'+bn(streak())+' দিন</b><span>ধারাবাহিক</span></div>'+
        '</div>'+
      '</div>';
  }

  function renderTabs(){
    var el=document.getElementById('tabs'),sl=el.scrollLeft;
    var starCount=Object.keys(S.star).filter(function(k){return S.star[k]}).length;
    var h=SUBJECTS.map(function(s){
      var st=stat(chapters(s));
      return '<button class="tab" role="tab" id="tab-'+s.id+'" data-tab="'+s.id+'" aria-selected="'+(current===s.id)+'"><span class="nm">'+s.name+'</span><span class="pc">'+bn(st.pct)+'% শেষ</span></button>';
    }).join('');
    h+='<button class="tab" role="tab" id="tab-star" data-tab="star" aria-selected="'+(current==='star')+'"><span class="nm">আবার পড়ব</span><span class="pc">'+bn(starCount)+'টি চিহ্নিত</span></button>';
    el.innerHTML=h;el.scrollLeft=sl;
  }

  function card(c,subjectName){
    var d=stages(c.id),n=d[0]+d[1]+d[2],on=!!S.star[c.id];
    var h='<article class="ch'+(n===3?' full':'')+'"><div class="ch-top"><h4>'+(subjectName?'<small>'+subjectName+'</small>':'')+esc(c.name)+'</h4><div class="tools">'+
      '<button class="icon'+(on?' on':'')+'" data-act="star" data-id="'+c.id+'" aria-pressed="'+on+'" aria-label="আবার পড়ার জন্য চিহ্নিত করো">'+(on?ICON_STAR.replace('fill="none"','fill="currentColor"'):ICON_STAR)+'</button>'+
      (c.custom?'<button class="icon" data-act="del" data-id="'+c.id+'" aria-label="এই অধ্যায় মুছে ফেলো">'+ICON_DEL+'</button>':'')+
      '</div></div><div class="stages">';
    for(var i=0;i<3;i++){
      h+='<button class="stg" data-act="stage" data-id="'+c.id+'" data-i="'+i+'" aria-pressed="'+(d[i]===1)+'">'+ICON_CHECK+STAGES[i]+'</button>';
    }
    h+='</div><div class="bar" aria-hidden="true"><i style="width:'+Math.round(n/3*100)+'%"></i></div></article>';
    return h;
  }

  function renderPanel(){
    var el=document.getElementById('panel'),h='';
    if(current==='star'){
      var items=[];
      SUBJECTS.forEach(function(s){chapters(s).forEach(function(c){if(S.star[c.id])items.push({c:c,s:s.name})})});
      if(!items.length){h='<div class="empty">এখনো কিছু চিহ্নিত করোনি। কোনো অধ্যায়ের তারা চাপলে সেটা এখানে জমা হবে, যাতে পরে আবার পড়তে পারো।</div>'}
      else{h='<div class="list">'+items.map(function(x){return card(x.c,x.s)}).join('')+'</div>'}
    }else{
      var s=SUBJECTS.filter(function(x){return x.id===current})[0]||SUBJECTS[0];
      var list=chapters(s);
      s.groups.forEach(function(g,gi){
        var inG=list.filter(function(c){return c.gi===gi}),st=stat(inG);
        h+='<section><div class="grp-h"><h3>'+g.n+'</h3><span>'+bn(st.full)+'/'+bn(st.count)+' অধ্যায় · '+bn(st.pct)+'%</span></div><div class="list">'+inG.map(function(c){return card(c)}).join('')+'</div></section>';
      });
      var opts=s.groups.map(function(g,gi){return '<option value="'+gi+'">'+g.n+'</option>'}).join('');
      h+='<form class="add" id="addForm"><h3>নতুন অধ্যায় যোগ করো</h3><p class="note lbl">তোমার বইয়ের সাথে মিলিয়ে নিতে চাইলে নিজের অধ্যায় বা টপিক এখানে যোগ করো।</p>'+
        '<div class="row"><input class="field" id="newName" type="text" placeholder="অধ্যায়ের নাম" autocomplete="off" aria-label="অধ্যায়ের নাম">'+
        '<select class="field" id="newGroup" aria-label="কোন পত্র">'+opts+'</select></div>'+
        '<div class="row"><button class="btn" type="submit">যোগ করো</button></div></form>';
    }
    el.innerHTML=h;
  }

  function renderFoot(){
    var el=document.getElementById('foot');
    if(confirmReset){
      el.innerHTML='<p class="note">সব টিক, চিহ্ন আর তারিখ মুছে যাবে। নিশ্চিত?</p><div class="row"><button class="btn danger" data-act="reset-yes">হ্যাঁ, সব মুছে ফেলো</button><button class="btn ghost" data-act="reset-no">না, থাক</button></div>';
    }else{
      el.innerHTML='<p class="note">তোমার অগ্রগতি এই ফোনের ব্রাউজারেই সেভ থাকে। অন্য ফোনে গেলে আলাদা হিসাব শুরু হবে।</p><button class="btn ghost" data-act="reset">সব নতুন করে শুরু করো</button>';
    }
  }

  function renderAll(){renderHero();renderTabs();renderPanel();renderFoot()}

  function refocus(sel){var e=sel&&document.querySelector(sel);if(e)e.focus()}

  document.addEventListener('click',function(ev){
    var t=ev.target.closest('[data-tab],[data-act]');if(!t)return;
    if(t.dataset.tab){current=t.dataset.tab;renderTabs();renderPanel();return}
    var a=t.dataset.act,id=t.dataset.id,sel=null;
    if(a==='stage'){
      var i=+t.dataset.i,d=S.done[id]||(S.done[id]=[0,0,0]);
      d[i]=d[i]?0:1;
      var k=dayKey();S.log[k]=Math.max(0,(S.log[k]||0)+(d[i]?1:-1));
      sel='[data-act="stage"][data-id="'+id+'"][data-i="'+i+'"]';
    }else if(a==='star'){
      if(S.star[id])delete S.star[id];else S.star[id]=1;
      sel='[data-act="star"][data-id="'+id+'"]';
    }else if(a==='del'){
      Object.keys(S.custom).forEach(function(sid){S.custom[sid]=S.custom[sid].filter(function(c){return c.id!==id})});
      delete S.done[id];delete S.star[id];
    }else if(a==='reset'){confirmReset=true;renderFoot();return}
    else if(a==='reset-no'){confirmReset=false;renderFoot();return}
    else if(a==='reset-yes'){S={done:{},star:{},custom:{},exam:'',log:{}};confirmReset=false}
    else return;
    save();renderAll();refocus(sel);
  });

  document.addEventListener('change',function(ev){
    if(ev.target.id==='examDate'){S.exam=ev.target.value||'';save();renderHero()}
  });

  document.addEventListener('submit',function(ev){
    if(ev.target.id!=='addForm')return;
    ev.preventDefault();
    var name=document.getElementById('newName').value.trim();
    if(!name)return;
    var gi=+document.getElementById('newGroup').value||0;
    var list=S.custom[current]||(S.custom[current]=[]);
    list.push({id:'c-'+Date.now().toString(36),gi:gi,name:name});
    save();renderAll();
  });

  renderAll();
})();
