//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TimeZoneDefinitionApi {
		/**
		* DynamicsCrm.DevKit TimeZoneDefinitionApi
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
		/** Thiên về thời gian cơ bản của múi giờ. */
		Bias: number;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi múi giờ. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo bản ghi múi giờ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo timezonedefinition. */
		readonly CreatedOnBehalfBy: string;
		/** Tên múi giờ cho giờ mùa hè. */
		DaylightName: string;
		/** Mã định danh duy nhất của người dùng đã sửa bản ghi múi giờ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa đổi bản ghi múi giờ. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi timezonedefinition lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với định nghĩa múi giờ. */
		readonly OrganizationId: string;
		/** Đặt mục nhập cho định nghĩa múi giờ đã rút bỏ. 0 cho mục nhập mới nhất. */
		RetiredOrder: number;
		/** Tên múi giờ cho giờ chuẩn. */
		StandardName: string;
		/** Mã định danh múi giờ. */
		TimeZoneCode: number;
		/** Mã định danh duy nhất của bản ghi múi giờ. */
		TimeZoneDefinitionId: string;
		/** Tên hiển thị cho múi giờ trong đăng ký Microsoft Windows. */
		UserInterfaceName: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thiên về thời gian cơ bản của múi giờ. */
			readonly Bias: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi múi giờ. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo bản ghi múi giờ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo timezonedefinition. */
			readonly CreatedOnBehalfBy: string;
			/** Tên múi giờ cho giờ mùa hè. */
			readonly DaylightName: string;
			/** Mã định danh duy nhất của người dùng đã sửa bản ghi múi giờ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa đổi bản ghi múi giờ. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi timezonedefinition lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với định nghĩa múi giờ. */
			readonly OrganizationId: string;
			/** Đặt mục nhập cho định nghĩa múi giờ đã rút bỏ. 0 cho mục nhập mới nhất. */
			readonly RetiredOrder: string;
			/** Tên múi giờ cho giờ chuẩn. */
			readonly StandardName: string;
			/** Mã định danh múi giờ. */
			readonly TimeZoneCode: string;
			/** Mã định danh duy nhất của bản ghi múi giờ. */
			readonly TimeZoneDefinitionId: string;
			/** Tên hiển thị cho múi giờ trong đăng ký Microsoft Windows. */
			readonly UserInterfaceName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TimeZoneDefinition {
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