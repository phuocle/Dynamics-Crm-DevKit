//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Cho biết người tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ đã bắt đầu quá trình nhập. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Hiển thị tên của công việc nhập, dựa trên tệp nhập và thực thể đang được nhập. */
			Name: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Thứ tự theo đó công việc nhập được tạo. */
			Sequence: DevKit.Controls.Integer;
			/** Hiển thị mã lý do giải thích trạng thái của công việc nhập để xác định giai đoạn của công việc trong quá trình nhập, từ biến đổi dữ liệu tới hoàn tất. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			Import_ImportFile: DevKit.Controls.NavigationItem
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
	class ImportApi {
		/**
		* DynamicsCrm.DevKit ImportApi
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
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ đã bắt đầu quá trình nhập. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập địa chỉ email mà thông báo hoàn thành quá trình nhập phải được gửi tới. */
		EMailAddress: string;
		/** Mã định danh duy nhất của công việc nhập. */
		ImportId: string;
		/** Thông tin về việc liệu nguồn của công việc nhập này là nhập dữ liệu hay di chuyển dữ liệu. */
		IsImport: boolean;
		/** Chọn liệu sẽ tạo hay cập nhật các bản ghi trong Microsoft Dynamics 365 trong quá trình diễn ra công việc nhập. */
		ModeCode: OptionSet.Import.ModeCode;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị tên của công việc nhập, dựa trên tệp nhập và thực thể đang được nhập. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Đơn vị kinh doanh sở hữu công việc nhập. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu công việc nhập. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu công việc nhập. */
		readonly OwningUser: string;
		/** Chọn liệu có gửi email thông báo tới người dùng đã chọn sau khi hoàn thành công việc nhập hay không. */
		SendNotification: boolean;
		/** Thứ tự theo đó công việc nhập được tạo. */
		readonly Sequence: number;
		/** Cho biết trạng thái của công việc nhập. Theo mặc định, công việc nhập có trạng thái hiện hoạt và không thể hủy kích hoạt được. */
		readonly StateCode: OptionSet.Import.StateCode;
		/** Hiển thị mã lý do giải thích trạng thái của công việc nhập để xác định giai đoạn của công việc trong quá trình nhập, từ biến đổi dữ liệu tới hoàn tất. */
		StatusCode: OptionSet.Import.StatusCode;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ đã bắt đầu quá trình nhập. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập địa chỉ email mà thông báo hoàn thành quá trình nhập phải được gửi tới. */
			readonly EMailAddress: string;
			/** Mã định danh duy nhất của công việc nhập. */
			readonly ImportId: string;
			/** Thông tin về việc liệu nguồn của công việc nhập này là nhập dữ liệu hay di chuyển dữ liệu. */
			readonly IsImport: string;
			/** Chọn liệu sẽ tạo hay cập nhật các bản ghi trong Microsoft Dynamics 365 trong quá trình diễn ra công việc nhập. */
			readonly ModeCode: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị tên của công việc nhập, dựa trên tệp nhập và thực thể đang được nhập. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Đơn vị kinh doanh sở hữu công việc nhập. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu công việc nhập. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu công việc nhập. */
			readonly OwningUser: string;
			/** Chọn liệu có gửi email thông báo tới người dùng đã chọn sau khi hoàn thành công việc nhập hay không. */
			readonly SendNotification: string;
			/** Thứ tự theo đó công việc nhập được tạo. */
			readonly Sequence: string;
			/** Cho biết trạng thái của công việc nhập. Theo mặc định, công việc nhập có trạng thái hiện hoạt và không thể hủy kích hoạt được. */
			readonly StateCode: string;
			/** Hiển thị mã lý do giải thích trạng thái của công việc nhập để xác định giai đoạn của công việc trong quá trình nhập, từ biến đổi dữ liệu tới hoàn tất. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace Import {
		enum ModeCode {
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
			Da_gui,
			/** 4 */
			Da_hoan_thanh,
			/** 2 */
			Dang_chuyen_doi,
			/** 3 */
			Dang_nhap,
			/** 1 */
			Dang_phan_tich,
			/** 5 */
			Khong_thanh_cong
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