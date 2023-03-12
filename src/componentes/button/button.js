import './buttton.css'

const Btn = (props) => {
    return (
        <div className= 'btn'onClick={props.onClick}>
            <button>
                {props.label}
            </button>
        </div>
        
    )
}

export default Btn

