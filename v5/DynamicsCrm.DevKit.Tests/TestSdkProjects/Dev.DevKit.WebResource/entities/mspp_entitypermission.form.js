'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_entitypermission_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["mspp_accountrelationship", "mspp_append", "mspp_appendto", "mspp_contactrelationship", "mspp_create", "mspp_delete", "mspp_entitylogicalname", "mspp_entityname", "mspp_parententitypermission", "mspp_parentrelationship", "mspp_read", "mspp_scope", "mspp_websiteid", "mspp_write", "subgrid_childentitypermissions", "subgrid_webroles", "WebResource_mspp_accountrelationshipname_selector", "WebResource_mspp_contactrelationship_selector", "WebResource_mspp_entitylogicalname_selector", "WebResource_mspp_parentrelationship_selector"],
			bpf: [],
			dialog: [],
			grid: ["subgrid_childentitypermissions", "subgrid_webroles"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["mspp_entitypermission_general___mspp_entitypermission_account", "mspp_entitypermission_general___mspp_entitypermission_children", "mspp_entitypermission_general___mspp_entitypermission_contact", "mspp_entitypermission_general___mspp_entitypermission_general", "mspp_entitypermission_general___mspp_entitypermission_parent", "mspp_entitypermission_general___mspp_entitypermission_privileges", "mspp_entitypermission_general___mspp_entitypermission_webroles"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_entitypermission = {
		mspp_scope: { Account: 756150002, Contact: 756150001, Global: 756150000, Parent: 756150003, Self: 756150004 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));