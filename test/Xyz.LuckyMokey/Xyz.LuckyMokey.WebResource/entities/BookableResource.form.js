'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormBookable_Resource_Mobile = function(executionContext, defaultWebResourceName) {
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
			AccountId: {},
			BookableResourceCharacteristics: {},
			CATEGORYASSOCIATIONS: {},
			ContactId: {},
			msdyn_BookingsToDrip: {},
			msdyn_DisplayOnScheduleAssistant: {},
			msdyn_DisplayOnScheduleBoard: {},
			msdyn_EnableDripScheduling: {},
			msdyn_EndLocation: {},
			msdyn_GenericType: {},
			msdyn_HourlyRate: {},
			msdyn_StartLocation: {},
			msdyn_TimeOffApprovalRequired: {},
			msdyn_Warehouse: {},
			Name: {},
			notescontrol: {},
			ResourceCategory: {},
			ResourceCharacteristics: {},
			ResourceType: {},
			TimeZone: {},
			UserId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
				}
			},
			fstab_field_service: {
				Section: {
					fstab_field_service_section_field_service: {},
					fstab_field_service_section_scheduling: {},
					fstab_field_service_section_misc: {},
					fstab_field_service_section_4: {},
					fstab_field_service_section_5: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
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
		var navigation = {
			navBookings: {},
			navCharacteristics: {},
			navResourceCategories: {},
			navAudit: {},
			nav_msdyn_bookableresource_msdyn_resourceterritory_Resource: {},
			navChildGroups: {},
			navParentGroups: {},
			nav_msdyn_bookableresource_msdyn_timeoffrequest_Resource: {},
			nav_msdyn_bookableresource_account_PreferredResource: {},
			nav_msdyn_bookableresource_bookableresourcebooking_ResourceGroup: {},
			nav_msdyn_bookableresource_msdyn_agreementbookingdate_Resource: {},
			nav_msdyn_bookableresource_msdyn_agreementbookingsetup_PreferredResource: {},
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_AdjustedByResource: {},
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_RequestedByResource: {},
			nav_msdyn_bookableresource_msdyn_inventorytransfer_TransferredByResource: {},
			nav_msdyn_bookableresource_msdyn_purchaseorder_RequestedByResource: {},
			nav_msdyn_bookableresource_msdyn_workorder_PreferredResource: {},
			nav_msdyn_bookableresource_msdyn_workorderresourcerestriction_Resource: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormBookableResource_Information = function(executionContext, defaultWebResourceName) {
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
			AccountId: {},
			BookableResourceCharacteristics: {},
			CATEGORYASSOCIATIONS: {},
			ContactId: {},
			msdyn_BookingsToDrip: {},
			msdyn_CrewStrategy: {},
			msdyn_DeriveCapacity: {},
			msdyn_DisplayOnScheduleAssistant: {},
			msdyn_DisplayOnScheduleBoard: {},
			msdyn_EnabledForFieldServiceMobile: {},
			msdyn_EnableDripScheduling: {},
			msdyn_EndLocation: {},
			msdyn_facilityequipmentid: {},
			msdyn_GenericType: {},
			msdyn_HourlyRate: {},
			msdyn_organizationalunit: {},
			msdyn_PoolType: {},
			msdyn_StartLocation: {},
			msdyn_targetutilization: {},
			msdyn_TimeOffApprovalRequired: {},
			msdyn_Warehouse: {},
			Name: {},
			notescontrol: {},
			ResourceCategory: {},
			ResourceCharacteristics: {},
			ResourceRole: {},
			Resourceskills: {},
			ResourceType: {},
			TimeZone: {},
			UserId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_E37F4524_4A66_42DC_974C_078756AEF3FB: {
				Section: {
					tab_4_section_1: {},
					_9E7DEC57_2C62_4D5D_8B21_75D076C5D1A1: {},
					_E37F4524_4A66_42DC_974C_078756AEF3FB_SECTION_6: {}
				}
			},
			tab_projectservice: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			},
			FieldService: {
				Section: {
					fstab_service_settings_section_5: {},
					fstab_service_settings_section_7: {},
					FieldService_section_4: {},
					FieldService_section_5: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			},
			Omnichannel: {
				Section: {
					tab_2_section_1: {}
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
		var navigation = {
			navParentGroups: {},
			navChildGroups: {},
			navAudit: {},
			navResourceOneAssociation: {},
			navResourceTwoAssociation: {},
			navBookings: {},
			navCharacteristics: {},
			navResourceCategories: {},
			nav_msdyn_bookableresource_bookableresourcebooking_ResourceGroup: {},
			nav_msdyn_bookableresource_msdyn_resourceterritory_Resource: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			nav_msdyn_bookableresource_msdyn_quotelinetransaction_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_delegation_delegationfrom: {},
			nav_msdyn_bookableresource_msdyn_delegation_delegationto: {},
			nav_msdyn_bookableresource_msdyn_estimateline_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_fact_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_findworkevent_BookableResource: {},
			nav_msdyn_bookableresource_msdyn_invoicelinetransaction_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_journalline_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_opportunitylinetransaction_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_orderlinetransaction_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_projectapproval_bookableresource: {},
			nav_msdyn_bookableresource_msdyn_projecttaskstatususer_BookableResource: {},
			nav_msdyn_bookableresource_msdyn_projectteam_bookableresourceid: {},
			nav_msdyn_bookableresource_msdyn_projectteammembersignup_BookableResource: {},
			nav_msdyn_bookableresource_msdyn_resourceassignment_bookableresourceid: {},
			nav_msdyn_bookableresource_msdyn_userworkhistory_Bookableresource: {},
			nav_msdyn_bookableresource_msdyn_timeoffrequest_Resource: {},
			nav_msdyn_bookableresource_msdyn_quotebookingsetup_PreferredResource: {},
			nav_msdyn_bookableresource_account_PreferredResource: {},
			nav_msdyn_bookableresource_msdyn_agreementbookingdate_Resource: {},
			nav_msdyn_bookableresource_msdyn_agreementbookingsetup_PreferredResource: {},
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_AdjustedByResource: {},
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_RequestedByResource: {},
			nav_msdyn_bookableresource_msdyn_inventorytransfer_TransferredByResource: {},
			nav_msdyn_bookableresource_msdyn_purchaseorder_RequestedByResource: {},
			nav_msdyn_bookableresource_msdyn_workorder_PreferredResource: {},
			nav_msdyn_bookableresource_msdyn_workorderresourcerestriction_Resource: {}
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
	OptionSet.BookableResource = {
		msdyn_CrewStrategy : {
			Cascade_and_Accept_Cascade_Completely: 192350000,
			Crew_Leader_Management: 192350001,
			Crew_Member_Self_Management: 192350002
		},
		msdyn_EndLocation : {
			Location_Agnostic: 690970002,
			Resource_Address: 690970000,
			Organizational_Unit_Address: 690970001
		},
		msdyn_GenericType : {
			Service_Center: 690970000
		},
		msdyn_PoolType : {
			Account: 192350000,
			Contact: 192350001,
			User: 192350002,
			Equipment: 192350003,
			Facility: 192350004
		},
		msdyn_StartLocation : {
			Location_Agnostic: 690970002,
			Resource_Address: 690970000,
			Organizational_Unit_Address: 690970001
		},
		ResourceType : {
			Generic: 1,
			Contact: 2,
			User: 3,
			Equipment: 4,
			Account: 5,
			Crew: 6,
			Facility: 7,
			Pool: 8
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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