//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInformation_Enhanced {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn trạng thái của lời mời. */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_invitation_advanced_tab_Sections {
			_62B474B9_CC48_4B2F_8FD8_B190D697DCE8: DevKit.Controls.Section;
		}
		interface tab_invitation_general_tab_Sections {
			_26C36B89_7F53_4CED_9D97_934A779815E6: DevKit.Controls.Section;
			_656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5: DevKit.Controls.Section;
			invitee_section: DevKit.Controls.Section;
			invitees_section: DevKit.Controls.Section;
			redemption_section: DevKit.Controls.Section;
			redemptions_section: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
		}
		interface tab_invitation_advanced_tab extends DevKit.Controls.ITab {
			Section: tab_invitation_advanced_tab_Sections;
		}
		interface tab_invitation_general_tab extends DevKit.Controls.ITab {
			Section: tab_invitation_general_tab_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			invitation_advanced_tab: tab_invitation_advanced_tab;
			invitation_general_tab: tab_invitation_general_tab;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Một bản ghi khách hàng để gán người liên hệ đã yêu cầu quy đổi. */
			adx_assignToAccount: DevKit.Controls.Lookup;
			/** Ngày mà lời mời không còn hiệu lực quy đổi. */
			adx_expiryDate: DevKit.Controls.Date;
			/** Hiển thị người dùng đang thực hiện quy đổi lời mời. */
			adx_invitationCode: DevKit.Controls.String;
			/** Người liên hệ để gửi lời mời. */
			adx_inviteContact: DevKit.Controls.Lookup;
			/** Người liên hệ đã mời. */
			adx_invitercontact: DevKit.Controls.Lookup;
			adx_maximumRedemptions: DevKit.Controls.Integer;
			/** Loại tên thực thể tùy chỉnh. */
			adx_name: DevKit.Controls.String;
			/** Người liên hệ được liên kết với việc quy đổi lời mời này. */
			adx_redeemedContact: DevKit.Controls.Lookup;
			/** Con số thực tại số lần lời mời này đã được thực hiện quy đổi. */
			adx_redemptions: DevKit.Controls.Integer;
			/** Quy trình làm việc sẽ thực hiện trên người liên hệ yêu cầu quy đổi. */
			adx_redemptionWorkflow: DevKit.Controls.Lookup;
			/** Loại lời mời. */
			adx_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Nhập người dùng được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			adx_invitation_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			adx_invitation_adx_portalcomments: DevKit.Controls.NavigationItem,
			adx_invitation_Appointments: DevKit.Controls.NavigationItem,
			adx_invitation_Emails: DevKit.Controls.NavigationItem,
			adx_invitation_PhoneCalls: DevKit.Controls.NavigationItem,
			adx_invitation_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			InviteContacts: DevKit.Controls.Grid;
			PowerPageComponent_AssignToWebRoles: DevKit.Controls.Grid;
			RedeemedContacts: DevKit.Controls.Grid;
		}
	}
	class FormInformation_Enhanced extends DevKit.IForm {
		/**
		* Information (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Information_Enhanced */
		Body: DevKit.FormInformation_Enhanced.Body;
		/** The Header section of form Information_Enhanced */
		Header: DevKit.FormInformation_Enhanced.Header;
		/** The Navigation of form Information_Enhanced */
		Navigation: DevKit.FormInformation_Enhanced.Navigation;
		/** The Grid of form Information_Enhanced */
		Grid: DevKit.FormInformation_Enhanced.Grid;
		/** The SidePanes of form Information_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	class adx_invitationApi {
		/**
		* DynamicsCrm.DevKit adx_invitationApi
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
		/** Một bản ghi khách hàng để gán người liên hệ đã yêu cầu quy đổi. */
		adx_assignToAccount: string;
		/** Ngày mà lời mời không còn hiệu lực quy đổi. */
		adx_expiryDate_UtcDateOnly: Date;
		/** Hiển thị người dùng đang thực hiện quy đổi lời mời. */
		adx_invitationCode: string;
		/** Hiển thị phiên bản thực thể. */
		adx_invitationId: string;
		/** Người liên hệ để gửi lời mời. */
		adx_inviteContact: string;
		/** Người liên hệ đã mời. */
		adx_invitercontact: string;
		adx_maximumRedemptions: number;
		/** Loại tên thực thể tùy chỉnh. */
		adx_name: string;
		/** Người liên hệ được liên kết với việc quy đổi lời mời này. */
		adx_redeemedContact: string;
		/** Con số thực tại số lần lời mời này đã được thực hiện quy đổi. */
		adx_redemptions: number;
		/** Quy trình làm việc sẽ thực hiện trên người liên hệ yêu cầu quy đổi. */
		adx_redemptionWorkflow: string;
		/** Loại lời mời. */
		adx_type: OptionSet.adx_invitation.adx_type;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		mspp_websiteid: string;
		/** Hiển thị ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Hiển thị đơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái Lời mời */
		statecode: OptionSet.adx_invitation.statecode;
		/** Chọn trạng thái của lời mời. */
		statuscode: OptionSet.adx_invitation.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Một bản ghi khách hàng để gán người liên hệ đã yêu cầu quy đổi. */
			readonly adx_assignToAccount: string;
			/** Ngày mà lời mời không còn hiệu lực quy đổi. */
			readonly adx_expiryDate_UtcDateOnly: string;
			/** Hiển thị người dùng đang thực hiện quy đổi lời mời. */
			readonly adx_invitationCode: string;
			/** Hiển thị phiên bản thực thể. */
			readonly adx_invitationId: string;
			/** Người liên hệ để gửi lời mời. */
			readonly adx_inviteContact: string;
			/** Người liên hệ đã mời. */
			readonly adx_invitercontact: string;
			readonly adx_maximumRedemptions: string;
			/** Loại tên thực thể tùy chỉnh. */
			readonly adx_name: string;
			/** Người liên hệ được liên kết với việc quy đổi lời mời này. */
			readonly adx_redeemedContact: string;
			/** Con số thực tại số lần lời mời này đã được thực hiện quy đổi. */
			readonly adx_redemptions: string;
			/** Quy trình làm việc sẽ thực hiện trên người liên hệ yêu cầu quy đổi. */
			readonly adx_redemptionWorkflow: string;
			/** Loại lời mời. */
			readonly adx_type: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			readonly mspp_websiteid: string;
			/** Hiển thị ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Hiển thị đơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái Lời mời */
			readonly statecode: string;
			/** Chọn trạng thái của lời mời. */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_invitation {
		enum adx_type {
			/** 756150000 */
			Doc_than,
			/** 756150001 */
			Nhom
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 756150000 */
			Da_gui,
			/** 756150001 */
			Da_quy_doi,
			/** 2 */
			Khong_hoat_dong,
			/** 1 */
			Moi
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