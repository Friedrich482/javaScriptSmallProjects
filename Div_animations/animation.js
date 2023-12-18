let button = document.getElementById('myButton');
let myDiv = document.getElementById('myDiv');
let cliked = false;
button.addEventListener('click', () =>{
    if (!cliked){
        
        cliked = true;
        let x = 0;
        let y = 0;
        let degrees = 0;
        let timerId1 = setInterval(frame1, 5);
        function frame1(){
            if(x >= 300){
                clearInterval(timerId1);
                button.style.left = '300px';
                let timerId2 = setInterval(frame2, 5);

                function frame2(){
                    if(y >= 300){
                        clearInterval(timerId2);
                        button.style.top = '300px';
                        
                        let timerId3 = setInterval(frame3, 5)
                        function frame3(){
                            
                            if(x <= 0 && y <= 0){
                                clearInterval(timerId3);
                                button.style.top = 0;
                                button.style.left = 0;
                                let timerId4 = setInterval(frame4, 5)
                                function frame4(){
                                    if(x >= 300){
                                        clearInterval(timerId4);
                                        button.style.left = '300px';
                                        let timerId5 = setInterval(frame5, 5);
                                        function frame5(){
                                            if(y >= 300){
                                                clearInterval(timerId5);
                                                button.style.top = '300px';
                                                let timerId6 = setInterval(frame6, 5);
                                                function frame6(){
                                                    if(x <= 0 && y <= 0){
                                                        clearInterval(frame6);
                                                        button.style.top = 0;
                                                        button.style.left = 0;
                                                        let timerId7 = setInterval(frame7, 5)
                                                        function frame7(){
                                                            let scale_x = 1;
                                                            let scale_y = 1;
                                                            if(degrees >= 2000){
                                                                clearInterval(timerId7)
                                                                button.style.top = 300;
                                                                button.style.left = 300;
                                                                let set = setTimeout(() => cliked = false, 3000);
                                                                clearTimeout(set);
                                                                console.log(cliked)
                                                            }
                                                            else{
                                                                x +=1;
                                                                y += 1;
                                                                scale_x += 0.7;
                                                                scale_y += 0.7;
                                                                degrees +=1;
                                                                myDiv.style.left = `${x}px`;
                                                                myDiv.style.top = `${y}px`
                                                                
                                                                myDiv.style.transform = `scale(${scale_x}, ${scale_y}) rotateX(${degrees}deg) rotateY(${degrees}deg) rotateZ(${degrees}deg)`;
                                                                
                                                                
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        x -= 1;
                                                        y -= 1;
                                                        degrees +=1;
                                                        myDiv.style.left = `${x}px`
                                                        myDiv.style.top = `${y}px`
                                                        myDiv.style.transform = `rotateZ(${degrees}deg)`
                                                    }
                                                }
                                            }
                                            else{
                                                y +=1
                                                degrees +=1
                                                myDiv.style.top = `${y}px`
                                                myDiv.style.transform = `rotateY(${degrees}deg)`
                                            }
                                        }
                                    }
                                    else{
                                        x +=1;
                                        degrees +=1;
                                        myDiv.style.transform = `rotateX(${degrees}deg)`;
                                        myDiv.style.left = x + 'px';
                                    }
                                }
                                
                            }
                            else{
                                x -= 1;
                                y -= 1;
                                myDiv.style.left = x + 'px';
                                myDiv.style.top = y + 'px';
                            }

                        }
                    }
                    else{
                        y +=1;
                        myDiv.style.top = y + "px";
                    }
                }
            }
            else{
                x +=1;
                myDiv.style.left = x + "px";
            }
        }

        }
        
    
    
})