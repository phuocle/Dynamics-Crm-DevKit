﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSite_Information = function(executionContext, defaultWebResourceName) {
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
			Address1_City: {},
			Address1_Country: {},
			Address1_Fax: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_Line3: {},
			Address1_PostalCode: {},
			Address1_StateOrProvince: {},
			Address1_Telephone1: {},
			Address1_Telephone2: {},
			EMailAddress: {},
			Name: {},
			TimeZoneCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			address: {
				Section: {
					primary_address: {},
					time_zone: {}
				}
			},
			General: {
				Section: {
					section1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			site_adx_inviteredemptions: {},
			site_adx_portalcomments: {},
			site_Appointments: {},
			site_Emails: {},
			site_equipment: {},
			site_internal_addresses: {},
			site_msdyn_bookingalerts: {},
			site_msdyn_copilottranscripts: {},
			site_msdyn_ocliveworkitems: {},
			site_msdyn_ocoutboundmessages: {},
			site_msdyn_ocsessions: {},
			site_msdyn_ocvoicemails: {},
			site_msfp_alerts: {},
			site_msfp_surveyinvites: {},
			site_msfp_surveyresponses: {},
			site_OpportunityCloses: {},
			site_OrderCloses: {},
			site_PhoneCalls: {},
			site_QuoteCloses: {},
			site_resources: {},
			site_service_appointments: {},
			site_ServiceAppointments: {},
			site_system_users: {},
			site_Tasks: {}
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
	OptionSet.Site = {
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
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