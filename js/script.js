
// Function to respond to onclick event to get employee information.
function displayEmployee(){

    var buttton = document.getElementById("button");
    buttton.style.display = "none";

    var URL = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";

    var rq = new XMLHttpRequest();
    rq.open("GET", URL, true);
    rq.setRequestHeader("Accept", "application/json");
    rq.onreadystatechange = function () {
        // if conditions are good do the following.
        if (rq.readyState == 4 && rq.status == 200){

            // place json data into a variable.
            var employee = JSON.parse(rq.responseText);
            //console.log(employee);

            // This just hides the word "picture".
            // Yet can be used if the employee has an image to used.
            var profile_img = document.getElementById("profile_img").style.display = "block";

            // Sets the crown for the employee that is selected.
            var crown_img = document.createElement('img');
            crown_img.src = 'https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f451.svg';
            document.getElementById('crown_image').appendChild(crown_img);

            // Gets First and Last Name
            var div_name = document.createElement('div');
            var namenode = document.createTextNode(employee[3].employeefname + " "  + employee[3].employeelname);
            div_name.appendChild(namenode);
            document.getElementById("profile_name").appendChild(div_name);

            // Gets Employee Bio
            var div_bio = document.createElement('div');
            var bionode = document.createTextNode(employee[3].employeebio);
            div_bio.appendChild(bionode);
            document.getElementById("profile_bio").appendChild(div_bio);

            // Gets Employee Role 1
            var div_role_one = document.createElement('div');
            var rolenode = document.createTextNode(employee[3].roles[0].rolename);
            div_role_one.appendChild(rolenode);
            document.getElementById("profile_role_1").appendChild(div_role_one);

            // Gets Employee Role 2
            var div_role_two = document.createElement('div');
            var rolenode_two = document.createTextNode(employee[3].roles[1].rolename);
            div_role_two.appendChild(rolenode_two);
            document.getElementById("profile_role_2").appendChild(div_role_two);

            // Gets Employee Color for Role 1 
            document.getElementById("role_box_1").style.backgroundColor = employee[3].roles[0].rolecolor;
            document.getElementById("role_box_1").style.display = "block";

            // Gets Employee Color for Role 2
            document.getElementById("role_box_2").style.backgroundColor = employee[3].roles[1].rolecolor;
            document.getElementById("role_box_2").style.display = "block";

        }
    }
    rq.send();
}