﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleComponentApi {
		/**
		* DynamicsCrm.DevKit AppModuleComponentApi
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
		/** Unique identifier for entity instances */
		AppModuleComponentId: string;
		/** Unique identifier of the Application Component used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleComponentIdUnique: string;
		/** The App Module Id Unique */
		AppModuleIdUnique: string;
		/** The object type code of the component. */
		ComponentType: OptionSet.AppModuleComponent.ComponentType;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the Application Component with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Version in which the application component record is introduced. */
		IntroducedVersion: string;
		/** Is Default */
		IsDefault: boolean;
		/** Is Metadata */
		IsMetadata: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Object Id */
		ObjectId: string;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** The parent ID of the subcomponent, which will be a root */
		RootAppModuleComponentId: string;
		/** Indicates the include behavior of the root component. */
		RootComponentBehavior: OptionSet.AppModuleComponent.RootComponentBehavior;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace AppModuleComponent {
		enum ComponentType {
			/** 29 */
			Business_Process_Flows,
			/** 59 */
			Charts,
			/** 48 */
			Command_Ribbon_for_Forms_Grids_sub_grids,
			/** 1 */
			Entities,
			/** 60 */
			Forms,
			/** 62 */
			Sitemap,
			/** 26 */
			Views
		}
		enum RootComponentBehavior {
			/** 1 */
			Do_not_include_subcomponents,
			/** 2 */
			Include_As_Shell_Only,
			/** 0 */
			Include_Subcomponents
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}