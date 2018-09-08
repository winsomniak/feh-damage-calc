/*
 * Legacy Globals
 */
var data;
var weaponInfo;
var specialInfo;
var assistInfo;
var skillInfo;
var supportInfo;
var driveInfo;
var refinementsInfo;
var blessingsInfo;
var imageUrl = 'https://kagerochart.com';

// stat total upper limit
var HIGHESTSTAT = 99;

// index of the selected characters
var selectedAttacker = 0;
var selectedDefender = 0;

// character slots
var attackerTeam = [{}, {}, {}, {}, {}];
var defenderTeam = [{}, {}, {}, {}, {}];

// matchup table info
var previousTable = true; // true if one vs all, false if all vs one
var keepTable = false;    // true if we keep the matchup table currently displayed

// sorted matchup table column
var mTableSorted = -1;
var mSortDesc = true; // sort in descending order?

// true if battle log is open, false otherwise
var openLog = true;

// Used to take track of refinements for custom units
var prevRefinements = ["None", "None"];
var prevWeapons = ["None", "None"];

// arena score calculation level factor for each rarity
var rarityLevelFactor = [68, 73, 79, 84, 91];

// arena score calculation base value for each rarity
var rarityBaseValue = [47, 49, 51, 53, 55];

// default states
var defaultAttacker = true;
var defaultDefender = true;

// prevent filterMatchups function from being called multiple times when resetting filters
var resetFilterLock = false;

// use to fix filters bug
var initFilters = true;

var data = JSON.parse(document.getElementById('data').textContent);

weaponInfo = data.weapons;
specialInfo = data.specials;
assistInfo = data.assists;
skillInfo = data.passives;
driveInfo = data.driveskills;
refinementsInfo= data['refinements'];
blessingsInfo= data['blessings'];
supportInfo = data['support-bonus'];
charInfo = data.heroes;
charInfo.Custom = {
    "display": "Custom",
    "id": "Custom",
    "name": "Custom"
};

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        console.log("Setting up combat simulator...");
        setupCalc();
    }
}

function setupCalc() {

    initMaterial();

    $("#matchup-filters").hide();
    $("#matchup-overrides").hide();
    $("#matchups").hide();

    // setup initial display
    setupChars();
    setupOverrides();

}

function initMaterial() {
    console.group('Material Web Component Initialization Errors and Warnings');
    /*
     * Form fields and radio buttons
     */
    var formFields = document.querySelectorAll('.mdc-form-field');
    for (var i = 0, formField; formField = formFields[i]; i++) {
        var formFieldInstance = new mdc.formField.MDCFormField(formField);
        var radio = formField.querySelector('.mdc-radio');
        if (radio) {
            var radioInstance = new mdc.radio.MDCRadio(radio);
            formFieldInstance.input = radioInstance;
        }
    }

    /*
     * Text fields
     */
    var tfs = document.querySelectorAll('.mdc-text-field');
    tfields = [];
    for (var i = 0, tf; tf = tfs[i]; i++) {
        var textField = new mdc.textField.MDCTextField(tf);
        tfields.push(textField);
    }

    /*
     * Tab panels
     */
    var tabEls = document.querySelectorAll('.mdc-tab-bar');

    var tabBars = [];
    tabEls.forEach(function(el, key) {
        var bar = new mdc.tabs.MDCTabBar(el);
        bar.preventDefaultOnClick = true;
        bar.listen('MDCTabBar:change', function (t) {
            var dynamicTabBar = t.detail;
            var nthChildIndex = dynamicTabBar.activeTabIndex;

            var selector = '#attack-panel';

            if (el.id === 'override-tab-bar') {
                selector = '#matchup-overrides';
            }
            else if (el.id === 'char-tab-bar-2') {
                selector = '#defend-panel';
            }
            var panels = document.querySelector(selector + ' .mdc-card__media');

            updatePanel(panels, nthChildIndex);
        });

        tabBars.push(bar);
    });

    //Initialize tab panels
    try {
        updatePanel(document.querySelector('#attack-panel .mdc-card__media'), 0);
        updatePanel(document.querySelector('#defend-panel .mdc-card__media'), 0);
        updatePanel(document.querySelector('#matchup-overrides .mdc-card__media'), 0);
    }
    catch(err) {
        console.error('Tab panel initialization failed - ', err);
    }

    /*
     * Select fields
     */
    var selects = document.querySelectorAll('.mdc-select');
    sfields = [];
    for (var i = 0, sf; sf = selects[i]; i++) {

        try {
            var selectField = new mdc.select.MDCSelect(sf);
        }
        catch(err) {
            console.error('Material select field initialization failed - ', err);
        }

        sfields.push(selectField);
    }

    console.groupEnd();

}

function updatePanel(panels, index) {
    var activePanel = panels.querySelector('.tab-panel.active');
    var newActivePanel = panels.querySelector('.tab-panel:nth-child(' + (index + 1) + ')');

    if (activePanel) {
      activePanel.classList.remove('active');
      activePanel.style.display = 'none';
    }

    if (newActivePanel) {
      newActivePanel.classList.add('active');
      newActivePanel.style.display = 'block';
    }
}
