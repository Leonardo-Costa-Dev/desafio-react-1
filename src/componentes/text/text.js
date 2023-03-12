import './text.css'

const Text = (props) => {
    return (
        <div className='text' style={{textTransform:'uppercase', color: props.color}}>
            {props.children}
        </div>
    )
}

export default Text