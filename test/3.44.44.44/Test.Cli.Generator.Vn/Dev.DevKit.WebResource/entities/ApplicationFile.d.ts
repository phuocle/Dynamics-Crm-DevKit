﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ApplicationFileApi {
		/**
		* DynamicsCrm.DevKit ApplicationFileApi
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
		/** Nội dung của tệp ứng dụng */
		Body: string;
		/** Mã định danh duy nhất của người dùng đã tạo tệp ứng dụng. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo tệp ứng dụng. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo applicationfile. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của phiên bản tệp ứng dụng */
		FileId: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi tệp ứng dụng lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi tệp ứng dụng. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi applicationfile lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên tệp */
		Name: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nội dung của tệp ứng dụng */
			readonly Body: string;
			/** Mã định danh duy nhất của người dùng đã tạo tệp ứng dụng. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo tệp ứng dụng. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo applicationfile. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của phiên bản tệp ứng dụng */
			readonly FileId: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi tệp ứng dụng lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi tệp ứng dụng. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi applicationfile lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên tệp */
			readonly Name: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ApplicationFile {
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