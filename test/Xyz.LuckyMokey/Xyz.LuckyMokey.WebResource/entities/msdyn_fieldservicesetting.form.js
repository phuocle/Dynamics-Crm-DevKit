'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_fieldservicesetting_Information = function(executionContext, defaultWebResourceName) {
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
			fieldserviceslaconfigurationgrid: {},
			msdyn_AdvancedSettings: {},
			msdyn_AgreementPrefix: {},
			msdyn_AgreementRecordGeneration: {},
			msdyn_AgreementRecordGeneration_1: {},
			msdyn_AgreementStartingNumber: {},
			msdyn_AutoAllocateEstimatedProducts: {},
			msdyn_AutoGenerateWOforAgreementBookings: {},
			msdyn_AutoGeoCodeAddresses: {},
			msdyn_AutoNumberingOptIn: {},
			msdyn_BreakPayType: {},
			msdyn_BusinessClosurePayType: {},
			msdyn_DefaultCrewStrategy: {},
			msdyn_DefaultWarehouse: {},
			msdyn_DefaultWorkOrderCompletedStatus: {},
			msdyn_DisableRemoteAssistBookingStatusChanges: {},
			msdyn_EnableAddressSuggestions: {},
			msdyn_EnableLegacyScheduleAssistant: {},
			msdyn_EnableSuggestedDuration: {},
			msdyn_EntityNumberLength: {},
			msdyn_GenerateAgreementInvoicesXDaysInAdvance: {},
			msdyn_GenerateAgreementWOXDaysInAdvance: {},
			msdyn_GenerateBookingDatesXMonthsInAdvance: {},
			msdyn_GenerateInvoiceDatesXMonthsInAdvance: {},
			msdyn_HistoricalDataFilter: {},
			msdyn_InventoryAdjustmentPrefix: {},
			msdyn_InventoryAdjustmentStartingNumber: {},
			msdyn_InventoryTransferPrefix: {},
			msdyn_InventoryTransferStartingNumber: {},
			msdyn_name: {},
			msdyn_OvertimePayType: {},
			msdyn_ProductCostOrder: {},
			msdyn_PurchaseOrderApprovalRequired: {},
			msdyn_PurchaseOrderPrefix: {},
			msdyn_PurchaseOrderStartingNumber: {},
			msdyn_RMAPrefix: {},
			msdyn_RMAStartingNumber: {},
			msdyn_RTVPrefix: {},
			msdyn_RTVStartingNumber: {},
			msdyn_TravelChargeItemId: {},
			msdyn_TravelPayType: {},
			msdyn_UseofProductsOutofStock: {},
			msdyn_WorkOrderInvoiceCreation: {},
			msdyn_WorkOrderPrefix: {},
			msdyn_WorkOrderStartingNumber: {},
			msdyn_WorkPayType: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_AgreementRecordGeneration_TimeField: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4CC8A00D_6D79_4310_A61A_6B5A0597CAF4: {
				Section: {
					_C420A5EF_CA73_43EA_A432_4F9ECE791087: {}
				}
			},
			tab_6: {
				Section: {
					tab_6_section_2: {},
					tab_3_section_1: {},
					Crew_Management: {}
				}
			},
			tab_10: {
				Section: {
					tab_10_section_2: {}
				}
			},
			tab_11: {
				Section: {
					tab_11_section_1: {}
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
			},
			tab_9: {
				Section: {
					tab_9_section_1: {}
				}
			},
			tab_12: {
				Section: {
					tab_12_section_1: {}
				}
			},
			tab_13: {
				Section: {
					tab_13_section_1: {}
				}
			},
			RemoteAssist: {
				Section: {
					tab_13_section_1_2: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_2: {}
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
		var navigation = {
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_fieldservicesetting = {
		msdyn_DefaultCrewStrategy : {
			Cascade_and_Accept_Cascade_Completely: 192350000,
			Crew_Leader_Management: 192350001,
			Crew_Member_Self_Management: 192350002
		},
		msdyn_DefaultWorkOrderCompletedStatus : {
			Open_Unscheduled: 690970000,
			Open_Scheduled: 690970001,
			Open_In_Progress: 690970002,
			Open_Completed: 690970003,
			Closed_Posted: 690970004,
			Closed_Canceled: 690970005
		},
		msdyn_HistoricalDataFilter : {
			Last_3_Months: 100000000,
			Last_6_Months: 100000001,
			Last_12_Months: 100000002,
			All: 100000003
		},
		msdyn_ProductCostOrder : {
			StandardCurrent: 690970000,
			CurrentStandard: 690970001
		},
		msdyn_UndefinedBookingLocation : {
			Previous_Known_Location: 690970000,
			Ignore_Location: 690970001
		},
		msdyn_UseofProductsOutofStock : {
			Confirm: 690970000,
			Restrict: 690970001
		},
		msdyn_WorkOrderInvoiceCreation : {
			On_Work_Order_Posted: 690970001,
			Never: 690970000
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