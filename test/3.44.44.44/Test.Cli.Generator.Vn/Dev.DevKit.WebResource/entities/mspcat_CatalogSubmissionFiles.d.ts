//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBieu_mau_thong_tin_chinh {
		interface Header extends DevKit.Controls.IHeader {
			/** Trạng thái của tệp gửi tới danh mục */
			statecode: DevKit.Controls.OptionSet;
			/** Lý do dẫn đến trạng thái của tệp gửi tới danh mục */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Mã định danh duy nhất của người dùng tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo bản ghi. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng đại diện sửa đổi bản ghi. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Mô tả về mục trong tệp */
			mspcat_Description: DevKit.Controls.String;
			mspcat_file: DevKit.Controls.File;
			/** Loại tệp được mô tả */
			mspcat_FileType: DevKit.Controls.OptionSet;
			/** Kích thước hình ảnh được mô tả */
			mspcat_ImageSize: DevKit.Controls.OptionSet;
			mspcat_Name: DevKit.Controls.String;
			/** Mục trong kho gói liên quan. */
			mspcat_PackageStore: DevKit.Controls.Lookup;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormBieu_mau_thong_tin_chinh extends DevKit.IForm {
		/**
		* Biểu mẫu thông tin chính [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_thong_tin_chinh */
		Body: DevKit.FormBieu_mau_thong_tin_chinh.Body;
		/** The Header section of form Bieu_mau_thong_tin_chinh */
		Header: DevKit.FormBieu_mau_thong_tin_chinh.Header;
		/** The Navigation of form Bieu_mau_thong_tin_chinh */
		Navigation: DevKit.FormBieu_mau_thong_tin_chinh.Navigation;
		/** The SidePanes of form Bieu_mau_thong_tin_chinh */
		SidePanes: DevKit.SidePanes;
	}
	class mspcat_CatalogSubmissionFilesApi {
		/**
		* DynamicsCrm.DevKit mspcat_CatalogSubmissionFilesApi
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
		/** Mã định danh duy nhất của người dùng tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của lần nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho phiên bản thực thể */
		mspcat_CatalogSubmissionFilesId: string;
		/** Mô tả về mục trong tệp */
		mspcat_Description: string;
		/** Tài sản tệp */
		readonly mspcat_File_name: string;
		/** Loại tệp được mô tả */
		mspcat_FileType: OptionSet.mspcat_CatalogSubmissionFiles.mspcat_FileType;
		/** Kích thước hình ảnh được mô tả */
		mspcat_ImageSize: OptionSet.mspcat_CatalogSubmissionFiles.mspcat_ImageSize;
		mspcat_Name: string;
		/** Mục trong kho gói liên quan. */
		mspcat_PackageStore: string;
		/** Ngày và giờ di chuyển bản ghi. */
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
		/** Trạng thái của tệp gửi tới danh mục */
		statecode: OptionSet.mspcat_CatalogSubmissionFiles.statecode;
		/** Lý do dẫn đến trạng thái của tệp gửi tới danh mục */
		statuscode: OptionSet.mspcat_CatalogSubmissionFiles.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của lần nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			readonly mspcat_CatalogSubmissionFilesId: string;
			/** Mô tả về mục trong tệp */
			readonly mspcat_Description: string;
			/** Tài sản tệp */
			readonly mspcat_File_name: string;
			/** Loại tệp được mô tả */
			readonly mspcat_FileType: string;
			/** Kích thước hình ảnh được mô tả */
			readonly mspcat_ImageSize: string;
			readonly mspcat_Name: string;
			/** Mục trong kho gói liên quan. */
			readonly mspcat_PackageStore: string;
			/** Ngày và giờ di chuyển bản ghi. */
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
			/** Trạng thái của tệp gửi tới danh mục */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của tệp gửi tới danh mục */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspcat_CatalogSubmissionFiles {
		enum mspcat_FileType {
			/** 526430000 */
			Hinh_anh,
			/** 526430001 */
			Tai_lieu,
			/** 526430002 */
			Video
		}
		enum mspcat_ImageSize {
			/** 526430001 */
			_216_x_216,
			/** 526430000 */
			_48_x_48,
			/** 526430002 */
			Anh_chup_man_hinh
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