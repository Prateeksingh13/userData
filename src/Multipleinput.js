import React, { useState } from 'react'


const Multipleinput = () => {

    const sorting = () => {
        const data = [...records];
        data.sort((a, b) =>
          a.Name.toLowerCase().localeCompare(b.Name.toLowerCase())
        );
        console.log(data);
        SetRecords(data);
      };

      const sorting2 = () => {
        const data = [...records];
        data.sort((a, b) =>
          a.MonthDays.toLowerCase().localeCompare(b.MonthDays.toLowerCase())
        );
        console.log(data);
        SetRecords(data);
      };

      const sorting3 = () => {
        const data = [...records];
        data.sort((a, b) =>
          a.Availablefordays.toLowerCase().localeCompare(b.Availablefordays.toLowerCase())
        );
        console.log(data);
        SetRecords(data);
      };

      const sorting4 = () => {
        const data = [...records];
        data.sort((a, b) =>
          a.BandScore.toLowerCase().localeCompare(b.BandScore.toLowerCase())
        );
        console.log(data);
        SetRecords(data);
      };

    const [userInfo, setUserInfo] = useState({
        Name: "",
        MonthDays: "",
        Availablefordays: "",
        BandScore: ""
    });

    const [records, SetRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserInfo({ ...userInfo, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userInfo, id: new Date().getTime().toString() }

        SetRecords([...records, newRecord]);

        setUserInfo({ Name: "", MonthDays: "", Availablefordays: "", BandScore: "" });
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="Name">Name</label>
                <input type="text" id="Nname" name="Name" value={userInfo.Name} onChange={handleInput} required autoComplete="off" placeholder="Your name.."></input>
                <label htmlFor="MonthDays">Month Days</label>
                <input type="text" id="MonthDays" name="MonthDays" value={userInfo.MonthDays} onChange={handleInput}  required autoComplete="off" placeholder="attendance expected in that month"></input>
                <label htmlFor="Availablefordays">Available for days</label>
                <input type="text" id="Availablefordays" name="Availablefordays" value={userInfo.Availablefordays} required onChange={handleInput} autoComplete="off" placeholder="actual attendance in that month"></input>
                <label htmlFor="BandScore">Band Score</label>
                <input type="text" id="BandScore" name="BandScore" value={userInfo.BandScore} onChange={handleInput} required autoComplete="off" placeholder="Your Score"></input>
                <button type="submit" >Save User</button>
            </form>
            <div>
                <table>
                    <tr>
                        <th onClick={sorting}>Name</th>
                        <th onClick={sorting2}>MonthDays</th>
                        <th onClick={sorting3}>Availablefordays</th>
                        <th onClick={sorting4}>BandScore</th>
                    </tr>
                    <tbody>
                        {records.map(records => (
                            <tr key={records.id}>
                                <td>{records.Name}</td>
                                <td>{records.MonthDays}</td>
                                <td>{records.Availablefordays}</td>
                                <td>{records.BandScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Multipleinput;