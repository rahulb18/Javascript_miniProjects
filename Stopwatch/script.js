let ms=0, s=0, m=0;
        let counter=false;
        let startButton = document.querySelector(".start");
        let stopButton = document.querySelector(".stop");
        let resetButton = document.querySelector(".reset");
        let time = document.querySelector(".time");

        startButton.addEventListener("click",function(){
            if(!counter){
                counter = setInterval(runTime,10);
            }

            function runTime(){
                time.textContent = currentTime();
                ms++;
                if(ms==100){
                    ms=0;
                    s++;
                }
                if(s==60){
                    s=0;
                    m++;
                }
            }
        })
        
        stopButton.addEventListener("click",function(){
            clearInterval(counter);
            counter=false;
        })

        resetButton.addEventListener("click",function(){
            clearInterval(counter);
            counter= false;
            ms=0, s=0, m=0;
            time.textContent = currentTime();
        });

        function currentTime(){
            return m + ":" + s + ":" + ms;
        }