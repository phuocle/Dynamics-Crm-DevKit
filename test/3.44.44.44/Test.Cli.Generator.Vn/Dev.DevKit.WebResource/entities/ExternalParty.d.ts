//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu bản ghi. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của bên ngoài */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Chứa giá trị được dùng để phát hiện và tránh các bản ghi trùng lắp của bên ngoài. */
			CorrelationKey: DevKit.Controls.String;
			/** Hiển thị địa chỉ email bắt nguồn từ bản ghi tương đương đã kích hoạt làm bên ngoài và hiển thị địa chỉ email của người dùng bên ngoài. */
			EmailAddress: DevKit.Controls.String;
			/** Nhập tên đầy đủ của bên ngoài. */
			FullName: DevKit.Controls.String;
			/** Cho biết ngày bên ngoài bị vô hiệu lần cuối. */
			LastDisabledOn: DevKit.Controls.Date;
			/** Cho biết ngày bên ngoài được kích hoạt lần cuối. */
			LastEnabledOn: DevKit.Controls.Date;
		}
		interface Navigation {
			externalparty_entries: DevKit.Controls.NavigationItem,
			lk_externalparty_account_createdby: DevKit.Controls.NavigationItem,
			lk_externalparty_account_modifiedby: DevKit.Controls.NavigationItem,
			lk_externalparty_contact_createdby: DevKit.Controls.NavigationItem,
			lk_externalparty_contact_modifiedby: DevKit.Controls.NavigationItem,
			lk_externalparty_subject_createdby: DevKit.Controls.NavigationItem,
			lk_externalparty_subject_modifiedby: DevKit.Controls.NavigationItem
		}
		interface Grid {
			externalPartyItemsGrid: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class ExternalPartyApi {
		/**
		* DynamicsCrm.DevKit ExternalPartyApi
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
		/** Chứa giá trị được dùng để phát hiện và tránh các bản ghi trùng lắp của bên ngoài. */
		CorrelationKey: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Hiển thị địa chỉ email bắt nguồn từ bản ghi tương đương đã kích hoạt làm bên ngoài và hiển thị địa chỉ email của người dùng bên ngoài. */
		EmailAddress: string;
		/** Tỷ giá của loại tiền được liên kết với ExternalParty theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của phiên bản thực thể */
		ExternalPartyId: string;
		/** Mã định danh duy nhất của Bên ngoài được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook */
		readonly ExternalPartyIdUnique: string;
		/** Nhập tên của bên ngoài. */
		FirstName: string;
		/** Nhập tên đầy đủ của bên ngoài. */
		FullName: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết ngày bên ngoài bị vô hiệu lần cuối. */
		LastDisabledOn_UtcDateOnly: Date;
		/** Cho biết ngày bên ngoài được kích hoạt lần cuối. */
		LastEnabledOn_UtcDateOnly: Date;
		/** Nhập họ của bên ngoài. */
		LastName: string;
		/** Nhập tên đệm của bên ngoài. */
		MiddleName: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Cho biết bên ngoài được kích hoạt hay bị vô hiệu */
		StateCode: OptionSet.ExternalParty.StateCode;
		/** Chọn trạng thái của bên ngoài */
		StatusCode: OptionSet.ExternalParty.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tỷ giá của loại tiền được liên kết với ExternalParty theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Loại bên ngoài. */
		Type: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Nhập cách phát âm tên của bên ngoài, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với bên ngoài. */
		YomiFirstName: string;
		/** Cho biết kết hợp tên và họ phiên âm tiếng Nhật của bên ngoài để có thể hiển thị tên phiên âm đầy đủ trong dạng xem và báo cáo. */
		readonly YomiFullName: string;
		/** Nhập cách phát âm họ của bên ngoài, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với bên ngoài. */
		YomiLastName: string;
		/** Nhập cách phát âm tên đệm của bên ngoài, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
		YomiMiddleName: string;
		readonly FormattedValue: {
			/** Chứa giá trị được dùng để phát hiện và tránh các bản ghi trùng lắp của bên ngoài. */
			readonly CorrelationKey: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Hiển thị địa chỉ email bắt nguồn từ bản ghi tương đương đã kích hoạt làm bên ngoài và hiển thị địa chỉ email của người dùng bên ngoài. */
			readonly EmailAddress: string;
			/** Tỷ giá của loại tiền được liên kết với ExternalParty theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ExternalPartyId: string;
			/** Mã định danh duy nhất của Bên ngoài được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook */
			readonly ExternalPartyIdUnique: string;
			/** Nhập tên của bên ngoài. */
			readonly FirstName: string;
			/** Nhập tên đầy đủ của bên ngoài. */
			readonly FullName: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết ngày bên ngoài bị vô hiệu lần cuối. */
			readonly LastDisabledOn_UtcDateOnly: string;
			/** Cho biết ngày bên ngoài được kích hoạt lần cuối. */
			readonly LastEnabledOn_UtcDateOnly: string;
			/** Nhập họ của bên ngoài. */
			readonly LastName: string;
			/** Nhập tên đệm của bên ngoài. */
			readonly MiddleName: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Cho biết bên ngoài được kích hoạt hay bị vô hiệu */
			readonly StateCode: string;
			/** Chọn trạng thái của bên ngoài */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tỷ giá của loại tiền được liên kết với ExternalParty theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Loại bên ngoài. */
			readonly Type: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Nhập cách phát âm tên của bên ngoài, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với bên ngoài. */
			readonly YomiFirstName: string;
			/** Cho biết kết hợp tên và họ phiên âm tiếng Nhật của bên ngoài để có thể hiển thị tên phiên âm đầy đủ trong dạng xem và báo cáo. */
			readonly YomiFullName: string;
			/** Nhập cách phát âm họ của bên ngoài, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với bên ngoài. */
			readonly YomiLastName: string;
			/** Nhập cách phát âm tên đệm của bên ngoài, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExternalParty {
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