var checks = ['weaponData', 'passiveAData', 'passiveBData', 'passiveCData', 'sealData', 'drive1Data', 'drive2Data', 'drive3Data'];

function checkAffinity(mod, attacker, defender) {
    var atkAdept = 0;
    var defAdept = 0;

    // A better hero engine would really help here to not do this horrible line
    atkAdept = Math.min(CheckTriAdvPerPossibility(attacker, defender, mod, attacker.passiveAData), CheckTriAdvPerPossibility(attacker, defender, mod, attacker.weaponData), CheckTriAdvPerStatus(attacker, defender, mod));
    // The "2-" part is required to change the disequation from < to > (mod <1 "->" 2-mod<1 "->" -mod<-1 "->" mod>1)
    defAdept = Math.min(CheckTriAdvPerPossibility(defender, attacker, 2-mod, defender.passiveAData), CheckTriAdvPerPossibility(defender, attacker, 2-mod, defender.weaponData), CheckTriAdvPerStatus(defender, attacker, 2-mod));

    return Math.min(atkAdept,defAdept);
}

//Let's separate the checks for weaponData and passiveAData, so we can get the correct number to check for cancel affinity
function CheckTriAdvPerPossibility(agent, other, mod, tocheck) {
    if (tocheck.hasOwnProperty("tri_advantage")) {
        var adv = true;
        if (mod < 1) {
            adv = false;
        }
        return cancelAffinity(agent, other, adv, mod);
    }
    return 0;
}

function CheckTriAdvPerStatus(agent, other, mod) {
	if(agent.status.triangleAdept) {
        var adv = true;
        if (mod < 1) {
            adv = false;
        }
        return cancelAffinitySP(agent, other, adv, 0.2);
    }
    return 0;
}

//Adjusts damage
function cancelAffinity(a, b, adv, checking) {
    if (a.passiveBData.hasOwnProperty("cancel_skill_affinity")) {
        return -checking.tri_advantage;
    }

    if (b.passiveBData.hasOwnProperty("cancel_enemy_skill_affinity")) {
        return -checking.tri_advantage;
    }

    if (adv) {
        if (b.passiveBData.hasOwnProperty("cancel_negative_enemy_skill_affinity")) {
            return -checking.tri_advantage;
        }

        if (b.passiveBData.hasOwnProperty("reverse_negative_enemy_skill_affinity")) {
            return -(2*checking.tri_advantage);
        }
    }

    return 0;
}

function cancelAffinitySP(a, b, adv, checking) {
    if (a.passiveBData.hasOwnProperty("cancel_skill_affinity")) {
        return -checking;
    }

    if (b.passiveBData.hasOwnProperty("cancel_enemy_skill_affinity")) {
        return -checking;
    }

    if (adv) {
        if (b.passiveBData.hasOwnProperty("cancel_negative_enemy_skill_affinity")) {
            return -checking;
        }

        if (b.passiveBData.hasOwnProperty("reverse_negative_enemy_skill_affinity")) {
            return -(2*checking);
        }
    }

    return 0;
}

//Needed for Loptous... Why IS?!
function isEffective(attacker, defender, battleInfo)
{
    if(!attacker.weaponData.hasOwnProperty("weapon_effective"))
        return battleInfo;
    if(defender.weaponData.hasOwnProperty("weapon_defense") && defender.weaponData.weapon_defense.includes(weaponInfo[defender.weaponName].type))
        return battleInfo;
    if(attacker.weaponData.weapon_effective.includes(weaponInfo[defender.weaponName].type))
    {
        battleInfo.isEff=true;
        battleInfo.eff=weaponInfo[defender.weaponName].type;
        return battleInfo;
    }
    if(defender.weaponData.hasOwnProperty("weak_as"))
    {
        var validTarget=false;
        var weaknesses=defender.weaponData.weak_as;
        weaknesses.forEach(function(weak) {
            if(attacker.weaponData.weapon_effective.includes(weak))
            {
                battleInfo.isEff=true;
                battleInfo.eff=weak;
                validTarget=true;
                return true;
            }
        });
        if(validTarget)
            return battleInfo;
    }
    return battleInfo;
}

