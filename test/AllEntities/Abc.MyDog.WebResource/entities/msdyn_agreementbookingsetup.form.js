'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormAgreement_Booking_Setup = function(executionContext, defaultWebResourceName) {
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
			AgreementBookingProductsGrid: {},
			AgreementBookingServicesGrid: {},
			AgreementBookingServiceTasksGrid: {},
			incidentsgrid: {},
			msdyn_Agreement: {},
			msdyn_AutoGenerateBooking: {},
			msdyn_AutoGenerateWO: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_GenerateWODaysInAdvance: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			msdyn_PostBookingFlexibility: {},
			msdyn_PreBookingFlexibility: {},
			msdyn_PreferredResource: {},
			msdyn_PreferredStartTime: {},
			msdyn_Priority: {},
			msdyn_RecurrenceSettings: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_WorkLocation: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			OwnerId: {},
			schecduledategrid: {},
			WebResource_PreferredStartTime_TimeField: {},
			WebResource_TimeWindowEnd_TimeField: {},
			WebResource_TimeWindowStart_TimeField: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D: {
				Section: {
					_E2317057_FAF8_42F6_A483_57D828596C17: {},
					tab_4_section_1: {},
					_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_5: {},
					_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_6: {},
					tab_3_section_1: {},
					_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_3: {}
				}
			},
			tab_6: {
				Section: {
					tab_6_section_1: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			incidentsgrid: {},
			schecduledategrid: {},
			AgreementBookingProductsGrid: {},
			AgreementBookingServicesGrid: {},
			AgreementBookingServiceTasksGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormAgreement_Booking_Setup_Mobile = function(executionContext, defaultWebResourceName) {
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
			AgreementBookingProductsGrid: {},
			AgreementBookingServicesGrid: {},
			AgreementBookingServiceTasksGrid: {},
			incidentsgrid: {},
			msdyn_Agreement: {},
			msdyn_AutoGenerateBooking: {},
			msdyn_AutoGenerateWO: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_GenerateWODaysInAdvance: {},
			msdyn_name: {},
			msdyn_PostBookingFlexibility: {},
			msdyn_PreBookingFlexibility: {},
			msdyn_PreferredResource: {},
			msdyn_PreferredStartTime: {},
			msdyn_Priority: {},
			msdyn_RecurrenceSettings: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			OwnerId: {},
			schecduledategrid: {},
			WebResource_PreferredStartTime_TimeField: {},
			WebResource_TimeWindowEnd_TimeField: {},
			WebResource_TimeWindowStart_TimeField: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_summary: {},
					fstab_general_section_work_order_settings: {},
					fstab_general_section_booking_settings: {},
					fstab_general_section_preferences: {},
					fstab_general_column_2_section_1: {},
					fstab_general_column_3_section_1: {}
				}
			},
			fstab_other: {
				Section: {
					tab_4_section_2: {},
					tab_4_section_3: {},
					tab_4_section_4: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					tab_9_section_1: {},
					tab_9_section_2: {},
					tab_9_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			incidentsgrid: {},
			AgreementBookingProductsGrid: {},
			AgreementBookingServicesGrid: {},
			AgreementBookingServiceTasksGrid: {},
			schecduledategrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: {},
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_agreementbookingsetup = {
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
		},
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