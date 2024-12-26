//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ImportLogApi {
		/**
		* DynamicsCrm.DevKit ImportLogApi
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
		/** Thông tin bổ sung liên quan tới lỗi. */
		AdditionalInfo: string;
		/** Giá trị trong cột. */
		ColumnValue: string;
		/** Mã định danh duy nhất của người dùng đã tạo nhật ký nhập. */
		readonly CreatedBy: string;
		/** Ngày và giờ đã tạo nhật ký nhập. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo importlog. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả lỗi. */
		ErrorDescription: string;
		/** Mã lỗi của lỗi. */
		ErrorNumber: number;
		/** Tên của tiêu đề cột. */
		HeaderColumn: string;
		/** Mã định danh duy nhất của dữ liệu nhập cho nhật ký nhập này. */
		ImportDataId: string;
		/** Mã định danh duy nhất của tệp nhập cho nhật ký nhập này. */
		ImportFileId: string;
		/** Mã định danh duy nhất của nhật ký nhập. */
		ImportLogId: string;
		/** Số dòng ban đầu của dữ liệu được sử dụng trong nhật ký này. */
		LineNumber: number;
		/** Giai đoạn nhật ký được ghi lại. */
		LogPhaseCode: OptionSet.ImportLog.LogPhaseCode;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối nhật ký nhập. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi lần cuối nhật ký nhập. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối importlog. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Đơn vị kinh doanh sở hữu nhật ký nhập. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu nhật ký nhập. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu nhật ký nhập. */
		readonly OwningUser: string;
		/** Số thứ tự của lỗi trong nhật ký này. */
		readonly SequenceNumber: number;
		/** Trạng thái của nhật ký nhập. */
		readonly StateCode: OptionSet.ImportLog.StateCode;
		/** Lý do dẫn đến trạng thái của nhật ký nhập. */
		StatusCode: OptionSet.ImportLog.StatusCode;
		readonly FormattedValue: {
			/** Thông tin bổ sung liên quan tới lỗi. */
			readonly AdditionalInfo: string;
			/** Giá trị trong cột. */
			readonly ColumnValue: string;
			/** Mã định danh duy nhất của người dùng đã tạo nhật ký nhập. */
			readonly CreatedBy: string;
			/** Ngày và giờ đã tạo nhật ký nhập. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo importlog. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả lỗi. */
			readonly ErrorDescription: string;
			/** Mã lỗi của lỗi. */
			readonly ErrorNumber: string;
			/** Tên của tiêu đề cột. */
			readonly HeaderColumn: string;
			/** Mã định danh duy nhất của dữ liệu nhập cho nhật ký nhập này. */
			readonly ImportDataId: string;
			/** Mã định danh duy nhất của tệp nhập cho nhật ký nhập này. */
			readonly ImportFileId: string;
			/** Mã định danh duy nhất của nhật ký nhập. */
			readonly ImportLogId: string;
			/** Số dòng ban đầu của dữ liệu được sử dụng trong nhật ký này. */
			readonly LineNumber: string;
			/** Giai đoạn nhật ký được ghi lại. */
			readonly LogPhaseCode: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối nhật ký nhập. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi lần cuối nhật ký nhập. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối importlog. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Đơn vị kinh doanh sở hữu nhật ký nhập. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu nhật ký nhập. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu nhật ký nhập. */
			readonly OwningUser: string;
			/** Số thứ tự của lỗi trong nhật ký này. */
			readonly SequenceNumber: string;
			/** Trạng thái của nhật ký nhập. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của nhật ký nhập. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportLog {
		enum LogPhaseCode {
			/** 1 */
			Chuyen_doi,
			/** 3 */
			Nhap_Cap_nhat,
			/** 2 */
			Nhap_Tao,
			/** 0 */
			Phan_tich
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