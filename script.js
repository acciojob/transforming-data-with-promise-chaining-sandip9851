document.getElementById("btn").addEventListener("click", display);

function display() {
  return new Promise((resolve, reject) => {
    let value = document.getElementById("ip").value;
    setTimeout(() => {
      document.getElementById("output").innerText = `Result : ${value}`;
      resolve(value);  // you should resolve with a value
    }, 2000)
  }).then((value)=>{
		return new Promise((resolve, reject) => {
	    value = value*2
    setTimeout(() => {
      document.getElementById("output").innerText = `Result : ${value}`;
      resolve(value);  // you should resolve with a value
    }, 1000)
	}).then((value)=>{
		return new Promise((resolve, reject) => {
	    value = value-3
    setTimeout(() => {
      document.getElementById("output").innerText = `Result : ${value}`;
      resolve(value);  // you should resolve with a value
    }, 1000)
	}).then((value)=>{
		return new Promise((resolve, reject) => {
     value = value/2
    setTimeout(() => {
      document.getElementById("output").innerText = `Result : ${value}`;
      resolve(value);  // you should resolve with a value
    }, 1000)
	}).then((value)=>{
		return new Promise((resolve, reject) => {
     value = value+10
    setTimeout(() => {
      document.getElementById("output").innerText = `Final Result : ${value}`;
      resolve(value);  // you should resolve with a value
    }, 1000)
	})
}