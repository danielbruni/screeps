var HelperFunctions = require('HelperFunctions');
var roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    repairer: require('role.repairer')
};
var ai = {
    numbers: require('ai.numbers')
};

module.exports.loop = function () {
    // Garbage Collection
    HelperFunctions.garbageCollection();

    // Spawn
    ai.numbers.harvesters();
    ai.numbers.upgraders();
    ai.numbers.builders();
    ai.numbers.repairers();

    // Run Roles
    for (let name in Game.creeps) {
        if (Game.creeps.hasOwnProperty(name)) {
            // get the creep object
            var creep = Game.creeps[name];
            roles[creep.memory.role].run(creep);
        }
        else {
            console.log("No Creeps found!");
        }
    }
};