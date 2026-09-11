const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const tabs=document.querySelectorAll('.tabs button');
const cards=document.querySelectorAll('.music-card');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');cards.forEach(card=>{card.hidden=card.dataset.kind!==tab.dataset.filter;if(!card.hidden)card.classList.add('visible')})}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
