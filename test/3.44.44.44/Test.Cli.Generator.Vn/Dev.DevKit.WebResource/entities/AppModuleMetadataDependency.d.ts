﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleMetadataDependencyApi {
		/**
		* DynamicsCrm.DevKit AppModuleMetadataDependencyApi
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
		/** Chỉ sử dụng nội bộ. */
		AppModuleMetadataDependencyId: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		DependentComponentId: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		RequiredComponentId: string;
		/** Chỉ sử dụng nội bộ. */
		RequiredComponentInternalId: string;
		/** Chỉ sử dụng nội bộ. */
		RequiredComponentSubType: number;
		/** Chỉ sử dụng nội bộ. */
		RequiredComponentType: number;
		/** Chỉ sử dụng nội bộ. */
		RequiredComponentVersion: number;
		/** Chỉ sử dụng nội bộ. */
		State: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly AppModuleMetadataDependencyId: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DependentComponentId: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RequiredComponentId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RequiredComponentInternalId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RequiredComponentSubType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RequiredComponentType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RequiredComponentVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly State: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModuleMetadataDependency {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}