//Checks if bonuses of character b need to be nullifed
function canNullifyEnemyBonuses(a, b) {

    //Panic takes precedence over nullification
    if (b.status.panic) {
        return false;
    }

    var validTarget = false;

    checks.forEach(function(key) {
        var nullify = a[key].nullify_enemy_bonuses;
        if (nullify) {
            if(!nullify.threshold || (a.initHP >= roundNum(a.hp * nullify.threshold, true))){
            //Move type
                if (nullify.move_type && nullify.move_type[b.moveType]) {
                    validTarget = true;
                }
                //Weapon type
                if (nullify.weapon_type && nullify.weapon_type[b.type]) {
                    validTarget = true;
                }

                if (nullify.all) {
                    validTarget = true;
                }
            }
        }
    });

    if (validTarget) {
        return true;
    }
    return false;
}

//Function to add updated dragonstones
function checkDefRes(hero) {
    if(hero.def>=hero.res)
        return false;
    return true;
}

//Subtracts bonuses from stats
function removeStatBonuses(hero) {
    var stats = ['atk', 'spd', 'def', 'res'];

    stats.forEach(function(stat) {
        hero[stat] -= hero[stat + 'Bonus'];
        hero[stat + 'WS'] -= hero[stat + 'Bonus'];
        hero[stat + 'Bonus'] = 0;
    });
}

function checkIfBonusDMG(agent, other)
{
    if (agent.weaponData.hasOwnProperty("add_changes")) {
        var tmp = agent.weaponData.add_changes;
        var source = tmp.source === "enemy" ? other : agent;
        agent.addChangesSource = tmp.source === "enemy" ? "enemy's " : "";
        var type = tmp.type;
        var multiplier = tmp.multiplier;
        var stats = tmp.stats;
        var toAdd = 0;
        agent.addChangesSource += tmp.hasOwnProperty("individual") ? "individual " : "";
        if(type === "bonus" && !source.status.panic) {
            toAdd = roundNum((source.atkBonus + source.defBonus + source.spdBonus + source.resBonus) * multiplier, false);
            agent.addChangesSource += "bonuses";
        }
        else if(type === "penalty") {
            toAdd = roundNum((-source.atkPenalty - source.defPenalty - source.spdPenalty - source.resPenalty) * multiplier, false);
            agent.addChangesSource += "penalties";
        }
        else
            return agent;
        if(toAdd <= 0)
            return agent;
        agent.addChanges = {};
        if(!tmp.hasOwnProperty("individual"))
        {
            stats.forEach(function(stat) {
                agent.addChanges[stat] = toAdd;
            });
        }
        else {
            stats.forEach(function(stat) {
                if(type === "bonus" && !source.status.panic)
                    agent.addChanges[stat] = source[stat + "Bonus"] * multiplier;
                else if(type === "penalty")
                    agent.addChanges[stat] = source[stat + "Penalty"] * multiplier;
            });
		}
    }
    return agent;
}

//Check for enemy counter prevention (dazzling staff/Sacae's blessing/Deathly dagger/Firesweep/sweep)
function checkPrevent(attacker, defender) {
//Weapon specific counter prevention
    var tmp=true;
    checks.forEach(function(key){
    var tocheck = attacker[key];
        if ((tocheck.prevent_weapon_counter && tocheck.prevent_weapon_counter.type.includes(defender.weaponData.type)) || (canPreventEnemyCounter(tocheck, attacker.hp, attacker.currHP)) || (tocheck.prevent_counter || defender[key].prevent_counter || canActivateSweep(tocheck, defender.weaponData.type, attacker, defender))) {
            tmp = false;
            return;
        }
	});
    return tmp;
}

//Check gor initiate/defend bonuses
function checkMods(battleInfo, attacker, defender, mod, message1, message2, message3)
{
    checks.forEach(function(key){
        if (attacker[key].hasOwnProperty(mod)) {
            battleInfo = combatBonus(battleInfo, attacker[key][mod], attacker[key].name, message1, message2);
        }
        if (attacker[key].hasOwnProperty("type_"+mod) && attacker[key]["type_"+mod].weapon_type.hasOwnProperty(defender.weaponData.type)) {
            battleInfo = combatBonus(battleInfo, attacker[key]["type_" + mod].stat_mod, attacker[key].name, message1, message2 + message3 + " a " + defender.weaponData.type + " user" );
        }
    });
    return battleInfo;
}

