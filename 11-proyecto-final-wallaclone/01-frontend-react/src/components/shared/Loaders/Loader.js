
import React from "react"
import styleModule from './Loader.module.scss'

const Loader = () => {

    return (
        <div className=" container is-flex is-justify-content-center">
            <div className="is-flex  is-align-items-center">
                <div className={styleModule.ldsRing}><div></div><div></div><div></div><div></div></div>

            </div>
        </div>

    )


}

export default Loader