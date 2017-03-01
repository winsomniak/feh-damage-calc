// character data
var charInfo =
{
	"Abel": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 44,
		"atk": 41,
		"spd": 27,
		"def": 25,
		"res": 25,
		"move_type": "Cavalry",
		"weapon": ["Brave Lance+", "Brave Lance", "Steel Lance", "Iron Lance"],
		"special": ["Aegis", "Holy Vestments"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_b": ["Swordbreaker 3", "Swordbreaker 2", "Swordbreaker 1"]
	},
	"Alfonse": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 43,
		"atk": 51,
		"spd": 25,
		"def": 32,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Fólkvangr", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Sol", "Daylight"],
		"passive_a": ["Death Blow 3", "Death Blow 2", "Death Blow 1"],
		"passive_c": ["Spur Atk 3", "Spur Atk 2", "Spur Atk 1"]
	},
	"Anna": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 41,
		"atk": 45,
		"spd": 38,
		"def": 22,
		"res": 28,
		"move_type": "Infantry",
		"weapon": ["Nóatún", "Silver Axe", "Steel Axe", "Iron Axe"],
		"special": ["Astra", "Night Sky"],
		"passive_b": ["Vantage 3", "Vantage 2", "Vantage 1"],
		"passive_c": ["Spur Res 3", "Spur Res 2", "Spur Res 1"]
	},
	"Arthur": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 48,
		"atk": 44,
		"spd": 29,
		"def": 30,
		"res": 21,
		"move_type": "Infantry",
		"weapon": ["Emerald Axe+", "Emerald Axe", "Steel Axe", "Iron Axe"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_b": ["Lancebreaker 3", "Lancebreaker 2", "Lancebreaker 1"]
	},
	"Azama": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 43,
		"atk": 24,
		"spd": 26,
		"def": 32,
		"res": 26,
		"move_type": "Infantry",
		"weapon": ["Pain", "Assault"],
		"special": ["Solid-Earth Balm", "Imbue"],
		"passive_c": ["Threaten Atk 3", "Threaten Atk 2", "Threaten Atk 1"],
		"command" : ["Martyr", "Reconcile", "Heal"]
	},
	"Azura": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 36,
		"atk": 43,
		"spd": 36,
		"def": 21,
		"res": 28,
		"move_type": "Infantry",
		"weapon": ["Sapphire Lance+", "Sapphire Lance", "Steel Lance", "Iron Lance"],
		"passive_a": ["Speed +3", "Speed +2", "Speed +1"],
		"passive_c": ["Fortify Res 3", "Fortify Res 2", "Fortify Res 1"],
		"command" : ["Sing"]
	},
	"Barst": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 40,
		"atk": 38,
		"spd": 30,
		"def": 30,
		"res": 17,
		"move_type": "Infantry",
		"weapon": ["Brave Axe+", "Brave Axe", "Steel Axe", "Iron Axe"],
		"passive_a": ["Knock Back"],
		"passive_c": ["Spur Atk 3", "Spur Atk 2", "Spur Atk 1"],
		"command" : ["Reposition"]
	},
	"Bartre": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 49,
		"atk": 51,
		"spd": 29,
		"def": 36,
		"res": 16,
		"move_type": "Infantry",
		"weapon": ["Hammer+", "Hammer", "Steel Axe", "Iron Axe"],
		"passive_a": ["Fury 3", "Fury 2", "Fury 1"],
		"passive_b": ["Brash Assault 3", "Brash Assault 2", "Brash Assault 1"],
		"command" : ["Smite"]
	},
	"Beruka": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 46,
		"atk": 40,
		"spd": 23,
		"def": 37,
		"res": 22,
		"move_type": "Flying",
		"weapon": ["Killer Axe+", "Killer Axe", "Steel Axe", "Iron Axe"],
		"special": ["Glimmer", "Night Sky"],
		"passive_a": ["Defiant Def 3", "Defiant Def 2", "Defiant Def 1"],
		"passive_b": ["Lunge"]
	},
	"Caeda": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 36,
		"atk": 37,
		"spd": 37,
		"def": 24,
		"res": 34,
		"move_type": "Flying",
		"weapon": ["Armorslayer+", "Armorslayer", "Steel Sword", "Iron Sword"],
		"special": ["Glimmer", "Night Sky"],
		"passive_a": ["Darting Blow 3", "Darting Blow 2", "Darting Blow 1"],
		"passive_c": ["Fortify Fliers", "Fortify Res 2", "Fortify Res 1"],
		"command" : ["Rally Speed"]
	},
	"Cain": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 42,
		"atk": 40,
		"spd": 27,
		"def": 27,
		"res": 21,
		"move_type": "Cavalry",
		"weapon": ["Brave Sword+", "Brave Sword", "Steel Sword", "Iron Sword"],
		"special": ["Escutcheon", "Buckler"],
		"passive_b": ["Wings of Mercy 3", "Wings of Mercy 2", "Wings of Mercy 1"],
		"passive_c": ["Threaten Atk 3", "Threaten Atk 2", "Threaten Atk 1"]
	},
	"Camilla": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 37,
		"atk": 38,
		"spd": 27,
		"def": 28,
		"res": 31,
		"move_type": "Flying",
		"weapon": ["Brave Axe+", "Brave Axe", "Steel Axe", "Iron Axe"],
		"special": ["Draconic Aura", "Dragon Gaze"],
		"passive_a": ["Darting Blow 3", "Darting Blow 2", "Darting Blow 1"],
		"passive_c": ["Savage Blow 3", "Savage Blow 2", "Savage Blow 1"]
	},
	"Catria": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 39,
		"atk": 42,
		"spd": 34,
		"def": 29,
		"res": 25,
		"move_type": "Flying",
		"weapon": ["Killer Lance+", "Killer Lance", "Steel Lance", "Iron Lance"],
		"special": ["Luna", "New Moon"],
		"passive_a": ["Armored Blow 3", "Armored Blow 2", "Armored Blow 1"],
		"passive_b": ["Seal Atk 3", "Seal Atk 2", "Seal Atk 1"]
	},
	"Cecilia": {
		"color" : "Green",
		"weapon_type" : "Green Tome",
		"hp": 36,
		"atk": 46,
		"spd": 25,
		"def": 22,
		"res": 29,
		"move_type": "Cavalry",
		"weapon": ["Gronnraven+", "Gronnraven", "Elwind", "Wind"],
		"passive_a": ["Attack +3", "Attack +2", "Attack +1"],
		"passive_b": ["Escape Route 3", "Escape Route 2", "Escape Route 1"],
		"command" : ["Rally Resistance"]
	},
	"Cherche": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 43,
		"atk": 56,
		"spd": 25,
		"def": 32,
		"res": 16,
		"move_type": "Flying",
		"weapon": ["Hammer+", "Hammer", "Steel Axe", "Iron Axe"],
		"passive_a": ["Attack +3", "Attack +2", "Attack +1"],
		"passive_c": ["Fortify Def 3", "Fortify Def 2", "Fortify Def 1"],
		"command" : ["Pivot"]
	},
	"Chrom": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 47,
		"atk": 53,
		"spd": 25,
		"def": 31,
		"res": 17,
		"move_type": "Infantry",
		"weapon": ["Falchion", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Aether", "Sol", "Daylight"],
		"passive_a": ["Defiant Def 3", "Defiant Def 2", "Defiant Def 1"],
		"passive_c": ["Spur Def 3", "Spur Def 2", "Spur Def 1"]
	},
	"Clarine": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 35,
		"atk": 32,
		"spd": 30,
		"def": 22,
		"res": 35,
		"move_type": "Cavalry",
		"weapon": ["Fear", "Assault"],
		"special": ["Solid-Winds Balm", "Imbue"],
		"passive_a": ["Resistance +3", "Resistance +2", "Resistance +1"],
		"command" : ["Martyr", "Reconcile", "Heal"]
	},
	"Cordelia": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 40,
		"atk": 43,
		"spd": 30,
		"def": 22,
		"res": 25,
		"move_type": "Flying",
		"weapon": ["Brave Lance+", "Brave Lance", "Steel Lance", "Iron Lance"],
		"special": ["Galeforce", "Astra", "Night Sky"],
		"passive_a": ["Triangle Adept 3", "Triangle Adept 2", "Triangle Adept 1"],
		"passive_b": ["Pass 3", "Pass 2", "Pass 1"]
	},
	"Corrin (F)": {
		"color" : "Blue",
		"weapon_type" : "Blue Breath",
		"hp": 41,
		"atk": 40,
		"spd": 34,
		"def": 34,
		"res": 21,
		"move_type": "Infantry",
		"weapon": ["Dark Breath+", "Dark Breath", "Fire Breath+ (Blue)", "Fire Breath (Blue)"],
		"special": ["Draconic Aura", "Dragon Gaze"],
		"passive_b": ["Seal Res 3", "Seal Res 2", "Seal Res 1"],
		"passive_c": ["Hone Atk 3", "Hone Atk 2", "Hone Atk 1"],
		"dragon": true
	},
	"Corrin (M)": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 42,
		"atk": 48,
		"spd": 32,
		"def": 31,
		"res": 24,
		"move_type": "Infantry",
		"weapon": ["Yato", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Dragon Fang", "Dragon Gaze"],
		"passive_a": ["Defense +3", "Defense +2", "Defense +1"],
		"passive_b": ["Obstruct 3", "Obstruct 2", "Obstruct 1"]
	},
	"Custom": {	
	},
	"Donnel": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 48,
		"atk": 43,
		"spd": 24,
		"def": 32,
		"res": 23,
		"move_type": "Infantry",
		"weapon": ["Brave Lance+", "Brave Lance", "Steel Lance", "Iron Lance"],
		"special": ["Galeforce", "Astra", "Night Sky"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_b": ["Drag Back"],
		"command" : ["Reciprocal Aid"]
	},
	"Draug": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 53,
		"atk": 38,
		"spd": 24,
		"def": 39,
		"res": 18,
		"move_type": "Armored",
		"weapon": ["Brave Sword+", "Brave Sword", "Steel Sword", "Iron Sword"],
		"special": ["Pavise", "Buckler"],
		"passive_b": ["Lunge"],
		"passive_c": ["Ward Armor", "Spur Def 2", "Spur Def 1"]
	},
	"Effie": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 50,
		"atk": 55,
		"spd": 22,
		"def": 33,
		"res": 23,
		"move_type": "Armored",
		"weapon": ["Silver Lance+", "Silver Lance", "Steel Lance", "Iron Lance"],
		"passive_a": ["Death Blow 3", "Death Blow 2", "Death Blow 1"],
		"passive_b": ["Wary Fighter 3", "Wary Fighter 2", "Wary Fighter 1"],
		"command" : ["Smite"]
	},
	"Eirika": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 42,
		"atk": 42,
		"spd": 35,
		"def": 26,
		"res": 28,
		"move_type": "Infantry",
		"weapon": ["Sieglinde", "Silver Sword", "Steel Sword", "Iron Sword"],
		"passive_b": ["Drag Back"],
		"passive_c": ["Hone Spd 3", "Hone Spd 2", "Hone Spd 1"],
		"command" : ["Pivot"]
	},
	"Eldigan" : {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp" : 45,
		"atk" : 51,
		"spd" : 27,
		"def" : 37,
		"res" : 22,
		"move_type": "Cavalry",
		"weapon": ["Mystletainn", "Killing Edge", "Steel Sword", "Iron Sword"],
		"special": ["Growing Light", "Rising Light"],
		"passive_a": ["Fury 3", "Fury 2", "Fury 1"],
		"passive_b": ["Lunge"]
	},
	"Elise": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 30,
		"atk": 42,
		"spd": 32,
		"def": 19,
		"res": 32,
		"move_type": "Cavalry",
		"weapon": ["Gravity", "Assault"],
		"special": ["Kindled-Fire Balm", "Imbue"],
		"passive_b": ["Live to Serve 3", "Live to Serve 2", "Live to Serve 1"],
		"command" : ["Recover", "Mend", "Heal"]
	},
	"Eliwood": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 39,
		"atk": 47,
		"spd": 30,
		"def": 23,
		"res": 32,
		"move_type": "Cavalry",
		"weapon": ["Durandal", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Sacred Cowl", "Holy Vestments"],
		"passive_b": ["Axebreaker 3", "Axebreaker 2", "Axebreaker 1"],
		"passive_c": ["Ward Cavalry", "Spur Res 2", "Spur Res 1"]
	},
	"Ephraim": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 45,
		"atk": 51,
		"spd": 25,
		"def": 32,
		"res": 20,
		"move_type": "Infantry",
		"weapon": ["Siegmund", "Heavy Spear", "Steel Spear", "Iron Spear"],
		"special": ["Moonbow", "New Moon"],
		"passive_b": ["Seal Def 3", "Seal Def 2", "Seal Def 1"],
		"passive_c": ["Threaten Def 3", "Threaten Def 2", "Threaten Def 1"]
	},
	"Est": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 36,
		"atk": 47,
		"spd": 30,
		"def": 24,
		"res": 32,
		"move_type": "Flying",
		"weapon": ["Heavy Spear+", "Heavy Spear", "Steel Lance", "Iron Lance"],
		"passive_a": ["Defiant Res 3", "Defiant Res 2", "Defiant Res 1"],
		"passive_b": ["Seal Spd 3", "Seal Spd 2", "Seal Spd 1"],
		"command" : ["Shove"]
	},
	"Fae": {
		"color" : "Green",
		"weapon_type" : "Green Breath",
		"hp": 46,
		"atk": 46,
		"spd": 28,
		"def": 25,
		"res": 30,
		"move_type": "Infantry",
		"weapon": ["Light Breath+", "Light Breath", "Fire Breath+ (Green)", "Fire Breath (Green)"],
		"passive_b": ["Renewal 3", "Renewal 2", "Renewal 1"],
		"passive_c": ["Threaten Atk 3", "Threaten Atk 2", "Threaten Atk 1"],
		"dragon": true,
		"command" : ["Draw Back"]
	},
	"Felicia": {
		"color" : "Colorless",
		"weapon_type" : "Dagger",
		"hp": 34,
		"atk": 33,
		"spd": 37,
		"def": 18,
		"res": 38,
		"move_type": "Infantry",
		"weapon": ["Silver Dagger+", "Silver Dagger", "Steel Dagger", "Iron Dagger"],
		"special": ["Glacies", "Chilling Wind"],
		"passive_a": ["Resistance +3", "Resistance +2", "Resistance +1"],
		"passive_c": ["Breath of Life 3", "Breath of Life 2", "Breath of Life 1"]
	},
	"Fir": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 41,
		"atk": 36,
		"spd": 39,
		"def": 24,
		"res": 31,
		"move_type": "Infantry",
		"weapon": ["Killing Edge+", "Killing Edge", "Steel Sword", "Iron Sword"],
		"special": ["Glacies", "Chilling Wind"],
		"passive_a": ["Speed +3", "Speed +2", "Speed +1"],
		"passive_b": ["Pass 3", "Pass 2", "Pass 1"]
	},
	"Florina": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 42,
		"atk": 41,
		"spd": 27,
		"def": 25,
		"res": 34,
		"move_type": "Flying",
		"weapon": ["Heavy Spear+", "Heavy Spear", "Steel Lance", "Iron Lance"],
		"passive_a": ["Darting Blow 3", "Darting Blow 2", "Darting Blow 1"],
		"passive_c": ["Breath of Life 3", "Breath of Life 2", "Breath of Life 1"],
		"command" : ["Ardent Sacrifice"]
	},
	"Frederick": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 43,
		"atk": 47,
		"spd": 25,
		"def": 36,
		"res": 14,
		"move_type": "Cavalry",
		"weapon": ["Hammer+", "Hammer", "Steel Axe", "Iron Axe"],
		"special": ["Luna", "New Moon"],
		"passive_b": ["Wings of Mercy 3", "Wings of Mercy 2", "Wings of Mercy 1"],
		"passive_c": ["Fortify Def 3", "Fortify Def 2", "Fortify Def 1"]
	},
	"Gaius": {
		"color" : "Colorless",
		"weapon_type" : "Dagger",
		"hp": 39,
		"atk": 39,
		"spd": 36,
		"def": 22,
		"res": 19,
		"move_type": "Infantry",
		"weapon": ["Rogue Dagger+", "Rogue Dagger", "Steel Dagger", "Iron Dagger"],
		"passive_a": ["Defiant Atk 3", "Defiant Atk 2", "Defiant Atk 1"],
		"passive_b": ["Pass 3", "Pass 2", "Pass 1"],
		"command" : ["Rally Speed"]
	},
	"Gordin": {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp": 43,
		"atk": 41,
		"spd": 24,
		"def": 29,
		"res": 17,
		"move_type": "Infantry",
		"weapon": ["Brave Bow+", "Brave Bow", "Steel Bow", "Iron Bow"],
		"passive_a": ["Attack +3", "Attack +2", "Attack +1"],
		"passive_b": ["Vantage 3", "Vantage 2", "Vantage 1"],
		"command" : ["Shove"]
	},
	"Gunter": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 42,
		"atk": 47,
		"spd": 24,
		"def": 33,
		"res": 18,
		"move_type": "Cavalry",
		"weapon": ["Silver Axe+", "Silver Axe", "Steel Axe", "Iron Axe"],
		"passive_a": ["Armored Blow 3", "Armored Blow 2", "Armored Blow 1"],
		"passive_c": ["Hone Cavalry", "Hone Atk 2", "Hone Atk 1"],
		"command" : ["Harsh Command"]
	},
	"Gwendolyn": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 49,
		"atk": 41,
		"spd": 24,
		"def": 35,
		"res": 31,
		"move_type": "Armored",
		"weapon": ["Killer Lance+", "Killer Lance", "Steel Lance", "Iron Lance"],
		"special": ["Escutcheon", "Buckler"],
		"passive_b": ["Drag Back"],
		"passive_c": ["Hone Atk 3", "Hone Atk 2", "Hone Atk 1"]
	},
	"Hana": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 37,
		"atk": 52,
		"spd": 41,
		"def": 18,
		"res": 21,
		"move_type": "Infantry",
		"weapon": ["Armorslayer+", "Armorslayer", "Steel Sword", "Iron Sword"],
		"passive_a": ["Life and Death 3", "Life and Death 2", "Life and Death 1"],
		"passive_b": ["Obstruct 3", "Obstruct 2", "Obstruct 1"],
		"command" : ["Rally Attack"]
	},
	"Hawkeye": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 45,
		"atk": 44,
		"spd": 22,
		"def": 28,
		"res": 30,
		"move_type": "Infantry",
		"weapon": ["Killer Axe+", "Killer Axe", "Steel Axe", "Iron Axe"],
		"special": ["Growing Light", "Rising Light"],
		"passive_a": ["Death Blow 3", "Death Blow 2", "Death Blow 1"],
		"passive_c": ["Threaten Atk 3", "Threaten Atk 2", "Threaten Atk 1"]
	},
	"Hector": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 52,
		"atk": 52,
		"spd": 24,
		"def": 37,
		"res": 19,
		"move_type": "Armored",
		"weapon": ["Armads", "Silver Axe", "Steel Axe", "Iron Axe"],
		"special": ["Pavise", "Buckler"],
		"passive_a": ["Distant Counter"],
		"passive_c": ["Goad Armor", "Spur Attack 2", "Spur Attack 1"]
	},
	"Henry": {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp": 45,
		"atk": 34,
		"spd": 22,
		"def": 32,
		"res": 25,
		"move_type": "Infantry",
		"weapon": ["Rauðrraven+", "Rauðrraven", "Ruin", "Flux"],
		"special": ["Ignis", "Glowing Ember"],
		"passive_a": ["Defiant Def 3", "Defiant Def 2", "Defiant Def 1"],
		"passive_b": ["G Tomebreaker 3", "G Tomebreaker 2", "G Tomebreaker 1"]
	},
	"Hinata": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 47,
		"atk": 44,
		"spd": 24,
		"def": 39,
		"res": 21,
		"move_type": "Infantry",
		"weapon": ["Ruby Sword+", "Ruby Sword", "Steel Sword", "Iron Sword"],
		"special": ["Pavise", "Buckler"],
		"passive_a": ["Fury 3", "Fury 2", "Fury 1"],
		"passive_b": ["Brash Assault 3", "Brash Assault 2", "Brash Assault 1"]
	},
	"Hinoka": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 41,
		"atk": 43,
		"spd": 27,
		"def": 25,
		"res": 24,
		"move_type": "Flying",
		"weapon": ["Brave Lance+", "Brave Lance", "Steel Lance", "Iron Lance"],
		"special": ["Blazing Wind", "Rising Wind"],
		"passive_a": ["Defiant Def 3", "Defiant Def 2", "Defiant Def 1"],
		"passive_c": ["Hone Fliers", "Hone Spd 2", "Hone Spd 1"]
	},
	"Jagen": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 37,
		"atk": 45,
		"spd": 27,
		"def": 28,
		"res": 38,
		"move_type": "Cavalry",
		"weapon": ["Silver Lance+", "Silver Lance", "Steel Lance", "Iron Lance"],
		"special": ["Aegis", "Holy Vestments"],
		"passive_a": ["Fury 3", "Fury 2", "Fury 1"],
		"passive_c": ["Fortify Cavalry", "Fortify Res 2", "Fortify Res 1"]
	},
	"Jakob": {
		"color" : "Colorless",
		"weapon_type" : "Dagger",
		"hp": 39,
		"atk": 39,
		"spd": 31,
		"def": 28,
		"res": 24,
		"move_type": "Infantry",
		"weapon": ["Silver Dagger+", "Silver Dagger", "Steel Dagger", "Iron Dagger"],
		"passive_a": ["Defense +3", "Defense +2", "Defense +1"],
		"passive_b": ["Renewal 3", "Renewal 2", "Renewal 1"],
		"command" : ["Rally Resistance"]
	},
	"Jeorge": {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp": 37,
		"atk": 46,
		"spd": 32,
		"def": 24,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Parthia", "Silver Bow", "Steel Bow", "Iron Bow"],
		"special": ["Blazing Flame", "Rising Flame"],
		"passive_b": ["Seal Atk 3", "Seal Atk 2", "Seal Atk 1"],
		"passive_c": ["Spur Spd 3", "Spur Spd 2", "Spur Spd 1"],
		"command" : ["Swap"]
	},
	"Julia": {
		"color" : "Green",
		"weapon_type" : "Green Tome",
		"hp": 38,
		"atk": 49,
		"spd": 26,
		"def": 17,
		"res": 35,
		"move_type": "Infantry",
		"weapon": ["Naga", "Rexcalibur", "Elwind", "Wind"],
		"special": ["Dragon Fang", "Dragon Gaze"],
		"passive_a": ["Resistance +3", "Resistance +2", "Resistance +1"],
		"passive_c": ["Breath of Life 3", "Breath of Life 2", "Breath of Life 1"]
	},
	"Kagero": {
		"color" : "Colorless",
		"weapon_type" : "Dagger",
		"hp": 31,
		"atk": 40,
		"spd": 32,
		"def": 22,
		"res": 28,
		"move_type": "Infantry",
		"weapon": ["Poison Dagger+", "Poison Dagger", "Steel Dagger", "Iron Dagger"],
		"special": ["Reprisal", "Retribution"],
		"passive_a": ["Warding Blow 3", "Warding Blow 2", "Warding Blow 1"],
		"passive_b": ["Daggerbreaker 3", "Daggerbreaker 2", "Daggerbreaker 1"]
	},
	"Klein" : {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp" : 40,
		"atk" : 38,
		"spd" : 28,
		"def" : 20,
		"res" : 24,
		"move_type": "Infantry",
		"weapon": ["Brave Bow+", "Brave Bow", "Steel Bow", "Iron Bow"],
		"special": ["Chilling Wind", "Glacies"],
		"passive_a": ["Death Blow 3", "Death Blow 2", "Death Blow 1"],
		"passive_b": ["Quick Riposte 3", "Quick Riposte 2", "Quick Riposte 1"]
	},
	"Lachesis" : {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp" : 39,
		"atk" : 36,
		"spd" : 22,
		"def" : 25,
		"res" : 30,
		"move_type": "Infantry",
		"weapon": ["Absorb", "Assault"],
		"special": ["Solid-Earth Balm", "Imbue"],
		"passive_c": ["Spur Res 3", "Spur Res 2", "Spur Res 1"],
		"command" : ["Physic", "Mend", "Heal"]
	},
	"Laslow": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 41,
		"atk": 50,
		"spd": 26,
		"def": 33,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Silver Sword+", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Noontime", "Daylight"],
		"passive_b": ["Axebreaker 3", "Axebreaker 2", "Axebreaker 1"],
		"passive_c": ["Hone Spd 3", "Hone Spd 2", "Hone Spd 1"]
	},
	"Leo": {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp": 39,
		"atk": 43,
		"spd": 22,
		"def": 25,
		"res": 30,
		"move_type": "Cavalry",
		"weapon": ["Brynhildr", "Fenrir", "Ruin", "Flux"],
		"special": ["Blazing Light", "Rising Light"],
		"passive_b": ["Quick Riposte 3", "Quick Riposte 2", "Quick Riposte 1"],
		"passive_c": ["Savage Blow 3", "Savage Blow 2", "Savage Blow 1"]
	},
	"Lilina": {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp": 35,
		"atk": 53,
		"spd": 25,
		"def": 19,
		"res": 31,
		"move_type": "Infantry",
		"weapon": ["Bolganone+", "Bolganone", "Elfire", "Fire"],
		"special": ["Growing Flame", "Rising Flame"],
		"passive_a": ["Attack +3", "Attack +2", "Attack +1"],
		"passive_c": ["Spur Atk 3", "Spur Atk 2", "Spur Atk 1"]
	},
	"Linde": {
		"color" : "Blue",
		"weapon_type" : "Blue Tome",
		"hp": 35,
		"atk": 49,
		"spd": 39,
		"def": 14,
		"res": 27,
		"move_type": "Infantry",
		"weapon": ["Aura", "Thoron", "Elthunder", "Thunder"],
		"passive_a": ["Speed +3", "Speed +2", "Speed +1"],
		"passive_c": ["Fortify Res 3", "Fortify Res 2", "Fortify Res 1"],
		"command" : ["Ardent Sacrifice"]
	},
	"Lissa": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 39,
		"atk": 34,
		"spd": 26,
		"def": 28,
		"res": 31,
		"move_type": "Infantry",
		"weapon": ["Gravity", "Assault"],
		"special": ["Kindled-Fire Balm", "Imbue"],
		"passive_b": ["Renewal 3", "Renewal 2", "Renewal 1"],
		"command" : ["Rehabilitate", "Reconcile", "Heal"]
	},
	"Lon'qu": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 45,
		"atk": 40,
		"spd": 42,
		"def": 22,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Killing Edge+", "Killing Edge", "Steel Sword", "Iron Sword"],
		"special": ["Glimmer", "Night Sky"],
		"passive_a": ["Speed +3", "Speed +2", "Speed +1"],
		"passive_b": ["Vantage 3", "Vantage 2", "Vantage 1"]
	},
	"Lucina": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 43,
		"atk": 50,
		"spd": 36,
		"def": 25,
		"res": 19,
		"move_type": "Infantry",
		"weapon": ["Falchion", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Aether", "Luna", "New Moon"],
		"passive_a": ["Defiant Spd 3", "Defiant Spd 2", "Defiant Spd 1"],
		"passive_c": ["Spur Atk 3", "Spur Atk 2", "Spur Atk 1"]
	},
	"Lyn": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 37,
		"atk": 44,
		"spd": 37,
		"def": 26,
		"res": 29,
		"move_type": "Infantry",
		"weapon": ["Sol Katti", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Galeforce", "Astra", "Night Sky"],
		"passive_a": ["Defiant Atk 3", "Defiant Atk 2", "Defiant Atk 1"],
		"passive_c": ["Spur Spd 3", "Spur Spd 2", "Spur Spd 1"]
	},
	"Maria": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 36,
		"atk": 32,
		"spd": 34,
		"def": 19,
		"res": 32,
		"move_type": "Infantry",
		"weapon": ["Panic", "Assault"],
		"special": ["Miracle", "Imbue"],
		"passive_c": ["Fortify Res 3", "Fortify Res 2", "Fortify Res 1"],
		"command" : ["Physic", "Mend", "Heal"]
	},
	"Marth": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 41,
		"atk": 47,
		"spd": 34,
		"def": 29,
		"res": 23,
		"move_type": "Infantry",
		"weapon": ["Falchion", "Silver Sword", "Steel Sword", "Iron Sword"],
		"passive_b": ["Escape Route 3", "Escape Route 2", "Escape Route 1"],
		"passive_c": ["Spur Spd 3", "Spur Spd 2", "Spur Spd 1"],
		"command" : ["Pivot"]
	},
	"Matthew": {
		"color" : "Colorless",
		"weapon_type" : "Dagger",
		"hp": 43,
		"atk": 36,
		"spd": 34,
		"def": 29,
		"res": 18,
		"move_type": "Infantry",
		"weapon": ["Rogue Dagger+", "Rogue Dagger", "Steel Dagger", "Iron Dagger"],
		"passive_b": ["Poison Strike 3", "Poison Strike 2", "Poison Strike 1"],
		"passive_c": ["Hone Spd 3", "Hone Spd 2", "Hone Spd 1"],
		"command" : ["Reciprocal Aid"]
	},
	"Merric": {
		"color" : "Green",
		"weapon_type" : "Green Tome",
		"hp": 48,
		"atk": 40,
		"spd": 32,
		"def": 28,
		"res": 19,
		"move_type": "Infantry",
		"weapon": ["Excalibur", "Rexcalibur", "Elwind", "Wind"],
		"special": ["Growing Wind", "Rising Wind"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_c": ["Spur Res 3", "Spur Res 2", "Spur Res 1"]
	},
	"Minerva": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 40,
		"atk": 52,
		"spd": 38,
		"def": 27,
		"res": 17,
		"move_type": "Flying",
		"weapon": ["Hauteclere", "Silver Axe", "Steel Axe", "Iron Axe"],
		"special": ["Sacred Cowl", "Holy Vestments"],
		"passive_a": ["Life and Death 3", "Life and Death 2", "Life and Death 1"],
		"passive_c": ["Ward Fliers", "Spur Def 2", "Spur Def 1"]
	},
	"Narcian": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 42,
		"atk": 41,
		"spd": 29,
		"def": 32,
		"res": 26,
		"move_type": "Flying",
		"weapon": ["Emerald Axe+", "Emerald Axe", "Steel Axe", "Iron Axe"],
		"special": ["Vengeance", "Retribution"],
		"passive_b": ["Lancebreaker 3", "Lancebreaker 2", "Lancebreaker 1"],
		"passive_c": ["Savage Blow 3", "Savage Blow 2", "Savage Blow 1"]
	},
	"Niles": {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp": 37,
		"atk": 34,
		"spd": 34,
		"def": 17,
		"res": 34,
		"move_type": "Infantry",
		"weapon": ["Killer Bow+", "Killer Bow", "Steel Bow", "Iron Bow"],
		"special": ["Iceberg", "Chilling Wind"],
		"passive_a": ["Warding Blow 3", "Warding Blow 2", "Warding Blow 1"],
		"passive_c": ["Spur Res 3", "Spur Res 2", "Spur Res 1"]
	},
	"Nino": {
		"color" : "Green",
		"weapon_type" : "Green Tome",
		"hp": 33,
		"atk": 46,
		"spd": 36,
		"def": 19,
		"res": 29,
		"move_type": "Infantry",
		"weapon": ["Gronnblade+", "Gronnblade", "Elwind", "Wind"],
		"passive_a": ["Resistance +3", "Resistance +2", "Resistance +1"],
		"passive_c": ["Hone Atk 3", "Hone Atk 2", "Hone Atk 1"],
		"command" : ["Draw Back"]
	},
	"Nowi": {
		"color" : "Blue",
		"weapon_type" : "Blue Breath",
		"hp": 45,
		"atk": 45,
		"spd": 27,
		"def": 33,
		"res": 27,
		"move_type": "Infantry",
		"weapon": ["Lightning Breath+ (Blue)", "Lightning Breath (Blue)", "Fire Breath+ (Blue)", "Fire Breath (Blue)"],
		"passive_a": ["Defense +3", "Defense +2", "Defense +1"],
		"passive_c": ["Threaten Res 3", "Threaten Res 2", "Threaten Res 1"],
		"dragon": true,
		"command" : ["Rally Defense"]
	},
	"Oboro": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 40,
		"atk": 44,
		"spd": 26,
		"def": 35,
		"res": 24,
		"move_type": "Infantry",
		"weapon": ["Heavy Spear+", "Heavy Spear", "Steel Lance", "Iron Lance"],
		"passive_b": ["Seal Def 3", "Seal Def 2", "Seal Def 1"],
		"passive_c": ["Threaten Res 3", "Threaten Res 2", "Threaten Res 1"],
		"command" : ["Rally Defense"]
	},
	"Odin": {
		"color" : "Blue",
		"weapon_type" : "Blue Tome",
		"hp": 43,
		"atk": 35,
		"spd": 32,
		"def": 25,
		"res": 25,
		"move_type": "Infantry",
		"weapon": ["Blárblade+", "Blárblade", "Elthunder", "Thunder"],
		"special": ["Moonbow", "New Moon"],
		"passive_a": ["Defiant Atk 3", "Defiant Atk 2", "Defiant Atk 1"],
		"passive_b": ["R Tomebreaker 3", "R Tomebreaker 2", "R Tomebreaker 1"]
	},
	"Ogma": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 47,
		"atk": 43,
		"spd": 29,
		"def": 28,
		"res": 13,
		"move_type": "Infantry",
		"weapon": ["Brave Sword+", "Brave Sword", "Steel Sword", "Iron Sword"],
		"special": ["Noontime", "Daylight"],
		"passive_a": ["Defiant Atk 3", "Defiant Atk 2", "Defiant Atk 1"],
		"passive_c": ["Spur Atk 3", "Spur Atk 2", "Spur Atk 1"]
	},
	"Olivia": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 36,
		"atk": 39,
		"spd": 33,
		"def": 27,
		"res": 29,
		"move_type": "Infantry",
		"weapon": ["Silver Sword+", "Silver Sword", "Steel Sword", "Iron Sword"],
		"passive_b": ["Knock Back"],
		"passive_c": ["Hone Atk 3", "Hone Atk 2", "Hone Atk 1"],
		"command" : ["Dance"]
	},
	"Olwen": {
		"color" : "Blue",
		"weapon_type" : "Blue Tome",
		"hp": 34,
		"atk": 35,
		"spd": 26,
		"def": 23,
		"res": 30,
		"move_type": "Cavalry",
		"weapon": ["Dire Thunder", "Thoron", "Elthunder", "Thunder"],
		"passive_a": ["Warding Blow 3", "Warding Blow 2", "Warding Blow 1"],
		"passive_c": ["Ward Cavalry", "Spur Res 2", "Spur Res 1"],
		"command" : ["Reposition"]
	},
	"Palla": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 42,
		"atk": 43,
		"spd": 31,
		"def": 28,
		"res": 36,
		"move_type": "Flying",
		"weapon": ["Ruby Sword+", "Ruby Sword", "Steel Sword", "Iron Sword"],
		"special": ["Moonbow", "New Moon"],
		"passive_b": ["Wings of Mercy 3", "Wings of Mercy 2", "Wings of Mercy 1"],
		"passive_c": ["Spur Spd 3", "Spur Spd 2", "Spur Spd 1"]
	},
	"Peri": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 35,
		"atk": 44,
		"spd": 33,
		"def": 23,
		"res": 33,
		"move_type": "Cavalry",
		"weapon": ["Killer Lance+", "Killer Lance", "Steel Lance", "Iron Lance"],
		"special": ["Glimmer", "Night Sky"],
		"passive_a": ["Resistance +3", "Resistance +2", "Resistance +1"],
		"passive_c": ["Threaten Def 3", "Threaten Def 2", "Threaten Def 1"]
	},
	"Raigh": {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp": 41,
		"atk": 42,
		"spd": 29,
		"def": 22,
		"res": 29,
		"move_type": "Infantry",
		"weapon": ["Rauðrwolf+", "Rauðrwolf", "Ruin", "Flux"],
		"special": ["Growing Flame", "Rising Flame"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_b": ["Seal Res 3", "Seal Res 2", "Seal Res 1"],
		"command" : ["Rally Attack"]
	},
	"Raven": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 41,
		"atk": 42,
		"spd": 30,
		"def": 25,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Brave Axe+", "Brave Axe", "Steel Axe", "Iron Axe"],
		"special": ["Sol", "Daylight"],
		"passive_a": ["Defiant Spd 3", "Defiant Spd 2", "Defiant Spd 1"],
		"passive_c": ["Threaten Def 3", "Threaten Def 2", "Threaten Def 1"]
	},
	"Reinhardt": {
		"color" : "Blue",
		"weapon_type" : "Blue Tome",
		"hp": 38,
		"atk": 41,
		"spd": 18,
		"def": 27,
		"res": 25,
		"move_type": "Cavalry",
		"weapon": ["Dire Thunder", "Thoron", "Elthunder", "Thunder"],
		"special": ["Blazing Thunder", "Rising Thunder"],
		"passive_a": ["Vantage 3", "Vantage 2", "Vantage 1"],
		"passive_c": ["Goad Cavalry", "Spur Atk 2", "Spur Atk 1"]
	},
	"Robin (F)": {
		"color" : "Green",
		"weapon_type" : "Green Tome",
		"hp": 40,
		"atk": 39,
		"spd": 29,
		"def": 29,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Gronnwolf+", "Gronnwolf", "Elwind", "Wind"],
		"special": ["Ignis", "Glowing Ember"],
		"passive_a": ["Defiant Res 3", "Defiant Res 2", "Defiant Res 1"],
		"passive_b": ["B Tomebreaker 3", "B Tomebreaker 2", "B Tomebreaker 1"]
	},
	"Robin (M)": {
		"color" : "Blue",
		"weapon_type" : "Blue Tome",
		"hp": 40,
		"atk": 40,
		"spd": 29,
		"def": 29,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Blárraven+", "Blárraven", "Elthunder", "Thunder"],
		"special": ["Bonfire", "Glowing Ember"],
		"passive_a": ["Defiant Spd 3", "Defiant Spd 2", "Defiant Spd 1"],
		"passive_c": ["Spur Def 3", "Spur Def 2", "Spur Def 1"]
	},
	"Roy": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 44,
		"atk": 46,
		"spd": 31,
		"def": 25,
		"res": 28,
		"move_type": "Infantry",
		"weapon": ["Binding Blade", "Silver Sword", "Steel Sword", "Iron Sword"],
		"passive_a": ["Triangle Adept 3", "Triangle Adept 2", "Triangle Adept 1"],
		"passive_b": ["Seal Def 3", "Seal Def 2", "Seal Def 1"],
		"command" : ["Shove"]
	},
	"Ryoma": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 41,
		"atk": 50,
		"spd": 35,
		"def": 27,
		"res": 21,
		"move_type": "Infantry",
		"weapon": ["Raijinto", "Silver Sword", "Steel Sword", "Iron Sword"],
		"special": ["Astra", "Night Sky"],
		"passive_a": ["Defiant Atk 3", "Defiant Atk 2", "Defiant Atk 1"],
		"passive_c": ["Hone Spd 3", "Hone Spd 2", "Hone Spd 1"]
	},
	"Saizo": {
		"color" : "Colorless",
		"weapon_type" : "Dagger",
		"hp": 36,
		"atk": 41,
		"spd": 34,
		"def": 33,
		"res": 12,
		"move_type": "Infantry",
		"weapon": ["Smoke Dagger+", "Smoke Dagger", "Steel Dagger", "Iron Dagger"],
		"passive_b": ["Poison Strike 3", "Poison Strike 2", "Poison Strike 1"],
		"passive_c": ["Spur Spd 3", "Spur Spd 2", "Spur Spd 1"],
		"command" : ["Harsh Command"]
	},
	"Sakura": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 36,
		"atk": 33,
		"spd": 30,
		"def": 24,
		"res": 30,
		"move_type": "Infantry",
		"weapon": ["Fear", "Assault"],
		"special": ["Still-Water Balm", "Imbue"],
		"passive_c": ["Fortify Def 3", "Fortify Def 2", "Fortify Def 1"],
		"command" : ["Physic", "Mend", "Heal"]
	}, 
	"Sanaki" : {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp" : 33,
		"atk" : 51,
		"spd" : 28,
		"def" : 17,
		"res" : 34,
		"move_type": "Infantry",
		"weapon": ["Cymbeline", "Bolganone", "Elfire", "Fire"],
		"passive_a": ["Triangle Adept 3", "Triangle Adept 2", "Triangle Adept 1"],
		"passive_c": ["Hone Atk 3", "Hone Atk 2", "Hone Atk 1"],
		"command" : ["Harsh Command"]
	},
	"Selena": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 37,
		"atk": 37,
		"spd": 35,
		"def": 32,
		"res": 28,
		"move_type": "Infantry",
		"weapon": ["Armorslayer+", "Armorslayer", "Steel Sword", "Iron Sword"],
		"passive_a": ["Triangle Adept 3", "Triangle Adept 2", "Triangle Adept 1"],
		"passive_c": ["Threaten Spd 3", "Threaten Spd 2", "Threaten Spd 1"],
		"command" : ["Reposition"]
	},
	"Seliph": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 52,
		"atk": 50,
		"spd": 24,
		"def": 30,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Tyrfing", "Silver Sword", "Steel Sword", "Iron Sword"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_b": ["Brash Assault 3", "Brash Assault 2", "Brash Assault 1"],
		"command" : ["Rally Speed"]
	},
	"Serra": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 36,
		"atk": 34,
		"spd": 31,
		"def": 18,
		"res": 33,
		"move_type": "Infantry",
		"weapon": ["Absorb", "Assault"],
		"special": ["Swift-Winds Balm", "Imbue"],
		"passive_c": ["Hone Atk 3", "Hone Atk 2", "Hone Atk 1"],
		"command" : ["Recover", "Mend", "Heal"]
	},
	"Setsuna": {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp": 42,
		"atk": 39,
		"spd": 37,
		"def": 22,
		"res": 23,
		"move_type": "Infantry",
		"weapon": ["Assassin's Bow+", "Assassin's Bow", "Steel Bow", "Iron Bow"],
		"passive_a": ["HP +5", "HP +4", "HP +3"],
		"passive_b": ["Bowbreaker 3", "Bowbreaker 2", "Bowbreaker 1"],
		"command" : ["Reciprocal Aid"]
	},
	"Shanna": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 39,
		"atk": 41,
		"spd": 35,
		"def": 25,
		"res": 29,
		"move_type": "Flying",
		"weapon": ["Killer Lance+", "Killer Lance", "Steel Lance", "Iron Lance"],
		"special": ["Iceberg", "Chilling Wind"],
		"passive_b": ["Desperation 3", "Desperation 2", "Desperation 1"],
		"passive_c": ["Threaten Spd 3", "Threaten Spd 2", "Threaten Spd 1"]
	},
	"Sharena": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 43,
		"atk": 48,
		"spd": 35,
		"def": 29,
		"res": 22,
		"move_type": "Infantry",
		"weapon": ["Fensalir", "Silver Lance", "Steel Lance", "Iron Lance"],
		"passive_a": ["Speed +3", "Speed +2", "Speed +1"],
		"passive_c": ["Fortify Def 3", "Fortify Def 2", "Fortify Def 1"],
		"command" : ["Rally Attack"]
	},
	"Sheena": {
		"color" : "Green",
		"weapon_type" : "Axe",
		"hp": 45,
		"atk": 41,
		"spd": 25,
		"def": 36,
		"res": 33,
		"move_type": "Armored",
		"weapon": ["Killer Axe+", "Killer Axe", "Steel Axe", "Iron Axe"],
		"special": ["Escutcheon", "Buckler"],
		"passive_a": ["Svalinn Shield"],
		"passive_c": ["Fortify Armor", "Fortify Def 2", "Fortify Def 1"]
	},
	"Sophia": {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp": 40,
		"atk": 46,
		"spd": 19,
		"def": 28,
		"res": 29,
		"move_type": "Infantry",
		"weapon": ["Fenrir+", "Fenrir", "Ruin", "Flux"],
		"special": ["Dragon Fang", "Dragon Gaze"],
		"passive_a": ["Warding Blow 3", "Warding Blow 2", "Warding Blow 1"],
		"passive_c": ["Fortify Res 3", "Fortify Res 2", "Fortify Res 1"]
	},
	"Stahl": {
		"color" : "Red",
		"weapon_type" : "Sword",
		"hp": 45,
		"atk": 46,
		"spd": 26,
		"def": 33,
		"res": 19,
		"move_type": "Cavalry",
		"weapon": ["Ruby Sword+", "Ruby Sword", "Steel Sword", "Iron Sword"],
		"passive_a": ["Defense +3", "Defense +2", "Defense +1"],
		"passive_b": ["Obstruct 3", "Obstruct 2", "Obstruct 1"],
		"command" : ["Swap"]
	},
	"Subaki": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 40,
		"atk": 37,
		"spd": 35,
		"def": 35,
		"res": 25,
		"move_type": "Flying",
		"weapon": ["Sapphire Lance+", "Sapphire Lance", "Steel Lance", "Iron Lance"],
		"passive_a": ["Resistance +3", "Resistance +2", "Resistance +1"],
		"passive_b": ["Quick Riposte 3", "Quick Riposte 2", "Quick Riposte 1"],
		"command" : ["Swap"]
	},
	"Sully": {
		"color" : "Blue",
		"weapon_type" : "Lance",
		"hp": 42,
		"atk": 42,
		"spd": 34,
		"def": 24,
		"res": 24,
		"move_type": "Cavalry",
		"weapon": ["Sapphire Lance+", "Sapphire Lance", "Steel Lance", "Iron Lance"],
		"passive_b": ["Swordbreaker 3", "Swordbreaker 2", "Swordbreaker 1"],
		"passive_c": ["Spur Def 3", "Spur Def 2", "Spur Def 1"],
		"command" : ["Draw Back"]
	},
	"Takumi": {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp": 40,
		"atk": 46,
		"spd": 33,
		"def": 25,
		"res": 18,
		"move_type": "Infantry",
		"weapon": ["Fujin Yumi", "Silver Bow", "Steel Bow", "Iron Bow"],
		"special": ["Vengeance", "Retribution"],
		"passive_a": ["Close Counter"],
		"passive_c": ["Threaten Spd 3", "Threaten Spd 2", "Threaten Spd 1"]
	},
	"Tharja": {
		"color" : "Red",
		"weapon_type" : "Red Tome",
		"hp": 39,
		"atk": 45,
		"spd": 34,
		"def": 23,
		"res": 20,
		"move_type": "Infantry",
		"weapon": ["Rauðrblade+", "Rauðrblade", "Ruin", "Flux"],
		"special": ["Vengeance", "Retribution"],
		"passive_a": ["Darting Blow 3", "Darting Blow 2", "Darting Blow 1"],
		"passive_c": ["Spur Res 3", "Spur Res 2", "Spur Res 1"]
	},
	"Tiki (Adult)": {
		"color" : "Red",
		"weapon_type" : "Red Breath",
		"hp": 40,
		"atk": 46,
		"spd": 23,
		"def": 35,
		"res": 24,
		"move_type": "Infantry",
		"weapon": ["Lightning Breath+ (Red)", "Lightning Breath (Red)", "Fire Breath+ (Red)", "Fire Breath (Red)"],
		"special": ["Bonfire", "Glowing Ember"],
		"passive_a": ["Defiant Atk 3", "Defiant Atk 2", "Defiant Atk 1"],
		"passive_c": ["Spur Res 3", "Spur Res 2", "Spur Res 1"],
		"dragon": true
	},
	"Tiki (Young)": {
		"color" : "Red",
		"weapon_type" : "Red Breath",
		"hp": 41,
		"atk": 46,
		"spd": 30,
		"def": 32,
		"res": 29,
		"move_type": "Infantry",
		"weapon": ["Flametongue+", "Flametongue", "Fire Breath+ (Red)", "Fire Breath (Red)"],
		"special": ["Growing Flame", "Rising Flame"],
		"passive_a": ["Armored Blow 3", "Armored Blow 2", "Armored Blow 1"],
		"passive_c": ["Breath of Life 3", "Breath of Life 2", "Breath of Life 1"],
		"dragon": true
	},
	"Virion": {
		"color" : "Colorless",
		"weapon_type" : "Bow",
		"hp": 46,
		"atk": 41,
		"spd": 32,
		"def": 27,
		"res": 15,
		"move_type": "Infantry",
		"weapon": ["Silver Bow+", "Silver Bow", "Steel Bow", "Iron Bow"],
		"special": ["Astra", "Night Sky"],
		"passive_a": ["Defiant Res 3", "Defiant Res 2", "Defiant Res 1"],
		"passive_b": ["Seal Spd 3", "Seal Spd 2", "Seal Spd 1"]
	},
	"Wrys": {
		"color" : "Colorless",
		"weapon_type" : "Staff",
		"hp": 42,
		"atk": 34,
		"spd": 23,
		"def": 22,
		"res": 36,
		"move_type": "Infantry",
		"weapon": ["Assault", "Slow"],
		"special": ["Heavenly Light", "Imbue"],
		"passive_b": ["Live to Serve 3", "Live to Serve 2", "Live to Serve 1"],
		"command" : ["Rehabilitate", "Reconcile", "Heal"]
	}
}
