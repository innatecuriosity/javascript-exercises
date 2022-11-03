const removeFromArray = function(list, ...args) {
    for (const arg of args) {
        for (let i= 0; i<list.length; i++){
            if (list[i]===arg) {
                list.splice(i,1);
            }
        }
    }
    return list;
    
}
// Do not edit below this line
module.exports = removeFromArray;
