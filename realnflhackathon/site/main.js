GetInformation("Joe Huey");
function GetInformation(playerName){
  var fs = require('fs');
  var obj;
  var name = playerName;
  fs.readFile("Team1.json", 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    Recognition(name);
  });
  function Recognition(playerName){
    var result;
    for (i = 0; i< obj["teamPlayers"].length; i++) { 
      if(playerName==obj["teamPlayers"][i]["displayName"]){
        console.log(obj["teamPlayers"][i]["displayName"]);
      }
    }
  }
}

