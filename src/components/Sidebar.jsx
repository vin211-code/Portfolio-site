import './Sidebar.css'

function Side(){
    return(
        <>
        <Menu mh={"HOME"} ma={"ABOUT"} ms={"WORKS"}/>
        </>
    )

}

function Menu(props){
    return(
        <label class="all">
            <input className='put' type="checkbox"/>
            <div class="toggle">
                <span class="top common"></span>
                <span class="middle common"></span>
                <span class="bottom common"></span>
            </div>
        <div class="slide">
            <h1>Menu</h1>
        <ul>
            <li><a href="#home"><i class="fas fa-home"/>{props.mh}</a></li>
            <li><a href="#works"><i class="fa-solid fa-briefcase"/>{props.ms}</a></li>
            <li><a href="#who"><i class="fa-solid fa-users"/>{props.ma}</a></li>

        </ul>
        </div>
        </label>
    )
}

export default Side