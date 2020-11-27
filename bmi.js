let form = document.querySelector("form")
form.addEventListener('submit',
function(e){
 e.preventDefault()
    let height = parseInt(document.querySelector("#height").value);
    console.log(height);
    let weight = parseInt(document.querySelector("#weight").value);
    console.log(weight);
    let result = document.querySelector('.result')
    console.log(result);
    
    if (height === '' || height < 0 || isNaN(height)) 
    {result.textContent="please enter the height"}
     else if  ( weight === ""|| weight < 0 || isNaN(weight)) 
        {result.textContent="please enter the weight"}
        else {
            let Result = ((weight / (height * height)).toFixed(2));
            console.log(Result);
            result.innerHTML = `<span>${Result} BMI</span>`
          }
        })