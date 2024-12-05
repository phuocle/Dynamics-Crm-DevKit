'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAgreement_Booking_Service_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementBookingIncident: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Duration: {},
			msdyn_DurationToBill: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Service: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_other: {
				Section: {
					tab_3_section_1: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids: {},
					fstab_sub_grids_section_2: {},
					fstab_sub_grids_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementbookingservice_adx_inviteredemptions: {},
			msdyn_agreementbookingservice_adx_portalcomments: {},
			msdyn_agreementbookingservice_Appointments: {},
			msdyn_agreementbookingservice_Emails: {},
			msdyn_agreementbookingservice_msdyn_bookingalerts: {},
			msdyn_agreementbookingservice_msdyn_copilottranscripts: {},
			msdyn_agreementbookingservice_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingservice_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingservice_msdyn_ocsessions: {},
			msdyn_agreementbookingservice_msdyn_ocvoicemails: {},
			msdyn_agreementbookingservice_msfp_alerts: {},
			msdyn_agreementbookingservice_msfp_surveyinvites: {},
			msdyn_agreementbookingservice_msfp_surveyresponses: {},
			msdyn_agreementbookingservice_PhoneCalls: {},
			msdyn_agreementbookingservice_ServiceAppointments: {},
			msdyn_agreementbookingservice_Tasks: {},
			msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_agreementbookingservice_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementBookingIncident: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Duration: {},
			msdyn_DurationToBill: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Service: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementbookingservice_adx_inviteredemptions: {},
			msdyn_agreementbookingservice_adx_portalcomments: {},
			msdyn_agreementbookingservice_Appointments: {},
			msdyn_agreementbookingservice_Emails: {},
			msdyn_agreementbookingservice_msdyn_bookingalerts: {},
			msdyn_agreementbookingservice_msdyn_copilottranscripts: {},
			msdyn_agreementbookingservice_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingservice_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingservice_msdyn_ocsessions: {},
			msdyn_agreementbookingservice_msdyn_ocvoicemails: {},
			msdyn_agreementbookingservice_msfp_alerts: {},
			msdyn_agreementbookingservice_msfp_surveyinvites: {},
			msdyn_agreementbookingservice_msfp_surveyresponses: {},
			msdyn_agreementbookingservice_PhoneCalls: {},
			msdyn_agreementbookingservice_ServiceAppointments: {},
			msdyn_agreementbookingservice_Tasks: {},
			msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService: {}
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
	OptionSet.msdyn_agreementbookingservice = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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