// checks if the defender can counter
// battleInfo contains all battle information
function defCanCounter(battleInfo) {
    var attacker = battleInfo.attacker;
    var defender = battleInfo.defender;

    //Weapon check
    if (defender.weaponName === "None") {
        return false;
    }

    //Range and counter check
    if (defender.weaponData.range !== attacker.weaponData.range && !defender.weaponData.counter && !defender.passiveAData.counter) {
        return false;
    }

    if(!checkPrevent(attacker, defender)){
        return false;
    }

    //Candlelight status
    if (defender.status.candlelight) {
        return false;
    }

    return true;
}

function consecutiveDamageReduction(dmg, defender, attacker, battleInfo) {
	
    var multiplier = 1;
    checks.forEach(function(key) {
        var red = defender[key].consecutive_dmg_reduction;
        if (red && red.multiplier) {
            if (red.enemy_range && red.enemy_range !== attacker.weaponData.range) {
                return;
            }
            if (red.weapon_type) {
                for (var i = 0; i < red.weapon_type.length; i++) {
                    if (attacker.weaponData.type.toLowerCase().includes(red.weapon_type[i].toLowerCase())) {
                        multiplier *= defender[key].consecutive_dmg_reduction.multiplier;
                        battleInfo.logMsg += "Opponent reduces damage from consecutive attacks [" + defender[key].name + "]. ";
                    }
                }
            }
            else {
                multiplier *= defender[key].consecutive_dmg_reduction.multiplier;
                battleInfo.logMsg += "Opponent reduces damage from consecutive attacks [" + defender[key].name + "]. ";
            }
        }
    });

    battleInfo.reduction *= multiplier;
    return battleInfo;
}

// checks if the attacker can activate windsweep
function canActivateSweep(container, defWeapon, attacker, defender) {
    return container.hasOwnProperty("sweep") && (phantomStat(attacker, "spd") - phantomStat(defender, "spd") >= container.sweep.spd_adv) && container.sweep.weapon_type.hasOwnProperty(defWeapon);
}

// checks if the attacker can prevent enemy counterattacks
function canPreventEnemyCounter(container, hp, currHP) {
    return container.hasOwnProperty("prevent_enemy_counter") && currHP >= roundNum(container.prevent_enemy_counter * hp, true);
}


//Checks the follows (Brash, Riposte, follow-up, fighters & breakers) and if the agent has wary fighter or sweep ability
function Follow(char, agent, attacker, CanCounter, battleInfo) {
    var doubling=1;
    var othWeapon = agent.weaponData.type;
    var othColor = agent.color;
    for (var i = 0; i < checks.length; i++) {
        var bfup=char[checks[i]].attack_follow_up;
        if(!attacker)
            bfup=char[checks[i]].defense_follow_up;
        if (bfup) {
            var bonusesTarget = char;
            if(bfup.hasOwnProperty(("bonus") && bfup.bonus === "other"))
                bonusesTarget = agent;
            if ((!bfup.hasOwnProperty("threshold")) || (bfup.trigger==='healthy' && char.initHP >= roundNum(bfup.threshold * char.hp, true)) || (bfup.trigger==='damaged' && char.initHP <= roundNum(bfup.threshold * char.hp, true))) { //hp check for all of them
                if((!bfup.hasOwnProperty("weapon_type")) || (bfup.weapon_type.includes(othWeapon) && (othWeapon !== 'Bow' || othColor === 'Colorless') && (othWeapon !== 'Dagger' || othColor === 'Colorless'))){ //breaker check
                    if((!bfup.hasOwnProperty("counterable")) || (CanCounter)) { //brash check
                        if((!bfup.hasOwnProperty("adjacent_dependant")) || char.adjacent <= agent.adjacent) { //LEphraim's check
                            if((!bfup.hasOwnProperty("bonus")) || (((bonusesTarget.atkBonus + bonusesTarget.spdBonus + bonusesTarget.defBonus + bonusesTarget.resBonus) !== 0 && !bonusesTarget.status.panic) || checkMarch(bonusesTarget))) { //BEphraim's check
                                doubling++;
                                battleInfo.logMsg+="<li class='battle-interaction'><span class='" + char.agentClass + "'>" + char.display + "</span>'s " + char[checks[i]].name + " activated, increasing their own ability to follow-up!</li>";
                            }
                        }
                    }
                }
            }
        }
        if((char[checks[i]].hasOwnProperty("self_prevent_follow")) && ((!char[checks[i]].self_prevent_follow.hasOwnProperty("threshold")) || (char.initHP >= roundNum(char[checks[i]].self_prevent_follow.threshold * char.hp, true)))){
            if((!char[checks[i]].self_prevent_follow.hasOwnProperty("attack")) || attacker) {
                doubling--;
                battleInfo.logMsg+= "<li class='battle-interaction'><span class='" + char.agentClass + "'>" + char.display + "</span>'s " + char[checks[i]].name + " activated, decreasing their own ability to follow-up!</li>";
            }
        }
    }
    if(attacker)
        battleInfo.atkFollow=doubling;
    else
        battleInfo.defFollow=doubling;
    return battleInfo;
}

