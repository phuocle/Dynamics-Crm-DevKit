//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formsolutioncomponentconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			FileFormat: DevKit.Controls.OptionSet;
			FileScope: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formsolutioncomponentconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form solutioncomponentconfiguration_Information */
		Body: DevKit.Formsolutioncomponentconfiguration_Information.Body;
		/** The Process of form solutioncomponentconfiguration_Information */
		Process: DevKit.Formsolutioncomponentconfiguration_Information.Process;
		/** The SidePanes of form solutioncomponentconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class solutioncomponentconfigurationApi {
		/**
		* DynamicsCrm.DevKit solutioncomponentconfigurationApi
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
		readonly ComponentState: OptionSet.solutioncomponentconfiguration.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for Entity associated with Solution Component Configuration. */
		EntityId: string;
		FileFormat: OptionSet.solutioncomponentconfiguration.FileFormat;
		FileScope: OptionSet.solutioncomponentconfiguration.FileScope;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Boolean that indicates if the component has user interface enabled. */
		isdisplayable: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		IsSoftDeleteEnabled: boolean;
		/** Boolean that indicates if the component should retain its unmanaged customization after conversion. */
		KeepActiveCustomizationAfterConversion: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		solutioncomponentconfigurationId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Solution Component Configuration */
		statecode: OptionSet.solutioncomponentconfiguration.statecode;
		/** Reason for the status of the Solution Component Configuration */
		statuscode: OptionSet.solutioncomponentconfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace solutioncomponentconfiguration {
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
		enum FileFormat {
			/** 1 */
			json,
			/** 0 */
			xml
		}
		enum FileScope {
			/** 2 */
			Global,
			/** 1 */
			Individual,
			/** 0 */
			None
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}