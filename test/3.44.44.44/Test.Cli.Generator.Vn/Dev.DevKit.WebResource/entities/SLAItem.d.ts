//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLAItem_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Mã định danh duy nhất cho SLA đã liên kết với Mục SLA. */
			SLAId: DevKit.Controls.Lookup;
		}
		interface tab_tabUC_Sections {
			Actions: DevKit.Controls.Section;
			ApplicableWhen: DevKit.Controls.Section;
			PauseConfiguration: DevKit.Controls.Section;
			SuccessConditions: DevKit.Controls.Section;
			Warn_and_Fail_Duration: DevKit.Controls.Section;
		}
		interface tab_tabUC extends DevKit.Controls.ITab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			/** Action URL */
			ActionURL: DevKit.Controls.String;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			ApplicableEntity: DevKit.Controls.String;
			applicablewhencontrol: DevKit.Controls.ActionCards;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Chọn tốc độ phải đáp ứng tiêu chí thành công đến khi hệ thống xem mục SLA là không thành công và khởi tạo hành động lỗi. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
			FailureAfter: DevKit.Controls.Integer;
			/** Chọn tốc độ phải đáp ứng tiêu chí thành công đến khi hệ thống xem mục SLA là không thành công và khởi tạo hành động lỗi. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
			FailureAfter1: DevKit.Controls.Integer;
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			msdyn_CustomTimeCalculation: DevKit.Controls.Boolean;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			msdyn_CustomTimeCalculationWorkflowId: DevKit.Controls.Lookup;
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			msdyn_slakpiid: DevKit.Controls.Lookup;
			/** Nhập tên mô tả của mục thỏa thuận cấp độ dịch vụ (SLA). */
			Name: DevKit.Controls.String;
			/** Nhập tên mô tả của mục thỏa thuận cấp độ dịch vụ (SLA). */
			Name1: DevKit.Controls.String;
			successconditioncontrol: DevKit.Controls.ActionCards;
			/** Chọn tốc độ phải đáp ứng tiêu chí thành công trước khi khởi tạo hành động cảnh báo. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
			WarnAfter: DevKit.Controls.Integer;
			/** Chọn tốc độ phải đáp ứng tiêu chí thành công trước khi khởi tạo hành động cảnh báo. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
			WarnAfter1: DevKit.Controls.Integer;
			WebResource_preview: DevKit.Controls.WebResource;
			WebResource_slaitem_applicablewhen_notification: DevKit.Controls.WebResource;
			WebResource_slaitem_success_notification: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class FormSLAItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SLAItem_Information */
		Body: DevKit.FormSLAItem_Information.Body;
		/** The Header section of form SLAItem_Information */
		Header: DevKit.FormSLAItem_Information.Header;
		/** The Navigation of form SLAItem_Information */
		Navigation: DevKit.FormSLAItem_Information.Navigation;
		/** The SidePanes of form SLAItem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class SLAItemApi {
		/**
		* DynamicsCrm.DevKit SLAItemApi
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
		actionflowuniquename: string;
		/** Action URL */
		ActionURL: string;
		/** Select whether this SLA will allow pausing and resuming during the time calculation. */
		AllowPauseResume: boolean;
		ApplicableEntity: string;
		/** Điều kiện cho mục SLA */
		ApplicableWhenXml: string;
		/** Choose the business hours for calculating SLA item timelines. */
		BusinessHoursId: string;
		ChangedAttributeList: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SLAItem.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin thêm để mô tả mục SLA */
		Description: string;
		/** Tỷ giá giữa loại tiền đã liên kết với Mục SLA và loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Chọn tốc độ phải đáp ứng tiêu chí thành công đến khi hệ thống xem mục SLA là không thành công và khởi tạo hành động lỗi. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
		FailureAfter: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_AdvancedPauseConfiguration: boolean;
		msdyn_CustomTimeCalculation: boolean;
		/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
		msdyn_CustomTimeCalculationWorkflowId: string;
		msdyn_PauseConfigurationXml: string;
		/** Unique identifier for SLAKPI associated with SLA Item. */
		msdyn_slakpiid: string;
		/** Nhập tên mô tả của mục thỏa thuận cấp độ dịch vụ (SLA). */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Chọn Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) đã tạo Mục SLA này. */
		RelatedField: string;
		/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
		SequenceNumber: number;
		/** Mã định danh duy nhất cho SLA đã liên kết với Mục SLA. */
		SLAId: string;
		/** Mã định danh duy nhất của Mục SLA. */
		SLAItemId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SLAItemIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Điều kiện cho mục SLA */
		SuccessConditionsXml: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi Mục SLA. */
		readonly TransactionCurrencyId: string;
		/** Số phiên bản của Mục SLA. */
		readonly VersionNumber: number;
		/** Chọn tốc độ phải đáp ứng tiêu chí thành công trước khi khởi tạo hành động cảnh báo. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
		WarnAfter: number;
		/** Quy trình làm việc đã liên kết với Mục SLA. */
		WorkflowId: string;
		readonly FormattedValue: {
			readonly actionflowuniquename: string;
			/** Action URL */
			readonly ActionURL: string;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			readonly AllowPauseResume: string;
			readonly ApplicableEntity: string;
			/** Điều kiện cho mục SLA */
			readonly ApplicableWhenXml: string;
			/** Choose the business hours for calculating SLA item timelines. */
			readonly BusinessHoursId: string;
			readonly ChangedAttributeList: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin thêm để mô tả mục SLA */
			readonly Description: string;
			/** Tỷ giá giữa loại tiền đã liên kết với Mục SLA và loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Chọn tốc độ phải đáp ứng tiêu chí thành công đến khi hệ thống xem mục SLA là không thành công và khởi tạo hành động lỗi. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
			readonly FailureAfter: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_AdvancedPauseConfiguration: string;
			readonly msdyn_CustomTimeCalculation: string;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			readonly msdyn_CustomTimeCalculationWorkflowId: string;
			readonly msdyn_PauseConfigurationXml: string;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			readonly msdyn_slakpiid: string;
			/** Nhập tên mô tả của mục thỏa thuận cấp độ dịch vụ (SLA). */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Chọn Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) đã tạo Mục SLA này. */
			readonly RelatedField: string;
			/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
			readonly SequenceNumber: string;
			/** Mã định danh duy nhất cho SLA đã liên kết với Mục SLA. */
			readonly SLAId: string;
			/** Mã định danh duy nhất của Mục SLA. */
			readonly SLAItemId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SLAItemIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Điều kiện cho mục SLA */
			readonly SuccessConditionsXml: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi Mục SLA. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của Mục SLA. */
			readonly VersionNumber: string;
			/** Chọn tốc độ phải đáp ứng tiêu chí thành công trước khi khởi tạo hành động cảnh báo. Khoảng thời gian thực tế sẽ dựa trên giờ hoạt động như đã chỉ định trong bản ghi SLA đã liên kết. */
			readonly WarnAfter: string;
			/** Quy trình làm việc đã liên kết với Mục SLA. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SLAItem {
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