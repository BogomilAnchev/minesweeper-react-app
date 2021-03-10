import { useState } from "react";

function Mines() {
   // States here

   const [arr, setArr] = useState([]);
   const [lose, setLose] = useState(false);
   const [win, setWin] = useState(false);
   const [difficulty, setDifficulty] = useState("");
   const [heading, setHeading] = useState(":) CHOOSE A DIFFICULTY LEVEL TO START :)");
   const [mineCount, setMineCount] = useState(0);

   // States here

   function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function newGame(maxRandomInt, difficulty) {
      let mines = 0
      let field = [];
      for (let i = 0; i < 9; i++) {
         let row = [];
         for (let j = 0; j < 20; j++) {
            row.push({
               x: i,
               y: j,
               randomNum: randomInteger(0, maxRandomInt),
               revealed: false,
               tergeted: false,
               isMine: false,
               numberOfMinesAroundIt: 0,
            });
         }
         field.push(row);
      }

      for (let i = 0; i < field.length; i++) {
         for (let j = 0; j < field[i].length; j++) {
            if (field[i][j].randomNum === 0) mines++
            let counter = 0;
            for (let q = Math.max(0, i - 1); q <= Math.min(field.length - 1, Number(i) + 1); q++) {
               for (let w = Math.max(0, j - 1); w <= Math.min(field[0].length - 1, Number(j) + 1); w++) {
                  if (field[q][w].randomNum === 0) counter++;
               }
            }
            field[i][j].numberOfMinesAroundIt = counter;
         }
      }

      setMineCount(mines)
      setDifficulty(difficulty);
      setArr(field);
      setLose(false);
      setWin(false);
      setHeading(":) YO IN THE MINES NOW! GOOD LUCK FELLA :)");
   }

   function clickBox(x, y) {
      let newArr = arr.slice(0);
      if (arr[x][y].randomNum === 0) {
         newArr[x][y].isMine = true;
         newArr[x][y].revealed = true;
         setLose(true);
         setHeading(":( BOOM! SORRY, YALL BLOWN UP BADLY :(");
      } else {
         newArr[x][y].revealed = true;
      }
      if (arr[x][y].numberOfMinesAroundIt === 0) {
         checkSurrounds(newArr, x, y);
      }
      setArr(newArr);
      checkIfWin();
   }

   function targetMine(e, x, y) {
      e.preventDefault();
      if (win || lose) return;
      let newArr = arr.slice(0);
      newArr[x][y].targeted ? (newArr[x][y].targeted = false) : (newArr[x][y].targeted = true);
      setArr(newArr);
   }

   function cascadeHandler(x, y) {
      if (win || lose) return;
      let newArr = arr.slice(0);
      for (let i = Math.max(0, x - 1); i <= Math.min(newArr.length - 1, x + 1); i++) {
         for (let j = Math.max(0, y - 1); j <= Math.min(newArr[0].length - 1, y + 1); j++) {
            if (!newArr[i][j].revealed) {
               if (newArr[i][j].randomNum === 0 && !newArr[i][j].targeted) {
                  newArr[i][j].isMine = true;
                  newArr[i][j].revealed = true;
                  setLose(true);
                  setHeading(":( BOOM! SORRY, YALL BLOWN UP BADLY :(");
               } else if (newArr[i][j].randomNum !== 0 && !newArr[i][j].targeted) {
                  newArr[i][j].revealed = true;
               }
               if (newArr[i][j].numberOfMinesAroundIt === 0) {
                  checkSurrounds(newArr, i, j);
               }
            }
         }
      }
      setArr(newArr);
      checkIfWin();
   }

   /* 
      That damn recursion took me a while to figure it but damn, for a novice im good :D
      Proud of myself!
   */

   function checkSurrounds(newArr, x, y) {
      if (newArr[x][y].numberOfMinesAroundIt !== 0) return;
      for (let i = Math.max(0, x - 1); i <= Math.min(arr.length - 1, x + 1); i++) {
         for (let j = Math.max(0, y - 1); j <= Math.min(arr[0].length - 1, y + 1); j++) {
            if (!newArr[i][j].revealed) {
               newArr[i][j].revealed = true;
               checkSurrounds(newArr, i, j);
            }
         }
      }
   }

   /* 
      Still proud!
   */

   function checkIfWin() {
      let isWon = true;
      arr.forEach(x => {
         x.forEach(y => {
            if (y.randomNum !== 0 && y.revealed === false) {
               isWon = false;
            }
         });
      });
      if (isWon) {
         setWin(true);
         setHeading(":D CONGRATS! THERE`S NO BLOWIN YA! :D");
      }
   }

   function revealMines() {
      for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].randomNum === 0) {
               let newArr = arr.slice(0);
               newArr[i][j].isMine = true;
               setArr(newArr);
            }
         }
      }
      setLose(true);
      setHeading(":( BOOM! SORRY, YALL BLOWN UP BADLY :(");
   }

   return (
      <main className="wrapper">
         <h1>MINESWEEPER! ...just a bit uglier...</h1>

         <h2 className={`${lose ? "game-over" : ""}${win ? "game-win" : ""}`}>{heading}</h2>
         {difficulty ? <h1>{difficulty} - {mineCount}</h1> : ""}

         <div className={`${!lose ? "" : "game-over-field"}${!win ? "" : "game-win-field"}`}>
            {arr.map((x, i) => {
               return (
                  <div key={i} className="row">
                     {x.map((y, j) => {
                        return (
                           <p
                              key={`${i}${j}`}
                              onContextMenu={(e) => targetMine(e, y.x, y.y)}
                              onClick={!arr[i][j].revealed && !lose && !win ? () => clickBox(y.x, y.y) : () => {}}
                              className={`box ${arr[i][j].targeted ? "target-mine" : ""}    
                              ${arr[i][j].revealed && !arr[i][j].isMine ? "revealed" : ""}`}
                              id={`${arr[i][j].isMine ? "mine" : ""}`}
                           >
                              {y.revealed && y.numberOfMinesAroundIt !== 0 ? y.numberOfMinesAroundIt : " "}
                              {y.revealed && y.numberOfMinesAroundIt !== 0 && !y.isMine ? (
                                 <span onClick={() => cascadeHandler(y.x, y.y)} id="cascade">
                                    cascade
                                 </span>
                              ) : (
                                 " "
                              )}
                           </p>
                        );
                     })}
                  </div>
               );
            })}
         </div>
         <div>
            {difficulty ? <p>click on any diffuculty to start new game.</p> : ""}
            <button className={`${!lose ? "" : "game-over-field"}${!win ? "" : "game-win-field"}`} onClick={() => newGame(12, "Grasp the idea")}>
               Grasp the idea
            </button>
            <button className={`${!lose ? "" : "game-over-field"}${!win ? "" : "game-win-field"}`} onClick={() => newGame(9, "Easy")}>
               Easy
            </button>
            <button className={`${!lose ? "" : "game-over-field"}${!win ? "" : "game-win-field"}`} onClick={() => newGame(7, "Medium")}>
               Medium
            </button>
            <button className={`${!lose ? "" : "game-over-field"}${!win ? "" : "game-win-field"}`} onClick={() => newGame(5, "Hard")}>
               Hard
            </button>
            <button className={`${!lose ? "" : "game-over-field"}${!win ? "" : "game-win-field"}`} onClick={() => newGame(3, "Expert")}>
               Expert
            </button>
         </div>

         {difficulty && !win && !lose ? <button onClick={!win ? revealMines : () => {}}>Show all the mines</button> : ""}

         <section className="rules">
            <ul>
               <li>LEFT CLICK - to clear a square that you think is not a mine.</li>
               <li>RIGHT CLICK - to mark and unmark a square with orange to indicate you think a mine is there.</li>
               <li>
                  CASCADE (immitates clicking both mouse buttons at the same time in the actual game) - when the computer automatically opens up
                  surrounding squares for you. Carefull for if you didn't mark the mines right, you lose.
               </li>
            </ul>
         </section>
      </main>
   );
}

export default Mines;
