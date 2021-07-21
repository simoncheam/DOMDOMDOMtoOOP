
// setup container div
const container = document.createElement('div'); //create div
container.className = 'header-container';  // create class name for div

// button div
const buttonDiv = document.createElement('div'); //create div for button

// square div
const squareDiv = document.createElement('div'); //create div for square
squareDiv.id = 'squareDivId'; // create ID for square div

/// put buttondiv and squarediv >>> container
container.appendChild(buttonDiv);
container.appendChild(squareDiv);

//************************************************
 
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(container);
});

//*****

    const myBtn = document.createElement('button'); // create button element
    const btnText = document.createTextNode('Add Square'); //add text to button element
    myBtn.id='pizza'; ///assigning ID to button div
    myBtn.appendChild(btnText); // append the button text to the button
    buttonDiv.appendChild(myBtn); // append the button element to the button div
    buttonDiv.classList.add('button-container'); //adds button-container class to the buttondiv

    
    // Converting to OOP via Class Object
    
    let divCounter = 1; // set up counter for button div id


class Box {
    constructor (){ /// don't want local scoped variables in a constructor

        this.div = document.createElement('box');
        this.value = document.createTextNode(divCounter); 
    
        this.div.className = 'box';
        this.div.id = divCounter;
       
        squareDiv.appendChild(this.div);   //???
        squareDiv.classList.add('square-container'); 
        this.addEvents();

                
    } /// [ End of Class Box Constructor Section ]


    addEvents(){

                    // mouse over ------------------------------
                    this.div.addEventListener('mouseover', () => this.div.appendChild(this.value));

                    //mouse out -----------------------------
                    this.div.addEventListener('mouseout', () => this.div.removeChild(this.value));

                    // Click event 
                    this.div.addEventListener('click', () =>{           // click = fires random bg color assignment

                        let r = Math.floor(Math.random()*256);
                        let g = Math.floor(Math.random()*256);
                        let b = Math.floor(Math.random()*256);

                        this.div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
                    });


                    /// ADD Double Click Logic! ------------------------------
                    this.div.addEventListener('dblclick', () => this.destroySomething());

                        }

    destroySomething(){  //double click removal logic


        //console log current/previous/next square

        console.log('Current Shape: \t', this.div);
        console.log('Previous Shape: \t', this.div.previousSibling);
        console.log('Next Shape: \t', this.div.nextSibling);

            // EVEN = removes next sibling
            if (this.div.id % 2 == 0){   // If even logic ( IF - ELSE)


                if ( this.div.nextSibling == null){       // nested if: Even + next is null, then error
                    alert('ERROR! Cannot remove next sibling :( ');
                    console.log('ERROR! Cannot remove next sibling :( ');
                    
                } else {   // else removes next sibling
                    squareDiv.removeChild(this.div.nextSibling); /// remove next sibling from parent            
                };
            }

            // ODD = removes previous sibling
            if (this.div.id % 2 == 1){    /// IF Even >>> (IF/ELSE)

                    console.log('dblclick = ODD: ');
                    console.log('Previous Shape Should be removed: \t', this.div.previousSibling);

                if ( this.div.previousSibling == null){             // if previous sib is null >>> Error
                    alert('ERROR! Cannot remove previous sibling :( ');
                    console.log('ERROR! Cannot remove previous sibling :( ');
                    
                } else {   // Else removes previous sibling
                    
                    // ODD = remove previous sibling
                    squareDiv.removeChild(this.div.previousSibling); /// remove next previous from parent
                };

            }


    }

}

myBtn.addEventListener('click', function(){  // launch function via 
    new Box();
    divCounter += 1;  // increment ID #
    
});
   

