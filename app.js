const $=s=>document.querySelector(s);
const nav=$('#nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>60));
$('#burger').onclick=()=>$('#links').classList.toggle('open');
document.querySelectorAll('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
$('#y').textContent=new Date().getFullYear();
// hero slider
const sl=[...document.querySelectorAll('.slide')],hd=$('#hd');let h=0,ht;
sl.forEach((_,i)=>{const b=document.createElement('button');b.onclick=()=>go(i);hd.appendChild(b)});
function go(i){h=(i+sl.length)%sl.length;sl.forEach((s,k)=>s.classList.toggle('active',k===h));[...hd.children].forEach((b,k)=>b.classList.toggle('on',k===h));clearInterval(ht);ht=setInterval(()=>go(h+1),6000)}
$('#hp').onclick=()=>go(h-1);$('#hn').onclick=()=>go(h+1);go(0);
// snow
const sn=$('#snow');for(let i=0;i<22;i++){const e=document.createElement('i');e.textContent='❄';e.style.left=Math.random()*100+'%';e.style.fontSize=8+Math.random()*14+'px';e.style.animationDuration=7+Math.random()*9+'s';e.style.animationDelay=-Math.random()*12+'s';sn.appendChild(e)}
// reviews slider
const tr=$('#track'),rd=$('#rd'),n=tr.children.length;let r=0,rt;
for(let i=0;i<n;i++){const b=document.createElement('button');b.onclick=()=>rg(i);rd.appendChild(b)}
function rg(i){r=(i+n)%n;tr.style.transform='translateX(-'+r*100+'%)';[...rd.children].forEach((b,k)=>b.classList.toggle('on',k===r));clearInterval(rt);rt=setInterval(()=>rg(r+1),5000)}rg(0);
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,t=+el.dataset.n,d=+(el.dataset.d||0),s=el.dataset.s||'';let st=null;
const f=ts=>{st=st||ts;const p=Math.min((ts-st)/1500,1);el.textContent=(t*p).toFixed(d)+(p===1?s:'');if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);co.unobserve(el)}),{threshold:.5});
document.querySelectorAll('[data-n]').forEach(e=>co.observe(e));
// form -> whatsapp
$('#f').onsubmit=e=>{e.preventDefault();const t=`Hello Al Hamza Cool Service,%0AName: ${encodeURIComponent($('#n').value)}%0APhone: ${encodeURIComponent($('#p').value)}%0AService: ${encodeURIComponent($('#s').value)}%0AProblem: ${encodeURIComponent($('#m').value)}`;window.open('https://wa.me/923111224227?text='+t,'_blank')};