//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ImportDataApi {
		/**
		* DynamicsCrm.DevKit ImportDataApi
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
		/** Mã định danh duy nhất của người dùng đã tạo dữ liệu nhập. */
		readonly CreatedBy: string;
		/** Ngày và giờ đã tạo dữ liệu nhập. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo importdata. */
		readonly CreatedOnBehalfBy: string;
		/** Hàng dữ liệu của tệp nhập. */
		Data: string;
		/** Loại lỗi nhập. */
		ErrorType: OptionSet.ImportData.ErrorType;
		/** Thông tin về việc liệu dữ liệu nhập này có lỗi hay không. */
		HasError: boolean;
		/** Mã định danh duy nhất của dữ liệu nhập. */
		ImportDataId: string;
		/** Mã định danh duy nhất của tệp nhập cho dữ liệu nhập này. */
		ImportFileId: string;
		/** Số dòng ban đầu của dữ liệu hiển thị trong tệp. */
		LineNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối dữ liệu nhập. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi lần cuối dữ liệu nhập. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối importdata. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Đơn vị kinh doanh sở hữu dữ liệu nhập. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu dữ liệu nhập. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu dữ liệu nhập. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của bản ghi. */
		RecordId: string;
		/** Trạng thái của dữ liệu nhập. */
		readonly StateCode: OptionSet.ImportData.StateCode;
		/** Lý do cho trạng thái của dữ liệu nhập. */
		StatusCode: OptionSet.ImportData.StatusCode;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo dữ liệu nhập. */
			readonly CreatedBy: string;
			/** Ngày và giờ đã tạo dữ liệu nhập. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo importdata. */
			readonly CreatedOnBehalfBy: string;
			/** Hàng dữ liệu của tệp nhập. */
			readonly Data: string;
			/** Loại lỗi nhập. */
			readonly ErrorType: string;
			/** Thông tin về việc liệu dữ liệu nhập này có lỗi hay không. */
			readonly HasError: string;
			/** Mã định danh duy nhất của dữ liệu nhập. */
			readonly ImportDataId: string;
			/** Mã định danh duy nhất của tệp nhập cho dữ liệu nhập này. */
			readonly ImportFileId: string;
			/** Số dòng ban đầu của dữ liệu hiển thị trong tệp. */
			readonly LineNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối dữ liệu nhập. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi lần cuối dữ liệu nhập. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối importdata. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Đơn vị kinh doanh sở hữu dữ liệu nhập. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu dữ liệu nhập. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu dữ liệu nhập. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của bản ghi. */
			readonly RecordId: string;
			/** Trạng thái của dữ liệu nhập. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của dữ liệu nhập. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportData {
		enum ErrorType {
			/** 1 */
			Cap_nhat,
			/** 0 */
			Tao
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