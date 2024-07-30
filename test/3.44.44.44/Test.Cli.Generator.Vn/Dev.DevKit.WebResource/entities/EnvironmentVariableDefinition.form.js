'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEnvironmentVariableDefinition_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ConnectionReferenceId: {},
			connectortype: {},
			datasourcetype: {},
			DefaultValue: {},
			Description: {},
			DisplayName: {},
			OwnerId: {},
			ParentDefinitionId: {},
			SchemaName: {},
			Type: {},
			Values: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Values: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			envdefinition_envdefinition: {},
			environmentvariabledefinition_credential_cyberarkobject: {},
			environmentvariabledefinition_credential_cyberarksafe: {},
			environmentvariabledefinition_credential_cyberarkusername: {},
			environmentvariabledefinition_credential_password: {},
			environmentvariabledefinition_credential_username: {},
			environmentvariabledefinition_environmentvariablevalue: {},
			EnvironmentVariableDefinition_ReportParameter_EvironmentVariableDefinitionId: {},
			envvardefinition_powerbimashupparameter: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EnvironmentVariableDefinition = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		SecretStore : {
			Azure_Key_Vault: 0,
			Microsoft_Dataverse: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		Type : {
			Boolean: 100000002,
			Data_Source: 100000004,
			JSON: 100000003,
			Number: 100000001,
			Secret: 100000005,
			String: 100000000
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));