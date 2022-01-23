//let url = 'https://5f42-128-195-97-139.ngrok.io/'
let url = 'http://localhost:5000/'
function load() {
    console.log("Hello!!!!!!!!!")
fetch(url).then(res => res.json()).then(response => {
  console.log(response);
  document.getElementById('display').innerHTML = response['content'];
});
}
let counter = 0;
function click(){
  counter = counter + 1;
  document.getElementById('counter').innerHTML = counter;
} 

function upload(){
    let newInput = document.getElementById('user-input').value;
    //maybe filter for bad words, parse string and check for words
    //add alert or html or ??
    //can also add on server side

    //add css to make it look pretty
    //maybe add success message

    //for demo show off every feature wanted to implement
    //wha tyou would do with no time
    //talk about how did not know webdev before a hackathon
    
    console.log(newInput);
    fetch(url + "add?content=" + newInput).then(res => res.json()).then(response => {
        console.log(response);
      });
    document.getElementById('user-input').value = ""
}

