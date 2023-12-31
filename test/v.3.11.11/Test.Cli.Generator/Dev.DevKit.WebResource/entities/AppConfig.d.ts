//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigApi {
		/**
		* DynamicsCrm.DevKit AppConfigApi
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
		/** System-populated app configuration ID. */
		readonly AppConfigId: string;
		/** System-populated app configuration unique ID. */
		AppConfigIdUnique: string;
		/** The App Config diff computed for managed solutions containing the AppConfig entity. For internal use only. */
		AppConfigImportXml: string;
		/** Choose the app module to associate with the app configuration. */
		AppModuleId: string;
		/** For internal use only */
		readonly ComponentState: OptionSet.AppConfig.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. */
		readonly ImportSequenceNumber: number;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string;
		/** Is Managed */
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** Internal use only */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Shows whether the app configuration is Active or Inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.AppConfig.StateCode;
		/** Select the status. */
		StatusCode: OptionSet.AppConfig.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** System-populated app configuration ID. */
			readonly AppConfigId: string;
			/** System-populated app configuration unique ID. */
			readonly AppConfigIdUnique: string;
			/** The App Config diff computed for managed solutions containing the AppConfig entity. For internal use only. */
			readonly AppConfigImportXml: string;
			/** Choose the app module to associate with the app configuration. */
			readonly AppModuleId: string;
			/** For internal use only */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Internal use only */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows whether the app configuration is Active or Inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Select the status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfig {
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
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}