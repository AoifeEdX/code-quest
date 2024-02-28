
export default function Challenge() {
  return (
    <section className='page-section' id='work'>
        <h2>Projects</h2>
        <div className='work-list info-wrapper'>
        {workData.map((data) => (<ProjectCard data={data} key={ data.id} />))}
        </div>
      </section>
  );
}