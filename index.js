// code your solution here
function superbowlWin(superbowls){
    const win = superbowls.find(game => game.result === 'W');
    if(win){
        return win.year;
    }else{
        return undefined;
    }
}