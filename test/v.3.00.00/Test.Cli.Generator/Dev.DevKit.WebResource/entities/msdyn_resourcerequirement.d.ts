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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Select the allocation method to be used for creating requirement distribution over a time period. */
		msdyn_allocationmethod: OptionSet.msdyn_resourcerequirement.msdyn_allocationmethod;
		/** Unique identifier for Appointment associated with Resource Requirement. */
		msdyn_AppointmentRequirementId: string;
		/** A unique identifier for the booking setup metadata that is associated with a resource requirement. */
		msdyn_BookingSetupMetadataId: string;
		/** The calendar that will be used for a resource requirement */
		msdyn_CalendarId: string;
		/** Type the city where the resource is required. */
		msdyn_city: string;
		/** Enter the cost price of the resource required. */
		msdyn_costprice: number;
		/** Value of the Cost Price in base currency. */
		readonly msdyn_costprice_Base: number;
		/** Type the country/region where the resource is required. */
		msdyn_country: string;
		/** Duration of total minutes required */
		msdyn_duration: number;
		/** Effort that's required from resource capacity */
		msdyn_effort: number;
		msdyn_fromdate_UtcDateOnly: Date;
		/** The fulfilled duration, in minutes. */
		msdyn_FulfilledDuration: number;
		/** Enter the hours fulfilled against requirement when the requirement status is fulfilled. */
		msdyn_fulfilledhours: number;
		/** Enter the number of hours for which a requirement is required. */
		msdyn_hours: number;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		msdyn_IsPrimary: boolean;
		/** Is template requirement */
		msdyn_istemplate: boolean;
		/** The latitude to use for the location of a requirement. */
		msdyn_Latitude: number;
		/** The longitude to use for the location of a requirement. */
		msdyn_Longitude: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Enter the percentage of the calendar capacity required. */
		msdyn_percentage: number;
		msdyn_PoolType: Array<OptionSet.msdyn_resourcerequirement.msdyn_PoolType>;
		/** Priority of the requirement. To be taken into consideration while scheduling resources */
		msdyn_Priority: string;
		/** Select the project for which the resource is required. */
		msdyn_projectid: string;
		msdyn_ProposedDuration: number;
		/** Enter the number of resources required. */
		msdyn_quantity: number;
		msdyn_RemainingDuration: number;
		/** The status of the resource request associated with this requirement. */
		msdyn_requeststatus: string;
		/** The requirement group control view id of the resource requirement entity. This field will has value only when the entity is inside the requirement group control. */
		msdyn_requirementgroupcontrolviewid: string;
		/** Requirement Group */
		msdyn_requirementgroupid: string;
		/** Requirement Relationship */
		msdyn_requirementrelationshipid: string;
		/** Unique identifier for entity instances */
		msdyn_resourcerequirementId: string;
		msdyn_resourcetype: Array<OptionSet.msdyn_resourcerequirement.msdyn_resourcetype>;
		/** Select the required role. */
		msdyn_roleid: string;
		/** Unique identifier for Service Appointment associated with Resource Requirement. */
		msdyn_serviceappointment: string;
		/** Sort option string field of resource requirement */
		msdyn_sortoptions: string;
		/** Type the state/province where the resource is required. */
		msdyn_stateorprovince: string;
		/** Requirement Status */
		msdyn_Status: string;
		/** template requirement id if requirement is created from template */
		msdyn_templaterequirementid: string;
		msdyn_Territory: string;
		/** Enter the starting range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeFromPromised_UtcDateAndTime: Date;
		msdyn_TimeGroup: string;
		/** Enter the ending range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeToPromised_UtcDateAndTime: Date;
		msdyn_TimeWindowEnd_UtcDateAndTime: Date;
		msdyn_TimeWindowStart_UtcDateAndTime: Date;
		/** The Timezone in which the Time windows are defined by the User */
		msdyn_timezonefortimewindow: number;
		/** End date of requirement period */
		msdyn_todate_UtcDateOnly: Date;
		/** Select the type of resource requirement. */
		msdyn_type: OptionSet.msdyn_resourcerequirement.msdyn_type;
		/** The working hours for a requirement. */
		msdyn_workhourtemplate: string;
		msdyn_WorkLocation: OptionSet.msdyn_resourcerequirement.msdyn_WorkLocation;
		/** Unique identifier for Work Order associated with Resource Requirement. */
		msdyn_WorkOrder: string;
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
		/** Status of the Resource Requirement */
		statecode: OptionSet.msdyn_resourcerequirement.statecode;
		/** Reason for the status of the Resource Requirement */
		statuscode: OptionSet.msdyn_resourcerequirement.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Select the allocation method to be used for creating requirement distribution over a time period. */
			readonly msdyn_allocationmethod: string;
			/** Unique identifier for Appointment associated with Resource Requirement. */
			readonly msdyn_AppointmentRequirementId: string;
			/** A unique identifier for the booking setup metadata that is associated with a resource requirement. */
			readonly msdyn_BookingSetupMetadataId: string;
			/** The calendar that will be used for a resource requirement */
			readonly msdyn_CalendarId: string;
			/** Type the city where the resource is required. */
			readonly msdyn_city: string;
			/** Enter the cost price of the resource required. */
			readonly msdyn_costprice: string;
			/** Value of the Cost Price in base currency. */
			readonly msdyn_costprice_Base: string;
			/** Type the country/region where the resource is required. */
			readonly msdyn_country: string;
			/** Duration of total minutes required */
			readonly msdyn_duration: string;
			/** Effort that's required from resource capacity */
			readonly msdyn_effort: string;
			readonly msdyn_fromdate_UtcDateOnly: string;
			/** The fulfilled duration, in minutes. */
			readonly msdyn_FulfilledDuration: string;
			/** Enter the hours fulfilled against requirement when the requirement status is fulfilled. */
			readonly msdyn_fulfilledhours: string;
			/** Enter the number of hours for which a requirement is required. */
			readonly msdyn_hours: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			readonly msdyn_IsPrimary: string;
			/** Is template requirement */
			readonly msdyn_istemplate: string;
			/** The latitude to use for the location of a requirement. */
			readonly msdyn_Latitude: string;
			/** The longitude to use for the location of a requirement. */
			readonly msdyn_Longitude: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Enter the percentage of the calendar capacity required. */
			readonly msdyn_percentage: string;
			readonly msdyn_PoolType: Array<string>;
			/** Priority of the requirement. To be taken into consideration while scheduling resources */
			readonly msdyn_Priority: string;
			/** Select the project for which the resource is required. */
			readonly msdyn_projectid: string;
			readonly msdyn_ProposedDuration: string;
			/** Enter the number of resources required. */
			readonly msdyn_quantity: string;
			readonly msdyn_RemainingDuration: string;
			/** The status of the resource request associated with this requirement. */
			readonly msdyn_requeststatus: string;
			/** The requirement group control view id of the resource requirement entity. This field will has value only when the entity is inside the requirement group control. */
			readonly msdyn_requirementgroupcontrolviewid: string;
			/** Requirement Group */
			readonly msdyn_requirementgroupid: string;
			/** Requirement Relationship */
			readonly msdyn_requirementrelationshipid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_resourcerequirementId: string;
			readonly msdyn_resourcetype: Array<string>;
			/** Select the required role. */
			readonly msdyn_roleid: string;
			/** Unique identifier for Service Appointment associated with Resource Requirement. */
			readonly msdyn_serviceappointment: string;
			/** Sort option string field of resource requirement */
			readonly msdyn_sortoptions: string;
			/** Type the state/province where the resource is required. */
			readonly msdyn_stateorprovince: string;
			/** Requirement Status */
			readonly msdyn_Status: string;
			/** template requirement id if requirement is created from template */
			readonly msdyn_templaterequirementid: string;
			readonly msdyn_Territory: string;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			readonly msdyn_TimeFromPromised_UtcDateAndTime: string;
			readonly msdyn_TimeGroup: string;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			readonly msdyn_TimeToPromised_UtcDateAndTime: string;
			readonly msdyn_TimeWindowEnd_UtcDateAndTime: string;
			readonly msdyn_TimeWindowStart_UtcDateAndTime: string;
			/** The Timezone in which the Time windows are defined by the User */
			readonly msdyn_timezonefortimewindow: string;
			/** End date of requirement period */
			readonly msdyn_todate_UtcDateOnly: string;
			/** Select the type of resource requirement. */
			readonly msdyn_type: string;
			/** The working hours for a requirement. */
			readonly msdyn_workhourtemplate: string;
			readonly msdyn_WorkLocation: string;
			/** Unique identifier for Work Order associated with Resource Requirement. */
			readonly msdyn_WorkOrder: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Resource Requirement */
			readonly statecode: string;
			/** Reason for the status of the Resource Requirement */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}