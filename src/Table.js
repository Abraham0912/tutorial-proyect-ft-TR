import React, {Component} from 'react'


const Title = (props) => {
    return(
     <div>
       <h1>
         El titulo es: {props.titulo}
       </h1>
       <p>{props.descripcion}</p>
     </div>
   ) 
   };

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Job</th>
          <th>ACTION</th>
        </tr>
      </thead>
    )
  }


  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(row.id)}>Delete</button></td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  } 


const Table = (props) => {
    const {characterData, removeCharacter} = props
  
    return (
      <div>
        <Title 
            descripcion = "Soy una pagina de front, creada con react, basada en el blog de Tania Rascia. Puedo crear, agrega y elimna datos por medio del state..." 
            titulo = "Task's"
        />
        <table>
            <TableHeader datoxd="Hola cara de bola soy datoxd"/>
            <TableBody 
                characterData={characterData} 
                removeCharacter = {removeCharacter}
            />
        </table>
      </div>
    )
  }




export default Table