//Needed by Prevent to know which stat to check...
function ReturnStat(hero, stat)
{
	if(stat=="def")
		return hero.def;
	if(stat=="atk")
		return hero.atk;
	if(stat=="res")
		return hero.res;
	if(stat=="spd")
		return hero.spd;
	return hero.hp;
}

//Checks the follow-preventions (Wary & breakers)
function Prevent(char, agent, ageWeapon, battleInfo, attacker)
{
    var prevention=0;
    for (var i = 0; i < checks.length; i++) {
        var prev = char[checks[i]].other_prevent_follow;
        if (prev) {
            //healthy (Breakers and Wary fighter), stat_to_check (Myrrh) and adjacent dependent (Hector's Thunder Armads)
            if ((!prev.hasOwnProperty("stat_to_check")) || (ReturnStat(char, prev.stat_to_check) >= ReturnStat(agent, prev.stat_to_check)+ prev.stat_amount)) {
                if((!prev.hasOwnProperty("threshold")) || char.initHP >= roundNum(prev.threshold * char.hp, true)) {
                    if((!prev.hasOwnProperty("weapon_type")) || (prev.weapon_type.includes(ageWeapon) && (ageWeapon !== 'Bow' || agent.color === 'Colorless') && (ageWeapon !== 'Dagger' || agent.color === 'Colorless'))) {
                        if((!prev.hasOwnProperty("adjacent_dependant")) || (char.adjacent > agent.adjacent)) {
                            prevention+=1;
                            battleInfo.logMsg+= "<li class='battle-interaction'><span class='" + char.agentClass + "'>" + char.display + "</span>'s " + char[checks[i]].name + " activated, decreasing <span class='" + agent.agentClass + "'>" + agent.display +"</span>'s ability to follow-up!</li>";
                        }
                    }
                }
            }
        }
    }
    if(attacker)
        battleInfo.atkPrev=prevention;
    else
        battleInfo.defPrev=prevention;
    return battleInfo;
}

function checkMarch(char)
{
    if(char.passiveCData.hasOwnProperty("march") && char.passiveCData.march * char.hp <= char.initHP)
        return true;
    if(char.sealData.hasOwnProperty("march") && char.sealData.march * char.hp <= char.initHP)
        return true;
    return false;
}

//Checks the poison effect
function Poison(char, battleInfo, attacker)
{
    var poison=0;
    var poisonSource="";
    for (var i = 0; i < checks.length; i++) {
        var pois = char[checks[i]].poison;
        if((!pois) && attacker)
            pois=char[checks[i]].initiate_poison
        if (pois) {
            poison += pois;
            poisonSource += (poisonSource.length > 0) ? ", " + char[checks[i]].name : char[checks[i]].name;
        }
    }
    if(attacker)
    {
        battleInfo.atkPoison=poison;
        battleInfo.atkPoisonSource=poisonSource;
    }
    else
    {
        battleInfo.defPoison=poison;
        battleInfo.defPoisonSource=poisonSource;
    }
    return battleInfo;
}

//Reduce damage from first attack
function firstDmgReduction(char, enemy) {
    for (var i = 0; i < checks.length; i++) {
        var source = char[checks[i]].first_dmg_reduction;

        if(!source) {
            continue;
        }

        if (Array.isArray(source.weapon_type) && !source.weapon_type.includes(enemy.type)) {
            continue;
        }

        if (Array.isArray(source.move_type) && !source.move_type.includes(enemy.moveType)) {
            continue;
        }

        return true;
    }
    return false;
}

