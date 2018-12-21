///<field name='NumberAttributeType' type='PickList'></field>
var NumberAttributeType = {
    ///<field name='decimal' type='PickListValue'>decimal</field>
    decimal: 'decimal',
    ///<field name='double' type='PickListValue'>double</field>
    double: 'double',
    ///<field name='integer' type='PickListValue'>integer</field>
    integer: 'integer',
    ///<field name='money' type='PickListValue'>money</field>
    money: 'money'
}
///<field name='OptionSetAttributeType' type='PickList'></field>
var OptionSetAttributeType = {
    ///<field name='multioptionset' type='PickListValue'>multioptionset</field>
    multioptionset: 'multioptionset',
    ///<field name='optionset' type='PickListValue'>optionset</field>
    optionset: 'optionset',
}
///<field name='AttributeType' type='PickList'></field>
var AttributeType = {
    ///<field name='boolean' type='PickListValue'>boolean</field>
    boolean: 'boolean',
    ///<field name='datetime' type='PickListValue'>datetime</field>
    datetime: 'datetime',
    ///<field name='decimal' type='PickListValue'>decimal</field>
    decimal: 'decimal',
    ///<field name='double' type='PickListValue'>double</field>
    double: 'double',
    ///<field name='integer' type='PickListValue'>integer</field>
    integer: 'integer',
    ///<field name='lookup' type='PickListValue'>lookup</field>
    lookup: 'lookup',
    ///<field name='memo' type='PickListValue'>memo</field>
    memo: 'memo',
    ///<field name='money' type='PickListValue'>money</field>
    money: 'money',
    ///<field name='multioptionset' type='PickListValue'>multioptionset</field>
    multioptionset: 'multioptionset',
    ///<field name='optionset' type='PickListValue'>optionset</field>
    optionset: 'optionset',
    ///<field name='string' type='PickListValue'>string</field>
    string: 'string'
}
///<field name='Format' type='PickList'></field>
var Format = {
    ///<field name='date' type='PickListValue'>date</field>
    date: 'date',
    ///<field name='datetime' type='PickListValue'>datetime</field>
    datetime: 'datetime',
    ///<field name='duration' type='PickListValue'>duration</field>
    duration: 'duration',
    ///<field name='none' type='PickListValue'>none</field>
    none: 'none',
    ///<field name='language' type='PickListValue'>language</field>
    language: 'language',
    ///<field name='timezone' type='PickListValue'>timezone</field>
    timezone: 'timezone',
    ///<field name='email' type='PickListValue'>email</field>
    email: 'email',
    ///<field name='phone' type='PickListValue'>phone</field>
    phone: 'phone',
    ///<field name='text' type='PickListValue'>text</field>
    text: 'text',
    ///<field name='textarea' type='PickListValue'>textarea</field>
    textarea: 'textarea',
    ///<field name='tickersymbol' type='PickListValue'>tickersymbol</field>
    tickersymbol: 'tickersymbol',
    ///<field name='url' type='PickListValue'>url</field>
    url: 'url'
}
///<field name='StringFormat' type='PickList'></field>
var StringFormat = {
    ///<field name='email' type='PickListValue'>email</field>
    email: 'email',
    ///<field name='phone' type='PickListValue'>phone</field>
    phone: 'phone',
    ///<field name='text' type='PickListValue'>text</field>
    text: 'text',
    ///<field name='textarea' type='PickListValue'>textarea</field>
    textarea: 'textarea',
    ///<field name='tickersymbol' type='PickListValue'>tickersymbol</field>
    tickersymbol: 'tickersymbol',
    ///<field name='url' type='PickListValue'>url</field>
    url: 'url'
};
///<field name='DateFormat' type='PickList'></field>
var DateFormat = {
    ///<field name='date' type='PickListValue'>date</field>
    date: 'date',
    ///<field name='datetime' type='PickListValue'>datetime</field>
    datetime: 'datetime',
}
///<field name='NumberFormat' type='PickList'></field>
var NumberFormat = {
    ///<field name='duration' type='PickListValue'>duration</field>
    duration: 'duration',
    ///<field name='none' type='PickListValue'>none</field>
    none: 'none',
}
///<field name='OptionSetFormat' type='PickList'></field>
var OptionSetFormat = {
    ///<field name='language' type='PickListValue'>language</field>
    language: 'language',
    ///<field name='timezone' type='PickListValue'>timezone</field>
    timezone: 'timezone',
}
///<field name='SubmitMode' type='PickList'></field>
var SubmitMode = {
    ///<field name='always' type='PickListValue'>always</field>
    always: 'always',
    ///<field name='dirty' type='PickListValue'>dirty</field>
    dirty: 'dirty',
    ///<field name='never' type='PickListValue'>never</field>
    never: 'never'
}
///<field name='RequiredLevel' type='PickList'></field>
var RequiredLevel = {
    ///<field name='none' type='PickListValue'>none</field>
    none: 'none',
    ///<field name='recommended' type='PickListValue'>recommended</field>
    recommended: 'recommended',
    ///<field name='required' type='PickListValue'>required</field>
    required: 'required'
}
function DevKitXrmMock(xrm_mock, entityName) {
    var mock = {
        ///<field name='FormType' type='OptionSet'>OptionSet.FormType</field>
        FormType: ''
    };
    ///<field name='Field' type='Function'></field>
    mock.Field = function (name, value) {
        ///<param name='name' type='String'>Field schema name</param>
        ///<param name='value' type='String'>Field schema value</param>
        ///<returns type='void' />
    }
    ///<field name='StandardField' type='Function'></field>
    mock.StandardField = function (name, value, visible, disabled, label, attributeType, format, requiredLevel, submitMode, isDirty) {
        ///<param name='name' type='String'>String ame</param>
        ///<param name='value' type='String'>String Value</param>
        ///<param name='visible' type='Boolean'>Boolean Visible</param>
        ///<param name='disabled' type='Boolean'>Boolean Disabled</param>
        ///<param name='label' type='String'>String Label</param>
        ///<param name='attributeType' type='AttributeType'>Enum AttributeType</param>
        ///<param name='format' type='Format'>Enum Format</param>
        ///<param name='requiredLevel' type='RequiredLevel'>Enum RequiredLevel</param>
        ///<param name='submitMode' type='SubmitMode'>Enum SubmitMode</param>
        ///<param name='isDirty' type='Boolean'>Boolean IsDirty</param>
        ///<returns type='void' />
    }
    ///<field name='StandardField' type='Function'></field>
    mock.StringField = function (name, value, visible, disabled, label, stringFormat, requiredLevel, submitMode, isDirty, maxLength) {
        ///<param name='name' type='String'>String Name</param>
        ///<param name='value' type='String'>String Value</param>
        ///<param name='visible' type='Boolean'>Boolean Visible</param>
        ///<param name='disabled' type='Boolean'>Boolean Disabled</param>
        ///<param name='label' type='String'>String Label</param>
        ///<param name='stringFormat' type='StringFormat'>Enum StringFormat</param>
        ///<param name='requiredLevel' type='RequiredLevel'>Enum RequiredLevel</param>
        ///<param name='submitMode' type='SubmitMode'>Enum SubmitMode</param>
        ///<param name='isDirty' type='Boolean'>Boolean IsDirty</param>
        ///<param name='maxLength' type='Integer'>Number MaxLength</param>
        ///<returns type='void' />
    }
    ///<field name='DateField' type='Function'></field>
    mock.DateField = function (name, value, visible, disabled, label, dateFormat, requiredLevel, submitMode, isDirty) {
        ///<param name='name' type='String'>String Name</param>
        ///<param name='value' type='Date'>Date Value</param>
        ///<param name='visible' type='Boolean'>Boolean Visible</param>
        ///<param name='disabled' type='Boolean'>Boolean Disabled</param>
        ///<param name='label' type='String'>String Label</param>
        ///<param name='dateFormat' type='DateFormat'>Enum DateFormat</param>
        ///<param name='requiredLevel' type='RequiredLevel'>Enum RequiredLevel</param>
        ///<param name='submitMode' type='SubmitMode'>Enum SubmitMode</param>
        ///<param name='isDirty' type='Boolean'>Boolean IsDirty</param>
        ///<returns type='void' />
    }
    ///<field name='NumberField' type='Function'></field>
    mock.NumberField = function (name, value, visible, disabled, label, numberAttributeType, numberFormat, requiredLevel, submitMode, isDirty, min, max, precision) {
        ///<param name='name' type='String'>String Name</param>
        ///<param name='value' type='Number'>Number Value</param>
        ///<param name='visible' type='Boolean'>Boolean Visible</param>
        ///<param name='disabled' type='Boolean'>Boolean Disabled</param>
        ///<param name='label' type='String'>String Label</param>
        ///<param name='numberAttributeType' type='NumberAttributeType'>Enum NumberAttributeType</param>
        ///<param name='numberFormat' type='NumberFormat'>Enum DateFormat</param>
        ///<param name='requiredLevel' type='RequiredLevel'>Enum RequiredLevel</param>
        ///<param name='submitMode' type='SubmitMode'>Enum SubmitMode</param>
        ///<param name='isDirty' type='Boolean'>Boolean IsDirty</param>
        ///<param name='min' type='Integer'>Number Min</param>
        ///<param name='max' type='Integer'>Number Max</param>
        ///<param name='precision' type='Integer'>Number Precision</param>
        ///<returns type='void' />
    }
    ///<field name='OptionSetField' type='Function'></field>
    mock.OptionSetField = function (name, value, visible, disabled, label, optionSetAttributeType, optionSetFormat, requiredLevel, submitMode, isDirty, options, selectedOption, initialValue) {
        ///<param name='name' type='String'>String Name</param>
        ///<param name='value' type='Number'>Number Value</param>
        ///<param name='visible' type='Boolean'>Boolean Visible</param>
        ///<param name='disabled' type='Boolean'>Boolean Disabled</param>
        ///<param name='label' type='String'>String Label</param>
        ///<param name='optionSetAttributeType' type='OptionSetAttributeType'>Enum OptionSetAttributeType</param>
        ///<param name='optionSetFormat' type='OptionSetFormat'>Enum OptionSetFormat</param>
        ///<param name='requiredLevel' type='RequiredLevel'>Enum RequiredLevel</param>
        ///<param name='submitMode' type='SubmitMode'>Enum SubmitMode</param>
        ///<param name='isDirty' type='Boolean'>Boolean IsDirty</param>
        ///<param name='options' type='Array'>Array [{ text: '", value: '" }, ...]</param>
        ///<param name='selectedOption' type='Object'>Object { text: '", value: '" }</param>
        ///<param name='initialValue' type='Integer'>Integer InitialValue</param>
        ///<returns type='void' />
    }
    ///<field name='LookupField' type='Function'></field>
    mock.LookupField = function (name, value, visible, disabled, label, requiredLevel, submitMode, isDirty, isPartyList) {
        ///<param name='name' type='String'>String Name</param>
        ///<param name='value' type='Object'>Object { entityType: '", id: '", name: '" } Value</param>
        ///<param name='visible' type='Boolean'>Boolean Visible</param>
        ///<param name='disabled' type='Boolean'>Boolean Disabled</param>
        ///<param name='label' type='String'>String Label</param>
        ///<param name='requiredLevel' type='RequiredLevel'>Enum RequiredLevel</param>
        ///<param name='submitMode' type='SubmitMode'>Enum SubmitMode</param>
        ///<param name='isDirty' type='Boolean'>Boolean IsDirty</param>
        ///<param name='isPartyList' type='Boolean'>Boolean IsPartyList</param>
        ///<returns type='void' />
    }
    return mock;
}
function DevKitServerMock(sinon) {
    var server = {};
    ///<field name='RespondWith' type='Function'></field>
    server.RespondWith = function (check, data) {
        ///<param name='check' type='String'>the data to check in the url</param>
        ///<param name='data' type='Object'>object return by response</param>
    }
    return server;
}
intellisense.addEventListener('statementcompletion', function (event) {
    event.items = event.items.filter(function (item) {
        var removes = ['hasOwnProperty', 'propertyIsEnumerable', 'isPrototypeOf', 'toLocaleString', 'toString', 'valueOf', 'constructor', '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', '__proto__'];
        if (removes.indexOf(item.name) !== -1) return false;
        item.glyph = 'vs:GlyphGroupNamespace';
        if (item.comments.length !== 0) {
            if (item.comments.indexOf("type='Boolean'") >= 0)
                item.glyph = 'vs:GlyphGroupModule';
            else if (item.comments.indexOf("type='Money'") >= 0)
                item.glyph = 'vs:GlyphGroupStruct';
            else if (item.comments.indexOf("type='DateTime'") >= 0 || item.comments.indexOf("type='DateOnly'") >= 0)
                item.glyph = 'vs:GlyphGroupTemplate';
            else if (item.comments.indexOf("type='PickList'") >= 0 || item.comments.indexOf("type='Status'") >= 0 || item.comments.indexOf("type='State'") >= 0 || item.comments.indexOf("type='OptionSet'") >= 0)
                item.glyph = 'vs:GlyphGroupEnum';
            else if (item.comments.indexOf("type='Function'") >= 0)
                item.glyph = 'vs:GlyphGroupEvent';
            else if (item.comments.indexOf("type='Lookup'") >= 0 || item.comments.indexOf("type='PartyList'") >= 0)
                item.glyph = 'vs:GlyphGroupMapItem';
            else if (item.comments.indexOf("type='Object'") >= 0)
                item.glyph = 'vs:GlyphGroupNamespace';
            else if (item.comments.indexOf("type='Memo'") >= 0 || item.comments.indexOf("type='String'") >= 0)
                item.glyph = 'vs:GlyphGroupField';
            else if (item.comments.indexOf("type='Uniqueidentifier'") >= 0)
                item.glyph = 'vs:GlyphGroupMap';
            else if (item.comments.indexOf("type='Virtual'") >= 0)
                item.glyph = 'vs:GlyphGroupInterface';
            else if (item.comments.indexOf("type='Array'") >= 0)
                item.glyph = 'vs:GlyphJSharpProject';
            else if (item.comments.indexOf("type='PickListValue'") >= 0)
                item.glyph = 'vs:GlyphGroupEnumMember';
            else if (item.comments.indexOf("type='Integer'") >= 0)
                item.glyph = 'vs:GlyphGroupInterface';
            else if (item.comments.indexOf("type='Double'") >= 0)
                item.glyph = 'vs:GlyphReference';
        }
        return true;
    });
})