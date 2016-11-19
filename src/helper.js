var helper = {};

helper.garbageCollection = function () {
    for ( let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
};

helper.getCreepByRole = function (roleName) {
    return _.filter(Game.creeps, (creep) => creep.memory.role == roleName);
};

module.exports = helper;