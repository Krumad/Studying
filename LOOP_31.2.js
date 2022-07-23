alert(
  `Admiral, war came to our land, our sea! We must destroy that russian nazi battleship! Get ready!`
);
let shipPosX = Math.floor(Math.random() * fieldsRow) + 1;
let shipPosY = Math.floor(Math.random() * fieldsColumn) + 1;
console.log(shipPosX, shipPosY);
let shotPosX;
let shotPosY;
while (shotPosX !== shipPosX || shotPosY !== shipPosY) {
  shotPosX = +prompt(`Admiral, choose position to shoot in X coordinate`);
  shotPosY = +prompt(`Admiral, choose position to shoot in Y coordinate`);
  if (shotPosX !== shipPosX || shotPosY !== shipPosY) {
    alert(`Well, admiral, let's try more!`);
    document.getElementById(`${shotPosX}${shotPosY}`).style.backgroundColor =
      "black";
  }
}
alert(
  `Finally! That piece of metallic shit went to bottom! Nice work, admiral.`
);
document.write(`</table>`);
document.getElementById(`${shotPosX}${shotPosY}`).style.backgroundColor = "red";
