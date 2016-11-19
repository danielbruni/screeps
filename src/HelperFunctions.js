var HelperFunctions = {};

HelperFunctions.garbageCollection = function () {
    for ( let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
};

module.exports = HelperFunctions;