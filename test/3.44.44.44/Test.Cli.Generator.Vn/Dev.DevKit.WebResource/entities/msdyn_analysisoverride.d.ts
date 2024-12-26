//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_analysisoverrideApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysisoverrideApi
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
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho phiên bản thực thể */
		msdyn_analysisoverrideId: string;
		/** Tệp để loại trừ khỏi phân tích của trình kiểm tra giải pháp. */
		msdyn_File: string;
		/** Quy tắc của trình kiểm tra giải pháp để thay thế. */
		msdyn_Rule: string;
		/** Mức nghiêm trọng của quy tắc được dùng để thay thế giá trị nghiêm trọng của quy tắc mặc định. */
		msdyn_Severity: OptionSet.msdyn_analysisoverride.msdyn_Severity;
		/** Ngày và thời gian di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái của chế độ thay thế phân tích */
		statecode: OptionSet.msdyn_analysisoverride.statecode;
		/** Lý do dẫn đến trạng thái của chế độ thay thế phân tích */
		statuscode: OptionSet.msdyn_analysisoverride.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			readonly msdyn_analysisoverrideId: string;
			/** Tệp để loại trừ khỏi phân tích của trình kiểm tra giải pháp. */
			readonly msdyn_File: string;
			/** Quy tắc của trình kiểm tra giải pháp để thay thế. */
			readonly msdyn_Rule: string;
			/** Mức nghiêm trọng của quy tắc được dùng để thay thế giá trị nghiêm trọng của quy tắc mặc định. */
			readonly msdyn_Severity: string;
			/** Ngày và thời gian di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái của chế độ thay thế phân tích */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của chế độ thay thế phân tích */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_analysisoverride {
		enum msdyn_Severity {
			/** 192350003 */
			Cao,
			/** 192350004 */
			Nghiem_trong,
			/** 192350001 */
			Thap,
			/** 192350000 */
			Thong_tin,
			/** 192350002 */
			Trung_binh
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}