//Bonus for adjacency to allies
function adjacentStatBonus(battleInfo, char, other, charToUse, initiator) {
    checks.forEach(function(key) {
        var bonus = char[key].adjacent_stat_bonus;
        if (!bonus) {
            return;
        }

        if ((bonus.hasOwnProperty("enemy_greater_than") && char.adjacent > other.adjacent ) || (!bonus.hasOwnProperty("enemy_greater_than") && char.adjacent < 1) || (bonus.hasOwnProperty("needed") && bonus.needed > char.adjacent) || (bonus.hasOwnProperty("en_phase") && initiator)) {
            return;
        }

        if (bonus.target === 'self' && bonus.adjacent === 'ally') {
            for (b in bonus.mod) {
                battleInfo[charToUse][b] += bonus.mod[b];
                    battleInfo.logMsg += "<li class='battle-interaction'><span class='" + charToUse + "'>" + battleInfo[charToUse].display + "</span> raises " + b + " by " + bonus.mod[b] + " [" + char[key].name + "].</li>";
            };
        }
    });
    return battleInfo;
}

//Bonus for being solo
function soloStatBonus(battleInfo, char, other, charToUse, initiator) {
    checks.forEach(function(key) {
        var bonus = char[key].solo_stat_bonus;
        if (!bonus) {
            return;
        }

        if (bonus.target === 'self' && bonus.adjacent === 'ally') {
            if(char.adjacent < 1) {
                for (b in bonus.mod) {
                    battleInfo[charToUse][b] += bonus.mod[b];
                        battleInfo.logMsg += "<li class='battle-interaction'><span class='" + charToUse + "'>" + battleInfo[charToUse].display + "</span> raises " + b + " by " + bonus.mod[b] + " [" + char[key].name + "].</li>";
                };
            }
        }
    });
    return battleInfo;
}

//New increased damage check
function checkBonusDmg(battleInfo, char)
{
	battleInfo.bonusDmg=0;
    for (var i = 0; i < checks.length; i++) {
        var bfup = char[checks[i]].spec_damage_bonus;
        if(!bfup)
            bfup = char[checks[i]].spec_damage_bonus_hp;
        if (bfup) {
            if ((!char[checks[i]].spec_damage_bonus_hp) || roundNum(char.currHP / char.hp <= char[checks[i]].threshold)) {
                battleInfo.bonusDmg+=bfup;
                battleInfo.logMsg += "Damage is increased by " + bfup.toString() + " [" + char[checks[i]].name + "]. ";
            }
        }
    }
    return battleInfo;
}

//Checks for dragons/felicia's plate
function checkResDefSubstitution(battleInfo, char, other)
{
    battleInfo.changeDefRes=0;
    for (var i = 0; i < checks.length; i++) {
        var bfup = char[checks[i]].LowerResDef;
        if(!bfup)
            bfup = char[checks[i]].LowerResDefRange;
        if (bfup) {
            if ((!char[checks[i]].hasOwnProperty("LowerResDefRange")) || (bfup==other.weaponData.range)) {
                if(!checkDefRes(other))
                {
                    battleInfo.logMsg += "<span class='" + char.agentClass + "'>" + char.display + "</span>'s " + char[checks[i]].name + " changed the target of the attack to Resistance. ";
                    battleInfo.changeDefRes=1;
                }
                else
                {
                    battleInfo.logMsg += "<span class='" + char.agentClass + "'>" + char.display + "</span>'s " + char[checks[i]].name + " changed the target of the attack to Defense. ";
                    battleInfo.changeDefRes=2;
                }
				return battleInfo;
            }
        }
    }
    return battleInfo;
}

function hardy_bearing_msg(battleInfo, agent) {
    for(var i = 0; i < checks.length; i++) {
        var key = agent[checks[i]];
        if (key.hasOwnProperty("remove_prio_hp")) {
    	    battleInfo.logMsg += "<li class='battle-interaction'><span class='" + agent.agentClass + "'>" + agent.display + "</span> can't alter the turn's order ["+key.name+"]!</li> ";
            if(agent.initHP >= agent.hp*key.remove_prio_hp) {
                battleInfo.logMsg += "<li class='battle-interaction'><span class='" + agent.agentClass + "'>" + agent.display + "</span> avoids the opponent changes the turn's order too ["+key.name+"]!</li> ";
                break;
            }
        }
    }
    return battleInfo;
}

