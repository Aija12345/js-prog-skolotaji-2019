
function pievienot(){
const a = parseInt(prompt('ievadi skaitli'));

masivs.push(a);
print();
}
function nonemt(){
    
    masivs.pop( );
    print();
    }


   function aizvieto(){
    
        masivs[2]=100;
        print();
        }
        function iestarpini(){
            const b = parseInt(prompt('ievadi skaitli'));
             masivs.splice(b,0,3000);
            print();
            }
            function iznemt(){
                const c = parseInt(prompt('norādi indeksu'));
               masivs.splice(c,1);
                print();
                }
function print(){
document.getElementById("izvads").innerHTML = masivs;
}