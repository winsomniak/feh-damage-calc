function updateAttributeLink(id) {
    var el = document.getElementById(id);
    var linkId = el.id.replace(/-([1-2])/, "-link-$1" );
    var link = $('#' + linkId);
    var info = window[el.dataset.info];

    var passiveType = el.dataset.skilltype;
    if (passiveType) {
        info = info[passiveType];
    }

    var val = el.value;

    if (info && info[val]) {
        var data = info[val];

        link.prop('href', data.link);
        link.prop('title', 'Open ' + data.name + ' in a new tab');
        link.css('z-index', 1);
    }
    else {
        link.css('z-index', -1);
    }
}

function updateAllAttributeLinks() {

    //Change links when entity attribute fields update
    var linkFields = ['char', 'weapon', 'refinement', 'special', 'passive-a', 'passive-b', 'passive-c', 'assist', 'passive-s', 'drive-1', 'drive-2', 'drive-3'];
    linkFields.forEach(function (key) {

        //Register change event handler for both sides
        for (var i = 1; i <= 2; i++) {

            var field = key + '-' + i;
            updateAttributeLink(field);
        }
    });
}