//This is redundant, separating this makes it easier to maintain
function giveBonuses(battleInfo, agent, other, initiator){

    // below hp threshold bonus
    if (agent.weaponData.hasOwnProperty("below_threshold_mod") && agent.initHP <= checkRoundError(agent.weaponData.below_threshold_mod.threshold * agent.hp)) {
        battleInfo = combatBonus(battleInfo, agent.weaponData.below_threshold_mod.stat_mod, weaponInfo[agent.weaponName].name, agent.agentClass, "for having HP ≤ " + (agent.weaponData.below_threshold_mod.threshold * 100).toString() + "%");
    }

    // below hp threshold bonus
    if (agent.passiveAData.hasOwnProperty("below_threshold_mod") && agent.initHP <= checkRoundError(agent.passiveAData.below_threshold_mod.threshold * agent.hp)) {
        battleInfo = combatBonus(battleInfo, agent.passiveAData.below_threshold_mod.stat_mod, skillInfo['a'][agent.passiveA].name, agent.agentClass, "for having HP ≤ " + (agent.passiveAData.below_threshold_mod.threshold * 100).toString() + "%");
    }

    // hp advantage boost
    if (agent.passiveAData.hasOwnProperty("hp_adv_mod") && agent.currHP - other.currHP >= agent.passiveAData.hp_adv_mod.hp_adv) {
        battleInfo = combatBonus(battleInfo, agent.passiveAData.hp_adv_mod.stat_mod, skillInfo['a'][agent.passiveA].name, agent.agentClass, "for having at least " + agent.passiveAData.hp_adv_mod.hp_adv.toString() + " more HP than the opponent");
    }

    // full hp bonus
    if (agent.weaponData.hasOwnProperty("full_hp_mod") && agent.currHP >= agent.hp) {
        battleInfo = combatBonus(battleInfo, agent.weaponData.full_hp_mod, weaponInfo[agent.weaponName].name, agent.agentClass, "for having full HP");
    }

    // enemy's movement bonus
    if (agent.weaponData.hasOwnProperty("enemy_movement_mod") && agent.weaponData.enemy_movement_mod.movement_type.includes(other.moveType)) {
		var n = ((other.moveType === "Armored") || (other.moveType === "Infantry")) ? "n" : "";
        battleInfo = combatBonus(battleInfo, agent.weaponData.enemy_movement_mod.mod, weaponInfo[agent.weaponName].name, agent.agentClass, "for facing a" + n + " " + other.moveType + " unit");
    }

    // full hp bonus
    if (agent.passiveAData.hasOwnProperty("full_hp_mod") && agent.currHP >= agent.hp) {
        battleInfo = combatBonus(battleInfo, agent.passiveAData.full_hp_mod,  skillInfo['a'][agent.passiveA].name, agent.agentClass, "for having full HP");
    }

    // not full hp bonus, couldn't use below_threshold_mod because of rounding
    if (agent.weaponData.hasOwnProperty("not_full_hp_mod") && agent.currHP < agent.hp) {
        battleInfo = combatBonus(battleInfo, agent.weaponData.not_full_hp_mod, weaponInfo[agent.weaponName].name, agent.agentClass, "for not having full HP");
    }

    // opponent full hp bonus
    if (agent.weaponData.hasOwnProperty("foe_full_hp_mod") && other.currHP >= other.hp) {
        battleInfo = combatBonus(battleInfo, agent.weaponData.foe_full_hp_mod, weaponInfo[agent.weaponName].name, agent.agentClass, "for battling an opponent with full HP");
    }

    // blade tome bonuses
    if (agent.hasOwnProperty("addChanges")) {
        battleInfo = bladeTomeBonus(battleInfo, agent.addChanges, agent.agentClass, agent.addChangesSource);
    }

    // owl tome bonuses
    if (agent.weaponData.hasOwnProperty("adjacent_ally_bonus") && agent.adjacent > 0) {
        battleInfo = owlTomeBonus(battleInfo, agent.adjacent, agent.agentClass);
    }
	
    //Loptous malus
	if(other.weaponData.hasOwnProperty("on_no_effectiveness")){
        // super effectiveness against weapon types
        battleInfo.eff="";
        battleInfo.isEff=false;
        battleInfo=isEffective(agent, other, battleInfo);
        if(!battleInfo.isEff){
            battleInfo = combatBonus(battleInfo, other.weaponData.on_no_effectiveness.foe_stat_mod, weaponInfo[other.weaponName].name, agent.agentClass, "for not being effective against opponent");
        }
    }

    //adjacent stat bonus
    battleInfo=adjacentStatBonus(battleInfo, agent, other, agent.agentClass, initiator);
	
    //solo stat bonus
    battleInfo=soloStatBonus(battleInfo, agent, other, agent.agentClass, initiator);

    return battleInfo;
}


