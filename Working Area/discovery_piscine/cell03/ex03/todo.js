let cookies = document.cookie.split(';').map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

// if cookie is not empty, check for the saved cookie
if (document.cookie != ''){
    var div_no = Object.keys(cookies).length+1;
    checkCookie();
}
else {
    var div_no = 0;
    console.log("No cookie found");
}

function todo(){
    let input = prompt("What have to be done?","Homework");

    if (input.length > 0){
        div_no++;
        const div = document.createElement("div");
        const content = document.createTextNode(input);

        // setup new div and content
        div.id = "to_do" + div_no;
        div.appendChild(content);

        // add onclick to div
        div.addEventListener("click", remove_div, true);
        
        // add element in reverse order
        var parent = document.getElementById('ft_list');
        parent.insertBefore(div, parent.firstChild);

        // cookie
        let curr_val = div.id + "=" + div.firstChild.nodeValue + ";";
        console.log(String(curr_val));
        document.cookie = curr_val;
    }
    else{
        alert("Input can't be empty");
    }
}

function remove_div(){
    let cookies = document.cookie.split(';').map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    let action = confirm("Are you sure you want to remove this?");
    if (action) {
        let id = this.id;
        document.getElementById(id).remove();

        // cookie
        let curr_val = this.id + "=" + ";" + "expires = Thu, 01 Jan 1970 00:00:00 GMT";
        console.log(curr_val);
        div_no = Object.keys(cookies).length+1;  // update cookies length
        delete cookies[this.id]; // delete cookies list
        document.cookie = curr_val; // delete actual cookie

        alert("Deleted");
      } else {
        alert("Action canceled");
      }
}

function checkCookie() {
    let cookies = document.cookie.split(';').map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    for (let i = 1; i <= Object.keys(cookies).length; i++){       
            const div = document.createElement("div");
            const content = document.createTextNode(cookies[Object.keys(cookies)[i-1]]);

            // setup new div and content
            div.id = Object.keys(cookies)[i-1];
            div.appendChild(content);

            // add onclick to div
            div.addEventListener("click", remove_div, true);
            
            // add element in reverse order
            var parent = document.getElementById('ft_list');
            parent.insertBefore(div, parent.firstChild);
    }
}