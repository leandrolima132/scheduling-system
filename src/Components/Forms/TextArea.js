import React from 'react'
import styles from './TextArea.module.css'

const TextArea = ({ label, name, rows, onChange, error }) => {
      
    return (
        <div className={styles.wrapper}>
            <label  htmlFor={name} className={styles.label}>{label}</label>
            <textarea 
                className={styles.textarea}
                id={name}
                value={name}
                rows={rows}
                onChange={onChange}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
        
}

export default TextArea
