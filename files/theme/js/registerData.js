
const names = document.getElementById('names');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('pass1');
const confirmPassword = document.getElementById('pass2');
const gender = document.getElementById('gender');
const country = document.getElementById('country');
const address = document.getElementById('address');
const hear = document.getElementById('hear');
const refer = document.getElementById('refer');
const button = document.querySelector('.subTinsedit');



const sendSignUpEmail = async () => {
  const data = {
    email: email.value,
  };
  fetch('https://sa-p-newbrokerbackend.onrender.com/api/signupemailsand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

button.onclick = async (event) => {
  event.preventDefault();

  const data = {
    fullName: names.value,
    email: email.value,
    phoneNumber: phone.value,
    password: password.value,
    gender: gender.value,
    country: country.value,
    address: address.value,
  };

  console.log(data);

  // if (data.fullName

  button.innerHTML = "Loading...";

  fetch('https://sa-p-new-broker-back-end.vercel.app/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
       if(response.message === "email already in use"){
        alert('email already in use');
      } else{ 
        localStorage.setItem('userId', JSON.stringify(response.data))
          sendSignUpEmail();
      console.log(response)
      const userId = JSON.parse(localStorage.getItem('userId'))
      console.log("Local User Id", userId);
      window.location.href = `https://premium-crypt-account.vercel.app/#/${userId._id}`;
      }
      
      
    })
    .catch((error) => {
      console.log(error);
      button.innerHTML = "Submit";
    });

 
};

