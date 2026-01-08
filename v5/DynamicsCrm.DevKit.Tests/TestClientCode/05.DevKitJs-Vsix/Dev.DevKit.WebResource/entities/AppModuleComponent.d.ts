//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AppModuleComponentApi {
		/**
		* DynamicsCrm.DevKit AppModuleComponentApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier for entity instances */
		AppModuleComponentId: string | null;
		/** Unique identifier of the Application Component used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleComponentIdUnique: string | null;
		/** The App Module Id Unique */
		AppModuleIdUnique: string | null;
		/** The object type code of the component. */
		ComponentType: OptionSet.AppModuleComponent.ComponentType | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Exchange rate for the currency associated with the Application Component with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Version in which the application component record is introduced. */
		IntroducedVersion: string | null;
		/** Is Default */
		IsDefault: boolean | null;
		/** Is Metadata */
		IsMetadata: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Object Id */
		ObjectId: string | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** The parent ID of the subcomponent, which will be a root */
		RootAppModuleComponentId: string | null;
		/** Indicates the include behavior of the root component. */
		RootComponentBehavior: OptionSet.AppModuleComponent.RootComponentBehavior | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly AppModuleComponentId: string;
			/** Unique identifier of the Application Component used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly AppModuleComponentIdUnique: string;
			/** The App Module Id Unique */
			readonly AppModuleIdUnique: string;
			/** The object type code of the component. */
			readonly ComponentType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the Application Component with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Version in which the application component record is introduced. */
			readonly IntroducedVersion: string;
			/** Is Default */
			readonly IsDefault: string;
			/** Is Metadata */
			readonly IsMetadata: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Object Id */
			readonly ObjectId: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** The parent ID of the subcomponent, which will be a root */
			readonly RootAppModuleComponentId: string;
			/** Indicates the include behavior of the root component. */
			readonly RootComponentBehavior: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModuleComponent {
		enum ComponentType {
			/** Business_Process_Flows = 29*/
			Business_Process_Flows = 29,
			/** Charts = 59*/
			Charts = 59,
			/** Command_Ribbon_for_Forms_Grids_sub_grids = 48*/
			Command_Ribbon_for_Forms_Grids_sub_grids = 48,
			/** Entities = 1*/
			Entities = 1,
			/** Forms = 60*/
			Forms = 60,
			/** Sitemap = 62*/
			Sitemap = 62,
			/** Views = 26*/
			Views = 26
		}
		enum RootComponentBehavior {
			/** Do_not_include_subcomponents = 1*/
			Do_not_include_subcomponents = 1,
			/** Include_As_Shell_Only = 2*/
			Include_As_Shell_Only = 2,
			/** Include_Subcomponents = 0*/
			Include_Subcomponents = 0
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}