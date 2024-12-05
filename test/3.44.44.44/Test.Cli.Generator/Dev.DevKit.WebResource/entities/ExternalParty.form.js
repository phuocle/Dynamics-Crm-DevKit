'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormExternalParty_Information = function(executionContext, defaultWebResourceName) {
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
			CorrelationKey: {},
			EmailAddress: {},
			externalPartyItemsGrid: {},
			FullName: {},
			LastDisabledOn: {},
			LastEnabledOn: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			externalPartyItemsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			externalparty_entries: {},
			lk_externalparty_account_createdby: {},
			lk_externalparty_account_modifiedby: {},
			lk_externalparty_contact_createdby: {},
			lk_externalparty_contact_modifiedby: {},
			lk_externalparty_incident_createdby: {},
			lk_externalparty_incident_modifiedby: {},
			lk_externalparty_incidentresolution_createdby: {},
			lk_externalparty_incidentresolution_modifiedby: {},
			lk_externalparty_opportunityclose_createdby: {},
			lk_externalparty_opportunityclose_modifiedby: {},
			lk_externalparty_orderclose_createdby: {},
			lk_externalparty_orderclose_modifiedby: {},
			lk_externalparty_product_createdby: {},
			lk_externalparty_product_modifiedby: {},
			lk_externalparty_quoteclose_createdby: {},
			lk_externalparty_quoteclose_modifiedby: {},
			lk_externalparty_subject_createdby: {},
			lk_externalparty_subject_modifiedby: {},
			lk_externalparty_uom_createdby: {},
			lk_externalparty_uom_modifiedby: {},
			lk_externalparty_uomschedule_createdby: {},
			lk_externalparty_uomschedule_modifiedby: {}
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
	OptionSet.ExternalParty = {
		StateCode : {
			Disabled: 1,
			Enabled: 0
		},
		StatusCode : {
			Disabled: 2,
			Enabled: 1
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