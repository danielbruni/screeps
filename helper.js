var helper = {};

helper.garbageCollection = function () {
    for ( let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
};

helper.getCreepsByRole = function (roleName) {
    return _.filter(Game.creeps, (creep) => creep.memory.role == roleName);
};

helper.getCreepCost = function(body) {
    var cost = 0;
    var bodyCost = {
        "move": 50,
        "carry": 50,
        "work": 100,
        "heal": 250,
        "tough": 10,
        "attack": 80,
        "ranged_attack": 150,
        "claim": 600
    };

    _.forEach(body, function (part) { cost += bodyCost[part]; });

    return cost;
};

module.exports = helper;