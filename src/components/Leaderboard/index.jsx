

const LeaderBoard = () => {
    return (
        <>
            <table className="table mt-5 border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row">
                        <td>1</td>
                        <td>Mark</td>
                        <td>200</td>
                    </tr>
                    <tr scope="row">
                        <td>2</td>
                        <td>Jacob</td>
                        <td>150</td>
                    </tr>
                </tbody>
            </table>
        
        </>
    )

}

export default LeaderBoard;