import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("")
  const [tempo, setTempo] = useState(0)
  const [lisTarefas, setLisTarefas] = useState([])
  
  
  //apagar uma nota
  //adicionar uma nota

  function adicionarNota(){
    const novaTarefa = {
      task,
      tempo
    }

    setLisTarefas([...lisTarefas, novaTarefa])
  
  
  }


  // pra escutar os inputs
  function handleInputs(evento){
    if(evento.target.name = "task"){
      //console.log(evento.target.value)
       setTask(evento.target.value)
    }else{
      //console.log(evento.target.value)
      setTempo(evento.tempo.value)
      
    }
  }

  return (
   
   
   
   <>
    <h1> Bloco de Notas </h1>

    
    <label>Nota</label>
    <input name='task' onChange={handleInputs} type="text" />

    <label>Tempo</label>
    <input name='tempo' onChange={handleInputs} type="number"/>
    <button onClick={adiciornarNota}>Adicionar Notas</button>
    
    
    { listaTarefas.map((value, index)=>{
    return(
     
      <div>
         <h3>{value.task}</h3>
         <h3>{value.tempo}</h3>

      </div>
    )

    }) }
    
    
    </>
  );
}

export default App;
