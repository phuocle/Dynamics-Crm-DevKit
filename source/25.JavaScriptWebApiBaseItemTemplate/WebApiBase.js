$ProjectName$.WebApi = function (WebApiClient) {
    return WebApiClient;
};
$ProjectName$.WebApi.LoadField = function (entity, logicalName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity) {
    var f = "@OData.Community.Display.V1.FormattedValue";
    var l = "@Microsoft.Dynamics.CRM.lookuplogicalname";
    var property = {};
    var getFormattedValue = function () {
        if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
            return "";
        };
        if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
            if (entity[logicalName + l] === entityLogicalName) {
                return entity[logicalName + f];
            };
            return "";
        };
        return entity[logicalName + f];
    }
    var getValue = function () {
        if (entity[logicalName] === undefined || entity[logicalName] === null) {
            return null;
        };
        if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
            if (entity[logicalName + l] === entityLogicalName) {
                return entity[logicalName];
            };
            return null;
        };
        return entity[logicalName];
    }
    var setValue = function (value) {
        if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
            value = value.replace("{", "").replace("}", "");
            upsertEntity[logicalName + '@odata.bind'] = '/' + entityLogicalName + '(' + value + ')';
        } else {
            upsertEntity[logicalName] = value;
        };
        entity[logicalName] = value;
    }
    Object.defineProperty(property, "FormattedValue", {
        get: getFormattedValue
    });
    if (readOnly) {
        Object.defineProperty(property, "Value", {
            get: getValue
        });
    } else {
        Object.defineProperty(property, "Value", {
            get: getValue,
            set: setValue
        });
    };
    return property;
}
$ProjectName$.WebApi.ExtendField = function (logicalName) {
    return {
        logicalName: logicalName.replace(".", "_x002e_"),
        readOnly: true
    };
}
$ProjectName$.WebApi.CreateRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true
    };
};
$ProjectName$.WebApi.DeleteByIdRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true
    };
};
$ProjectName$.WebApi.DeleteByAlternateKeyRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true,
        alternateKey: []
    };
};
$ProjectName$.WebApi.AlternateKey = function () {
    return {
        property: null,
        value: null
    };
};
$ProjectName$.WebApi.DeleteSinglePropertyRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true
    };
};
$ProjectName$.WebApi.AssociateRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true,
        source: {},
        target: {}
    };
};
$ProjectName$.WebApi.DisassociateRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true,
        source: {},
        target: {}
    };
};
$ProjectName$.WebApi.RetrieveByIdRequest = function () {
    return {
        headers: [{ key: "Prefer", value: 'odata.include-annotations="*"' }],
        async: true
    };
};
$ProjectName$.WebApi.RetrieveByAlternateKeyRequest = function () {
    return {
        headers: [{ key: "Prefer", value: 'odata.include-annotations="*"' }],
        async: true,
        alternateKey: []
    };
};
$ProjectName$.WebApi.RetrieveByFetchXmlRequest = function () {
    return {
        headers: [{ key: "Prefer", value: 'odata.include-annotations="*"' }],
        async: true,
        returnAllPages: false
    };
};
$ProjectName$.WebApi.RetrieveByQueryExpressionRequest = function () {
    return {
        headers: [{ key: "Prefer", value: 'odata.include-annotations="*"' }],
        async: true,
        returnAllPages: false
    };
};
$ProjectName$.WebApi.UpdateByIdRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true
    };
};
$ProjectName$.WebApi.UpdateByAlternateKeyRequest = function () {
    return {
        headers: [{ key: "Prefer", value: "return=representation" }],
        async: true,
        alternateKey: []
    };
};
$ProjectName$.WebApi.WithRequest = function () {
    return {};
};