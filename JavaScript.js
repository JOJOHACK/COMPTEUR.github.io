let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

// const body = document.querySelector("body");

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){

            count -= 1;

        }else if(styles.contains("increase")){

            count += 1;

        }else {

            count = 0;


        }

        if(count < 0){

            value.style.color = "red";

        }

        if(count > 0){

            value.style.color = "blue";

        }

        if(count === 0){

            value.style.color = "green";

        }

        value.textContent = count;

    });

});

// body.addEventListener("keypress", (e) =>{

//     console.log(e.target);

// });