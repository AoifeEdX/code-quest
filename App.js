//Dependencies
import React from "react";
import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
//Function
function App() {
    return (
        <div className="container">
            <div className="card text-center mt-5">
                <div className="card-header bg-primary text-black">
                    <h1 className="display-4">Code Quest</h1>
                </div>
                <div className="card-body">
                    <Game />
                </div>
            </div>
        </div>
    );
}
//export to other file
//function can now be called elsewhere
export default App;
