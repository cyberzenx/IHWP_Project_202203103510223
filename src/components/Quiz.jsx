import React, { useState } from 'react'


const questions = [
{ id: 1, text: 'Your body frame and weight is:', options: [{ id: 'v', text: 'Thin, light (Vata)' }, { id: 'p', text: 'Medium, well-built (Pitta)' }, { id: 'k', text: 'Sturdy, heavy (Kapha)' }] },
{ id: 2, text: 'Your digestion is:', options: [{ id: 'v', text: 'Irregular, often low appetite' }, { id: 'p', text: 'Strong, often hungry' }, { id: 'k', text: 'Slow, prefers simple meals' }] },
{ id: 3, text: 'Your sleep pattern is:', options: [{ id: 'v', text: 'Light sleeper, wakes easily' }, { id: 'p', text: 'Moderate sleep, intense dreams' }, { id: 'k', text: 'Deep and long sleeper' }] },
{ id: 4, text: 'Your skin and hair are:', options: [{ id: 'v', text: 'Dry and rough' }, { id: 'p', text: 'Warm, oily or prone to acne' }, { id: 'k', text: 'Smooth, oily, thick' }] },
{ id: 5, text: 'Your mental pace is:', options: [{ id: 'v', text: 'Fast, creative, anxious' }, { id: 'p', text: 'Focused, ambitious' }, { id: 'k', text: 'Calm, steady, slow to change' }] }
]


export default function Quiz({ onComplete }) {
const [answers, setAnswers] = useState({})


const pick = (qId, optId) => {
setAnswers(prev => ({ ...prev, [qId]: optId }))
}


const submit = () => {
if (Object.keys(answers).length < questions.length) {
alert('Please answer all questions before submitting')
return
}
const counts = { v: 0, p: 0, k: 0 }
Object.values(answers).forEach(a => {
counts[a] = (counts[a] || 0) + 1
})
const dominant = Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b)
// Call onComplete with both code and totalScore for App.jsx
onComplete({ code: dominant, totalScore: counts[dominant] })
}


return (
<div className="card">
<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Ayurvedic Body Type Quiz</div>
{questions.map(q => (
<div key={q.id} className="question">
<div style={{ fontWeight: 600 }}>{q.id}. {q.text}</div>
<div className="row" style={{ marginTop: 8 }}>
{q.options.map(opt => {
const sel = answers[q.id] === opt.id
return (
<div key={opt.id} className={`option ${sel ? 'selected' : ''}`} onClick={() => pick(q.id, opt.id)}>
{opt.text}
</div>
)
})}
</div>
</div>
))}
<div style={{ marginTop: 16 }}>
<button className="button" onClick={submit}>Get My Dosha</button>
</div>
</div>
)
}