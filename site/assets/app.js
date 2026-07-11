/* Dr. ColorChip MVP - color finder demo (sample data) */
(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];

  /* inject icon sprite */
  fetch('assets/icons.svg').then(r=>r.text()).then(t=>{
    const d=document.createElement('div');d.style.display='none';d.innerHTML=t;document.body.prepend(d);
  });

  /* ---- color math ---- */
  function hexToRgb(h){h=h.replace('#','');return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
  function toHex(r,g,b){const c=x=>('0'+Math.max(0,Math.min(255,Math.round(x))).toString(16)).slice(-2);return'#'+c(r)+c(g)+c(b);}
  function shade(hex,p){const[r,g,b]=hexToRgb(hex);const t=p<0?0:255;p=Math.abs(p);return toHex(r+(t-r)*p,g+(t-g)*p,b+(t-b)*p);}
  function lum(hex){const[r,g,b]=hexToRgb(hex);return(0.2126*r+0.7152*g+0.0722*b)/255;}

  function swatchBg(c){
    const b=c.hex,L=shade(b,.30),D=shade(b,-.22),D2=shade(b,-.34);
    if(c.finish==='metallic')return`linear-gradient(125deg,${L} 0%,${b} 44%,${D} 100%)`;
    if(c.finish==='pearl')return`linear-gradient(125deg,${shade(b,.42)} 0%,${b} 46%,${D} 100%)`;
    if(c.finish==='tricoat')return`linear-gradient(125deg,${L} 0%,${b} 38%,${D2} 100%)`;
    return b;
  }
  function applySwatch(el,c){el.className=(el.dataset.base||'swatch')+' finish-'+c.finish;el.style.background=swatchBg(c);if(lum(c.hex)>.82)el.classList.add('light-chip');}
  const FIN={solid:'Solid',metallic:'Metallic',pearl:'Pearl',tricoat:'Tri-Coat',matte:'Matte'};
  const finLabel=f=>FIN[f]||f;

  /* ---- search ---- */
  let COLORS=[];
  function score(c,q){
    const code=c.code.toLowerCase(),mk=c.make.toLowerCase(),nm=c.name.toLowerCase();
    if(code===q)return 100; if(code.startsWith(q))return 92;
    if(mk===q)return 84; if(mk.startsWith(q))return 74;
    if(nm.startsWith(q))return 66;
    if(nm.split(/\s+/).some(w=>w.startsWith(q)))return 50;
    if(code.includes(q))return 46; if(nm.includes(q))return 42; if(mk.includes(q))return 38;
    return 0;
  }
  function run(qraw){
    const q=(qraw||'').trim().toLowerCase();
    const grid=$('#results'),meta=$('#resultsMeta'),sec=$('#resultsSection');
    if(!q){grid.innerHTML='';meta.style.display='none';sec.classList.remove('on');return;}
    const hits=COLORS.map(c=>[score(c,q),c]).filter(x=>x[0]>0)
      .sort((a,b)=>b[0]-a[0]||a[1].make.localeCompare(b[1].make)).slice(0,30).map(x=>x[1]);
    sec.classList.add('on');meta.style.display='flex';
    $('#resCnt').innerHTML=`<b>${hits.length}</b> match${hits.length===1?'':'es'} for &ldquo;${qraw.trim()}&rdquo;`;
    grid.innerHTML='';
    if(!hits.length){grid.innerHTML='<div class="empty">No sample colors match that yet. Try <b>Audi</b>, <b>Toyota</b>, or code <b>CVLM</b>.</div>';return;}
    hits.forEach(c=>grid.appendChild(card(c)));
  }
  function card(c){
    const el=document.createElement('div');el.className='ccard';
    const sw=document.createElement('div');applySwatch(sw,c);
    const body=document.createElement('div');body.className='cbody';
    body.innerHTML=`<div class="nm">${c.name}</div><div class="mk">${c.make}${c.years?' · '+c.years:''}</div>
      <div class="cmeta"><span class="code">${c.code}</span><span class="fin" data-f="${c.finish}"><span class="swz"></span>${finLabel(c.finish)}</span></div>`;
    el.append(sw,body);
    el.addEventListener('click',()=>select(c));
    return el;
  }

  /* ---- VIN decode (progressive enhancement, real NHTSA API) ---- */
  function niceMake(s){return s.split(/[\s-]/).filter(Boolean).map(w=>w.length<=3?w.toUpperCase():w[0].toUpperCase()+w.slice(1).toLowerCase()).join(' ');}
  function decodeVin(v){
    const vin=(v||'').trim().toUpperCase(),b=$('#vinBanner');
    if(vin.length<11){b.style.display='none';return;}
    if(vin.length!==17){b.style.display='flex';b.innerHTML='<svg class="i"><use href="#i-vin"/></svg> A VIN is 17 characters — keep typing…';return;}
    b.style.display='flex';b.innerHTML='<svg class="i"><use href="#i-vin"/></svg> Decoding VIN…';
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`)
      .then(r=>r.json()).then(d=>{
        const R=(d.Results&&d.Results[0])||{};
        const mk=(R.Make||'').trim(),yr=(R.ModelYear||'').trim(),md=(R.Model||'').trim();
        if(!mk){b.innerHTML='<svg class="i"><use href="#i-vin"/></svg> Couldn\'t read that VIN — try the color search.';return;}
        const disp=niceMake(mk),label=[yr,disp,md].filter(Boolean).join(' ');
        b.innerHTML=`<svg class="i"><use href="#i-check"/></svg> Detected&nbsp;<b>${label}</b>&nbsp;— pulling ${disp} colors`;
        tab('search');$('#q').value=disp;run(disp);
        setTimeout(()=>$('#resultsSection').scrollIntoView({behavior:'smooth',block:'start'}),120);
      })
      .catch(()=>{b.innerHTML='<svg class="i"><use href="#i-vin"/></svg> VIN service is offline in this demo — use the color search above.';});
  }

  /* ---- select + cart-attach demo ---- */
  let CART=0;
  function select(c){
    const p=$('#pick');
    const sw=$('#pkSw');sw.dataset.base='sw';applySwatch(sw,c);
    $('#pkName').textContent=c.name;$('#pkMake').textContent=c.make+' · '+finLabel(c.finish);$('#pkCode').textContent=c.code;
    p.classList.add('show');
    $('#pkAdd').onclick=()=>{
      CART++;const cc=$('#cartCount');cc.textContent=CART;cc.style.display='grid';
      p.classList.remove('show');
      toast(`Added: Custom-Mix Kit — code <b>${c.code}</b> attached to the order`);
    };
  }
  function toast(html){const t=$('#toast');t.querySelector('.msg').innerHTML=html;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),3400);}

  /* ---- tabs ---- */
  function tab(which){
    $$('.ftab').forEach(b=>b.classList.toggle('active',b.dataset.tab===which));
    $('#panel-search').style.display=which==='search'?'block':'none';
    $('#panel-vin').style.display=which==='vin'?'block':'none';
    if(which==='search')setTimeout(()=>$('#q').focus(),10);
    if(which==='vin')setTimeout(()=>$('#vin').focus(),10);
  }

  /* ---- quiz ---- */
  const QSTEPS=[
    {q:"What are you fixing?",sub:"Pick the closest match - there's no wrong answer.",opts:[
      {t:"Tiny stone or rock chips",ic:"i-drop",v:"chip"},
      {t:"A scratch or key mark",ic:"i-wrench",v:"scratch"},
      {t:"A bigger scraped area or bumper",ic:"i-car",v:"large"},
      {t:"Honestly, I'm not sure",ic:"i-search",v:"unsure"}]},
    {q:"How do you feel about doing it yourself?",sub:"This helps us pick the easiest option for you.",opts:[
      {t:"Total beginner - keep it simple",ic:"i-spark",v:"beginner"},
      {t:"I've done a small touch-up before",ic:"i-check",v:"some"},
      {t:"I'm a detailer / perfectionist",ic:"i-wrench",v:"pro"}]}
  ];
  let qi=0,qans=[];
  function openQuiz(){qi=0;qans=[];renderQuiz();$('#quizModal').classList.add('show');}
  function closeQuiz(){$('#quizModal').classList.remove('show');}
  function renderQuiz(){
    const el=$('#quizInner');
    if(qi>=QSTEPS.length)return renderResult();
    const s=QSTEPS[qi];
    el.innerHTML=`<div class="qprogress">${QSTEPS.map((_,i)=>`<i class="${i<=qi?'on':''}"></i>`).join('')}</div>
      <div class="qh">${s.q}</div><div class="qsub">${s.sub}</div>
      <div class="qopts">${s.opts.map((o,i)=>`<button class="qopt" data-i="${i}"><span class="qi"><svg class="i"><use href="#${o.ic}"/></svg></span>${o.t}</button>`).join('')}</div>
      ${qi>0?'<button class="qback">&larr; Back</button>':''}`;
    $$('.qopt',el).forEach(b=>b.addEventListener('click',()=>{qans[qi]=s.opts[+b.dataset.i].v;qi++;renderQuiz();}));
    const bk=$('.qback',el);if(bk)bk.addEventListener('click',()=>{qi=Math.max(0,qi-1);renderQuiz();});
  }
  function renderResult(){
    const pro=(qans[0]==='large'||qans[1]==='pro');
    const el=$('#quizInner');
    el.innerHTML=pro
      ? resultCard('Recommended for you','ColorChip Pro - Complete System','For bigger repairs and a near-invisible, body-shop-quality finish. Squirt &amp; Squeegee with SealAct blending, plus clearcoat and prep.','$59.99')
      : resultCard('Perfect for you','ColorChip Lite - Easy Pen &amp; Spray','The simplest way to make that chip or scratch disappear. Exact color match, zero experience needed, done in minutes.','$49.99');
    $('#toResult').addEventListener('click',()=>{closeQuiz();tab('search');document.getElementById('finder').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>$('#q').focus(),450);});
    $('.qback',el).addEventListener('click',()=>{qi=QSTEPS.length-1;renderQuiz();});
  }
  function resultCard(tag,name,desc,price){
    return `<div class="qresult"><span class="rtag">${tag}</span><h3>${name}</h3><p>${desc}</p>
      <div class="rprice">${price}</div>
      <button class="btn btn-orange" id="toResult">Now find your exact color &rarr;</button>
      <button class="qback">&larr; Start over</button></div>`;
  }

  /* ---- boot ---- */
  document.addEventListener('DOMContentLoaded',()=>{
    fetch('assets/colors.json').then(r=>r.json()).then(d=>{COLORS=d;});
    $('#q').addEventListener('input',e=>run(e.target.value));
    $$('.qchip').forEach(ch=>ch.addEventListener('click',()=>{tab('search');$('#q').value=ch.dataset.q;run(ch.dataset.q);}));
    $$('.ftab').forEach(b=>b.addEventListener('click',()=>tab(b.dataset.tab)));
    $('#vin').addEventListener('input',e=>decodeVin(e.target.value));
    $('#pkClose').addEventListener('click',()=>$('#pick').classList.remove('show'));
    $$('.openquiz').forEach(b=>b.addEventListener('click',openQuiz));
    $('#quizClose').addEventListener('click',closeQuiz);
    $('#quizModal').addEventListener('click',e=>{if(e.target.id==='quizModal')closeQuiz();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeQuiz();});
  });
})();
