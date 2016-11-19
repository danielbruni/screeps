var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function (creep) {
        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('building');
        }

        if (creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

            console.log(targets.length);

            // if we find one
            if (targets.length) {
                var target = creep.pos.findClosestByRange(targets);
                if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
            else {
                roleUpgrader.run(creep);
            }
        }
        else {
            var spawns = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0);
                }
            });

            if(spawns.length) {
                target = creep.pos.findClosestByRange(spawns);
                if(!(creep.pos.isNearTo(target))) {
                    creep.moveTo(target);
                } else {
                    creep.withdraw(target, RESOURCE_ENERGY, (creep.carryCapacity - _.sum(creep.carry)));
                }
            }
        }
    }
};