const $=s=>document.querySelector(s);
const nav=$('#nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>60));
$('#burger').onclick=()=>$('#links').classList.toggle('open');
document.querySelectorAll('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
$('#y').textContent=new Date().getFullYear();

// temperature gauge: changes every 2 seconds
(function(){
const MIN=-25,MAX=10,needle=$('#needle'),out=$('#temp'),ticks=$('#ticks');
for(let i=0;i<=7;i++){const a=(-90+i*(180/7))*Math.PI/180,x1=100+Math.sin(a)*70,y1=100-Math.cos(a)*70,x2=100+Math.sin(a)*60,y2=100-Math.cos(a)*60;
ticks.insertAdjacentHTML('beforeend',`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>`)}
let t=-18;
function set(v){t=Math.max(MIN,Math.min(MAX,v));needle.style.transform='rotate('+(((t-MIN)/(MAX-MIN))*180-90)+'deg)';out.textContent=Math.round(t)}
set(t);
setInterval(()=>set(t+(Math.random()*14-7)),2000);
})();

// reviews slider
const tr=$('#track'),rd=$('#rd'),n=tr.children.length;let r=0,rt;
for(let i=0;i<n;i++){const b=document.createElement('button');b.onclick=()=>rg(i);rd.appendChild(b)}
function rg(i){r=(i+n)%n;tr.style.transform='translateX(-'+r*100+'%)';[...rd.children].forEach((b,k)=>b.classList.toggle('on',k===r));clearInterval(rt);rt=setInterval(()=>rg(r+1),5000)}rg(0);

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// form -> whatsapp
$('#f').onsubmit=e=>{e.preventDefault();const t=`Hello Al Hamza Cool Service,%0AName: ${encodeURIComponent($('#n').value)}%0APhone: ${encodeURIComponent($('#p').value)}%0AService: ${encodeURIComponent($('#s').value)}%0AProblem: ${encodeURIComponent($('#m').value)}`;window.open('https://wa.me/923111224227?text='+t,'_blank')};