// handles any combat bonuses
// battleInfo contains all battle information, statMods contains the stats to modify and the amounts to increase, modSource is the source of the bonuses
// charClass is either 'attacker' or 'defender', srcMsg is a message to insert in the log
function combatBonus(battleInfo, statMods, modSource, agentClass, srcMsg) {

    for (var stat in statMods) {
        battleInfo[agentClass][stat] += statMods[stat];
        battleInfo.logMsg += "<li class='battle-interaction'><span class='" + agentClass + "'><strong>" + battleInfo[agentClass].display + "</strong></span>";
        if(statMods[stat]<0)
            battleInfo.logMsg += " loses ";
		else
            battleInfo.logMsg += " gains ";
        battleInfo.logMsg += Math.abs(statMods[stat]).toString() + " " + statWord(stat) + " " + srcMsg + " [" + modSource + "].</li>";
    }

    return battleInfo;
}


// checks if a unit can accelerate special cooldown
// battleInfo contains the needed info for battle, attacker is true if we are accelerating the attacker's special
function hasSpecAccel(battleInfo, attacker, defender, initiator, block) {

    var mainUnit = attacker;
    var otherUnit = defender;
    var done = false;

    //Check every hero ability for spec_accel data
    for (var i = 0; i < checks.length; i++) {
        var key = checks[i];
        var tocheck=mainUnit[key].weapon_charge;
        var stringToPrint= "<span class='" +mainUnit.agentClass + "'>" +mainUnit.display + "</span> gained an additional special cooldown charge [" + mainUnit[key].name + "]! ";

        if(tocheck) {
            if(tocheck.weapon_type.hasOwnProperty(otherUnit.weaponData.type)){ //Felicia's plate
                if(mainUnit.specCurrCooldown > 0) {
                    mainUnit.specCurrCooldown--;
                    battleInfo.logMsg += stringToPrint;
                }
                done = true;
                return true;
            }
        }

        if(block && mainUnit[key].hasOwnProperty("def_spec_charge")) //Don't know what this checks, but it does something...? 
        {
            if(!mainUnit[key].def_spec_charge.hasOwnProperty("threshold") || (mainUnit.initHP >= roundNum(mainUnit[key].spec_accel.threshold * mainUnit.hp, true))) {
                if(mainUnit.specCurrCooldown > 0) {
                    mainUnit.specCurrCooldown--;
                    battleInfo.logMsg += stringToPrint;
                }
                done = true;
                return true;
            }
        }

        //heavy blade part
        //If no spec_accel data, or we shouldn't do the following part, continue to next ability
        if((!mainUnit[key].spec_accel)||(block))
            continue;
        var stat = mainUnit[key].spec_accel.stat;
        var reqStatAdvantage = mainUnit[key].spec_accel.adv;
        stringToPrint= "<span class='" +mainUnit.agentClass + "'>" +mainUnit.display + "</span> gained an additional special cooldown charge [" + mainUnit[key].name + "]! ";

        //Check if the boost activates if the unit's attacked
        if((mainUnit[key].spec_accel.hasOwnProperty("not_in_defense") && !initiator) || (mainUnit[key].spec_accel.hasOwnProperty("movement_type") &&  !mainUnit[key].spec_accel.movement_type.includes(mainUnit.moveType)))
            continue;
        //If spec_accel data does not have stat information, there are no requirements, only ones possible are threshold and adjacent
        if (!stat) {
            if((!(mainUnit[key].spec_accel.hasOwnProperty("threshold"))) || (mainUnit.initHP >= roundNum(mainUnit[key].spec_accel.threshold * mainUnit.hp, true))) {
                if((!(mainUnit[key].spec_accel.hasOwnProperty("hasAdjacent"))) || (mainUnit[key].spec_accel.hasAdjacent === "self" && mainUnit.adjacent > 0) || (mainUnit[key].spec_accel.hasAdjacent === "other" && otherUnit.adjacent > 0)) {
                    if(mainUnit.specCurrCooldown > 0) {
                       mainUnit.specCurrCooldown--;
                        battleInfo.logMsg += stringToPrint;
                    }
                    done = true;
                    return true;
                }
            }
        }
        //Otherwise we need to compare stats
        else {
            //Account for bonuses to comparisons like phantom speed
            if (phantomStat(mainUnit, stat) - phantomStat(otherUnit, stat) >= reqStatAdvantage) {
                if(mainUnit.specCurrCooldown > 0) {
                    mainUnit.specCurrCooldown--;
                    battleInfo.logMsg += stringToPrint;
                }
                done = true;
                return true;
            }
        }
    }
    return false;
}

