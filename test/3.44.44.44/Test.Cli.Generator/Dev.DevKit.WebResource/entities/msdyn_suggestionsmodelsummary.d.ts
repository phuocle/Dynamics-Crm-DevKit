﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_suggestionsmodelsummary_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_suggestionsmodelsummary_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestionsmodelsummary_Information */
		Body: DevKit.Formmsdyn_suggestionsmodelsummary_Information.Body;
		/** The Navigation of form msdyn_suggestionsmodelsummary_Information */
		Navigation: DevKit.Formmsdyn_suggestionsmodelsummary_Information.Navigation;
		/** The SidePanes of form msdyn_suggestionsmodelsummary_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_suggestionsmodelsummaryApi {
		/**
		* DynamicsCrm.DevKit msdyn_suggestionsmodelsummaryApi
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
		readonly ComponentState: OptionSet.msdyn_suggestionsmodelsummary.ComponentState;
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
		/** Utc Timestamp of when the case model was processed */
		msdyn_CaseProcessedDateTime_UtcDateAndTime: Date;
		/** Number of delta Case records processed in the run */
		msdyn_CaseRecordsProccessed: number;
		/** Utc Timestamp of when the Case model was retrained */
		msdyn_CaseRetrainedDateTime_UtcDateAndTime: Date;
		/** Is Case Model Training succeeded. Default is Yes */
		msdyn_IsCaseTrainingSucceeded: boolean;
		/** Is KB Model Training succeeded. Default is Yes */
		msdyn_IsKbTrainingSucceeded: boolean;
		/** Number of delta KB records processed in the run */
		msdyn_KbArticlesProcessed: number;
		/** Utc Timestamp of when the KB model was processed */
		msdyn_KbProcessedDateTime_UtcDateAndTime: Date;
		/** Utc Timestamp of when the KB model was retrained */
		msdyn_KbRetrainedDateTime_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_suggestionsmodelsummaryId: string;
		/** Utc Timestamp of when the model was trained */
		msdyn_TrainedDateTime_UtcDateAndTime: Date;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the suggestionsmodelsummary */
		statecode: OptionSet.msdyn_suggestionsmodelsummary.statecode;
		/** Reason for the status of the suggestionsmodelsummary */
		statuscode: OptionSet.msdyn_suggestionsmodelsummary.statuscode;
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
			/** Utc Timestamp of when the case model was processed */
			readonly msdyn_CaseProcessedDateTime_UtcDateAndTime: string;
			/** Number of delta Case records processed in the run */
			readonly msdyn_CaseRecordsProccessed: string;
			/** Utc Timestamp of when the Case model was retrained */
			readonly msdyn_CaseRetrainedDateTime_UtcDateAndTime: string;
			/** Is Case Model Training succeeded. Default is Yes */
			readonly msdyn_IsCaseTrainingSucceeded: string;
			/** Is KB Model Training succeeded. Default is Yes */
			readonly msdyn_IsKbTrainingSucceeded: string;
			/** Number of delta KB records processed in the run */
			readonly msdyn_KbArticlesProcessed: string;
			/** Utc Timestamp of when the KB model was processed */
			readonly msdyn_KbProcessedDateTime_UtcDateAndTime: string;
			/** Utc Timestamp of when the KB model was retrained */
			readonly msdyn_KbRetrainedDateTime_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_suggestionsmodelsummaryId: string;
			/** Utc Timestamp of when the model was trained */
			readonly msdyn_TrainedDateTime_UtcDateAndTime: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the suggestionsmodelsummary */
			readonly statecode: string;
			/** Reason for the status of the suggestionsmodelsummary */
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
	namespace msdyn_suggestionsmodelsummary {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}