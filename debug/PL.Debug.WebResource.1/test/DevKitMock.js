var AttributeType = { boolean: 'boolean', datetime: 'datetime', decimal: 'decimal', double: 'double', integer: 'integer', lookup: 'lookup', memo: 'memo', money: 'money', multioptionset: 'multioptionset', optionset: 'optionset', string: 'string' };
var NumberAttributeType = { decimal: 'decimal', double: 'double', integer: 'integer', money: 'money' };
var OptionSetAttributeType = { multioptionset: 'multioptionset', optionset: 'optionset' };
var Format = { date: 'date', datetime: 'datetime', duration: 'duration', none: 'none', language: 'language', timezone: 'timezone', email: 'email', phone: 'phone', text: 'text', textarea: 'textarea', tickersymbol: 'tickersymbol', url: 'url' };
var StringFormat = { email: 'email', phone: 'phone', text: 'text', textarea: 'textarea', tickersymbol: 'tickersymbol', url: 'url' };
var DateFormat = { date: 'date', datetime: 'datetime' };
var NumberFormat = { duration: 'duration', none: 'none' };
var OptionSetFormat = { language: 'language', timezone: 'timezone' };
var SubmitMode = { always: 'always', dirty: 'dirty', never: 'never' };
var RequiredLevel = { none: 'none', recommended: 'recommended', required: 'required' };
var xhr = null;
function DevKitXrmMock(mock, entityName) {
    mock.XrmMockGenerator.initialise(entityName);
    var field = function(name, value) {
        mock.XrmMockGenerator.Attribute.createString(name, value);
    };
    var standardField = function(name, value, visible, disabled, label, attributeType, format, requiredLevel, submitMode, isDirty) {
        var control = {}, attr = {};
        if (name !== null) {
            attr.name = name;
            control.name = name;
        }
        if (value !== null) attr.value = value;
        if (visible !== null) control.visible = visible;
        if (disabled !== null) control.disabled = disabled;
        if (label !== null) control.label = label;
        if (attributeType !== null) attr.attributeType = attributeType;
        if (format !== null) attr.format = format;
        if (requiredLevel !== null) attr.requiredLevel = requiredLevel;
        if (submitMode !== null) attr.submitMode = submitMode;
        if (isDirty !== null) attr.isDirty = isDirty;
        mock.XrmMockGenerator.Attribute.createString(attr, [control]);
    };
    var stringField = function(name, value, visible, disabled, label, stringFormat, requiredLevel, submitMode, isDirty, maxLength) {
        var control = {}, attr = {};
        if (name !== null) {
            attr.name = name;
            control.name = name;
        }
        if (value !== null) attr.value = value;
        if (visible !== null) control.visible = visible;
        if (disabled !== null) control.disabled = disabled;
        if (label !== null) control.label = label;
        attr.attributeType = AttributeType.string;
        if (stringFormat !== null) attr.format = stringFormat;
        if (requiredLevel !== null) attr.requiredLevel = requiredLevel;
        if (submitMode !== null) attr.submitMode = submitMode;
        if (isDirty !== null) attr.isDirty = isDirty;
        if (maxLength !== null) attr.maxLength = maxLength;
        mock.XrmMockGenerator.Attribute.createString(attr, [control]);
    };
    var dateField = function(name, value, visible, disabled, label, dateFormat, requiredLevel, submitMode, isDirty) {
        var control = {}, attr = {};
        if (name !== null) {
            attr.name = name;
            control.name = name;
        }
        if (value !== null) attr.value = value;
        if (visible !== null) control.visible = visible;
        if (disabled !== null) control.disabled = disabled;
        if (label !== null) control.label = label;
        attr.attributeType = AttributeType.datetime;
        if (dateFormat !== null) attr.format = dateFormat;
        if (requiredLevel !== null) attr.requiredLevel = requiredLevel;
        if (submitMode !== null) attr.submitMode = submitMode;
        if (isDirty !== null) attr.isDirty = isDirty;
        mock.XrmMockGenerator.Attribute.createDate(attr, [control]);
    };
    var numberField = function(name, value, visible, disabled, label, numberAttributeType, numberFormat, requiredLevel, submitMode, isDirty, min, max, precision) {
        var control = {}, attr = {};
        if (name !== null) {
            attr.name = name;
            control.name = name;
        }
        if (value !== null) attr.value = value;
        if (visible !== null) control.visible = visible;
        if (disabled !== null) control.disabled = disabled;
        if (label !== null) control.label = label;
        if (numberAttributeType !== null) attr.attributeType = numberAttributeType;
        if (numberFormat !== null) attr.format = numberFormat;
        if (requiredLevel !== null) attr.requiredLevel = requiredLevel;
        if (submitMode !== null) attr.submitMode = submitMode;
        if (isDirty !== null) attr.isDirty = isDirty;
        if (min !== null) attr.min = min;
        if (max !== null) attr.max = max;
        if (precision !== null) attr.precision = precision;
        mock.XrmMockGenerator.Attribute.createNumber(attr, [control]);
    };
    var optionSetField = function(name, value, visible, disabled, label, optionSetAttributeType, optionSetFormat, requiredLevel, submitMode, isDirty, options, selectedOption, initialValue) {
        var control = {}, attr = {};
        if (name !== null) {
            attr.name = name;
            control.name = name;
        }
        if (value !== null) attr.value = value;
        if (visible !== null) control.visible = visible;
        if (disabled !== null) control.disabled = disabled;
        if (label !== null) control.label = label;
        if (optionSetAttributeType !== null) attr.attributeType = optionSetAttributeType;
        if (optionSetFormat !== null) attr.format = optionSetFormat;
        if (requiredLevel !== null) attr.requiredLevel = requiredLevel;
        if (submitMode !== null) attr.submitMode = submitMode;
        if (isDirty !== null) attr.isDirty = isDirty;
        if (options !== null) attr.options = options;
        if (selectedOption !== null) attr.selectedOption = selectedOption;
        if (initialValue !== null) attr.initialValue = initialValue;
        mock.XrmMockGenerator.Attribute.createOptionSet(attr, [control]);
    };
    var lookupField = function(name, value, visible, disabled, label, requiredLevel, submitMode, isDirty, isPartyList) {
        var control = {}, attr = {};
        if (name !== null) {
            attr.name = name;
            control.name = name;
        }
        if (value !== null) attr.value = value;
        if (visible !== null) control.visible = visible;
        if (disabled !== null) control.disabled = disabled;
        if (label !== null) control.label = label;
        if (requiredLevel !== null) attr.requiredLevel = requiredLevel;
        if (submitMode !== null) attr.submitMode = submitMode;
        if (isDirty !== null) attr.isDirty = isDirty;
        if (isPartyList !== null) attr.isPartyList = isPartyList;
        mock.XrmMockGenerator.Attribute.createLookup(attr, [control]);
    };
    var data = {
        Field: field,
        StandardField: standardField,
        StringField: stringField,
        DateField: dateField,
        NumberField: numberField,
        OptionSetField: optionSetField,
        LookupField: lookupField
    };
    Object.defineProperty(data, 'FormType', {
        set: function (value) {
            Xrm.Page.ui.formSelector.items.itemCollection[0].formType = value;
        }
    });
    return data;
}
function DevKitServerMock(sinon) {
    var server = {};
    var fakeUrl = "http://js.unit.test.local";
    WebApiClient.GetDefaultHeaders()[3].value = "";//fixed bug
    Xrm.Page.context.clientUrl = fakeUrl;//fixed bug
    if (xhr === null) {
        xhr = sinon.fakeServer.create();
        xhr.autoRespond = true;
    }
    var serverEscape = function (s) {
        s = s.replace(/ /g, "%20");
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    server.RespondWith = function (checkUrl, data) {
        xhr.respondWith("GET", new RegExp(serverEscape(checkUrl)),
            [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
        );
    }
    return server;
}