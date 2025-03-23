import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UHome() {
  const [dt, setDt] = useState([]);
  const [amt, setAmt] = useState(0);
  const email = sessionStorage.getItem("UserSession");

  const fetchAllDonation = () => {
    console.log(email);
    const data = { email };

    axios.post("http://localhost:3001/fetchalldonation", data)
      .then((res) => {
        console.log(res.data);
        setDt(res.data);

        const total = res.data.reduce((sum, donation) => sum + donation.amount, 0);
        setAmt(total);
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllDonation();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1>Home</h1>
        <br />
        {amt > 0 ? (
          <div className='bg-success text-white text-center' style={{ borderRadius: 10 }}>
            <h3>Total Donation: ₹{amt}</h3>
          </div>
        ) : (
          <div className='bg-danger text-white text-center' style={{ borderRadius: 10 }}>
            <h3>Total Donation: ₹{amt}</h3>
          </div>
        )}
        <table className="table table-striped text-center mt-5">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Transaction Id</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {dt.length > 0 ? (
              dt.map((item, id) => (
                <tr key={id}>
                  <th>{id + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.trid}</td>
                  <td>{item.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No Donation</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UHome;
