// Study Buddy - app.js (minimal, works offline using localStorage)

const $ = id => document.getElementById(id);

// DOM
const timeEl = $('time');
const startBtn = $('start');
const pauseBtn = $('pause');
const resetBtn = $('reset');
const modeEl = $('mode');
const workInput = $('workMinutes');
const shortInput = $('shortMinutes');
const longInput = $('longMinutes');
const taskForm = $('taskForm');
const taskInput = $('taskInput');
const taskList = $('taskList');
const sessionsEl = $('sessions');
const minutesEl = $('minutes');
const resetStatsBtn = $('resetStats');

// Storage keys
const TASKS_KEY = 'studyBuddy:tasks';
const STATS_PREFIX = 'studyBuddy:stats:'; // + YYYY-MM-DD

// Timer state
let timerInterval = null;
let remaining = 25 * 60;
let isRunning = false;
let mode = 'work'; // 'work' | 'short' | 'long'
let completedWorkSessions = 0;

// Utilities
function pad(n){return n.toString().padStart(2,'0')}
function formatTime(sec){return `${pad(Math.floor(sec/60))}:${pad(sec%60)}`}
function todayKey(){const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}

// Tasks
function loadTasks(){try{return JSON.parse(localStorage.getItem(TASKS_KEY)||'[]')}catch(e){return []}}
function saveTasks(tasks){localStorage.setItem(TASKS_KEY,JSON.stringify(tasks))}
function renderTasks(){const tasks=loadTasks();taskList.innerHTML='';tasks.forEach((t,idx)=>{const li=document.createElement('li');li.className=t.done? 'task-done':'';li.innerHTML=`<input type=checkbox ${t.done? 'checked':''} data-idx='${idx}'> <span class='title'></span> <button data-del='${idx}'>Elimina</button>`;li.querySelector('.title').textContent=t.text;taskList.appendChild(li)})}

taskForm.addEventListener('submit',e=>{e.preventDefault();const val=taskInput.value.trim();if(!val) return;const tasks=loadTasks();tasks.push({text:val,done:false});saveTasks(tasks);taskInput.value='';renderTasks();})

taskList.addEventListener('click',e=>{const idx=e.target.dataset.idx;const del=e.target.dataset.del;const tasks=loadTasks();if(typeof idx!=='undefined'){tasks[idx].done=!tasks[idx].done;saveTasks(tasks);renderTasks();}else if(typeof del!=='undefined'){tasks.splice(del,1);saveTasks(tasks);renderTasks();}})

// Stats
function loadStats(){return JSON.parse(localStorage.getItem(STATS_PREFIX+todayKey())||'{"sessions":0,"minutes":0}')} 
function saveStats(s){localStorage.setItem(STATS_PREFIX+todayKey(),JSON.stringify(s))}
function renderStats(){const s=loadStats();sessionsEl.textContent=s.sessions;minutesEl.textContent=s.minutes}

resetStatsBtn.addEventListener('click',()=>{if(confirm('Resettare le statistiche di oggi?')){saveStats({sessions:0,minutes:0});renderStats()}})

// Timer core
function setMode(m){mode=m;modeEl.textContent = m==='work'? 'Work' : (m==='short'?'Short Break':'Long Break');let minutes = (m==='work'? parseInt(workInput.value,10): (m==='short'? parseInt(shortInput.value,10): parseInt(longInput.value,10)));remaining = Math.max(1,minutes)*60;updateTime();}

function updateTime(){timeEl.textContent = formatTime(remaining)}

function tick(){if(remaining<=0){onSessionEnd();return}remaining--;updateTime()}

function onSessionEnd(){// vibrate or alert
 if(navigator.vibrate) navigator.vibrate(400); else alert('Sessione terminata!');
 if(mode==='work'){// increment stats
   const s=loadStats(); const added = Math.max(1, parseInt(workInput.value,10)); s.sessions = (s.sessions||0) + 1; s.minutes = (s.minutes||0) + added; saveStats(s); renderStats(); completedWorkSessions++;
 }
 // auto switch mode
 if(mode==='work'){ if(completedWorkSessions % 4 === 0) setMode('long'); else setMode('short'); }
 else setMode('work');
 // auto start next session? keep stopped to let user choose
 pauseTimer();}

function startTimer(){if(isRunning) return;isRunning=true;startBtn.disabled=true;pauseBtn.disabled=false;timerInterval=setInterval(tick,1000)}
function pauseTimer(){if(!isRunning) return;isRunning=false;startBtn.disabled=false;pauseBtn.disabled=true;clearInterval(timerInterval);timerInterval=null}
function resetTimer(){pauseTimer();setMode('work')}

startBtn.addEventListener('click',startTimer);pauseBtn.addEventListener('click',pauseTimer);resetBtn.addEventListener('click',()=>{if(confirm('Reimpostare il timer?')) resetTimer();})

// Settings persist
[workInput,shortInput,longInput].forEach(inp=>{inp.addEventListener('change',()=>{localStorage.setItem('studyBuddy:settings',JSON.stringify({work:workInput.value,short:shortInput.value,long:longInput.value}));setMode(mode)})})

function loadSettings(){const s=JSON.parse(localStorage.getItem('studyBuddy:settings')||'null');if(s){workInput.value=s.work;shortInput.value=s.short;longInput.value=s.long}}

// Init
function init(){loadSettings();renderTasks();renderStats();setMode('work');updateTime();}
init();

// Optional: reset data helper (for debugging)
window._studyBuddyResetAll = function(){if(confirm('Cancellare tutti i dati locali dello Study Buddy?')){localStorage.removeItem(TASKS_KEY);localStorage.removeItem('studyBuddy:settings');localStorage.removeItem(STATS_PREFIX+todayKey());renderTasks();renderStats();setMode('work');updateTime();}}
