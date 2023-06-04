---
title: My JavaScript Table
comments: true
layout: base
description: Try simple table with JQuery Sort
permalink: /frontend/jquery
tags: [week35, tri3]
---
<head>
    <!-- JQuery -->
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <!-- Bootstrap -->
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
    <style>
        #flaskTable th:first-child {
            width: 75px;
        }
        #flaskTable td:not(:first-child) {
          width: 150px;
        }
    </style>

</head>

<table id="flaskTable" class="table table-striped nowrap" style="width:100%">
    <thead id="flaskHead">
        <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Model</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody id="flaskBody"></tbody>
</table>
<br>
<form action="javascript:create_user()">
    <p><label>
        Company:
        <input type="text" name="company" id="company" required>
    </label></p>
    <p><label>
        Model:
        <input type="text" name="model" id="model" required>
    </label></p>
    <p><label>
        Price:
        <input type="text" name="price" id="price" required>
    </label></p>
    <p>
        <button>Create</button>
    </p>
</form>
<script>
    $
    $(document).ready(function() {
    fetch('https://playgroundproject.duckdns.org/api/edwin/', { mode: 'cors' })
    .then(response => {
      if (!response.ok) {
        throw new Error('API response failed');
      }
      return response.json();
    })
    .then(data => {
      for (const row of data) {
        $
        $('#flaskBody').append('<tr><td>' + 
            row.id + '</td><td>' + 
            row.company + '</td><td>' + 
            row.model + '</td><td>' + 
            row.price + '</td></tr>');
            }
            $
      $("#flaskTable").DataTable();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  //
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");
  // prepare URL's to allow easy switch from deployment and localhost
  var url = "https://playgroundproject.duckdns.org/api/edwin/"
  // Load users on page entry
  read_users();
  //
  // Display User Table, data is fetched from Backend Database
  function read_users() {
    // prepare fetch options
    const read_options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
    };
    // fetch the data from API
    fetch(url, read_options)
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database read error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            return;
        }
        // valid response will have json data
        response.json().then(data => {
            console.log(data);
            for (let row in data) {
              console.log(data[row]);
              add_row(data[row]);
            }
        })
    })
    // catch fetch errors (ie ACCESS to server blocked)
    .catch(err => {
      console.error(err);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = err;
      tr.appendChild(td);
      resultContainer.appendChild(tr);
    });
  }
  function create_user(){
    //Validate Password (must be 6-20 characters in len)
    //verifyPassword("click");
    const body = {
        company: document.getElementById("company").value,
        model: document.getElementById("model").value,
        price: document.getElementById("price").value,
    };
    const postOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };
    // URL for Create API
    // Fetch API call to the database to create a new user
    fetch(url, postOptions)
      .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            //add a table row for the new/created userid
            add_row(data);
        })
    })
  }
  function add_row(data) {
    const tr = document.createElement("tr");
    const uid = document.createElement("td");
    const name = document.createElement("td");
    const posts = document.createElement("td")
    const dob = document.createElement("td");
    const age = document.createElement("td");
    // obtain data that is specific to the API
    company.innerHTML = data.company; 
    model.innerHTML = data.model; 
    price.innerHTML = data.price;
    // add HTML to container
    tr.appendChild(company);
    tr.appendChild(model);
    tr.appendChild(price);
    //
    resultContainer.appendChild(tr);
  }
</script>