﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_suggestionssetting_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_suggestionssetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestionssetting_Information */
		Body: DevKit.Formmsdyn_suggestionssetting_Information.Body;
		/** The Process of form msdyn_suggestionssetting_Information */
		Process: DevKit.Formmsdyn_suggestionssetting_Information.Process;
		/** The SidePanes of form msdyn_suggestionssetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_suggestionssettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_suggestionssettingApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_suggestionssetting.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Case attribute which describes Issue Detail */
		msdyn_CaseDetailMapping: string;
		/** Case attribute which describes Issue Detail */
		msdyn_CaseDetailModelMapping: string;
		/** Is Similar Case Suggestion Enabled for Case Entity. Default set is No. */
		msdyn_CaseIsEnabled: boolean;
		/** Case attribute which describes Issue Summary */
		msdyn_CaseTitleMapping: string;
		/** Case attribute which describes Issue Summary */
		msdyn_CaseTitleModelMapping: string;
		/** Knowledge attribute which describes Issue Detail */
		msdyn_KBContentMapping: string;
		/** Knowledge Content attribute mapping which describes Issue Detail and Training pipeline has used to generate model data. */
		msdyn_KBContentModelMapping: string;
		/** Is Similar KB Suggestions is enabled. Default is No */
		msdyn_KBIsEnabled: boolean;
		/** Knowledge attribute which describes Issue Summary */
		msdyn_KBTitleMapping: string;
		/** Knowledge Title mapping attribute which used by training pipeline to generate model data. */
		msdyn_KBTitleModelMapping: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_suggestionssettingId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the suggestionssetting */
		statecode: OptionSet.msdyn_suggestionssetting.statecode;
		/** Reason for the status of the suggestionssetting */
		statuscode: OptionSet.msdyn_suggestionssetting.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Case attribute which describes Issue Detail */
			readonly msdyn_CaseDetailMapping: string;
			/** Case attribute which describes Issue Detail */
			readonly msdyn_CaseDetailModelMapping: string;
			/** Is Similar Case Suggestion Enabled for Case Entity. Default set is No. */
			readonly msdyn_CaseIsEnabled: string;
			/** Case attribute which describes Issue Summary */
			readonly msdyn_CaseTitleMapping: string;
			/** Case attribute which describes Issue Summary */
			readonly msdyn_CaseTitleModelMapping: string;
			/** Knowledge attribute which describes Issue Detail */
			readonly msdyn_KBContentMapping: string;
			/** Knowledge Content attribute mapping which describes Issue Detail and Training pipeline has used to generate model data. */
			readonly msdyn_KBContentModelMapping: string;
			/** Is Similar KB Suggestions is enabled. Default is No */
			readonly msdyn_KBIsEnabled: string;
			/** Knowledge attribute which describes Issue Summary */
			readonly msdyn_KBTitleMapping: string;
			/** Knowledge Title mapping attribute which used by training pipeline to generate model data. */
			readonly msdyn_KBTitleModelMapping: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_suggestionssettingId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the suggestionssetting */
			readonly statecode: string;
			/** Reason for the status of the suggestionssetting */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_suggestionssetting {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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