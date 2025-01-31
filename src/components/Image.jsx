import './Image.css'

function Image(){
    return(
        <>
        <Images/>
        </>
    )

}

function Images(props){
    return(
        <div className="image">
                      <img src="team.jpg" alt="Team" />
        </div>
    )
}

export default Image