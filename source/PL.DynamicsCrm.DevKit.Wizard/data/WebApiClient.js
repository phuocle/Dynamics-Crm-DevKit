var DevKit;
(function (DevKit) {
    var WebApi;
    (function (WebApi) {
        function CreateRequest() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false
            };
        }
        WebApi.CreateRequest = CreateRequest;
        function DeleteRequest() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false
            };
        }
        WebApi.DeleteRequest = DeleteRequest;
        function UpdateRequest() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false
            };
        }
        WebApi.UpdateRequest = UpdateRequest;
        function RetrieveRequest() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'odata.include-annotations="*"' }],
                asBatch: false
            };
        }
        WebApi.RetrieveRequest = RetrieveRequest;
        function AlternateKey() {
            return {};
        }
        WebApi.AlternateKey = AlternateKey;
        function WithRequest() {
            return {};
        }
        WebApi.WithRequest = WithRequest;
        function CustomRequest() {
            return WebApiClient.Requests.Request.prototype.with({});
        }
        WebApi.CustomRequest = CustomRequest;
        function AssociateRequest() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false,
                source: {},
                target: {}
            };
        }
        WebApi.AssociateRequest = AssociateRequest;
        function DisassociateRequest() {
            return {
                async: false,
                headers: [{ key: 'Prefer', value: 'return=representation' }],
                asBatch: false,
                source: {},
                target: {}
            };
        }
        WebApi.DisassociateRequest = DisassociateRequest;
        function ExtendField(name, logicalName) {
            var field = {};
            field[name] = {};
            field[name].readOnly = true;
            field[name].logicalName = logicalName.replace(".", "_x002e_");
            return field;
        }
        WebApi.ExtendField = ExtendField;
    })(WebApi = DevKit.WebApi || (DevKit.WebApi = {}));
})(DevKit || (DevKit = {}));