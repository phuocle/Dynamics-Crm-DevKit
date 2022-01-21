//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_servicetasktype_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection Template associated with Service Task Type. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Template associated with Service Task Type. */
			msdyn_Inspection1: DevKit.Controls.Lookup;
			/** Depicts whether inspection is enabled for ServiceTaskType. */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Service Task Type */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_servicetasktype_msdyn_agreementbookingservicetask_TaskType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_servicetasktype_msdyn_incidenttypeservicetask_TaskType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_servicetasktype_msdyn_quotebookingservicetask_TaskType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_servicetasktype_msdyn_workorderservicetask_TaskType: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_servicetasktype_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_servicetasktype_Information */
		Body: DevKit.Formmsdyn_servicetasktype_Information.Body;
		/** The Footer section of form msdyn_servicetasktype_Information */
		Footer: DevKit.Formmsdyn_servicetasktype_Information.Footer;
		/** The Navigation of form msdyn_servicetasktype_Information */
		Navigation: DevKit.Formmsdyn_servicetasktype_Information.Navigation;
		/** The Process of form msdyn_servicetasktype_Information */
		Process: DevKit.Formmsdyn_servicetasktype_Information.Process;
		/** The SidePanes of form msdyn_servicetasktype_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormService_Task_Type_Quick_Create_5x5 {
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
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormService_Task_Type_Quick_Create_5x5 extends DevKit.IForm {
		/**
		* Service Task Type Quick Create 5x5 [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Service_Task_Type_Quick_Create_5x5 */
		Body: DevKit.FormService_Task_Type_Quick_Create_5x5.Body;
	}
	class msdyn_servicetasktypeApi {
		/**
		* DynamicsCrm.DevKit msdyn_servicetasktypeApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_Description: DevKit.WebApi.StringValue;
		msdyn_EstimatedDuration: DevKit.WebApi.IntegerValue;
		/** Unique identifier for Inspection Template associated with Service Task Type. */
		msdyn_Inspection: DevKit.WebApi.LookupValue;
		/** Depicts whether inspection is enabled for ServiceTaskType. */
		msdyn_InspectionEnabled: DevKit.WebApi.BooleanValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the entity instances. */
		msdyn_servicetasktypeId: DevKit.WebApi.GuidValue;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Service Task Type */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Service Task Type */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_servicetasktype {
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