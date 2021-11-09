import React from 'react'
import q from './Article.module.css'

class Article extends React.PureComponent {
    render = () => {
        return (
            <div className={q.book}>
                <p className={q.p}>....</p>
            </div>
        )
    }
}

export default Article
