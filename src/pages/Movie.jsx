import {useParams, useHistory, useRouteMatch, useLocation} from 'react-router-dom'

function Movie() {
    const {title} = useParams();
    const {goBack} = useHistory()
    const value = useRouteMatch();
    const value2= useLocation();

    console.log(value)
    console.log(value2)

    return <>
        <h1>Some move {title}</h1>
        <button className='btn' onClick={goBack}>Go back</button>
    </>
}

export {Movie};