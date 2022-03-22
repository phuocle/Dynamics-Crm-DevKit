﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBookable_Resource_Mobile {
		interface tab_fstab_field_service_Sections {
			fstab_field_service_section_4: DevKit.Controls.Section;
			fstab_field_service_section_5: DevKit.Controls.Section;
			fstab_field_service_section_field_service: DevKit.Controls.Section;
			fstab_field_service_section_misc: DevKit.Controls.Section;
			fstab_field_service_section_scheduling: DevKit.Controls.Section;
		}
		interface tab_fstab_general_Sections {
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_field_service extends DevKit.Controls.ITab {
			Section: tab_fstab_field_service_Sections;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_field_service: tab_fstab_field_service;
			fstab_general: tab_fstab_general;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Select the account that represents this resource. */
			AccountId: DevKit.Controls.Lookup;
			/** Select the contact that represents this resource. */
			ContactId: DevKit.Controls.Lookup;
			/** The number of bookings to drip on the Mobile . This field is disabled/enabled based on Enable Drip Scheduling field */
			msdyn_BookingsToDrip: DevKit.Controls.Integer;
			/** Specify if this resource should be enabled for availablity search. */
			msdyn_DisplayOnScheduleAssistant: DevKit.Controls.Boolean;
			/** Specify if this resource should be displayed on the schedule board. */
			msdyn_DisplayOnScheduleBoard: DevKit.Controls.Boolean;
			/** Enables drip scheduling on the mobile app. */
			msdyn_EnableDripScheduling: DevKit.Controls.Boolean;
			/** Shows the default ending location type when booking daily schedules for this resource. */
			msdyn_EndLocation: DevKit.Controls.OptionSet;
			msdyn_GenericType: DevKit.Controls.OptionSet;
			msdyn_HourlyRate: DevKit.Controls.Money;
			/** Shows the default starting location type when booking daily schedules for this resource. */
			msdyn_StartLocation: DevKit.Controls.OptionSet;
			/** Specifies if approval required for Time Off Requests. */
			msdyn_TimeOffApprovalRequired: DevKit.Controls.Boolean;
			/** Default Warehouse for this resource. */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			/** Type the name of the resource. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
			ResourceType: DevKit.Controls.OptionSet;
			/** Specifies the timezone for the resource's working hours. */
			TimeZone: DevKit.Controls.Integer;
			/** Select the user who represents this resource. */
			UserId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_bookableresource_account_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_bookableresourcebooking_ResourceGroup: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingdate_Resource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingsetup_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_AdjustedByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_RequestedByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_inventorytransfer_TransferredByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_purchaseorder_RequestedByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_resourceterritory_Resource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_timeoffrequest_Resource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_workorder_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_workorderresourcerestriction_Resource: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navBookings: DevKit.Controls.NavigationItem,
			navCharacteristics: DevKit.Controls.NavigationItem,
			navChildGroups: DevKit.Controls.NavigationItem,
			navParentGroups: DevKit.Controls.NavigationItem,
			navResourceCategories: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			BookableResourceCharacteristics: DevKit.Controls.Grid;
			CATEGORYASSOCIATIONS: DevKit.Controls.Grid;
			ResourceCategory: DevKit.Controls.Grid;
			ResourceCharacteristics: DevKit.Controls.Grid;
		}
	}
	class FormBookable_Resource_Mobile extends DevKit.IForm {
		/**
		* Bookable Resource - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bookable_Resource_Mobile */
		Body: DevKit.FormBookable_Resource_Mobile.Body;
		/** The Navigation of form Bookable_Resource_Mobile */
		Navigation: DevKit.FormBookable_Resource_Mobile.Navigation;
		/** The Process of form Bookable_Resource_Mobile */
		Process: DevKit.FormBookable_Resource_Mobile.Process;
		/** The Grid of form Bookable_Resource_Mobile */
		Grid: DevKit.FormBookable_Resource_Mobile.Grid;
		/** The SidePanes of form Bookable_Resource_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBookableResource_Information {
		interface tab__E37F4524_4A66_42DC_974C_078756AEF3FB_Sections {
			_6BFE3886_A003_47B5_A2C2_7E54AD6213A9: DevKit.Controls.Section;
			_9E7DEC57_2C62_4D5D_8B21_75D076C5D1A1: DevKit.Controls.Section;
			_E37F4524_4A66_42DC_974C_078756AEF3FB_SECTION_6: DevKit.Controls.Section;
			msdyn_userinformation: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_FieldService_Sections {
			FieldService_section_4: DevKit.Controls.Section;
			FieldService_section_5: DevKit.Controls.Section;
			fstab_service_settings_section_5: DevKit.Controls.Section;
			fstab_service_settings_section_7: DevKit.Controls.Section;
		}
		interface tab_Omnichannel_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_projectservice_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_workhours_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab__E37F4524_4A66_42DC_974C_078756AEF3FB extends DevKit.Controls.ITab {
			Section: tab__E37F4524_4A66_42DC_974C_078756AEF3FB_Sections;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_Omnichannel extends DevKit.Controls.ITab {
			Section: tab_Omnichannel_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface tab_tab_projectservice extends DevKit.Controls.ITab {
			Section: tab_tab_projectservice_Sections;
		}
		interface tab_workhours extends DevKit.Controls.ITab {
			Section: tab_workhours_Sections;
		}
		interface Tabs {
			_E37F4524_4A66_42DC_974C_078756AEF3FB: tab__E37F4524_4A66_42DC_974C_078756AEF3FB;
			FieldService: tab_FieldService;
			Omnichannel: tab_Omnichannel;
			tab_2: tab_tab_2;
			tab_projectservice: tab_tab_projectservice;
			workhours: tab_workhours;
		}
		interface Body {
			Tab: Tabs;
			/** Select the account that represents this resource. */
			AccountId: DevKit.Controls.Lookup;
			/** Specifies the working days and hours of the resource. */
			CalendarId: DevKit.Controls.Lookup;
			/** Select the contact that represents this resource. */
			ContactId: DevKit.Controls.Lookup;
			/** The number of bookings to drip on the Mobile . This field is disabled/enabled based on Enable Drip Scheduling field */
			msdyn_BookingsToDrip: DevKit.Controls.Integer;
			/** Crew Strategy */
			msdyn_CrewStrategy: DevKit.Controls.OptionSet;
			msdyn_DeriveCapacity: DevKit.Controls.Boolean;
			/** Specify if this resource should be enabled for availablity search. */
			msdyn_DisplayOnScheduleAssistant: DevKit.Controls.Boolean;
			/** Specify if this resource should be displayed on the schedule board. */
			msdyn_DisplayOnScheduleBoard: DevKit.Controls.Boolean;
			/** Enable appointments to display on the new schedule board and be considered in availability search for resources. */
			msdyn_EnableAppointments: DevKit.Controls.OptionSet;
			/** Set this field to Yes if this resource requires access to the legacy Field Service Mobile application. */
			msdyn_EnabledForFieldServiceMobile: DevKit.Controls.Boolean;
			/** Enables drip scheduling on the mobile app. */
			msdyn_EnableDripScheduling: DevKit.Controls.Boolean;
			/** This only applies when directly calling the API. It does not apply when the Book button is clicked on the Schedule Board or on any schedulable entity. */
			msdyn_EnableOutlookSchedules: DevKit.Controls.OptionSet;
			/** Shows the default ending location type when booking daily schedules for this resource. */
			msdyn_EndLocation: DevKit.Controls.OptionSet;
			/** Unique identifier for Facility Equipment */
			msdyn_facilityequipmentid: DevKit.Controls.Lookup;
			msdyn_GenericType: DevKit.Controls.OptionSet;
			msdyn_HourlyRate: DevKit.Controls.Money;
			/** Organizational Unit that resource belong to */
			msdyn_organizationalunit: DevKit.Controls.Lookup;
			/** Select whether the pool is an account, contact, user, equipment or a facility of resources. */
			msdyn_PoolType: DevKit.Controls.MultiOptionSet;
			/** Shows the default starting location type when booking daily schedules for this resource. */
			msdyn_StartLocation: DevKit.Controls.OptionSet;
			/** Shows the target utilization for the resource. */
			msdyn_targetutilization: DevKit.Controls.Integer;
			/** Specifies if approval required for Time Off Requests. */
			msdyn_TimeOffApprovalRequired: DevKit.Controls.Boolean;
			/** Default Warehouse for this resource. */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			/** Type the name of the resource. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
			ResourceType: DevKit.Controls.OptionSet;
			/** Specifies the timezone for the resource's working hours. */
			TimeZone: DevKit.Controls.Integer;
			/** Select the user who represents this resource. */
			UserId: DevKit.Controls.Lookup;
			/** Select the user who represents this resource. */
			UserId1: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_bookableresource_account_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_bookableresourcebooking_ResourceGroup: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingdate_Resource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_agreementbookingsetup_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_delegation_delegationfrom: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_delegation_delegationto: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_estimateline_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_fact_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_findworkevent_BookableResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_AdjustedByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_inventoryadjustment_RequestedByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_inventorytransfer_TransferredByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_invoicelinetransaction_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_journalline_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_opportunitylinetransaction_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_orderlinetransaction_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_projectapproval_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_projecttaskstatususer_BookableResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_projectteam_bookableresourceid: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_projectteammembersignup_BookableResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_purchaseorder_RequestedByResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_quotebookingsetup_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_quotelinetransaction_bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_resourceassignment_bookableresourceid: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_resourceterritory_Resource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_timeoffrequest_Resource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_userworkhistory_Bookableresource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_workorder_PreferredResource: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresource_msdyn_workorderresourcerestriction_Resource: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navBookings: DevKit.Controls.NavigationItem,
			navCharacteristics: DevKit.Controls.NavigationItem,
			navChildGroups: DevKit.Controls.NavigationItem,
			navParentGroups: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navResourceCategories: DevKit.Controls.NavigationItem,
			navResourceOneAssociation: DevKit.Controls.NavigationItem,
			navResourceTwoAssociation: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			BookableResourceCharacteristics: DevKit.Controls.Grid;
			CATEGORYASSOCIATIONS: DevKit.Controls.Grid;
			ResourceCategory: DevKit.Controls.Grid;
			ResourceCharacteristics: DevKit.Controls.Grid;
			ResourceRole: DevKit.Controls.Grid;
			Resourceskills: DevKit.Controls.Grid;
		}
	}
	class FormBookableResource_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResource_Information */
		Body: DevKit.FormBookableResource_Information.Body;
		/** The Navigation of form BookableResource_Information */
		Navigation: DevKit.FormBookableResource_Information.Navigation;
		/** The Process of form BookableResource_Information */
		Process: DevKit.FormBookableResource_Information.Process;
		/** The Grid of form BookableResource_Information */
		Grid: DevKit.FormBookableResource_Information.Grid;
		/** The SidePanes of form BookableResource_Information */
		SidePanes: DevKit.SidePanes;
	}
	class BookableResourceApi {
		/**
		* DynamicsCrm.DevKit BookableResourceApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Select the account that represents this resource. */
		AccountId: string;
		/** Unique identifier of the resource. */
		BookableResourceId: string;
		/** Specifies the working days and hours of the resource. */
		CalendarId: string;
		/** Select the contact that represents this resource. */
		ContactId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the bookableresource with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The number of bookings to drip on the Mobile . This field is disabled/enabled based on Enable Drip Scheduling field */
		msdyn_BookingsToDrip: number;
		/** Crew Strategy */
		msdyn_CrewStrategy: OptionSet.BookableResource.msdyn_CrewStrategy;
		msdyn_DeriveCapacity: boolean;
		/** Specify if this resource should be enabled for availablity search. */
		msdyn_DisplayOnScheduleAssistant: boolean;
		/** Specify if this resource should be displayed on the schedule board. */
		msdyn_DisplayOnScheduleBoard: boolean;
		/** Enable appointments to display on the new schedule board and be considered in availability search for resources. */
		msdyn_EnableAppointments: OptionSet.BookableResource.msdyn_EnableAppointments;
		/** Set this field to Yes if this resource requires access to the legacy Field Service Mobile application. */
		msdyn_EnabledForFieldServiceMobile: boolean;
		/** Enables drip scheduling on the mobile app. */
		msdyn_EnableDripScheduling: boolean;
		/** This only applies when directly calling the API. It does not apply when the Book button is clicked on the Schedule Board or on any schedulable entity. */
		msdyn_EnableOutlookSchedules: OptionSet.BookableResource.msdyn_EnableOutlookSchedules;
		/** Shows the default ending location type when booking daily schedules for this resource. */
		msdyn_EndLocation: OptionSet.BookableResource.msdyn_EndLocation;
		/** Unique identifier for Facility Equipment */
		msdyn_facilityequipmentid: string;
		msdyn_GenericType: OptionSet.BookableResource.msdyn_GenericType;
		msdyn_HourlyRate: number;
		/** Value of the Hourly Rate in base currency. */
		readonly msdyn_hourlyrate_Base: number;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** Is Default */
		msdyn_isgenericresourceprojectscoped: boolean;
		/** The location latitude. */
		msdyn_Latitude: number;
		/** The location timestamp. */
		msdyn_locationtimestamp_UtcDateAndTime: Date;
		/** The location longitude. */
		msdyn_Longitude: number;
		/** Organizational Unit that resource belong to */
		msdyn_organizationalunit: string;
		/** Select whether the pool is an account, contact, user, equipment or a facility of resources. */
		msdyn_PoolType: Array<OptionSet.BookableResource.msdyn_PoolType>;
		msdyn_PrimaryEMail: string;
		/** Shows the default starting location type when booking daily schedules for this resource. */
		msdyn_StartLocation: OptionSet.BookableResource.msdyn_StartLocation;
		/** Shows the target utilization for the resource. */
		msdyn_targetutilization: number;
		/** Specifies if approval required for Time Off Requests. */
		msdyn_TimeOffApprovalRequired: boolean;
		/** Default Warehouse for this resource. */
		msdyn_Warehouse: string;
		/** Type the name of the resource. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
		ResourceType: OptionSet.BookableResource.ResourceType;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Status of the Bookable Resource */
		StateCode: OptionSet.BookableResource.StateCode;
		/** Reason for the status of the Bookable Resource */
		StatusCode: OptionSet.BookableResource.StatusCode;
		/** Specifies the timezone for the resource's working hours. */
		TimeZone: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the BookableResource with respect to the base currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Select the user who represents this resource. */
		UserId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace BookableResource {
		enum msdyn_CrewStrategy {
			/** 192350000 */
			Cascade_and_Accept_Cascade_Completely_Not_Recommended,
			/** 192350001 */
			Crew_Leader_Management,
			/** 192350002 */
			Crew_Member_Self_Management
		}
		enum msdyn_EnableAppointments {
			/** 192350000 */
			No,
			/** 192350001 */
			Yes
		}
		enum msdyn_EnableOutlookSchedules {
			/** 192350000 */
			No,
			/** 192350001 */
			Yes
		}
		enum msdyn_EndLocation {
			/** 690970002 */
			Location_Agnostic,
			/** 690970001 */
			Organizational_Unit_Address,
			/** 690970000 */
			Resource_Address
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
			/** 192350003 */
			Equipment,
			/** 192350004 */
			Facility,
			/** 192350002 */
			User
		}
		enum msdyn_StartLocation {
			/** 690970002 */
			Location_Agnostic,
			/** 690970001 */
			Organizational_Unit_Address,
			/** 690970000 */
			Resource_Address
		}
		enum ResourceType {
			/** 5 */
			Account,
			/** 2 */
			Contact,
			/** 6 */
			Crew,
			/** 4 */
			Equipment,
			/** 7 */
			Facility,
			/** 1 */
			Generic,
			/** 8 */
			Pool,
			/** 3 */
			User
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}