//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resourcerequirement_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_resourcerequirement_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcerequirement_Information */
		Body: DevKit.Formmsdyn_resourcerequirement_Information.Body;
		/** The Process of form msdyn_resourcerequirement_Information */
		Process: DevKit.Formmsdyn_resourcerequirement_Information.Process;
		/** The SidePanes of form msdyn_resourcerequirement_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_resourcerequirement_Information2 {
		interface tab_Requirement_General_Sections {
			_971E72A7_0E77_4C1E_80B9_E4EB74143E46_SECTION_3: DevKit.Controls.Section;
			_971E72A7_0E77_4C1E_80B9_E4EB74143E46_SECTION_4: DevKit.Controls.Section;
			_DB0712F3_6333_4878_92C9_004903985F09: DevKit.Controls.Section;
			Requirement_Notes: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_FieldService_Sections {
			tab_FieldService_section1: DevKit.Controls.Section;
		}
		interface tab_tab_project_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_ResourceBookings_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_Requirement_General extends DevKit.Controls.ITab {
			Section: tab_Requirement_General_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface tab_tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_tab_FieldService_Sections;
		}
		interface tab_tab_project extends DevKit.Controls.ITab {
			Section: tab_tab_project_Sections;
		}
		interface tab_tab_ResourceBookings extends DevKit.Controls.ITab {
			Section: tab_tab_ResourceBookings_Sections;
		}
		interface Tabs {
			Requirement_General: tab_Requirement_General;
			tab_2: tab_tab_2;
			tab_FieldService: tab_tab_FieldService;
			tab_project: tab_tab_project;
			tab_ResourceBookings: tab_tab_ResourceBookings;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_AvailabilityView: DevKit.Controls.IFrame;
			/** Select the allocation method to be used for creating requirement distribution over a time period. */
			msdyn_allocationmethod: DevKit.Controls.OptionSet;
			/** The calendar that will be used for a resource requirement */
			msdyn_CalendarId: DevKit.Controls.String;
			/** Type the city where the resource is required. */
			msdyn_city: DevKit.Controls.String;
			/** Enter the cost price of the resource required. */
			msdyn_costprice: DevKit.Controls.Money;
			/** Type the country/region where the resource is required. */
			msdyn_country: DevKit.Controls.String;
			/** Duration of total minutes required */
			msdyn_duration: DevKit.Controls.Integer;
			/** Effort that's required from resource capacity */
			msdyn_effort: DevKit.Controls.Decimal;
			msdyn_fromdate: DevKit.Controls.Date;
			/** The fulfilled duration, in minutes. */
			msdyn_FulfilledDuration: DevKit.Controls.Integer;
			msdyn_IsPrimary: DevKit.Controls.Boolean;
			/** The latitude to use for the location of a requirement. */
			msdyn_Latitude: DevKit.Controls.Double;
			/** The longitude to use for the location of a requirement. */
			msdyn_Longitude: DevKit.Controls.Double;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the percentage of the calendar capacity required. */
			msdyn_percentage: DevKit.Controls.Decimal;
			msdyn_PoolType: DevKit.Controls.MultiOptionSet;
			/** Priority of the requirement. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Select the project for which the resource is required. */
			msdyn_projectid: DevKit.Controls.Lookup;
			msdyn_ProposedDuration: DevKit.Controls.Integer;
			msdyn_RemainingDuration: DevKit.Controls.Integer;
			/** The status of the resource request associated with this requirement. */
			msdyn_requeststatus: DevKit.Controls.String;
			/** Requirement Group */
			msdyn_requirementgroupid: DevKit.Controls.Lookup;
			msdyn_resourcetype: DevKit.Controls.MultiOptionSet;
			/** Type the state/province where the resource is required. */
			msdyn_stateorprovince: DevKit.Controls.String;
			/** Requirement Status */
			msdyn_Status: DevKit.Controls.Lookup;
			msdyn_Territory: DevKit.Controls.Lookup;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Controls.DateTime;
			msdyn_TimeGroup: DevKit.Controls.Lookup;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Controls.DateTime;
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			/** End date of requirement period */
			msdyn_todate: DevKit.Controls.Date;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Order associated with Resource Requirement. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			WebResource_msdyn_timewindowend: DevKit.Controls.WebResource;
			WebResource_msdyn_timewindowstart: DevKit.Controls.WebResource;
		}
		interface Navigation {
			nav_msdyn_resourcerequirement_requirementdependency_dependentrequirement: DevKit.Controls.NavigationItem,
			nav_msdyn_resourcerequirement_requirementdependency_resourcerequirement: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			RequirementCharacteristics: DevKit.Controls.Grid;
			RequirementOrganizationUnit: DevKit.Controls.Grid;
			RequirementResourceCategory: DevKit.Controls.Grid;
			RequirementResourcePreferences: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_resourcerequirement_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcerequirement_Information2 */
		Body: DevKit.Formmsdyn_resourcerequirement_Information2.Body;
		/** The Navigation of form msdyn_resourcerequirement_Information2 */
		Navigation: DevKit.Formmsdyn_resourcerequirement_Information2.Navigation;
		/** The Process of form msdyn_resourcerequirement_Information2 */
		Process: DevKit.Formmsdyn_resourcerequirement_Information2.Process;
		/** The Grid of form msdyn_resourcerequirement_Information2 */
		Grid: DevKit.Formmsdyn_resourcerequirement_Information2.Grid;
		/** The SidePanes of form msdyn_resourcerequirement_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInfomation {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the allocation method to be used for creating requirement distribution over a time period. */
			msdyn_allocationmethod: DevKit.Controls.OptionSet;
			/** Duration of total minutes required */
			msdyn_duration: DevKit.Controls.Integer;
			msdyn_fromdate: DevKit.Controls.Date;
			/** The latitude to use for the location of a requirement. */
			msdyn_Latitude: DevKit.Controls.Double;
			/** The longitude to use for the location of a requirement. */
			msdyn_Longitude: DevKit.Controls.Double;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the percentage of the calendar capacity required. */
			msdyn_percentage: DevKit.Controls.Decimal;
			msdyn_PoolType: DevKit.Controls.MultiOptionSet;
			/** Enter the number of resources required. */
			msdyn_quantity: DevKit.Controls.Decimal;
			/** Requirement Group */
			msdyn_requirementgroupid: DevKit.Controls.Lookup;
			msdyn_resourcetype: DevKit.Controls.MultiOptionSet;
			/** Requirement Status */
			msdyn_Status: DevKit.Controls.Lookup;
			/** End date of requirement period */
			msdyn_todate: DevKit.Controls.Date;
			/** Select the type of resource requirement. */
			msdyn_type: DevKit.Controls.OptionSet;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
		}
	}
	class FormInfomation extends DevKit.IForm {
		/**
		* Infomation [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Infomation */
		Body: DevKit.FormInfomation.Body;
	}
	class msdyn_resourcerequirementApi {
		/**
		* DynamicsCrm.DevKit msdyn_resourcerequirementApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the allocation method to be used for creating requirement distribution over a time period. */
		msdyn_allocationmethod: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Appointment associated with Resource Requirement. */
		msdyn_AppointmentRequirementId: DevKit.WebApi.LookupValue;
		/** A unique identifier for the booking setup metadata that is associated with a resource requirement. */
		msdyn_BookingSetupMetadataId: DevKit.WebApi.LookupValue;
		/** The calendar that will be used for a resource requirement */
		msdyn_CalendarId: DevKit.WebApi.StringValue;
		/** Type the city where the resource is required. */
		msdyn_city: DevKit.WebApi.StringValue;
		/** Enter the cost price of the resource required. */
		msdyn_costprice: DevKit.WebApi.MoneyValue;
		/** Value of the Cost Price in base currency. */
		msdyn_costprice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the country/region where the resource is required. */
		msdyn_country: DevKit.WebApi.StringValue;
		/** Duration of total minutes required */
		msdyn_duration: DevKit.WebApi.IntegerValue;
		/** Effort that's required from resource capacity */
		msdyn_effort: DevKit.WebApi.DecimalValue;
		msdyn_fromdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The fulfilled duration, in minutes. */
		msdyn_FulfilledDuration: DevKit.WebApi.IntegerValue;
		/** Enter the hours fulfilled against requirement when the requirement status is fulfilled. */
		msdyn_fulfilledhours: DevKit.WebApi.DecimalValue;
		/** Enter the number of hours for which a requirement is required. */
		msdyn_hours: DevKit.WebApi.DecimalValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		msdyn_IsPrimary: DevKit.WebApi.BooleanValue;
		/** Is template requirement */
		msdyn_istemplate: DevKit.WebApi.BooleanValue;
		/** The latitude to use for the location of a requirement. */
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		/** The longitude to use for the location of a requirement. */
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Enter the percentage of the calendar capacity required. */
		msdyn_percentage: DevKit.WebApi.DecimalValue;
		msdyn_PoolType: DevKit.WebApi.MultiOptionSetValue;
		/** Priority of the requirement. To be taken into consideration while scheduling resources */
		msdyn_Priority: DevKit.WebApi.LookupValue;
		/** Select the project for which the resource is required. */
		msdyn_projectid: DevKit.WebApi.LookupValue;
		msdyn_ProposedDuration: DevKit.WebApi.IntegerValue;
		/** Enter the number of resources required. */
		msdyn_quantity: DevKit.WebApi.DecimalValue;
		msdyn_RemainingDuration: DevKit.WebApi.IntegerValue;
		/** The status of the resource request associated with this requirement. */
		msdyn_requeststatus: DevKit.WebApi.StringValue;
		/** The requirement group control view id of the resource requirement entity. This field will has value only when the entity is inside the requirement group control. */
		msdyn_requirementgroupcontrolviewid: DevKit.WebApi.StringValue;
		/** Requirement Group */
		msdyn_requirementgroupid: DevKit.WebApi.LookupValue;
		/** Requirement Relationship */
		msdyn_requirementrelationshipid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_resourcerequirementId: DevKit.WebApi.GuidValue;
		msdyn_resourcetype: DevKit.WebApi.MultiOptionSetValue;
		/** Select the required role. */
		msdyn_roleid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Service Appointment associated with Resource Requirement. */
		msdyn_serviceappointment: DevKit.WebApi.LookupValue;
		/** Sort option string field of resource requirement */
		msdyn_sortoptions: DevKit.WebApi.StringValue;
		/** Type the state/province where the resource is required. */
		msdyn_stateorprovince: DevKit.WebApi.StringValue;
		/** Requirement Status */
		msdyn_Status: DevKit.WebApi.LookupValue;
		/** template requirement id if requirement is created from template */
		msdyn_templaterequirementid: DevKit.WebApi.StringValue;
		msdyn_Territory: DevKit.WebApi.LookupValue;
		/** Enter the starting range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeFromPromised_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_TimeGroup: DevKit.WebApi.LookupValue;
		/** Enter the ending range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeToPromised_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_TimeWindowEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_TimeWindowStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The Timezone in which the Time windows are defined by the User */
		msdyn_timezonefortimewindow: DevKit.WebApi.IntegerValue;
		/** End date of requirement period */
		msdyn_todate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the type of resource requirement. */
		msdyn_type: DevKit.WebApi.OptionSetValue;
		/** The working hours for a requirement. */
		msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		msdyn_WorkLocation: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Work Order associated with Resource Requirement. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Resource Requirement */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Resource Requirement */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_resourcerequirement {
		enum msdyn_allocationmethod {
			/** 192350003 */
			Distribute_evenly,
			/** 192350005 */
			Front_load,
			/** 192350001 */
			Full_capacity,
			/** 192350000 */
			None,
			/** 192350004 */
			Percentage_capacity
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
		enum msdyn_resourcetype {
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
		enum msdyn_type {
			/** 192350001 */
			Extend,
			/** 192350000 */
			New
		}
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}