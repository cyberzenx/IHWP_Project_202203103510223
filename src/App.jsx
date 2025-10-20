import React,{useState} from 'react'
import Quiz from './components/Quiz'
import Result from './components/Result'


export default function App(){
const [dosha,setDosha]=useState(null)
function handleComplete(code){setDosha(code)}
function reset(){setDosha(null)}


return(
<div>
<header style={{
position:'fixed',
top:0,
left:0,
width:'100%',
background:'#fef3c7',
padding:'16px 24px',
boxShadow:'0 4px 10px rgba(0,0,0,0.1)',
zIndex:1000
}}>
<h1 style={{margin:0, fontSize:28, textAlign:'center'}}>Ayurvedic Body Type Analyzer</h1>
<p style={{margin:4, textAlign:'center', fontSize:16}}>Quick quiz to identify your dominant dosha and get lifestyle tips</p>
<p style={{margin:4, textAlign:'center', fontSize:14}}>
<strong>Name:</strong> Rajneesh Yadav | <strong>Enrollment No.:</strong> 202203103510223 | <strong>Div:</strong> B
</p>
</header>


<div style={{paddingTop:140}} className="container">
<main className="two-col">
<div className="col">
{!dosha && <Quiz onComplete={handleComplete}/>}
{dosha && <Result dosha={dosha} onReset={reset}/>}
</div>


<div className="col">
<div className="card" style={{background:'#eef2ff'}}>
<h3>About this project</h3>
<p className="small" style={{marginTop:8}}>This tool maps basic physical and mental traits to Ayurveda's Tridosha model and gives simple, educational recommendations. It's meant for learning and not a substitute for professional medical advice.</p>
<h4 style={{marginTop:12}}>Features</h4>
<ul>
<li>Short 5-question quiz</li>
<li>Dominant dosha detection</li>
<li>Diet, lifestyle & yoga suggestions</li>
</ul>
</div>
</div>
</main>


<footer className="card" style={{marginTop:24, padding:16, textAlign:'center', background:'#d1fae5'}}>
<p style={{margin:4}}><strong>Created by:</strong> Rajneesh Yadav</p>
<p style={{margin:4}}><strong>Enrollment No.:</strong> 202203103510223</p>
<p style={{margin:4}}><strong>Div:</strong> B</p>
</footer>
</div>
</div>
)
}