//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Cho biết kết nối dịch vụ Azure hiện hoạt hay không hoạt động. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			connectioninfo: DevKit.Controls.Section;
			connectiontestinfo: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập khóa tài khoản Azure. */
			AccountKey: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng đã tạo kết nối dịch vụ Azure. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Nhập mô tả của kết nối dịch vụ Azure. */
			Description: DevKit.Controls.String;
			/** Hiển thị trạng thái của kết nối sau cùng đến dịch vụ Azure. */
			LastConnectionStatusCode: DevKit.Controls.OptionSet;
			/** hiển thị thời gian của kết nối sau cùng đến dịch vụ Azure. */
			LastConnectionTime: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng đã sửa đổi kết nối dịch vụ Azure. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi kết nối dịch vụ Azure lần cuối. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Nhập tên lôgic cho kết nối. */
			Name: DevKit.Controls.String;
			/** Nhập URL dịch vụ cho dịch vụ Azure. */
			ServiceUri: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Header section of form Thong_tin */
		Header: DevKit.FormThong_tin.Header;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class AzureServiceConnectionApi {
		/**
		* DynamicsCrm.DevKit AzureServiceConnectionApi
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
		/** Nhập khóa tài khoản Azure. */
		AccountKey: string;
		/** Mã định danh duy nhất của kết nối dịch vụ Azure. */
		AzureServiceConnectionId: string;
		/** Loại kết nối dịch vụ Azure */
		ConnectionType: OptionSet.AzureServiceConnection.ConnectionType;
		/** Mã định danh duy nhất của người dùng đã tạo kết nối dịch vụ Azure. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo kết nối dịch vụ Azure. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo kết nối dịch vụ Azure. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả của kết nối dịch vụ Azure. */
		Description: string;
		/** Hiển thị trạng thái của kết nối sau cùng đến dịch vụ Azure. */
		LastConnectionStatusCode: OptionSet.AzureServiceConnection.LastConnectionStatusCode;
		/** hiển thị thời gian của kết nối sau cùng đến dịch vụ Azure. */
		LastConnectionTime_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đã sửa đổi kết nối dịch vụ Azure. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi kết nối dịch vụ Azure lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi kết nối dịch vụ Azure lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên lôgic cho kết nối. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với kết nối dịch vụ Azure. */
		readonly OrganizationId: string;
		/** Nhập URL dịch vụ cho dịch vụ Azure. */
		ServiceUri: string;
		/** Cho biết kết nối dịch vụ Azure hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.AzureServiceConnection.StateCode;
		/** Chọn trạng thái của kết nối dịch vụ Azure. */
		StatusCode: OptionSet.AzureServiceConnection.StatusCode;
		readonly FormattedValue: {
			/** Nhập khóa tài khoản Azure. */
			readonly AccountKey: string;
			/** Mã định danh duy nhất của kết nối dịch vụ Azure. */
			readonly AzureServiceConnectionId: string;
			/** Loại kết nối dịch vụ Azure */
			readonly ConnectionType: string;
			/** Mã định danh duy nhất của người dùng đã tạo kết nối dịch vụ Azure. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo kết nối dịch vụ Azure. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo kết nối dịch vụ Azure. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả của kết nối dịch vụ Azure. */
			readonly Description: string;
			/** Hiển thị trạng thái của kết nối sau cùng đến dịch vụ Azure. */
			readonly LastConnectionStatusCode: string;
			/** hiển thị thời gian của kết nối sau cùng đến dịch vụ Azure. */
			readonly LastConnectionTime_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi kết nối dịch vụ Azure. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi kết nối dịch vụ Azure lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi kết nối dịch vụ Azure lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên lôgic cho kết nối. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với kết nối dịch vụ Azure. */
			readonly OrganizationId: string;
			/** Nhập URL dịch vụ cho dịch vụ Azure. */
			readonly ServiceUri: string;
			/** Cho biết kết nối dịch vụ Azure hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của kết nối dịch vụ Azure. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace AzureServiceConnection {
		enum ConnectionType {
			/** 1 */
			De_xuat,
			/** 2 */
			Phan_tich_Van_ban
		}
		enum LastConnectionStatusCode {
			/** 2 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
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