import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import'../styles/style.css';
import Card from "../components/Card"
function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <Video></Video>
            
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className=" col-md-4">
                        <img  src="https://cdn-icons-png.flaticon.com/512/3284/3284607.png" width="150" height="150" alt="imagenes" />
                        <h3>Guias turisticos</h3>
                        <p>tenemos los mejores guias</p>
                    </div>
                    <div className=" col-md-4" >
                        <img src="https://cdn-icons-png.flaticon.com/512/3284/3284607.png" width="150" height="150" alt="imagenes" />
                        <h3>Guias turisticos</h3>
                        <p>tenemos los mejores guias</p>
                    </div>
                    <div className=" col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3284/3284607.png" width="150" height="150" alt="imagenes" />
                        <h3>Guias turisticos</h3>
                        <p>tenemos los mejores guias</p>
                    </div>

                </div>

            </div>
            <div>
                <Card></Card>
            </div>

        </div>
    )
}

export default Home