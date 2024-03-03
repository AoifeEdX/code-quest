import toast from 'react-hot-toast';
import Nav from 'react-bootstrap/Nav';
import './Notification.css'

export const successfulNotification = (points, level) => {
  toast((t) => (
     <div className="card mb-3" style={{ maxWidth: '540px' }}>
       <div className="row g-0">
        <div className="col-md-4">
          <img src="./images/win.png" className="img-fluid rounded-start" alt="win image"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Congratulations!!! You earn {points} points and go to next level</p>
          </div>
          <div className='buttons'>
          <button> <Nav.Link className="nav-element" href={`/`}>Exit Game</Nav.Link>
          </button>
          <button> <Nav.Link className="nav-element" href={`/level${level}`}>Next Level</Nav.Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  ),
  {
    duration: Infinity,
    },
    {
      style: {
        width: '500px', // Set the desired width
      }
    },);
}

export const failNotification = () => {
  toast((t) => (
     <div className="card mb-3" style={{ maxWidth: '540px' }}>
       <div className="row g-0 gameOver">
          <div className="col-md-8">
          <img src="./images/game-over.jpg" className="img-fluid rounded-start" alt="sad image"/>
          </div>
          <div className='buttons'>
          <button> <Nav.Link className="nav-element" href={`/`}>Exit Game</Nav.Link>
          </button>
          <button> <Nav.Link className="nav-element" href={`/level1`}>Start again</Nav.Link>
          </button>
          </div>
        </div>
      </div>
  ),
  {
    duration: Infinity,
    }
  );
}
