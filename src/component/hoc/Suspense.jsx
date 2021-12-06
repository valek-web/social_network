import React from 'react'
import Preloader from '../different/preloader/preloader'
import loadIMG from './../../img/load_book.gif'

export const ReactSuspense = (Component) => (props) => {
    return (
        <React.Suspense fallback={<Preloader loading={loadIMG} />}>
            <Component {...props} />
        </React.Suspense>
    )
}
