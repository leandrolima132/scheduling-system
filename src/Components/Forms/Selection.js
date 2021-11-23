import React from 'react'
import styles from './Selection.module.css'


const Selection  = ({value , setValue}) => {
    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
        async function fetchApi() {
          let response = await fetch('http://localhost:3000/auth/medic');
          response = await response.json();
          setDados(response)
        }
       
        fetchApi()
      }, []);

    return (
      <>
        <label className={styles.label}>Fisioterapeuta</label>
        <select className={styles.select} value={value} onChange={({target}) => setValue(target.value)} >
            <option value='' disabled>Selecione um Profissional</option>
            {dados !== null && dados.medics.map((item) => (<option>{item.name}</option>))}
        </select>
      </>
    )
}

export default Selection
