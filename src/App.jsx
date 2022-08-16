import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("")
  const [tempo, setTempo] = useState(0)
  const [listaTarefas, setListaTarefas] = useState([])
  
  
  //apagar uma nota
  //adicionar uma nota

  function adicionarNota(){
    const novaTarefa = {
      task,
      tempo
    }

    if (!task || tempo<= 0){
    alert ("Valores inválidos")
    }
    else {
      setListaTarefas([...listaTarefas, novaTarefa])
      setTask("")
      setTempo(0)
    }
    
  }


  // pra escutar os inputs
  function handleInputs(evento){
    if(evento.target.name == "task"){
      //console.log(evento.target.value)
       setTask(evento.target.value)
    }else{
      //console.log(evento.target.value)
      setTempo(Number(evento.target.value))
      
    }
  }

  function finalizarTarefa (nomeTarefa){
    setListaTarefas(listaTarefas.filter(tarefa => tarefa.task != nomeTarefa))
  }


  return (
   
   
   
   <>
    <h1> Bloco de Notas </h1>

    
    <label>Nota</label>
    <input 
    value={task}  
    name='task' 
    onChange={handleInputs} 
    type="text" />

    <label>Tempo</label>
    <input 
    value={tempo} 
    name='tempo' 
    onChange={handleInputs} 
    type="number"/>
    <button onClick={adicionarNota}>Adicionar Notas</button>
    
    
    { listaTarefas.map((value, index)=>{
    return(
      <div key={index}>
         <h3>{value.task}</h3>
         <h3>{value.tempo}</h3>
         <button onClick = {() => {finalizarTarefa(value.task)}} >Finalizar Tarefa</button>
         <h2>-------------</h2>
      </div>
    )

    }) }
    
    
    </>
  );
}

export default App;
