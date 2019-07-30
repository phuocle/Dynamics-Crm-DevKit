var DevKit;
(function (DevKit) {
    (function (WebApi) {
        WebApi.CreateRequest = function() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false
            }
        }
        WebApi.DeleteRequest = function() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false
            }
        }
        WebApi.UpdateRequest = function() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false
            }
        }
        WebApi.RetrieveRequest = function() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'odata.include-annotations="*"' }],
                asBatch: false
            }
        }
        WebApi.AlternateKey = function(property, value) {
            return { property: property, value: value };
        };
        WebApi.Header = function (key, value) {
            return { key: key, value: value };
        };
        WebApi.CustomRequest = function() {
            return WebApiClient.Requests.Request.prototype.with({});
        };
        WebApi.AssociateRequest = function() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false,
                source: {},
                target: {}
            };
        };
        WebApi.DisassociateRequest = function() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false,
                source: {},
                target: {}
            };
        };
        WebApi.ExtendField = function ExtendField(name, logicalName) {
            var field = {};
            field[name] = {};
            field[name].readOnly = true;
            field[name].logicalName = logicalName.replace(".", "_x002e_");
            return field;
        }
    })(WebApi = DevKit.WebApi || (DevKit.WebApi = {}));
})(DevKit || (DevKit = {}));