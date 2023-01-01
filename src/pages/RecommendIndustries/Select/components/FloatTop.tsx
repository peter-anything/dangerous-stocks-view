

import "./float.less"
const FloatTop  =  ({ children, showMask, handleChange}) => {
    return (
        <div className={`float-container ${showMask && ' show'}`}>
            <div className="content">
                <div className={`slot-content ${showMask && ' show'}`}>
                    { children }
                </div>
            </div>
            <div onClick={handleChange} className={`mask ${showMask && 'show'}`}></div>
        </div>
    )
}

export default FloatTop;