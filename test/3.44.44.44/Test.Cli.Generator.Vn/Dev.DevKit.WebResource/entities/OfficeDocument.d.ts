//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OfficeDocumentApi {
		/**
		* DynamicsCrm.DevKit OfficeDocumentApi
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
		/** Dữ liệu máy khách về tài liệu Office này. */
		ClientData: string;
		/** Số byte của tài liệu Office. */
		Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo tài liệu Office. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo tài liệu Office. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo tài liệu Office. */
		readonly CreatedOnBehalfBy: string;
		/** Bộ tùy chọn để chọn loại tài liệu Office */
		DocumentType: OptionSet.OfficeDocument.DocumentType;
		/** Trạng thái khóa tệp. */
		FileLockState: number;
		/** Kích thước Tệp. */
		FileSize: number;
		/** Mã định danh duy nhất của người dùng sửa đổi tài liệu Office lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi tài liệu Office lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi tài liệu Office. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của tài liệu Office. */
		Name: string;
		/** Mã định danh duy nhất của tài liệu Office. */
		OfficeDocumentId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Lưu trữ giá trị khóa Hàm băm SHA256. */
		SHA256: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Dữ liệu máy khách về tài liệu Office này. */
			readonly ClientData: string;
			/** Số byte của tài liệu Office. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo tài liệu Office. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo tài liệu Office. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo tài liệu Office. */
			readonly CreatedOnBehalfBy: string;
			/** Bộ tùy chọn để chọn loại tài liệu Office */
			readonly DocumentType: string;
			/** Trạng thái khóa tệp. */
			readonly FileLockState: string;
			/** Kích thước Tệp. */
			readonly FileSize: string;
			/** Mã định danh duy nhất của người dùng sửa đổi tài liệu Office lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi tài liệu Office lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi tài liệu Office. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của tài liệu Office. */
			readonly Name: string;
			/** Mã định danh duy nhất của tài liệu Office. */
			readonly OfficeDocumentId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Lưu trữ giá trị khóa Hàm băm SHA256. */
			readonly SHA256: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OfficeDocument {
		enum DocumentType {
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
		}
		enum ObjectTypeCode {
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