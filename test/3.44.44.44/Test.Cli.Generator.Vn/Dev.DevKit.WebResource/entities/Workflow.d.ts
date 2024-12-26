//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Mô tả quy trình. */
			Description: DevKit.Controls.String;
			/** Tên của quy trình. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu quy trình. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			adx_invitation_redemptionworkflow: DevKit.Controls.NavigationItem,
			AIPluginOperation_Workflow_Workflow: DevKit.Controls.NavigationItem,
			catalogassignment_workflow: DevKit.Controls.NavigationItem,
			Comment_Artifact_Workflow: DevKit.Controls.NavigationItem,
			convertruleitembase_workflowid: DevKit.Controls.NavigationItem,
			flowcapacityassignment_workflow: DevKit.Controls.NavigationItem,
			flowevent_workflow: DevKit.Controls.NavigationItem,
			lk_expiredprocess_processid: DevKit.Controls.NavigationItem,
			lk_newprocess_processid: DevKit.Controls.NavigationItem,
			lk_translationprocess_processid: DevKit.Controls.NavigationItem,
			msdyn_retrainworkflow_msdyn_toaimodel: DevKit.Controls.NavigationItem,
			msdyn_scheduleinferenceworkflow_msdyn_toaimodel: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_solutionhealthrule_resolutionaction: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_solutionhealthrule_Workflow: DevKit.Controls.NavigationItem,
			msdyn_workflow_slaitem_customtimecalculationworkflowid: DevKit.Controls.NavigationItem,
			process_processstage: DevKit.Controls.NavigationItem,
			process_processtrigger: DevKit.Controls.NavigationItem,
			regardingobjectid_process: DevKit.Controls.NavigationItem,
			slabase_workflowid: DevKit.Controls.NavigationItem,
			slaitembase_workflowid: DevKit.Controls.NavigationItem,
			workflow_active_workflow: DevKit.Controls.NavigationItem,
			workflow_dependencies: DevKit.Controls.NavigationItem,
			workflow_desktopflowbinary_Process: DevKit.Controls.NavigationItem,
			workflow_flowlog_cloudflowid: DevKit.Controls.NavigationItem,
			workflow_flowlog_desktopflowid: DevKit.Controls.NavigationItem,
			workflow_flowrun_Workflow: DevKit.Controls.NavigationItem,
			Workflow_licenseentitledby: DevKit.Controls.NavigationItem,
			workflow_parent_workflow: DevKit.Controls.NavigationItem,
			Workflow_routingrule: DevKit.Controls.NavigationItem,
			workflow_workflowbinary_Process: DevKit.Controls.NavigationItem,
			workflowid_convertrule: DevKit.Controls.NavigationItem,
			workflowid_profilerule: DevKit.Controls.NavigationItem
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
	class WorkflowApi {
		/**
		* DynamicsCrm.DevKit WorkflowApi
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
		/** Mã định danh duy nhất của bản ghi kích hoạt mới nhất cho quy trình. */
		readonly ActiveWorkflowId: string;
		/** Cho biết khả năng tự động xóa công việc hệ thống không đồng bộ khi hoàn thành. */
		AsyncAutoDelete: boolean;
		/** Bối cảnh thanh toán của dòng quy trình này. */
		BillingContext: string;
		/** Loại Quy trình Công việc. */
		BusinessProcessType: OptionSet.Workflow.BusinessProcessType;
		/** Thể loại của quy trình. */
		Category: OptionSet.Workflow.Category;
		/** Lôgic kinh doanh chuyển đổi thành dữ liệu máy khách */
		ClientData: string;
		/** For Internal Use Only. */
		readonly ClientDataIsCompressed: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Workflow.ComponentState;
		/** Tham chiếu kết nối liên quan đến quy trình làm việc này. */
		ConnectionReferences: string;
		/** Mã định danh duy nhất của người dùng đã tạo quy trình. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo quy trình. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo quy trình. */
		readonly CreatedOnBehalfBy: string;
		/** Tạo siêu dữ liệu cho quy trình làm việc này. */
		CreateMetadata: string;
		/** Giai đoạn của quy trình khi được kích hoạt khi Tạo. */
		CreateStage: OptionSet.Workflow.CreateStage;
		/** Định nghĩa logic kinh doanh của phiên bản quy trình làm việc này. */
		Definition: string;
		/** Giai đoạn của quy trình khi được kích hoạt khi Xóa. */
		DeleteStage: OptionSet.Workflow.DeleteStage;
		/** Quan hệ phụ thuộc mềm của phiên bản quy trình làm việc này. */
		Dependencies: string;
		/** Mô tả quy trình. */
		Description: string;
		/** Các mô-đun dòng màn hình nền liên quan đến quy trình làm việc này. */
		DesktopFlowModules: string;
		/** danh sách được phân tách bằng dấu phẩy của một hoặc nhiều Tên duy nhất của Giải pháp bên thứ nhất Dynamics mà quy trình làm việc này có trong ngữ cảnh. */
		DynamicsSolutionContext: string;
		/** Hiển thị ảnh mặc định cho bản ghi. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Mã định danh duy nhất của biểu mẫu được liên kết. */
		FormId: string;
		/** Tham số đầu vào cho quy trình. */
		InputParameters: string;
		/** Định nghĩa đầu vào cho quy trình làm việc này. */
		Inputs: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Cho biết khả năng tạo quy trình bằng ứng dụng Microsoft Dynamics 365, bản web. */
		readonly IsCrmUIWorkflow: boolean;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Defines whether other publishers can attach custom processing steps to this action */
		IsCustomProcessingStepAllowedForOtherPublishers: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Có thực thi các bước trong quy trình trong một giao dịch hay không. */
		IsTransacted: boolean;
		/** Ngôn ngữ của quy trình. */
		LanguageCode: number;
		/** Nguồn của các quyền theo giấy phép. */
		LicenseEntitledBy: string;
		/** Siêu dữ liệu bổ sung cho quy trình làm việc này. */
		Metadata: string;
		/** Cho biết chế độ của quy trình. */
		Mode: OptionSet.Workflow.Mode;
		/** Mã định danh duy nhất của người dùng sửa đổi quy trình lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi quy trình lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa quy trình lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Flow modify metadata used for telemetry, etc. */
		ModifyMetadata: string;
		/** Tên của quy trình. */
		Name: string;
		/** Cho biết có thể chạy quy trình ở dạng quy trình theo yêu cầu hay không. */
		OnDemand: boolean;
		/** Định nghĩa đầu ra cho quy trình làm việc này. */
		Outputs: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu quy trình. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu quy trình. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu quy trình. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của định nghĩa cho kích hoạt quy trình. */
		readonly ParentWorkflowId: string;
		/** Chỉ sử dụng nội bộ. */
		PlanVerified: boolean;
		/** Mã định danh duy nhất của loại bổ trợ. */
		readonly PluginTypeId: string;
		/** Bạn cần nhập thứ tự dòng quy trình công việc. */
		ProcessOrder: number;
		/** Hệ thống chứa gán vai trò cho quy trình. */
		ProcessRoleAssignment: string;
		/** Mã định danh duy nhất của biểu mẫu liên kết cho bộ kích hoạt quy trình. */
		ProcessTriggerFormId: string;
		/** Phạm vi của bộ kích hoạt quy trình. */
		ProcessTriggerScope: OptionSet.Workflow.ProcessTriggerScope;
		/** Cho biết xếp hạng cho thứ tự của việc thực thi quy trình làm việc đồng bộ. */
		Rank: number;
		/** Chỉ sử dụng nội bộ. */
		ResourceContainer: string;
		/** Chỉ sử dụng nội bộ. */
		ResourceId: string;
		/** Xác định tài khoản người dùng hệ thống mà quy trình làm việc thực thi. */
		RunAs: OptionSet.Workflow.RunAs;
		/** Phiên bản lược đồ cho quy trình làm việc này. */
		SchemaVersion: string;
		/** Phạm vi của quy trình. */
		Scope: OptionSet.Workflow.Scope;
		/** Mã định danh duy nhất của Thông điệp SDK liên kết với quy trình làm việc này. */
		readonly SdkMessageId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của quy trình làm việc */
		StateCode: OptionSet.Workflow.StateCode;
		/** Lý do dẫn đến trạng thái của quy trình làm việc */
		StatusCode: OptionSet.Workflow.StatusCode;
		/** Cho biết có thể bao gồm quy trình vào các quy trình khác ở dạng quy trình con không. */
		Subprocess: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		SuspensionReasonDetails: string;
		/** Chọn lưu vào tệp nhật ký lỗi quy trình làm việc đồng bộ. */
		SyncWorkflowLogOnFailure: boolean;
		/** Loại hành vi điều chỉnh. */
		ThrottlingBehavior: OptionSet.Workflow.ThrottlingBehavior;
		/** Cho biết hệ thống sẽ kích hoạt quy trình khi tạo thực thể chính hay không. */
		TriggerOnCreate: boolean;
		/** Cho biết hệ thống sẽ kích hoạt quy trình khi xóa thực thể chính hay không. */
		TriggerOnDelete: boolean;
		/** Thuộc tính kích hoạt quy trình khi đã cập nhật. */
		TriggerOnUpdateAttributeList: string;
		/** Chỉ sử dụng nội bộ. */
		readonly TrustedAccess: boolean;
		/** Loại quy trình. */
		Type: OptionSet.Workflow.Type;
		/** Chỉ sử dụng nội bộ. */
		readonly UIData: string;
		/** Loại quy trình Dòng giao diện người dùng. */
		UIFlowType: OptionSet.Workflow.UIFlowType;
		/** Tên duy nhất của quy trình */
		UniqueName: string;
		/** Chọn giai đoạn sẽ kích hoạt quy trình khi cập nhật. */
		UpdateStage: OptionSet.Workflow.UpdateStage;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của quy trình. */
		WorkflowId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly WorkflowIdUnique: string;
		/** XAML xác định quy trình. */
		Xaml: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của bản ghi kích hoạt mới nhất cho quy trình. */
			readonly ActiveWorkflowId: string;
			/** Cho biết khả năng tự động xóa công việc hệ thống không đồng bộ khi hoàn thành. */
			readonly AsyncAutoDelete: string;
			/** Bối cảnh thanh toán của dòng quy trình này. */
			readonly BillingContext: string;
			/** Loại Quy trình Công việc. */
			readonly BusinessProcessType: string;
			/** Thể loại của quy trình. */
			readonly Category: string;
			/** Lôgic kinh doanh chuyển đổi thành dữ liệu máy khách */
			readonly ClientData: string;
			/** For Internal Use Only. */
			readonly ClientDataIsCompressed: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Tham chiếu kết nối liên quan đến quy trình làm việc này. */
			readonly ConnectionReferences: string;
			/** Mã định danh duy nhất của người dùng đã tạo quy trình. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo quy trình. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo quy trình. */
			readonly CreatedOnBehalfBy: string;
			/** Tạo siêu dữ liệu cho quy trình làm việc này. */
			readonly CreateMetadata: string;
			/** Giai đoạn của quy trình khi được kích hoạt khi Tạo. */
			readonly CreateStage: string;
			/** Định nghĩa logic kinh doanh của phiên bản quy trình làm việc này. */
			readonly Definition: string;
			/** Giai đoạn của quy trình khi được kích hoạt khi Xóa. */
			readonly DeleteStage: string;
			/** Quan hệ phụ thuộc mềm của phiên bản quy trình làm việc này. */
			readonly Dependencies: string;
			/** Mô tả quy trình. */
			readonly Description: string;
			/** Các mô-đun dòng màn hình nền liên quan đến quy trình làm việc này. */
			readonly DesktopFlowModules: string;
			/** danh sách được phân tách bằng dấu phẩy của một hoặc nhiều Tên duy nhất của Giải pháp bên thứ nhất Dynamics mà quy trình làm việc này có trong ngữ cảnh. */
			readonly DynamicsSolutionContext: string;
			/** Hiển thị ảnh mặc định cho bản ghi. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Mã định danh duy nhất của biểu mẫu được liên kết. */
			readonly FormId: string;
			/** Tham số đầu vào cho quy trình. */
			readonly InputParameters: string;
			/** Định nghĩa đầu vào cho quy trình làm việc này. */
			readonly Inputs: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Cho biết khả năng tạo quy trình bằng ứng dụng Microsoft Dynamics 365, bản web. */
			readonly IsCrmUIWorkflow: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Defines whether other publishers can attach custom processing steps to this action */
			readonly IsCustomProcessingStepAllowedForOtherPublishers: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Có thực thi các bước trong quy trình trong một giao dịch hay không. */
			readonly IsTransacted: string;
			/** Ngôn ngữ của quy trình. */
			readonly LanguageCode: string;
			/** Nguồn của các quyền theo giấy phép. */
			readonly LicenseEntitledBy: string;
			/** Siêu dữ liệu bổ sung cho quy trình làm việc này. */
			readonly Metadata: string;
			/** Cho biết chế độ của quy trình. */
			readonly Mode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi quy trình lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi quy trình lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa quy trình lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Flow modify metadata used for telemetry, etc. */
			readonly ModifyMetadata: string;
			/** Tên của quy trình. */
			readonly Name: string;
			/** Cho biết có thể chạy quy trình ở dạng quy trình theo yêu cầu hay không. */
			readonly OnDemand: string;
			/** Định nghĩa đầu ra cho quy trình làm việc này. */
			readonly Outputs: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu quy trình. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu quy trình. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu quy trình. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của định nghĩa cho kích hoạt quy trình. */
			readonly ParentWorkflowId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PlanVerified: string;
			/** Mã định danh duy nhất của loại bổ trợ. */
			readonly PluginTypeId: string;
			/** Bạn cần nhập thứ tự dòng quy trình công việc. */
			readonly ProcessOrder: string;
			/** Hệ thống chứa gán vai trò cho quy trình. */
			readonly ProcessRoleAssignment: string;
			/** Mã định danh duy nhất của biểu mẫu liên kết cho bộ kích hoạt quy trình. */
			readonly ProcessTriggerFormId: string;
			/** Phạm vi của bộ kích hoạt quy trình. */
			readonly ProcessTriggerScope: string;
			/** Cho biết xếp hạng cho thứ tự của việc thực thi quy trình làm việc đồng bộ. */
			readonly Rank: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ResourceContainer: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ResourceId: string;
			/** Xác định tài khoản người dùng hệ thống mà quy trình làm việc thực thi. */
			readonly RunAs: string;
			/** Phiên bản lược đồ cho quy trình làm việc này. */
			readonly SchemaVersion: string;
			/** Phạm vi của quy trình. */
			readonly Scope: string;
			/** Mã định danh duy nhất của Thông điệp SDK liên kết với quy trình làm việc này. */
			readonly SdkMessageId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của quy trình làm việc */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của quy trình làm việc */
			readonly StatusCode: string;
			/** Cho biết có thể bao gồm quy trình vào các quy trình khác ở dạng quy trình con không. */
			readonly Subprocess: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly SuspensionReasonDetails: string;
			/** Chọn lưu vào tệp nhật ký lỗi quy trình làm việc đồng bộ. */
			readonly SyncWorkflowLogOnFailure: string;
			/** Loại hành vi điều chỉnh. */
			readonly ThrottlingBehavior: string;
			/** Cho biết hệ thống sẽ kích hoạt quy trình khi tạo thực thể chính hay không. */
			readonly TriggerOnCreate: string;
			/** Cho biết hệ thống sẽ kích hoạt quy trình khi xóa thực thể chính hay không. */
			readonly TriggerOnDelete: string;
			/** Thuộc tính kích hoạt quy trình khi đã cập nhật. */
			readonly TriggerOnUpdateAttributeList: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TrustedAccess: string;
			/** Loại quy trình. */
			readonly Type: string;
			/** Chỉ sử dụng nội bộ. */
			readonly UIData: string;
			/** Loại quy trình Dòng giao diện người dùng. */
			readonly UIFlowType: string;
			/** Tên duy nhất của quy trình */
			readonly UniqueName: string;
			/** Chọn giai đoạn sẽ kích hoạt quy trình khi cập nhật. */
			readonly UpdateStage: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của quy trình. */
			readonly WorkflowId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly WorkflowIdUnique: string;
			/** XAML xác định quy trình. */
			readonly Xaml: string;
		}
	}
}
declare namespace OptionSet {
	namespace Workflow {
		enum BusinessProcessType {
			/** 0 */
			Dong_Cong_viec,
			/** 1 */
			Dong_Tac_vu
		}
		enum Category {
			/** 7 */
			Dong_AI,
			/** 5 */
			Dong_hien_dai,
			/** 6 */
			Dong_man_hinh_nen,
			/** 4 */
			Dong_quy_trinh_cong_viec,
			/** 3 */
			Hanh_dong,
			/** 1 */
			Hop_thoai,
			/** 2 */
			Quy_tac_cong_viec,
			/** 0 */
			Quy_trinh_lam_viec
		}
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
		enum CreateStage {
			/** 40 */
			Sau_khi_thao_tac,
			/** 20 */
			Truoc_khi_thao_tac
		}
		enum DeleteStage {
			/** 40 */
			Sau_khi_thao_tac,
			/** 20 */
			Truoc_khi_thao_tac
		}
		enum Mode {
			/** 0 */
			Chay_an,
			/** 1 */
			Thoi_gian_thuc
		}
		enum PrimaryEntity {
		}
		enum ProcessTriggerScope {
			/** 1 */
			Bieu_mau,
			/** 2 */
			Thuc_the
		}
		enum RendererObjectTypeCode {
		}
		enum RunAs {
			/** 0 */
			Chu_so_huu,
			/** 1 */
			Nguoi_dung_Goi
		}
		enum Scope {
			/** 3 */
			Cap_tren_Don_vi_kinh_doanh_cap_duoi,
			/** 2 */
			Don_vi_Kinh_doanh,
			/** 1 */
			Nguoi_dung,
			/** 4 */
			To_chuc
		}
		enum StateCode {
			/** 0 */
			Ban_nhap,
			/** 1 */
			Da_kich_hoat,
			/** 2 */
			Da_tam_ngung
		}
		enum StatusCode {
			/** 1 */
			Ban_nhap,
			/** 3 */
			CompanyDLPViolation,
			/** 2 */
			Da_kich_hoat
		}
		enum ThrottlingBehavior {
			/** 0 */
			Khong_co,
			/** 1 */
			Nhom_doi_tuong_thue
		}
		enum Type {
			/** 1 */
			Dinh_nghia,
			/** 2 */
			Kich_hoat,
			/** 3 */
			Mau
		}
		enum UIFlowType {
			/** 101 */
			Dang_ghi,
			/** 2 */
			Power_Automate_Desktop,
			/** 1 */
			Selenium_IDE,
			/** 0 */
			Trinh_ghi_Windows_V1
		}
		enum UpdateStage {
			/** 40 */
			Sau_khi_thao_tac,
			/** 20 */
			Truoc_khi_thao_tac
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