//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocliveworkstreamcontextvariable_Information {
		interface Tabs {
		}
		interface Body {
			/** Data type of context variable (int, string, entity reference) */
			msdyn_datatype: DevKit.Controls.OptionSet;
			/** Display Name for context variable. */
			msdyn_displayname: DevKit.Controls.String;
			/** Unique identifier of the associated workstream */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocliveworkstreamcontextvariable_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocliveworkstreamcontextvariable_Information */
		Body: DevKit.Formmsdyn_ocliveworkstreamcontextvariable_Information.Body;
		/** The Process of form msdyn_ocliveworkstreamcontextvariable_Information */
		Process: DevKit.Formmsdyn_ocliveworkstreamcontextvariable_Information.Process;
		/** The SidePanes of form msdyn_ocliveworkstreamcontextvariable_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_ocliveworkstreamcontextvariable_Information2 {
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
			/** Data type of context variable (int, string, entity reference) */
			msdyn_datatype: DevKit.Controls.OptionSet;
			/** Display Name for context variable. */
			msdyn_displayname: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_ocliveworkstreamcontextvariable_Information2 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocliveworkstreamcontextvariable_Information2 */
		Body: DevKit.Formmsdyn_ocliveworkstreamcontextvariable_Information2.Body;
	}
	class msdyn_ocliveworkstreamcontextvariableApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocliveworkstreamcontextvariableApi
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
		/** Data type of context variable (int, string, entity reference) */
		msdyn_datatype: OptionSet.msdyn_ocliveworkstreamcontextvariable.msdyn_datatype;
		/** Display Name for context variable. */
		msdyn_displayname: string;
		/** Logical Name of Entity Reference. */
		msdyn_entitylogicalname: string;
		/** (Currently Unused) */
		msdyn_isdisplayable: boolean;
		/** (Currently Unused) */
		msdyn_islist: boolean;
		/** (Currently Unused) */
		msdyn_ismodifiable: boolean;
		/** (Currently Unused) */
		msdyn_issystemdefined: boolean;
		/** Unique identifier of the associated workstream */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocliveworkstreamcontextvariableId: string;
		/** Name of the relationship between LiveWorkItem and Referenced Entity */
		msdyn_relationshipname: string;
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
		/** Status of the Context variable */
		statecode: OptionSet.msdyn_ocliveworkstreamcontextvariable.statecode;
		/** Reason for the status of the Context variable */
		statuscode: OptionSet.msdyn_ocliveworkstreamcontextvariable.statuscode;
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
			/** Data type of context variable (int, string, entity reference) */
			readonly msdyn_datatype: string;
			/** Display Name for context variable. */
			readonly msdyn_displayname: string;
			/** Logical Name of Entity Reference. */
			readonly msdyn_entitylogicalname: string;
			/** (Currently Unused) */
			readonly msdyn_isdisplayable: string;
			/** (Currently Unused) */
			readonly msdyn_islist: string;
			/** (Currently Unused) */
			readonly msdyn_ismodifiable: string;
			/** (Currently Unused) */
			readonly msdyn_issystemdefined: string;
			/** Unique identifier of the associated workstream */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocliveworkstreamcontextvariableId: string;
			/** Name of the relationship between LiveWorkItem and Referenced Entity */
			readonly msdyn_relationshipname: string;
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
			/** Status of the Context variable */
			readonly statecode: string;
			/** Reason for the status of the Context variable */
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
	namespace msdyn_ocliveworkstreamcontextvariable {
		enum msdyn_datatype {
			/** 192350100 */
			Entity_Reference,
			/** 192350001 */
			Number,
			/** 192350000 */
			Text
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