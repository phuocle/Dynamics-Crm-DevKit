//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn tài khoản hoặc người liên hệ chính tham gia vào mối quan hệ khách hàng. */
			CustomerId: DevKit.Controls.Lookup;
			/** Nhập thông tin bổ sung về vai trò của bên chính trong mối quan hệ khách hàng, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
			CustomerRoleDescription: DevKit.Controls.String;
			/** Chọn vai trò của bên chính hoặc đặc điểm của mối quan hệ khách hàng có với bên thứ hai. Trường này ở trạng thái chỉ đọc cho tới khi chọn cả hai bên. Quản trị viên có thể đặt cấu hình giá trị vai trò trong Quản lý Doanh nghiệp ở vùng Thiết đặt. */
			CustomerRoleId: DevKit.Controls.Lookup;
			/** Chọn tài khoản hoặc người liên hệ phụ tham gia vào mối quan hệ khách hàng. */
			PartnerId: DevKit.Controls.Lookup;
			/** Nhập thông tin bổ sung về vai trò của bên phụ trong mối quan hệ khách hàng, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
			PartnerRoleDescription: DevKit.Controls.String;
			/** Chọn vai trò của bên phụ hoặc đặc điểm của mối quan hệ khách hàng có với bên chính. Trường này ở trạng thái chỉ đọc cho tới khi chọn cả hai bên. Quản trị viên có thể đặt cấu hình giá trị vai trò trong Quản lý Doanh nghiệp ở vùng Thiết đặt. */
			PartnerRoleId: DevKit.Controls.Lookup;
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
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class CustomerRelationshipApi {
		/**
		* DynamicsCrm.DevKit CustomerRelationshipApi
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
		/** Mã định danh duy nhất mối quan hệ nghịch đảo của mối quan hệ khách hàng. */
		ConverseRelationshipId: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo mối quan hệ khách hàng. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn tài khoản hoặc người liên hệ chính tham gia vào mối quan hệ khách hàng. */
		customerid_account: string;
		/** Chọn tài khoản hoặc người liên hệ chính tham gia vào mối quan hệ khách hàng. */
		customerid_contact: string;
		/** Mã định danh duy nhất của mối quan hệ khách hàng. */
		CustomerRelationshipId: string;
		/** Nhập thông tin bổ sung về vai trò của bên chính trong mối quan hệ khách hàng, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
		CustomerRoleDescription: string;
		/** Chọn vai trò của bên chính hoặc đặc điểm của mối quan hệ khách hàng có với bên thứ hai. Trường này ở trạng thái chỉ đọc cho tới khi chọn cả hai bên. Quản trị viên có thể đặt cấu hình giá trị vai trò trong Quản lý Doanh nghiệp ở vùng Thiết đặt. */
		CustomerRoleId: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu mối quan hệ khách hàng. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt mối quan hệ khách hàng. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt mối quan hệ khách hàng. */
		readonly OwningUser: string;
		/** Chọn tài khoản hoặc người liên hệ phụ tham gia vào mối quan hệ khách hàng. */
		partnerid_account: string;
		/** Chọn tài khoản hoặc người liên hệ phụ tham gia vào mối quan hệ khách hàng. */
		partnerid_contact: string;
		/** Nhập thông tin bổ sung về vai trò của bên phụ trong mối quan hệ khách hàng, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
		PartnerRoleDescription: string;
		/** Chọn vai trò của bên phụ hoặc đặc điểm của mối quan hệ khách hàng có với bên chính. Trường này ở trạng thái chỉ đọc cho tới khi chọn cả hai bên. Quản trị viên có thể đặt cấu hình giá trị vai trò trong Quản lý Doanh nghiệp ở vùng Thiết đặt. */
		PartnerRoleId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly UniqueDscId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất mối quan hệ nghịch đảo của mối quan hệ khách hàng. */
			readonly ConverseRelationshipId: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo mối quan hệ khách hàng. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn tài khoản hoặc người liên hệ chính tham gia vào mối quan hệ khách hàng. */
			readonly customerid_account: string;
			/** Chọn tài khoản hoặc người liên hệ chính tham gia vào mối quan hệ khách hàng. */
			readonly customerid_contact: string;
			/** Mã định danh duy nhất của mối quan hệ khách hàng. */
			readonly CustomerRelationshipId: string;
			/** Nhập thông tin bổ sung về vai trò của bên chính trong mối quan hệ khách hàng, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
			readonly CustomerRoleDescription: string;
			/** Chọn vai trò của bên chính hoặc đặc điểm của mối quan hệ khách hàng có với bên thứ hai. Trường này ở trạng thái chỉ đọc cho tới khi chọn cả hai bên. Quản trị viên có thể đặt cấu hình giá trị vai trò trong Quản lý Doanh nghiệp ở vùng Thiết đặt. */
			readonly CustomerRoleId: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu mối quan hệ khách hàng. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt mối quan hệ khách hàng. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt mối quan hệ khách hàng. */
			readonly OwningUser: string;
			/** Chọn tài khoản hoặc người liên hệ phụ tham gia vào mối quan hệ khách hàng. */
			readonly partnerid_account: string;
			/** Chọn tài khoản hoặc người liên hệ phụ tham gia vào mối quan hệ khách hàng. */
			readonly partnerid_contact: string;
			/** Nhập thông tin bổ sung về vai trò của bên phụ trong mối quan hệ khách hàng, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
			readonly PartnerRoleDescription: string;
			/** Chọn vai trò của bên phụ hoặc đặc điểm của mối quan hệ khách hàng có với bên chính. Trường này ở trạng thái chỉ đọc cho tới khi chọn cả hai bên. Quản trị viên có thể đặt cấu hình giá trị vai trò trong Quản lý Doanh nghiệp ở vùng Thiết đặt. */
			readonly PartnerRoleId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly UniqueDscId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomerRelationship {
		enum CustomerIdType {
		}
		enum PartnerIdType {
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