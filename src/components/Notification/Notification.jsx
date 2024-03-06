import toast from 'react-hot-toast';
import Nav from 'react-bootstrap/Nav';
import './Notification.css'

export const successfulNotification = (points) => {
  toast((t) => (
     <div className="card mb-3 notification" style={{ maxWidth: '540px' }}>
       <div className="row g-0">
        <div className="col-md-4">
          <img src="./images/win.png" className="img-fluid rounded-start" alt="win image"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Congratulations!!!</h5>
            <p className="card-text">You earn {points} points and go to next level</p>
          </div>
          <div className='buttons'>
          <button> <Nav.Link className="nav-element" href={`/`}>Exit Game</Nav.Link>
          </button>
          <button> <Nav.Link className="nav-element" href={`/level2welcome`}>Next Level</Nav.Link>
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
        width: '500px',
      }
    },);
    }; 

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

export const correctAnswerNotification = () => {
  toast((t) => (
     <div className="card mb-3 notification" style={{ maxWidth: '540px' }}>
       <div className="row g-0">
        <div className="col-md-4">
          <img src="./images/smile.jpg" className="img-fluid rounded-start" alt="win image"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Correct Answer</h5>
            <p className="card-text">You earned 10 points!</p>
          </div>
        </div>
      </div>
    </div>
  ),
  {
    duration: 1500,
    },
    {
      style: {
        width: '500px',
      }
    },);
}

export const wrongtAnswerNotification = () => {
  toast((t) => (
     <div className="card mb-3 notification" style={{ maxWidth: '540px' }}>
       <div className="row g-0">
        <div className="col-md-4">
          <img src="./images/unhappy.jpg" className="img-fluid rounded-start" alt="wrong answer"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Wrong Answer!</h5>
          </div>
        </div>
      </div>
    </div>
  ),
  {
    duration: 1500,
    },
    {
      style: {
        width: '500px',
      }
    },);
}

export const rememberNotification = () => {
  toast((t) => (
     <div className="card mb-3" style={{ maxWidth: '540px' }}>
       <div className="row g-0">
        <div className="col-md-4">
          <img src="./images/remember.jpg" className="img-fluid rounded-start" alt="remember message"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Please choose the answer!</h5>
          </div>
        </div>
      </div>
    </div>
  ),
  {
    duration: 1500,
    },
    {
      style: {
        width: '500px',
      }
    },);
}

