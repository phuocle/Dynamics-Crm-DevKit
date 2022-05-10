//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormImportJob_Information {
		interface Tabs {
		}
		interface Body {
			/** Import Progress Percentage. */
			Progress: DevKit.Controls.Double;
			/** Unique identifier of the solution. */
			SolutionName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormImportJob_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ImportJob_Information */
		Body: DevKit.FormImportJob_Information.Body;
		/** The Process of form ImportJob_Information */
		Process: DevKit.FormImportJob_Information.Process;
		/** The SidePanes of form ImportJob_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ImportJobApi {
		/**
		* DynamicsCrm.DevKit ImportJobApi
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
		/** Date and time when the import job was completed. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Unique identifier of the user who created the importJob. */
		readonly CreatedBy: string;
		/** Date and time when the import job record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the import job record. */
		readonly CreatedOnBehalfBy: string;
		/** Unstructured data associated with the import job. */
		Data: string;
		/** The context of the import */
		ImportContext: string;
		/** Unique identifier of the import job. */
		ImportJobId: string;
		/** Unique identifier of the user who modified the importJob. */
		readonly ModifiedBy: string;
		/** Date and time when the import job was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the import job record. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the import job. */
		Name: string;
		/** The context of the solution operation */
		OperationContext: string;
		/** Unique identifier of the organization associated with the importjob. */
		readonly OrganizationId: string;
		/** Import Progress Percentage. */
		Progress: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Unique identifier of the solution. */
		SolutionName: string;
		/** Date and time when the import job was started. */
		readonly StartedOn_UtcDateAndTime: Date;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Date and time when the import job was completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier of the user who created the importJob. */
			readonly CreatedBy: string;
			/** Date and time when the import job record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the import job record. */
			readonly CreatedOnBehalfBy: string;
			/** Unstructured data associated with the import job. */
			readonly Data: string;
			/** The context of the import */
			readonly ImportContext: string;
			/** Unique identifier of the import job. */
			readonly ImportJobId: string;
			/** Unique identifier of the user who modified the importJob. */
			readonly ModifiedBy: string;
			/** Date and time when the import job was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the import job record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the import job. */
			readonly Name: string;
			/** The context of the solution operation */
			readonly OperationContext: string;
			/** Unique identifier of the organization associated with the importjob. */
			readonly OrganizationId: string;
			/** Import Progress Percentage. */
			readonly Progress: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Unique identifier of the solution. */
			readonly SolutionName: string;
			/** Date and time when the import job was started. */
			readonly StartedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportJob {
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