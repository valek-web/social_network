import React from 'react'
import styles from './Texterea.module.css'

const Texterea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && styles.error}>
            <input {...input} {...props} />
            {hasError ? meta.error : ''}
        </div>
    )
}

export default Texterea
