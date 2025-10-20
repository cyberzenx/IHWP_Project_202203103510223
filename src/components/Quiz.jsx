import React, {useState} from 'react'


const questions = [
{id:1,text:'Your body frame and weight is:',options:[{id:'v',text:'Thin, light (Vata)'},{id:'p',text:'Medium, well-built (Pitta)'},{id:'k',text:'Sturdy, heavy (Kapha)'}]},
{id:2,text:'Your digestion is:',options:[{id:'v',text:'Irregular, often low appetite'},{id:'p',text:'Strong, often hungry'},{id:'k',text:'Slow, prefers simple meals'}]},
{id:3,text:'Your sleep pattern is:',options:[{id:'v',text:'Light sleeper, wakes easily'},{id:'p',text:'Moderate sleep, intense dreams'},{id:'k',text:'Deep and long sleeper'}]},
{id:4,text:'Your skin and hair are:',options:[{id:'v',text:'Dry and rough'},{id:'p',text:'Warm, oily or prone to acne'},{id:'k',text:'Smooth, oily, thick'}]},
{id:5,text:'Your mental pace is:',options:[{id:'v',text:'Fast, creative, anxious'},{id:'p',text:'Focused, ambitious'},{id:'k',text:'Calm, steady, slow to change'}]}
]


export default function Quiz({onComplete}){
const [answers,setAnswers] = useState({})
function pick(qId,optId){setAnswers(prev=>({...prev,[qId]:optId}))}
function submit(){
const counts={v:0,p:0,k:0}
Object.values(answers).forEach(a=>{if(a) counts[a]++})
const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1])
const dominant=sorted[0][0]
onComplete(dominant)
}


return(
<div className="card">
<div className="grid">
{questions.map(q=>(
<div key={q.id} className="question">
<div style={{fontWeight:700, marginBottom:8}}>{q.id}. {q.text}</div>
<div className="row" style={{marginTop:4}}>
{q.options.map(opt=>{
const sel=answers[q.id]===opt.id
return (
<div key={opt.id} className={`option ${sel?'selected':''}`} onClick={()=>pick(q.id,opt.id)}>
{opt.text}
</div>
)
})}
</div>
</div>
))}
<div style={{marginTop:16}}>
<button className="button" onClick={submit}>Get My Dosha</button>
</div>
</div>
</div>
)
}