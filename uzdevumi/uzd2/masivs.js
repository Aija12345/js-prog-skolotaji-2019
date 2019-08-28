let masivs = [];

function iegutIndex(i);{
return masivs[i]

}
function mainitPecIndeksa(i, vertiba){
    masivs[i]= vertiba;
}

function dzestPecIndeksa(i, vertiba){
    masivs= masivs.splice(i,1);
}
function atrastVertibasIndeksa(vertiba){
    for (let i = 0; i<masivs.lenght; i++){
if ( vertiba === masivs[i]) {
    return i;
  }
}
return -1;
}