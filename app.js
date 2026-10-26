const sources = {
  edit: ['Editing basics', 'https://support.microsoft.com/en-us/clipchamp/how-to-edit-a-video-in-clipchamp'],
  ratio: ['Aspect ratio', 'https://clipchamp.com/en/blog/change-aspect-ratio-video/'],
  split: ['Split and trim', 'https://support.microsoft.com/en-us/clipchamp/how-to-split-or-cut-videos-and-audio-assets'],
  timeline: ['Timeline layers', 'https://support.microsoft.com/en-us/clipchamp/how-to-work-with-the-timeline-in-clipchamp'],
  audio: ['Audio controls', 'https://support.microsoft.com/en-us/clipchamp/how-to-use-the-voice-recorder'],
  text: ['Text and titles', 'https://support.microsoft.com/en-gb/clipchamp/how-to-add-text-and-titles-to-a-video'],
  captions: ['Autocaptions', 'https://support.microsoft.com/en-au/clipchamp/how-to-use-autocaptions-in-clipchamp'],
  export: ['Export and save', 'https://support.microsoft.com/en-gb/clipchamp/exporting-and-saving-a-video-in-clipchamp']
};
const lessons = [
  {name:'Set up the project',seconds:45,title:'Start with the right canvas.',lead:'Keep your files together and set up a horizontal broadcast project.',
    steps:[
      'Open Clipchamp through Microsoft 365 with your school account. Choose <strong>Blank video</strong> (or <strong>Create a new video</strong> in the personal version).',
      'Rename the project <strong>FoodDrive_LastName</strong>. Select <strong>Import media</strong> and choose your narration, interview, and b-roll files. Keep the original files in your story folder.',
      'Set the project to <strong>16:9</strong> using the size/aspect ratio control above the preview. If it’s hidden, deselect timeline clips first.'
    ],tip:'Use your own recorded footage and audio for this lesson. You don’t need stock media or premium effects.',sources:['edit','ratio'],screen:'16:9',sub:'HORIZONTAL BROADCAST FRAME',tracks:[['Media','Narration|Interview|B-roll']],note:'Importing files makes them available. Add them to the timeline to use them.',checklist:'Create a blank project, name it, import your footage, and confirm 16:9.'},
  {name:'Build the story',seconds:45,title:'Lay down the story first.',lead:'Think of the timeline as your story read from left to right.',
    steps:[
      'Drag your first narration file from the media library onto the timeline. Use the recorded lines from your approved script.',
      'Place the interview clip after that narration, then add the closing narration. Move clips until they touch, with no empty gaps.',
      'Press <strong>Play</strong> below the preview. Listen for a clear beginning, one useful quote, and an ending. Aim for <strong>45–60 seconds</strong> in this practice story.'
    ],tip:'Example structure: explain the drive → let a student explain why it matters → tell viewers how to help. Narration is the reporter’s recorded voice.',sources:['edit'],screen:'A story in three beats',sub:'SETUP → STUDENT VOICE → HOW TO HELP',tracks:[['Story','Narration|Interview|Closing narration']],note:'Clip order is a storytelling choice. Use your script as the guide.',checklist:'Arrange narration, interview, and closing narration in script order without gaps.'},
  {name:'Trim & split',seconds:90,title:'Keep the words that matter.',lead:'Trim the edges of a clip. Split it to remove something in the middle.',
    steps:[
      'Select a timeline clip. Drag its <strong>left or right trim handle inward</strong> to remove dead space at the beginning or end.',
      'For a false start in the middle, select the clip and move the white playhead to the start of the unwanted section. Click <strong>Split</strong> (scissors). Repeat at its end.',
      'Select only the unwanted middle piece and press <strong>Delete</strong>. Move the remaining pieces together to close the gap. Zoom in with <strong>+</strong> for a more precise cut.',
      'Play across the edit. Keep whole thoughts and natural breaths. If the cut changes what the speaker meant, undo it and try again.'
    ],tip:'Cut hesitation and repetition, not context. Never join words to create a statement the person didn’t make.',sources:['split'],screen:'A clean, complete thought',sub:'TRIM ENDS / SPLIT THE MIDDLE',tracks:[['Before','Keep|False start|Keep'],['After','Keep|Keep']],note:'After deleting the middle piece, close the gap and listen to the join.',quiz:{q:'How do you remove a false start in the middle?',answers:['Crop the picture','Split on both sides, then delete'],correct:1,yes:'Right. Two splits isolate the unwanted words; delete that piece, then close the gap.',no:'Cropping changes the picture’s edges. Split before and after the unwanted words, then delete that piece.'},checklist:'Trim dead space. Split around unwanted sections, delete them, close gaps, and check meaning.'},
  {name:'Cover with b-roll',seconds:75,title:'Show what the voice describes.',lead:'B-roll is supporting footage: students sorting cans, a collection box, or a delivery.',
    steps:[
      'Drag a relevant b-roll shot onto a <strong>track above</strong> the narration or interview. Line it up with the words it illustrates.',
      'Trim the shot to the needed length. Add another shot beside it for visual variety. The upper video covers the lower picture while the lower audio can keep playing.',
      'Select each b-roll clip, open <strong>Audio</strong> in the property panel, and mute it or lower its volume. Keep natural sound only when it helps and doesn’t compete with speech.',
      'Play the section. Check that the pictures match the facts and the interview voice continues smoothly under them.'
    ],tip:'Don’t put b-roll into the middle of the main story track if you want the narration to continue beneath it. Layer it above.',sources:['timeline'],screen:'Sorting donations',sub:'PICTURE: B-ROLL / SOUND: REPORTER',tracks:[['Picture','Sorting cans|Collection box'],['Story','Narration continues underneath']],note:'Top video is visible. Audio from every unmuted clip can still be heard.',quiz:{q:'Your b-roll covers an interview. Why do you hear two voices?',answers:['Both clips’ audio is still on','Only the top track can have audio'],correct:0,yes:'Exactly. Lower layers can still play audio. Mute or lower the b-roll’s sound.',no:'The upper picture hides the lower picture, but both audio tracks can play. Check the b-roll’s Audio controls.'},checklist:'Layer relevant b-roll above your story. Mute or lower its audio so speech stays clear.'},
  {name:'Balance the sound',seconds:60,title:'Make every voice easy to hear.',lead:'A clear voice carries the story. Listen on headphones before adding anything else.',
    steps:[
      'Select the narration, then open <strong>Audio</strong> in the property panel. Adjust the <strong>volume slider</strong> while listening. Repeat for the interview.',
      'Play across each narration-to-interview change. Adjust until the voices feel similar in loudness, without harsh or distorted sound.',
      'For this news exercise, leave music out. If your teacher asks for it, place approved music below the story, lower it well under speech, and use short fades at its edges.'
    ],tip:'Turning up a distorted recording won’t repair it. Re-record narration or choose a cleaner interview section when possible.',sources:['audio'],screen:'Voice comes first.',sub:'LISTEN → ADJUST → LISTEN AGAIN',tracks:[['Voice','Narration|Interview|Narration'],['Music','Not needed for this exercise']],note:'There is no single volume percentage that works for every recording.',checklist:'Balance narration and interview by listening. Remove competing or unnecessary sound.'},
  {name:'Add a name graphic',seconds:45,title:'Tell us who’s speaking.',lead:'A lower third is a name and role placed near the bottom of the picture.',
    steps:[
      'Open <strong>Text</strong> on the left toolbar. Drag a simple title onto a track <strong>above the video and b-roll</strong>.',
      'Select the text clip and edit its words in the <strong>Text</strong> property panel. Example: <strong>Jordan Lee</strong> on one line and <strong>Student volunteer</strong> on the next. This is an illustrative name.',
      'Position it near the lower left, away from the frame edges. Trim its timeline duration to about <strong>4 seconds</strong> near the speaker’s first appearance. Check spelling, contrast, and readability.'
    ],tip:'Keep graphics simple. Leave room for captions, and use a title style available in your school account.',sources:['text'],screen:'Student interview',sub:'ILLUSTRATIVE PREVIEW',lower:true,tracks:[['Text','Jordan Lee · Student volunteer'],['Video','Interview']],note:'The name graphic sits on a higher track so it remains visible.',checklist:'Add a readable name and role above the video for about four seconds; verify spelling.'},
  {name:'Check the captions',seconds:60,title:'Make the words visible.',lead:'Automatic captions are a first draft. Check every word against the recording.',
    steps:[
      'Open the editor’s <strong>Captions</strong> or <strong>Transcript</strong> panel. Choose <strong>Transcribe media</strong> or the auto-caption option, select the spoken language, and start generation. Labels vary by version.',
      'Read the generated transcript while listening. Edit incorrect words, especially names, dates, and numbers. Check punctuation and whether each caption appears with the spoken words.',
      'Preview captions alongside your lower third. Move or restyle text to prevent overlap. Confirm captions are visible if your class wants them burned into the MP4. If a separate caption file is requested, download the <strong>.srt</strong> from the caption/transcript options.'
    ],tip:'If caption generation is unavailable in your school account, ask your teacher for the approved captioning workflow before the story airs.',sources:['captions'],screen:'Food drive',sub:'CAPTION EXAMPLE',caption:true,tracks:[['Captions','The drive runs through Friday.'],['Story','Recorded speech']],note:'Check captions after the picture and audio edit is settled.',checklist:'Generate and correct captions. Check timing, names, numbers, and graphic overlap.'},
  {name:'Review & export',seconds:90,title:'Watch it. Export it. Watch it again.',lead:'Your deliverable is the finished video file, ready for your producer to review.',
    steps:[
      'Play the entire timeline. Check facts, picture coverage, voice levels, titles, captions, and the beginning and ending. Remove accidental gaps or stray clips after the story.',
      'Select <strong>Export → 1080p</strong> for this HD practice story. Follow any different delivery requirements your teacher provides. Resolve premium-asset prompts by replacing those assets if needed.',
      'Wait for export to finish. In a school account, the MP4 normally goes to the project’s <strong>Exports</strong> folder in OneDrive/SharePoint; choose <strong>Save to your computer</strong> for a local copy. Personal accounts normally download the MP4.',
      'Name your file <strong>FoodDrive_LastName_Final.mp4</strong>. Open that exported file and watch it all the way through. Submit the MP4 to your teacher’s assigned location.'
    ],tip:'Project autosave keeps your editable work. Export creates the playable MP4 your producer needs. Rendering time depends on your device and story.',sources:['export'],screen:'FoodDrive_LastName_Final.mp4',sub:'1080p / WATCH THE EXPORTED FILE',tracks:[['Delivery','Review|Export|Playback|Submit']],note:'A saved editing project and a finished MP4 are different deliverables.',quiz:{q:'What should the producer receive for playback?',answers:['Only the editable project','The checked, exported MP4'],correct:1,yes:'Yes. Watch the exported MP4 before you submit it for approval.',no:'Keep the project for revisions, but send the exported MP4 for playback. Check that file first.'},checklist:'Watch the full timeline, export 1080p MP4, watch the exported file, and submit as directed.'}
];
const key='khs-clipchamp-walkthrough-v1';
let state={current:0,done:[],answers:{}};
try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&Number.isInteger(saved.current)&&saved.current>=0&&saved.current<lessons.length){state.current=saved.current;state.done=Array.isArray(saved.done)?[...new Set(saved.done.filter(n=>Number.isInteger(n)&&n>=0&&n<8))]:[];if(saved.answers&&typeof saved.answers==='object'&&!Array.isArray(saved.answers))state.answers=saved.answers;}}catch{}
const $=s=>document.querySelector(s);
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{}}
const minutes=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
function diagram(l,i){return `<figure class="illustration"><figcaption>ILLUSTRATED EDIT / ${String(i+1).padStart(2,'0')}</figcaption><div class="stage"><span class="screen-label">${i===0?'PROJECT FORMAT':'PREVIEW CONCEPT'}</span><strong>${l.screen}</strong><small>${l.sub}</small>${l.lower?'<div class="lower-third">Jordan Lee<small>Student volunteer</small></div>':''}${l.caption?'<div class="caption-example">The drive runs through Friday.</div>':''}</div><div class="ruler"><span>START</span><span>TIME →</span><span>END</span></div>${l.tracks.map(([label,clips])=>`<div class="track"><span>${label}</span><div class="clips">${clips.split('|').map(t=>`<span class="clip ${label==='Text'?'title':''} ${label==='Voice'||label==='Story'?'audio':''} ${i===2?'trim':''}">${t}</span>`).join('')}</div></div>`).join('')}<p class="diagram-note">${l.note}</p></figure>`;}
function feedback(l,a){if(a===undefined)return '';return `<p class="feedback">${Number(a)===l.quiz.correct?'✓ '+l.quiz.yes:l.quiz.no}</p>`;}
function render(focus=false){
  const i=state.current,l=lessons[i],start=lessons.slice(0,i).reduce((s,l)=>s+l.seconds,0);
  $('#steps').innerHTML=lessons.map((l,n)=>`<button type="button" class="step-link" data-step="${n}" ${i===n?'aria-current="step"':''}><span class="step-num">${state.done.includes(n)?'✓':String(n+1).padStart(2,'0')}</span><span>${l.name}${state.done.includes(n)?'<span class="sr-only"> (complete)</span>':''}</span><small>${minutes(l.seconds)}</small></button>`).join('');
  $('#progress-label').textContent=`${state.done.length} / 8 done`;
  $('.progress').setAttribute('aria-valuenow',state.done.length);
  $('#progress-fill').style.width=`${state.done.length/8*100}%`;
  $('#lesson').innerHTML=`<div class="step-meta"><span>STEP ${String(i+1).padStart(2,'0')} / 08</span><span>${minutes(start)}–${minutes(start+l.seconds)} · ${l.seconds} SEC</span></div><h2 id="step-title">${l.title}</h2><p class="lead">${l.lead}</p><ol class="instructions">${l.steps.map(t=>`<li>${t}</li>`).join('')}</ol>${diagram(l,i)}<p class="tip"><strong>NEWSROOM NOTE</strong><br>${l.tip}</p>${l.quiz?`<div class="quick-check"><p class="eyebrow">QUICK CHECK / NO GRADE</p><p class="question">${l.quiz.q}</p><div class="answers">${l.quiz.answers.map((a,n)=>`<button type="button" data-answer="${n}" aria-pressed="${state.answers[i]===n}">${a}</button>`).join('')}</div><div id="feedback" aria-live="polite">${feedback(l,state.answers[i])}</div></div>`:''}<p class="source">Microsoft guidance: ${l.sources.map(s=>`<a href="${sources[s][1]}" target="_blank" rel="noopener">${sources[s][0]} ↗</a>`).join(' · ')}</p><div class="lesson-actions"><button type="button" id="back" class="secondary" ${i===0?'disabled':''}>← Back</button><button type="button" id="next" class="primary">${i===7?'Finish walkthrough ✓':'Mark done & continue →'}</button></div>`;
  $('#completion').hidden=state.done.length!==8;
  if(focus){$('#lesson').focus({preventScroll:true});$('#lesson').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
}
$('#steps').addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(!b)return;state.current=Number(b.dataset.step);save();render(true);});
$('#lesson').addEventListener('click',e=>{
  const answer=e.target.closest('[data-answer]');
  if(answer){state.answers[state.current]=Number(answer.dataset.answer);save();$('#lesson').querySelectorAll('[data-answer]').forEach(b=>b.setAttribute('aria-pressed',b===answer));$('#feedback').innerHTML=feedback(lessons[state.current],state.answers[state.current]);return;}
  if(e.target.closest('#back')){state.current=Math.max(0,state.current-1);save();render(true);}
  if(e.target.closest('#next')){if(!state.done.includes(state.current))state.done.push(state.current);if(state.current<7){state.current++;save();render(true);}else{save();render();if(state.done.length===8){$('#completion').focus({preventScroll:true});$('#completion').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});}else{const missing=lessons.findIndex((_,i)=>!state.done.includes(i));state.current=missing;save();render(true);}}}
});
$('#review').addEventListener('click',()=>{state.current=0;save();render(true);});
$('#reset').addEventListener('click',()=>$('#reset-dialog').showModal());
$('#cancel-reset').addEventListener('click',()=>$('#reset-dialog').close());
$('#confirm-reset').addEventListener('click',()=>{state={current:0,done:[],answers:{}};save();$('#reset-dialog').close();render(true);});
$('#checklist').innerHTML=lessons.map((l,i)=>`<div class="checklist-item"><h3>□ ${i+1}. ${l.name}</h3><p>${l.checklist}</p></div>`).join('')+'<p>Deliverable: FoodDrive_LastName_Final.mp4 · 16:9 · 1080p for this practice story. Follow your teacher’s delivery requirements.</p>';
let checklistWasOpen=false;
window.addEventListener('beforeprint',()=>{checklistWasOpen=$('.reference').open;$('.reference').open=true;});
window.addEventListener('afterprint',()=>{$('.reference').open=checklistWasOpen;});
$('#print').addEventListener('click',()=>window.print());
render();
