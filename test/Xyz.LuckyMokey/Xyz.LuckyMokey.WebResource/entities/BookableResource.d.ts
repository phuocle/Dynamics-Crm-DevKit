//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookable_Resource_Mobile {
		interface tab_fstab_general_Sections {
		}
		interface tab_fstab_field_service_Sections {
			fstab_field_service_section_field_service: DevKit.Form.Controls.ControlSection;
			fstab_field_service_section_scheduling: DevKit.Form.Controls.ControlSection;
			fstab_field_service_section_misc: DevKit.Form.Controls.ControlSection;
			fstab_field_service_section_4: DevKit.Form.Controls.ControlSection;
			fstab_field_service_section_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_field_service extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_field_service_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_field_service: tab_fstab_field_service;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			ResourceCategory: DevKit.Form.Controls.ControlGrid;
			ResourceCharacteristics: DevKit.Form.Controls.ControlGrid;
			BookableResourceCharacteristics: DevKit.Form.Controls.ControlGrid;
			CATEGORYASSOCIATIONS: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Select the account that represents this resource. */
			AccountId: DevKit.Form.Controls.ControlLookup;
			/** Select the contact that represents this resource. */
			ContactId: DevKit.Form.Controls.ControlLookup;
			/** The number of bookings to drip on the Mobile . This field is disabled/enabled based on Enable Drip Scheduling field */
			msdyn_BookingsToDrip: DevKit.Form.Controls.ControlInteger;
			/** Specify if this resource should be enabled for availablity search. */
			msdyn_DisplayOnScheduleAssistant: DevKit.Form.Controls.ControlBoolean;
			/** Specify if this resource should be displayed on the schedule board. */
			msdyn_DisplayOnScheduleBoard: DevKit.Form.Controls.ControlBoolean;
			/** Enables drip scheduling on the mobile app. */
			msdyn_EnableDripScheduling: DevKit.Form.Controls.ControlBoolean;
			/** Shows the default ending location type when booking daily schedules for this resource. */
			msdyn_EndLocation: DevKit.Form.Controls.ControlOptionSet;
			msdyn_GenericType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_HourlyRate: DevKit.Form.Controls.ControlMoney;
			/** Shows the default starting location type when booking daily schedules for this resource. */
			msdyn_StartLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Specifies if approval required for Time Off Requests. */
			msdyn_TimeOffApprovalRequired: DevKit.Form.Controls.ControlBoolean;
			/** Default Warehouse for this resource. */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the resource. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
			ResourceType: DevKit.Form.Controls.ControlOptionSet;
			/** Specifies the timezone for the resource's working hours. */
			TimeZone: DevKit.Form.Controls.ControlInteger;
			/** Select the user who represents this resource. */
			UserId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navBookings: DevKit.Form.Controls.ControlNavigationItem,
			navCharacteristics: DevKit.Form.Controls.ControlNavigationItem,
			navResourceCategories: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_resourceterritory_Resource: DevKit.Form.Controls.ControlNavigationItem,
			navChildGroups: DevKit.Form.Controls.ControlNavigationItem,
			navParentGroups: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_timeoffrequest_Resource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_account_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_bookableresourcebooking_ResourceGroup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingdate_Resource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingsetup_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_AdjustedByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_RequestedByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_inventorytransfer_TransferredByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_purchaseorder_RequestedByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_workorder_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_workorderresourcerestriction_Resource: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBookable_Resource_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Bookable_Resource_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Bookable_Resource_Mobile */
		Body: LuckyMokey.FormBookable_Resource_Mobile.Body;
		/** The Navigation of form Bookable_Resource_Mobile */
		Navigation: LuckyMokey.FormBookable_Resource_Mobile.Navigation;
	}
	namespace FormBookableResource_Information {
		interface tab__E37F4524_4A66_42DC_974C_078756AEF3FB_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			_9E7DEC57_2C62_4D5D_8B21_75D076C5D1A1: DevKit.Form.Controls.ControlSection;
			_E37F4524_4A66_42DC_974C_078756AEF3FB_SECTION_6: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_projectservice_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			fstab_service_settings_section_5: DevKit.Form.Controls.ControlSection;
			fstab_service_settings_section_7: DevKit.Form.Controls.ControlSection;
			FieldService_section_4: DevKit.Form.Controls.ControlSection;
			FieldService_section_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Omnichannel_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__E37F4524_4A66_42DC_974C_078756AEF3FB extends DevKit.Form.Controls.IControlTab {
			Section: tab__E37F4524_4A66_42DC_974C_078756AEF3FB_Sections;
		}
		interface tab_tab_projectservice extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_projectservice_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface tab_Omnichannel extends DevKit.Form.Controls.IControlTab {
			Section: tab_Omnichannel_Sections;
		}
		interface Tabs {
			_E37F4524_4A66_42DC_974C_078756AEF3FB: tab__E37F4524_4A66_42DC_974C_078756AEF3FB;
			tab_projectservice: tab_tab_projectservice;
			FieldService: tab_FieldService;
			tab_2: tab_tab_2;
			Omnichannel: tab_Omnichannel;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ResourceCharacteristics: DevKit.Form.Controls.ControlGrid;
			ResourceCategory: DevKit.Form.Controls.ControlGrid;
			Resourceskills: DevKit.Form.Controls.ControlGrid;
			ResourceRole: DevKit.Form.Controls.ControlGrid;
			BookableResourceCharacteristics: DevKit.Form.Controls.ControlGrid;
			CATEGORYASSOCIATIONS: DevKit.Form.Controls.ControlGrid;
			/** Select the account that represents this resource. */
			AccountId: DevKit.Form.Controls.ControlLookup;
			/** Select the contact that represents this resource. */
			ContactId: DevKit.Form.Controls.ControlLookup;
			/** The number of bookings to drip on the Mobile . This field is disabled/enabled based on Enable Drip Scheduling field */
			msdyn_BookingsToDrip: DevKit.Form.Controls.ControlInteger;
			/** Crew Strategy */
			msdyn_CrewStrategy: DevKit.Form.Controls.ControlOptionSet;
			msdyn_DeriveCapacity: DevKit.Form.Controls.ControlBoolean;
			/** Specify if this resource should be enabled for availablity search. */
			msdyn_DisplayOnScheduleAssistant: DevKit.Form.Controls.ControlBoolean;
			/** Specify if this resource should be displayed on the schedule board. */
			msdyn_DisplayOnScheduleBoard: DevKit.Form.Controls.ControlBoolean;
			/** Set this field to Yes if this resource requires access to the Field Service Mobile application. */
			msdyn_EnabledForFieldServiceMobile: DevKit.Form.Controls.ControlBoolean;
			/** Enables drip scheduling on the mobile app. */
			msdyn_EnableDripScheduling: DevKit.Form.Controls.ControlBoolean;
			/** Shows the default ending location type when booking daily schedules for this resource. */
			msdyn_EndLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Facility Equipment */
			msdyn_facilityequipmentid: DevKit.Form.Controls.ControlLookup;
			msdyn_GenericType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_HourlyRate: DevKit.Form.Controls.ControlMoney;
			/** Organizational Unit that resource belong to */
			msdyn_organizationalunit: DevKit.Form.Controls.ControlLookup;
			/** Select whether the pool is an account, contact, user, equipment or a facility of resources. */
			msdyn_PoolType: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Shows the default starting location type when booking daily schedules for this resource. */
			msdyn_StartLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the target utilization for the resource. */
			msdyn_targetutilization: DevKit.Form.Controls.ControlInteger;
			/** Specifies if approval required for Time Off Requests. */
			msdyn_TimeOffApprovalRequired: DevKit.Form.Controls.ControlBoolean;
			/** Default Warehouse for this resource. */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the resource. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
			ResourceType: DevKit.Form.Controls.ControlOptionSet;
			/** Specifies the timezone for the resource's working hours. */
			TimeZone: DevKit.Form.Controls.ControlInteger;
			/** Select the user who represents this resource. */
			UserId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navParentGroups: DevKit.Form.Controls.ControlNavigationItem,
			navChildGroups: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navResourceOneAssociation: DevKit.Form.Controls.ControlNavigationItem,
			navResourceTwoAssociation: DevKit.Form.Controls.ControlNavigationItem,
			navBookings: DevKit.Form.Controls.ControlNavigationItem,
			navCharacteristics: DevKit.Form.Controls.ControlNavigationItem,
			navResourceCategories: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_bookableresourcebooking_ResourceGroup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_resourceterritory_Resource: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_quotelinetransaction_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_delegation_delegationfrom: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_delegation_delegationto: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_estimateline_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_fact_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_findworkevent_BookableResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_invoicelinetransaction_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_journalline_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_opportunitylinetransaction_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_orderlinetransaction_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_projectapproval_bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_projecttaskstatususer_BookableResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_projectteam_bookableresourceid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_projectteammembersignup_BookableResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_resourceassignment_bookableresourceid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_userworkhistory_Bookableresource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_timeoffrequest_Resource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_quotebookingsetup_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_account_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingdate_Resource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingsetup_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_AdjustedByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_RequestedByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_inventorytransfer_TransferredByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_purchaseorder_RequestedByResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_workorder_PreferredResource: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresource_msdyn_workorderresourcerestriction_Resource: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBookableResource_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResource_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResource_Information */
		Body: LuckyMokey.FormBookableResource_Information.Body;
		/** The Navigation of form BookableResource_Information */
		Navigation: LuckyMokey.FormBookableResource_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace BookableResource {
		enum msdyn_CrewStrategy {
			/** 192350000 */
			Cascade_and_Accept_Cascade_Completely,
			/** 192350001 */
			Crew_Leader_Management,
			/** 192350002 */
			Crew_Member_Self_Management
		}
		enum msdyn_EndLocation {
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Resource_Address,
			/** 690970001 */
			Organizational_Unit_Address
		}
		enum msdyn_GenericType {
			/** 690970000 */
			Service_Center
		}
		enum msdyn_PoolType {
			/** 192350000 */
			Account,
			/** 192350001 */
			Contact,
			/** 192350002 */
			User,
			/** 192350003 */
			Equipment,
			/** 192350004 */
			Facility
		}
		enum msdyn_StartLocation {
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Resource_Address,
			/** 690970001 */
			Organizational_Unit_Address
		}
		enum ResourceType {
			/** 1 */
			Generic,
			/** 2 */
			Contact,
			/** 3 */
			User,
			/** 4 */
			Equipment,
			/** 5 */
			Account,
			/** 6 */
			Crew,
			/** 7 */
			Facility,
			/** 8 */
			Pool
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Bookable Resource - Mobile','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}