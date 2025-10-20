import React from 'react'
import { recommendations } from '../data/recommendations'
export default function Result({dosha,onReset}){
if(!dosha) return null
const r=dosha==='v'?recommendations.vata:dosha==='p'?recommendations.pitta:recommendations.kapha
return(
<div className="card">
<div className="row header">
<div className="brand">Your Dominant Dosha</div>
<div className="result-badge">{r.title}</div>
</div>
<p className="small" style={{marginTop:8}}>{r.summary}</p>
<div style={{marginTop:12}}>
<h4>Diet Suggestions</h4>
<ul>{r.diet.map((d,i)=><li key={i}>{d}</li>)}</ul>
<h4>Lifestyle</h4>
<ul>{r.lifestyle.map((d,i)=><li key={i}>{d}</li>)}</ul>
<h4>Yoga/Practice</h4>
<p>{r.yoga}</p>
</div>
<div style={{marginTop:12}} className="row">
<button className="button" onClick={onReset}>Retake Quiz</button>
</div>
</div>
)
}