function enemyPhaseCharge(battleInfo, attacker, defender) {
    var done=false;
    checks.forEach(function(key) {
        if(done)
            return;
        var effect = battleInfo.defender[key].enemy_phase_charge;

        if (effect) {
            if (effect.attack && Object.is(attacker, battleInfo.defender) && (!effect.hasOwnProperty("threshold") || (attacker.initHP >= roundNum(effect.threshold * attacker.hp, true)))) {
                if(attacker.specCurrCooldown > 0) {
                    battleInfo.logMsg += "<span class='" +attacker.agentClass + "'>" +attacker.display + "</span> gained an additional special cooldown charge [" + attacker[key].name + "]! ";
                    attacker.specCurrCooldown--;
                }
                done=true;
                return;
            }
            else if (effect.defend && Object.is(defender, battleInfo.defender) && (defender.currHP > 0) && (!effect.hasOwnProperty("threshold") || (defender.initHP >= roundNum(effect.threshold * defender.hp, true)))) {
                if(defender.specCurrCooldown > 0) {
                    battleInfo.logMsg += "<span class='" +defender.agentClass + "'>" +defender.display + "</span> gained an additional special cooldown charge [" + defender[key].name + "]! ";
                    defender.specCurrCooldown--;
                }
                done=true;
                return;
            }
        }
    });
}

function playerPhaseCharge(battleInfo, attacker, defender) {
    var done=false;
    checks.forEach(function(key) {
        if(done)
            return;
        var effect = battleInfo.attacker[key].player_phase_charge;

        if (effect) {
            if (effect.attack && Object.is(attacker, battleInfo.attacker) && (!effect.hasOwnProperty("threshold") || (attacker.initHP >= roundNum(effect.threshold * attacker.hp, true)))) {
                if(attacker.specCurrCooldown > 0) {
                    battleInfo.logMsg += "<span class='" +attacker.agentClass + "'>" +attacker.display + "</span> gained an additional special cooldown charge [" + attacker[key].name + "]! ";
                    attacker.specCurrCooldown--;
                }
                done=true;
                return;
            }
            else if (effect.defend && Object.is(defender, battleInfo.attacker) && (defender.currHP > 0) && (!effect.hasOwnProperty("threshold") || (defender.initHP >= roundNum(effect.threshold * defender.hp, true)))) {
                if(defender.specCurrCooldown > 0) {
                    battleInfo.logMsg += "<span class='" +defender.agentClass + "'>" +defender.display + "</span> gained an additional special cooldown charge [" + defender[key].name + "]! ";
                    defender.specCurrCooldown--;
                }
                done=true;
                return;
            }
        }
    });
}

//Check for Solar Brace
function increaseHealing(battleInfo, agent) {
    checks.forEach(function(key) {
        var effect = agent[key].healing_special;
        if(effect) {
            battleInfo.extra_heal_dmg += effect;
            battleInfo.logMsg += "<span class='" +agent.agentClass + "'>" +agent.display + "</span>'s special's recovering property is increased by " + (effect * 100).toString() + "% [" + agent[key].name + "]! ";
        }
    });
    return battleInfo;
}

//Returns a specific hero's stat with phantom stats included
function phantomStat(hero, stat) {

    var pStat = hero[stat];

    checks.forEach(function(key) {
        if (hero[key].phantom_stat_mod && hero[key].phantom_stat_mod[stat]) {
            pStat += hero[key].phantom_stat_mod[stat];
        }
    });

    return pStat;
}
