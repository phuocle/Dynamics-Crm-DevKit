﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleMetadataApi {
		/**
		* DynamicsCrm.DevKit AppModuleMetadataApi
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
		AppModuleId: string;
		/** For internal use only. */
		AppModuleMetadataId: string;
		/** For internal use only. */
		ComponentId: string;
		/** For internal use only. */
		ComponentIsDefault: boolean;
		/** For internal use only. */
		ComponentIsQuickFindQuery: boolean;
		/** For internal use only. */
		ComponentIsTabletEnabled: boolean;
		/** For internal use only. */
		ComponentIsUserChart: boolean;
		/** For internal use only. */
		ComponentIsUserForm: boolean;
		/** For internal use only. */
		ComponentIsUserView: boolean;
		/** For internal use only. */
		ComponentStateCode: number;
		/** For internal use only. */
		ComponentSubType: number;
		/** For internal use only. */
		ComponentType: number;
		/** For internal use only. */
		ComponentVersion: number;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** For internal use only. */
		ParentComponentId: string;
		/** For internal use only. */
		State: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly AppModuleId: string;
			/** For internal use only. */
			readonly AppModuleMetadataId: string;
			/** For internal use only. */
			readonly ComponentId: string;
			/** For internal use only. */
			readonly ComponentIsDefault: string;
			/** For internal use only. */
			readonly ComponentIsQuickFindQuery: string;
			/** For internal use only. */
			readonly ComponentIsTabletEnabled: string;
			/** For internal use only. */
			readonly ComponentIsUserChart: string;
			/** For internal use only. */
			readonly ComponentIsUserForm: string;
			/** For internal use only. */
			readonly ComponentIsUserView: string;
			/** For internal use only. */
			readonly ComponentStateCode: string;
			/** For internal use only. */
			readonly ComponentSubType: string;
			/** For internal use only. */
			readonly ComponentType: string;
			/** For internal use only. */
			readonly ComponentVersion: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ParentComponentId: string;
			/** For internal use only. */
			readonly State: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModuleMetadata {
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