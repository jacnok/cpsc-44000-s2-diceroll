let diceRoll = [0,
    0,
    0,
    0,
    0,
    0
];

let diceRollEnabled = [0,
    true,
    true,
    true,
    true,
    true];

let firstRun = 0;

function changeDiceType(x)
{
    x = parseInt(x);

    if (diceRollEnabled[x] == true)
        {
        diceRollEnabled[x] = false;
        diceRoll[x] = 0;

       /* switch(x) {
            case 1:
                document.getElementById("dice_1").style.color = "rgb(115, 116, 122)";
                break;
            default:
                break; 
                }
        */

        document.getElementById(("dice_" + x)).style.color = "rgb(115, 116, 122)";                 

        setDocResults()
        console.log("diceRollEnabled is active on " + x);
        }
    else
        {
        diceRollEnabled[x] = true;

        document.getElementById(("dice_" + x)).style.color = "white";
        console.log("diceRollEnabled is disabled on " + x);
        }
}

function calcDiceRoll() {
    for (let x = 1; x < 6; x++)
    {
        if (diceRollEnabled[x] == false)
            diceRoll[x] = 0;
        
        console.log("diceRollEnabled for " + x + " is " + diceRollEnabled[x]);

        if ((diceRollEnabled[x] == true) || (firstRun == 0))
            diceRoll[x] = randGen();
            console.log("diceRoll for " + x + " is " + diceRoll[x]);
            

    }
    firstRun = 1;
    setDocResults()
}

function setDocResults() {
    document.getElementById("dice_1").innerHTML = diceRoll[1];
    document.getElementById("dice_2").innerHTML = diceRoll[2];
    document.getElementById("dice_3").innerHTML = diceRoll[3];
    document.getElementById("dice_4").innerHTML = diceRoll[4];
    document.getElementById("dice_5").innerHTML = diceRoll[5];
}

function randGen()
{
    return (Math.floor(Math.random() * 6)) + 1;
}