﻿//@ts-check
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Data type of context variable (int, string, entity reference) */
		msdyn_datatype: DevKit.WebApi.OptionSetValue;
		/** Display Name for context variable. */
		msdyn_displayname: DevKit.WebApi.StringValue;
		/** Logical Name of Entity Reference. */
		msdyn_entitylogicalname: DevKit.WebApi.StringValue;
		/** (Currently Unused) */
		msdyn_isdisplayable: DevKit.WebApi.BooleanValue;
		/** (Currently Unused) */
		msdyn_islist: DevKit.WebApi.BooleanValue;
		/** (Currently Unused) */
		msdyn_ismodifiable: DevKit.WebApi.BooleanValue;
		/** (Currently Unused) */
		msdyn_issystemdefined: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the associated workstream */
		msdyn_liveworkstreamid: DevKit.WebApi.LookupValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_ocliveworkstreamcontextvariableId: DevKit.WebApi.GuidValue;
		/** Name of the relationship between LiveWorkItem and Referenced Entity */
		msdyn_relationshipname: DevKit.WebApi.StringValue;
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
		/** Status of the Context variable */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Context variable */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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