import Video1 from '../assets/Video1.mp4'

function Video(){
    return(
        <div>
<div className="embed-responsive embed-responsive-16by9">
 <video src={Video1} autoplay muted loop ></video>
</div>
        </div>
    )
}

export default Video 