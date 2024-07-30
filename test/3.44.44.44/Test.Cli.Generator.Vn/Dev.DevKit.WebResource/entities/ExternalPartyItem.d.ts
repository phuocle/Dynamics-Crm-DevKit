//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn trạng thái của mục bên ngoài. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Chọn cấu hình truy cập kênh được dùng để xác định các quyền khi truy cập CRM từ kênh bên ngoài. */
			ChannelAccessProfileId: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo bản ghi. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Nhập bản ghi của bên ngoài có mục này được tạo. */
			ExternalPartyId: DevKit.Controls.Lookup;
			/** Hiện ngày và giờ vô hiệu hóa lần cuối mục bên ngoài cho quyền truy cập kênh bên ngoài. */
			LastDisabledOn: DevKit.Controls.Date;
			/** Hiện ngày và giờ kích hoạt lần cuối mục bên ngoài cho quyền truy cập kênh bên ngoài. */
			LastEnabledOn: DevKit.Controls.Date;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Nhập tên của mục bên ngoài. */
			Name: DevKit.Controls.String;
			/** Chọn bản ghi đã kích hoạt bên ngoài được liên kết với mục bên ngoài này. */
			RegardingObjectId: DevKit.Controls.Lookup;
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
	class ExternalPartyItemApi {
		/**
		* DynamicsCrm.DevKit ExternalPartyItemApi
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
		/** Chọn cấu hình truy cập kênh được dùng để xác định các quyền khi truy cập CRM từ kênh bên ngoài. */
		ChannelAccessProfileId: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tỷ giá của loại tiền được liên kết với mục bên ngoài theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Nhập bản ghi của bên ngoài có mục này được tạo. */
		ExternalPartyId: string;
		/** Mã định danh duy nhất của phiên bản bên ngoài */
		ExternalPartyItemId: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
		IntroducedVersion: string;
		/** Hiện ngày và giờ vô hiệu hóa lần cuối mục bên ngoài cho quyền truy cập kênh bên ngoài. */
		LastDisabledOn_UtcDateOnly: Date;
		/** Hiện ngày và giờ kích hoạt lần cuối mục bên ngoài cho quyền truy cập kênh bên ngoài. */
		LastEnabledOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên của mục bên ngoài. */
		Name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Chọn bản ghi đã kích hoạt bên ngoài được liên kết với mục bên ngoài này. */
		regardingobjectid_contact: string;
		/** Chọn bản ghi đã kích hoạt bên ngoài được liên kết với mục bên ngoài này. */
		regardingobjectid_systemuser: string;
		/** Cho biết mục bên ngoài được kích hoạt hay bị vô hiệu hóa. */
		StateCode: OptionSet.ExternalPartyItem.StateCode;
		/** Chọn trạng thái của mục bên ngoài. */
		StatusCode: OptionSet.ExternalPartyItem.StatusCode;
		/** Tỷ giá của loại tiền được liên kết với ExternalPartyItem theo loại tiền gốc. */
		TransactionCurrencyId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chọn cấu hình truy cập kênh được dùng để xác định các quyền khi truy cập CRM từ kênh bên ngoài. */
			readonly ChannelAccessProfileId: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tỷ giá của loại tiền được liên kết với mục bên ngoài theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Nhập bản ghi của bên ngoài có mục này được tạo. */
			readonly ExternalPartyId: string;
			/** Mã định danh duy nhất của phiên bản bên ngoài */
			readonly ExternalPartyItemId: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Hiện ngày và giờ vô hiệu hóa lần cuối mục bên ngoài cho quyền truy cập kênh bên ngoài. */
			readonly LastDisabledOn_UtcDateOnly: string;
			/** Hiện ngày và giờ kích hoạt lần cuối mục bên ngoài cho quyền truy cập kênh bên ngoài. */
			readonly LastEnabledOn_UtcDateOnly: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên của mục bên ngoài. */
			readonly Name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chọn bản ghi đã kích hoạt bên ngoài được liên kết với mục bên ngoài này. */
			readonly regardingobjectid_contact: string;
			/** Chọn bản ghi đã kích hoạt bên ngoài được liên kết với mục bên ngoài này. */
			readonly regardingobjectid_systemuser: string;
			/** Cho biết mục bên ngoài được kích hoạt hay bị vô hiệu hóa. */
			readonly StateCode: string;
			/** Chọn trạng thái của mục bên ngoài. */
			readonly StatusCode: string;
			/** Tỷ giá của loại tiền được liên kết với ExternalPartyItem theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExternalPartyItem {
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 0 */
			Da_kich_hoat,
			/** 1 */
			Da_vo_hieu
		}
		enum StatusCode {
			/** 1 */
			Da_kich_hoat,
			/** 2 */
			Da_vo_hieu
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