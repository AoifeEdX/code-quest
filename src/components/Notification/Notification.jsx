import toast from 'react-hot-toast';

export const successfulNotification = () => {
  toast((t) => (
      <div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
    <img src="./images/win.png" className="img-fluid rounded-start" alt="win image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button onClick={() => toast.dismiss(t.id)}>
      Next
    </button>
    </div>
  </div>
</div>
));
}
