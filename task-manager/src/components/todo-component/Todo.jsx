

function Todo({label = 'generic todo', description = 'some description is necessary', status = 'no status'}){

    return(
        <div>
            <div>
                <h3>{label}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default Todo;