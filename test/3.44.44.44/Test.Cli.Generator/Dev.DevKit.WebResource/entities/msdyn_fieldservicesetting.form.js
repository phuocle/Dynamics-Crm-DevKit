﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormField_Service_Mobile_Features = function(executionContext, defaultWebResourceName) {
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
			msdyn_InternalFlags: {},
			msdyn_InternalFlags1: {},
			msdyn_InternalFlags2: {},
			msdyn_InternalFlags3: {},
			msdyn_InternalFlags4: {},
			msdyn_InternalFlags5: {},
			msdyn_InternalFlags6: {},
			WebResource_NotificationDialog_NewMobileExperienceNote: {},
			WebResource_PlainTextResource_BookingMaps: {},
			WebResource_PlainTextResource_CopilotRecapMobile: {},
			WebResource_PlainTextResource_CopilotWorkOrderUpdate: {},
			WebResource_PlainTextResource_FSMNativeForUsersInSR: {},
			WebResource_PlainTextResource_FSMNativeImmersiveHome: {},
			WebResource_PlainTextResource_FSMNativePreviewTerms: {},
			WebResource_PlainTextResource_FSMPreviewTerms: {},
			WebResource_PlainTextResource_HeaderNewMobileExperience: {},
			WebResource_PlainTextResource_NativeExperienceCopilot: {},
			WebResource_PlainTextResource_NewMobileExperience: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4C33D329_1CE8_4403_91BA_B0EB43E0614F: {
				Section: {
					_6D0AF167_2AF7_4031_BF4F_7E32B9569935: {},
					_8908E1A0_9A6C_424E_4D71_4BDD86D5B094: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_fieldservicesetting_adx_inviteredemptions: {},
			msdyn_fieldservicesetting_adx_portalcomments: {},
			msdyn_fieldservicesetting_Appointments: {},
			msdyn_fieldservicesetting_Emails: {},
			msdyn_fieldservicesetting_msdyn_bookingalerts: {},
			msdyn_fieldservicesetting_msdyn_copilottranscripts: {},
			msdyn_fieldservicesetting_msdyn_ocliveworkitems: {},
			msdyn_fieldservicesetting_msdyn_ocoutboundmessages: {},
			msdyn_fieldservicesetting_msdyn_ocsessions: {},
			msdyn_fieldservicesetting_msdyn_ocvoicemails: {},
			msdyn_fieldservicesetting_msfp_alerts: {},
			msdyn_fieldservicesetting_msfp_surveyinvites: {},
			msdyn_fieldservicesetting_msfp_surveyresponses: {},
			msdyn_fieldservicesetting_PhoneCalls: {},
			msdyn_fieldservicesetting_ServiceAppointments: {},
			msdyn_fieldservicesetting_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_fieldservicesetting_Information = function(executionContext, defaultWebResourceName) {
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
			IncidentTypeSuggestionResultGrid: {},
			msdyn_AdvancedSettings: {},
			msdyn_AgreementPrefix: {},
			msdyn_AgreementRecordGeneration: {},
			msdyn_AgreementRecordGeneration1: {},
			msdyn_AgreementStartingNumber: {},
			msdyn_AnalyticsIngestDataInXDays: {},
			msdyn_AutoAllocateEstimatedProducts: {},
			msdyn_AutoGenerateWOforAgreementBookings: {},
			msdyn_AutoGeoCodeAddresses: {},
			msdyn_AutoNumberingOptIn: {},
			msdyn_BreakPayType: {},
			msdyn_BusinessClosurePayType: {},
			msdyn_CalculateCost: {},
			msdyn_CalculatePrice: {},
			msdyn_CalculateTax: {},
			msdyn_datepopulationtype: {},
			msdyn_DefaultCrewStrategy: {},
			msdyn_DefaultWarehouse: {},
			msdyn_DefaultWorkOrderCompletedStatus: {},
			msdyn_disablecustomerassetvalidation: {},
			msdyn_DisableRemoteAssistBookingStatusChanges: {},
			msdyn_EnableAddressSuggestions: {},
			msdyn_EnableIncidentTypeRecommendation: {},
			msdyn_EnableLegacyScheduleAssistant: {},
			msdyn_EnableMainFormDialogForSubgrids: {},
			msdyn_EnableSuggestedDuration: {},
			msdyn_EnhancedBackgroundProcessing: {},
			msdyn_EntityNumberLength: {},
			msdyn_GenerateActuals: {},
			msdyn_GenerateAgreementInvoicesXDaysInAdvance: {},
			msdyn_GenerateAgreementWOXDaysInAdvance: {},
			msdyn_GenerateBookingDatesXMonthsInAdvance: {},
			msdyn_GenerateInvoiceDatesXMonthsInAdvance: {},
			msdyn_HistoricalDataFilter: {},
			msdyn_InspectionAnalyticsEnabled: {},
			msdyn_InspectionAnalyticsFrequency: {},
			msdyn_InspectionAnalyticsRecommendedTime: {},
			msdyn_InternalFlags: {},
			msdyn_InternalFlags1: {},
			msdyn_InternalFlags2: {},
			msdyn_InternalFlags3: {},
			msdyn_InternalFlags4: {},
			msdyn_InternalFlags5: {},
			msdyn_InternalFlags6: {},
			msdyn_InternalFlags7: {},
			msdyn_InternalFlags8: {},
			msdyn_InternalFlags9: {},
			msdyn_InternalFlags10: {},
			msdyn_InternalFlags11: {},
			msdyn_InternalFlags12: {},
			msdyn_InternalFlags13: {},
			msdyn_InventoryAdjustmentPrefix: {},
			msdyn_InventoryAdjustmentStartingNumber: {},
			msdyn_InventoryTransferPrefix: {},
			msdyn_InventoryTransferStartingNumber: {},
			msdyn_LastRunOfIncidentTypeRecommendation: {},
			msdyn_name: {},
			msdyn_OvertimePayType: {},
			msdyn_ProductCostOrder: {},
			msdyn_PurchaseOrderApprovalRequired: {},
			msdyn_PurchaseOrderPrefix: {},
			msdyn_PurchaseOrderStartingNumber: {},
			msdyn_ReturnTopXRecommendations: {},
			msdyn_RMAPrefix: {},
			msdyn_RMAStartingNumber: {},
			msdyn_RTVPrefix: {},
			msdyn_RTVStartingNumber: {},
			msdyn_RunFrequencyOfIncidentTypeRecommendation: {},
			msdyn_ShowSimplifiedWorkOrderCommands: {},
			msdyn_suggestreparentingcustomerassets: {},
			msdyn_TimeCostActualsSource: {},
			msdyn_TimeEntryGenerationStrategy: {},
			msdyn_TimestampFrequency: {},
			msdyn_TravelChargeItemId: {},
			msdyn_TravelPayType: {},
			msdyn_UseofProductsOutofStock: {},
			msdyn_WorkOrderInvoiceCreation: {},
			msdyn_WorkOrderPrefix: {},
			msdyn_WorkOrderStartingNumber: {},
			msdyn_WorkPayType: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_AgreementRecordGeneration_TimeField: {},
			WebResource_NotificationDialogTemplate_1: {},
			WebResource_PlainTextCopilotSectionDescription: {},
			WebResource_PlainTextCopilotWorkOrdersOutlookDescription: {},
			WebResource_PlainTextEnhancedCharacteristicDescription: {},
			WebResource_PlainTextOutlookCopilotToggleDescription: {},
			WebResource_PlainTextPlannerSyncDescription: {},
			WebResource_PlainTextResourcePreview: {},
			WebResource_PlainTextWorkOrderCopilotToggleDescription: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4CC8A00D_6D79_4310_A61A_6B5A0597CAF4: {
				Section: {
					_C420A5EF_CA73_43EA_A432_4F9ECE791087: {}
				}
			},
			RemoteAssist: {
				Section: {
					tab_13_section_1_2: {},
					tab_13_section_3: {}
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
			tab_12: {
				Section: {
					tab_12_section_1: {},
					tab_12_section_2: {},
					tab_12_section_3: {}
				}
			},
			tab_13: {
				Section: {
					tab_13_section_1: {}
				}
			},
			tab_14: {
				Section: {
					tab_14_section_1: {}
				}
			},
			tab_15: {
				Section: {
					tab_15_section_1: {},
					tab_15_section_2: {},
					tab_15_section_3: {},
					tab_15_section_4: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_2: {}
				}
			},
			tab_6: {
				Section: {
					Crew_Management: {},
					Mobile: {},
					tab_3_section_1: {},
					tab_6_section_2: {}
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
			TimeEntry: {
				Section: {
					TimeEntry: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			fieldserviceslaconfigurationgrid: {},
			IncidentTypeSuggestionResultGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_fieldservicesetting_adx_inviteredemptions: {},
			msdyn_fieldservicesetting_adx_portalcomments: {},
			msdyn_fieldservicesetting_Appointments: {},
			msdyn_fieldservicesetting_Emails: {},
			msdyn_fieldservicesetting_msdyn_bookingalerts: {},
			msdyn_fieldservicesetting_msdyn_copilottranscripts: {},
			msdyn_fieldservicesetting_msdyn_ocliveworkitems: {},
			msdyn_fieldservicesetting_msdyn_ocoutboundmessages: {},
			msdyn_fieldservicesetting_msdyn_ocsessions: {},
			msdyn_fieldservicesetting_msdyn_ocvoicemails: {},
			msdyn_fieldservicesetting_msfp_alerts: {},
			msdyn_fieldservicesetting_msfp_surveyinvites: {},
			msdyn_fieldservicesetting_msfp_surveyresponses: {},
			msdyn_fieldservicesetting_PhoneCalls: {},
			msdyn_fieldservicesetting_ServiceAppointments: {},
			msdyn_fieldservicesetting_Tasks: {}
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
	OptionSet.msdyn_fieldservicesetting = {
		msdyn_DefaultCrewStrategy : {
			Cascade_and_Accept_Cascade_Completely_Not_Recommended: 192350000,
			Crew_Leader_Management: 192350001,
			Crew_Member_Self_Management: 192350002
		},
		msdyn_DefaultWorkOrderCompletedStatus : {
			Canceled: 690970005,
			Completed: 690970003,
			In_Progress: 690970002,
			Posted: 690970004,
			Scheduled: 690970001,
			Unscheduled: 690970000
		},
		msdyn_HistoricalDataFilter : {
			All: 100000003,
			Last_12_Months: 100000002,
			Last_3_Months: 100000000,
			Last_6_Months: 100000001
		},
		msdyn_InspectionAnalyticsFrequency : {
			Custom: 100000002,
			Daily: 100000000,
			Immediately: 100000001
		},
		msdyn_ProductCostOrder : {
			CurrentStandard: 690970001,
			StandardCurrent: 690970000
		},
		msdyn_RunFrequencyOfIncidentTypeRecommendation : {
			Once_a_Week: 192350000
		},
		msdyn_TimeCostActualsSource : {
			Booking_Journals_on_Post_of_Work_Order: 192354000,
			Work_Order_Time_Entry_Approval: 192354001
		},
		msdyn_TimeEntryGenerationStrategy : {
			Auto_Generate_from_Booking_Timestamps: 192355201,
			Manual: 192355200
		},
		msdyn_TimestampFrequency : {
			Per_Booking_Status_Change: 192350000,
			Per_Field_Service_Status_Change: 192350001
		},
		msdyn_UndefinedBookingLocation : {
			Ignore_Location: 690970001,
			Previous_Known_Location: 690970000
		},
		msdyn_UseofProductsOutofStock : {
			Confirm: 690970000,
			Restrict: 690970001
		},
		msdyn_WorkOrderInvoiceCreation : {
			Never: 690970000,
			On_Work_Order_Posted: 690970001
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