//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class LookUpMappingApi {
		/**
		* DynamicsCrm.DevKit LookUpMappingApi
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
		/** Mã định danh duy nhất của ánh xạ cột liên kết với ánh xạ tra cứu này. */
		ColumnMappingId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.LookUpMapping.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo ánh xạ tra cứu. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo ánh xạ tra cứu. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo ánh xạ tra cứu. */
		readonly CreatedOnBehalfBy: string;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Tên của trường có tra cứu được liên kết. */
		LookUpAttributeName: string;
		/** Tên của thực thể có tra cứu được liên kết. */
		LookUpEntityName: string;
		/** Mã định danh duy nhất của ánh xạ tra cứu. */
		LookUpMappingId: string;
		/** Mã định danh duy nhất của Ánh xạ Tra cứu. */
		readonly LookUpMappingIdUnique: string;
		/** Mã nguồn tra cứu cho ánh xạ tra cứu. */
		LookUpSourceCode: OptionSet.LookUpMapping.LookUpSourceCode;
		/** Mã định danh duy nhất của người dùng sửa đổi ánh xạ tra cứu lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi ánh xạ tra cứu lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi ánh xạ tra cứu lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Thông tin về việc có cần phải xử lý ánh xạ tra cứu hay không. */
		ProcessCode: OptionSet.LookUpMapping.ProcessCode;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của ánh xạ tra cứu. */
		readonly StateCode: OptionSet.LookUpMapping.StateCode;
		/** Lý do dẫn đến trạng thái của ánh xạ tra cứu. */
		StatusCode: OptionSet.LookUpMapping.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của ánh xạ tham số chuyển đổi liên kết với ánh xạ tra cứu này. */
		TransformationParameterMappingId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của ánh xạ cột liên kết với ánh xạ tra cứu này. */
			readonly ColumnMappingId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo ánh xạ tra cứu. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo ánh xạ tra cứu. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo ánh xạ tra cứu. */
			readonly CreatedOnBehalfBy: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Tên của trường có tra cứu được liên kết. */
			readonly LookUpAttributeName: string;
			/** Tên của thực thể có tra cứu được liên kết. */
			readonly LookUpEntityName: string;
			/** Mã định danh duy nhất của ánh xạ tra cứu. */
			readonly LookUpMappingId: string;
			/** Mã định danh duy nhất của Ánh xạ Tra cứu. */
			readonly LookUpMappingIdUnique: string;
			/** Mã nguồn tra cứu cho ánh xạ tra cứu. */
			readonly LookUpSourceCode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi ánh xạ tra cứu lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi ánh xạ tra cứu lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi ánh xạ tra cứu lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Thông tin về việc có cần phải xử lý ánh xạ tra cứu hay không. */
			readonly ProcessCode: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của ánh xạ tra cứu. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của ánh xạ tra cứu. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của ánh xạ tham số chuyển đổi liên kết với ánh xạ tra cứu này. */
			readonly TransformationParameterMappingId: string;
		}
	}
}
declare namespace OptionSet {
	namespace LookUpMapping {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum LookUpSourceCode {
			/** 1 */
			He_thong,
			/** 0 */
			Nguon
		}
		enum ProcessCode {
			/** 2 */
			Bo_qua,
			/** 3 */
			Noi_bo,
			/** 1 */
			Quy_trinh
		}
		enum StateCode {
			/** 0 */
			Hien_hoat
		}
		enum StatusCode {
			/** 0 */
			Hien_hoat
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