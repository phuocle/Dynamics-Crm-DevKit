//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_requirementresourcepreference_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Account: DevKit.Controls.Lookup;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Controls.Lookup;
			msdyn_Cascade: DevKit.Controls.Boolean;
			/** The date and time when a restricted resource is no longer restricted. */
			msdyn_ExpirationDate: DevKit.Controls.DateTime;
			/** Preference Type */
			msdyn_PreferenceType: DevKit.Controls.OptionSet;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_requirementresourcepreference_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementresourcepreference_Information */
		Body: DevKit.Formmsdyn_requirementresourcepreference_Information.Body;
		/** The Process of form msdyn_requirementresourcepreference_Information */
		Process: DevKit.Formmsdyn_requirementresourcepreference_Information.Process;
		/** The SidePanes of form msdyn_requirementresourcepreference_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_requirementresourcepreference_Information2 {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_requirementresourcepreference_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementresourcepreference_Information2 */
		Body: DevKit.Formmsdyn_requirementresourcepreference_Information2.Body;
		/** The Process of form msdyn_requirementresourcepreference_Information2 */
		Process: DevKit.Formmsdyn_requirementresourcepreference_Information2.Process;
		/** The SidePanes of form msdyn_requirementresourcepreference_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement {
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
			msdyn_Account: DevKit.Controls.Lookup;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Controls.Lookup;
			/** The date and time when a restricted resource is no longer restricted. */
			msdyn_ExpirationDate: DevKit.Controls.DateTime;
			/** Preference Type */
			msdyn_PreferenceType: DevKit.Controls.OptionSet;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement extends DevKit.IForm {
		/**
		* Quick Create from Requirement [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementresourcepreference_Quick_Create_from_Requirement */
		Body: DevKit.Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement.Body;
	}
	class msdyn_requirementresourcepreferenceApi {
		/**
		* DynamicsCrm.DevKit msdyn_requirementresourcepreferenceApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_Account: string;
		/** Bookable Resource */
		msdyn_BookableResource: string;
		msdyn_Cascade: boolean;
		/** The date and time when a restricted resource is no longer restricted. */
		msdyn_ExpirationDate_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Preference Type */
		msdyn_PreferenceType: OptionSet.msdyn_requirementresourcepreference.msdyn_PreferenceType;
		/** The unique identifier for an entity instance. */
		msdyn_requirementresourcepreferenceId: string;
		/** Resource Requirement */
		msdyn_ResourceRequirement: string;
		/** Unique identifier for Work Order associated with Requirement Resource Preference. */
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
		/** Status of the Requirement Resource Preference */
		statecode: OptionSet.msdyn_requirementresourcepreference.statecode;
		/** Reason for the status of the Requirement Resource Preference */
		statuscode: OptionSet.msdyn_requirementresourcepreference.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_Account: string;
			/** Bookable Resource */
			readonly msdyn_BookableResource: string;
			readonly msdyn_Cascade: string;
			/** The date and time when a restricted resource is no longer restricted. */
			readonly msdyn_ExpirationDate_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Preference Type */
			readonly msdyn_PreferenceType: string;
			/** The unique identifier for an entity instance. */
			readonly msdyn_requirementresourcepreferenceId: string;
			/** Resource Requirement */
			readonly msdyn_ResourceRequirement: string;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
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
			/** Status of the Requirement Resource Preference */
			readonly statecode: string;
			/** Reason for the status of the Requirement Resource Preference */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementresourcepreference {
		enum msdyn_PreferenceType {
			/** 690970002 */
			Must_choose_from,
			/** 690970000 */
			Preferred,
			/** 690970001 */
			Restricted
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