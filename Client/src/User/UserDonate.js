import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDonate() {
  const [dcategory, setdcategory] = useState("");
  const [payment, setpayment] = useState("");
  const [trid, settrid] = useState("");
  const [amount, setamount] = useState("");
  const [name, setname] = useState("");
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [pdata, setpdata] = useState([]);
  const [cdata, setcdata] = useState([]);
  const [showed, setShowed] = useState(false);
  
  const navigate = useNavigate();
  const gotoUserLogin = () => navigate("/Login");
  const email = sessionStorage.getItem("UserSession");

  const doDonat = (e) => {
    e.preventDefault();
    const temp = window.confirm("Check Your Details Again.....");
    if (temp) {
      const data = {
        email,
        name,
        payment,
        trid,
        amount,
        date
      };

      axios.post('http://localhost:3001/dodonat', data)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {
            alert(res.data.msg);
            setShowed(false);
          }
          if (res.data.status === 400) {
            alert(res.data.msg);
            setShowed(false);
          }
        }).catch((error) => {
          console.log(error);
        });
    }
  };

  const cancel = () => {
    setShowed(false);
  };

  const fetchAllPayment = () => {
    axios.get('http://localhost:3001/fetchallpayment')
      .then((res) => {
        console.log(res.data);
        setpdata(res.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const fetchAllCategory = () => {
    axios.get('http://localhost:3001/fetchallcategory')
      .then((res) => {
        console.log(res.data);
        setcdata(res.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("UserSession") === "null") {
      gotoUserLogin();
    }
    fetchAllPayment();
    fetchAllCategory();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1>Donate</h1> 
        <br />
        <div className='mt-3'>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={doDonat}>
                <div className="form-group">
                  <input type="text" name='name' placeholder='Enter Doner Full Name' className='form-control' onChange={(e) => setname(e.target.value)} required />
                </div>
                <br />
                <div className="form-group">
                  <input type="text" name='trid' placeholder='Enter Your Transaction ID' className='form-control' onChange={(e) => settrid(e.target.value)} required />
                </div>
                <br />
                <div className="form-group">
                  <input type="number" name='amount' placeholder='Enter Donation Amount' className='form-control' onChange={(e) => setamount(e.target.value)} required />
                </div>
                <br />
                <div className="d-grid">
                  <input type="submit" name='btnsubmit' value="Donate" className='btn btn-outline-primary btn-block' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDonate;
