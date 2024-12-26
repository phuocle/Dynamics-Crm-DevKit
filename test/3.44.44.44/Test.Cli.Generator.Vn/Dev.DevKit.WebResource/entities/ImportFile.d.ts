//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormImportfile {
		interface tab_failureTab_Sections {
			failureSection: DevKit.Controls.Section;
		}
		interface tab_partialFailureTab_Sections {
			partialFailureSection: DevKit.Controls.Section;
		}
		interface tab_successTab_Sections {
			successSection: DevKit.Controls.Section;
		}
		interface tab_failureTab extends DevKit.Controls.ITab {
			Section: tab_failureTab_Sections;
		}
		interface tab_partialFailureTab extends DevKit.Controls.ITab {
			Section: tab_partialFailureTab_Sections;
		}
		interface tab_successTab extends DevKit.Controls.ITab {
			Section: tab_successTab_Sections;
		}
		interface Tabs {
			failureTab: tab_failureTab;
			partialFailureTab: tab_partialFailureTab;
			successTab: tab_successTab;
		}
		interface Body {
			Tab: Tabs;
			/** Hiển thị ngày và giờ hoàn thành công việc nhập được liên kết với tệp nhập. */
			CompletedOn: DevKit.Controls.Date;
			/** Cho biết người tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Chọn liệu quy tắc phát hiện sự trùng lặp có được chạy cho công việc nhập hay không. */
			EnableDuplicateDetection: DevKit.Controls.Boolean;
			/** Hiển thị số lượng bản ghi trong tệp nhập không nhập được. */
			FailureCount: DevKit.Controls.Integer;
			import_Logs_Failure: DevKit.Controls.ActionCards;
			import_Logs_Failures: DevKit.Controls.ActionCards;
			import_Logs_Succes: DevKit.Controls.ActionCards;
			/** Chọn bản đồ dữ liệu để khớp tệp nhập và các tiêu đề cột của tệp với các trường và loại bản ghi trong Microsoft Dynamics 365. Nếu tiêu đề cột trong tệp khớp với tên hiển thị của trường đích trong Microsoft Dynamics 365, chúng tôi sẽ tự động nhập dữ liệu. Nếu không, bạn có thể khớp theo cách thủ công trong quá trình nhập. */
			ImportMapId: DevKit.Controls.Lookup;
			/** Hiển thị tên của tệp nhập. Tên này dựa trên tên của tệp được tải lên. */
			Name: DevKit.Controls.String;
			/** Hiển thị số lượng bản ghi trong tệp này không nhập được trong quá trình nhập. */
			PartialFailureCount: DevKit.Controls.Integer;
			/** Chọn người dùng mà bản ghi được tạo trong quá trình diễn ra công việc nhập sẽ được gán cho người dùng đó. */
			RecordsOwnerId: DevKit.Controls.Lookup;
			/** Hiển thị kích thước của tệp nhập, theo kilobyte. */
			Size: DevKit.Controls.String;
			/** Hiển thị tên của tệp nguồn dữ liệu được tải lên trong công việc nhập. */
			Source: DevKit.Controls.String;
			/** Hiển thị mã lý do giải thích trạng thái của tệp nhập để xác định giai đoạn của quá trình nhập, từ khi phân tích dữ liệu cho tới khi hoàn tất. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Hiển thị số lượng bản ghi trong tệp nhập được nhập thành công. */
			SuccessCount: DevKit.Controls.Integer;
			/** Chọn loại bản ghi (thực thể) đích cho các bản ghi sẽ được tạo trong quá trình diễn ra công việc nhập. */
			TargetEntityName: DevKit.Controls.String;
			/** Hiển thị tổng số lượng bản ghi trong tệp nhập. */
			TotalCount: DevKit.Controls.Integer;
		}
		interface Navigation {

		}
	}
	class FormImportfile extends DevKit.IForm {
		/**
		* Importfile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Importfile */
		Body: DevKit.FormImportfile.Body;
		/** The Navigation of form Importfile */
		Navigation: DevKit.FormImportfile.Navigation;
		/** The SidePanes of form Importfile */
		SidePanes: DevKit.SidePanes;
	}
	class ImportFileApi {
		/**
		* DynamicsCrm.DevKit ImportFileApi
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
		/** Hiển thị các tiêu đề cột phụ. Các tiêu đề bổ sung được sử dụng trong quá trình biến đổi tệp nhập thành các bản ghi dữ liệu nhập. */
		readonly AdditionalHeaderRow: string;
		/** Hiển thị ngày và giờ hoàn thành công việc nhập được liên kết với tệp nhập. */
		readonly CompletedOn_UtcDateOnly: Date;
		/** Lưu trữ nội dung của tệp nhập, được lưu trữ dưới dạng các giá trị được phân tách bằng dấu phẩy. */
		Content: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn dấu tách dữ liệu ký tự đơn được sử dụng trong tệp nhập. Đây thường là dấu ngoặc kép hoặc dấu nháy đơn. */
		DataDelimiterCode: OptionSet.ImportFile.DataDelimiterCode;
		/** Chọn liệu quy tắc phát hiện sự trùng lặp có được chạy cho công việc nhập hay không. */
		EnableDuplicateDetection: boolean;
		/** Mã định danh duy nhất của ID Khóa thay thế */
		EntityKeyId: string;
		/** Hiển thị số lượng bản ghi trong tệp nhập không nhập được. */
		readonly FailureCount: number;
		/** Chọn ký tự được sử dụng để phân tách từng trường trong tệp nhập. Thông thường là dấu phẩy. */
		FieldDelimiterCode: OptionSet.ImportFile.FieldDelimiterCode;
		/** Hiển thị loại tệp nguồn được tải lên để nhập. */
		FileTypeCode: OptionSet.ImportFile.FileTypeCode;
		/** Hiển thị danh sách từng tiêu đề cột trong tệp nhập được phân tách bằng dấu phẩy. Tiêu đề được sử dụng để phân tích tệp trong quá trình diễn ra công việc nhập. */
		readonly HeaderRow: string;
		/** Mã định danh duy nhất của tệp nhập. */
		ImportFileId: string;
		/** Chọn công việc nhập mà tệp được tải lên. */
		ImportId: string;
		/** Chọn bản đồ dữ liệu để khớp tệp nhập và các tiêu đề cột của tệp với các trường và loại bản ghi trong Microsoft Dynamics 365. Nếu tiêu đề cột trong tệp khớp với tên hiển thị của trường đích trong Microsoft Dynamics 365, chúng tôi sẽ tự động nhập dữ liệu. Nếu không, bạn có thể khớp theo cách thủ công trong quá trình nhập. */
		ImportMapId: string;
		/** Chọn liệu hàng đầu tiên của tệp nhập có chứa các tiêu đề cột hay không. Các tiêu đề này được sử dụng để ánh xạ dữ liệu trong quá trình diễn ra công việc nhập. */
		IsFirstRowHeader: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi sau cùng. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị tên của tệp nhập. Tên này dựa trên tên của tệp được tải lên. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu tệp nhập. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu tệp nhập. */
		readonly OwningUser: string;
		/** Hiển thị tiền tố được áp dụng cho từng cột sau khi tệp nhập được phân tích. */
		readonly ParsedTableColumnPrefix: string;
		/** Hiển thị số lượng cột được bao gồm trong tệp nhập được phân tích. */
		readonly ParsedTableColumnsNumber: number;
		/** Hiển thị tên bảng chứa dữ liệu được phân tích từ tệp nhập. */
		readonly ParsedTableName: string;
		/** Hiển thị số lượng bản ghi trong tệp này không nhập được trong quá trình nhập. */
		readonly PartialFailureCount: number;
		/** Cho biết liệu tệp nhập sẽ bị bỏ qua hay được xử lý trong quá trình nhập. */
		ProcessCode: OptionSet.ImportFile.ProcessCode;
		/** Hiển thị mã trạng thái xử lý của tệp nhập. Mã này cho biết liệu dữ liệu trong tệp nhập đã được phân tích, biến đổi hay được nhập. */
		readonly ProcessingStatus: OptionSet.ImportFile.ProcessingStatus;
		/** Hiển thị mã tiến trình cho quá trình xử lý tệp nhập. Trường này được sử dụng khi công việc nhập tạm dừng được tiếp tục. */
		readonly ProgressCounter: number;
		/** Chọn người dùng mà bản ghi được tạo trong quá trình diễn ra công việc nhập sẽ được gán cho người dùng đó. */
		recordsownerid_systemuser: string;
		/** Chọn người dùng mà bản ghi được tạo trong quá trình diễn ra công việc nhập sẽ được gán cho người dùng đó. */
		recordsownerid_team: string;
		/** Hiển thị các cột được ánh xạ tới loại bản ghi (thực thể) có liên quan của loại bản ghi (thực thể) chính được bao gồm trong tệp nhập. */
		RelatedEntityColumns: string;
		/** Hiển thị kích thước của tệp nhập, theo kilobyte. */
		Size: string;
		/** Hiển thị tên của tệp nguồn dữ liệu được tải lên trong công việc nhập. */
		Source: string;
		/** Hiển thị loại bản ghi (thực thể) của dữ liệu nguồn. */
		SourceEntityName: string;
		/** Hiển thị trạng thái của bản ghi tệp nhập. Theo mặc định, tất cả các bản ghi đều hiện hoạt và không thể bị hủy kích hoạt. */
		StateCode: OptionSet.ImportFile.StateCode;
		/** Hiển thị mã lý do giải thích trạng thái của tệp nhập để xác định giai đoạn của quá trình nhập, từ khi phân tích dữ liệu cho tới khi hoàn tất. */
		StatusCode: OptionSet.ImportFile.StatusCode;
		/** Hiển thị số lượng bản ghi trong tệp nhập được nhập thành công. */
		readonly SuccessCount: number;
		/** Chọn loại bản ghi (thực thể) đích cho các bản ghi sẽ được tạo trong quá trình diễn ra công việc nhập. */
		TargetEntityName: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị tổng số lượng bản ghi trong tệp nhập. */
		readonly TotalCount: number;
		/** Chọn dữ liệu được dùng để xác định chế độ upsert. Chế độ này theo mặc định là Tạo. */
		UpsertModeCode: OptionSet.ImportFile.UpsertModeCode;
		/** Cho biết liệu có áp dụng bản đồ hệ thống tự động cho tệp nhập hay không. Bản đồ này sẽ tự động ánh xạ dữ liệu nhập tới thực thể đích trong Microsoft Dynamics 365. */
		UseSystemMap: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Hiển thị các tiêu đề cột phụ. Các tiêu đề bổ sung được sử dụng trong quá trình biến đổi tệp nhập thành các bản ghi dữ liệu nhập. */
			readonly AdditionalHeaderRow: string;
			/** Hiển thị ngày và giờ hoàn thành công việc nhập được liên kết với tệp nhập. */
			readonly CompletedOn_UtcDateOnly: string;
			/** Lưu trữ nội dung của tệp nhập, được lưu trữ dưới dạng các giá trị được phân tách bằng dấu phẩy. */
			readonly Content: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn dấu tách dữ liệu ký tự đơn được sử dụng trong tệp nhập. Đây thường là dấu ngoặc kép hoặc dấu nháy đơn. */
			readonly DataDelimiterCode: string;
			/** Chọn liệu quy tắc phát hiện sự trùng lặp có được chạy cho công việc nhập hay không. */
			readonly EnableDuplicateDetection: string;
			/** Mã định danh duy nhất của ID Khóa thay thế */
			readonly EntityKeyId: string;
			/** Hiển thị số lượng bản ghi trong tệp nhập không nhập được. */
			readonly FailureCount: string;
			/** Chọn ký tự được sử dụng để phân tách từng trường trong tệp nhập. Thông thường là dấu phẩy. */
			readonly FieldDelimiterCode: string;
			/** Hiển thị loại tệp nguồn được tải lên để nhập. */
			readonly FileTypeCode: string;
			/** Hiển thị danh sách từng tiêu đề cột trong tệp nhập được phân tách bằng dấu phẩy. Tiêu đề được sử dụng để phân tích tệp trong quá trình diễn ra công việc nhập. */
			readonly HeaderRow: string;
			/** Mã định danh duy nhất của tệp nhập. */
			readonly ImportFileId: string;
			/** Chọn công việc nhập mà tệp được tải lên. */
			readonly ImportId: string;
			/** Chọn bản đồ dữ liệu để khớp tệp nhập và các tiêu đề cột của tệp với các trường và loại bản ghi trong Microsoft Dynamics 365. Nếu tiêu đề cột trong tệp khớp với tên hiển thị của trường đích trong Microsoft Dynamics 365, chúng tôi sẽ tự động nhập dữ liệu. Nếu không, bạn có thể khớp theo cách thủ công trong quá trình nhập. */
			readonly ImportMapId: string;
			/** Chọn liệu hàng đầu tiên của tệp nhập có chứa các tiêu đề cột hay không. Các tiêu đề này được sử dụng để ánh xạ dữ liệu trong quá trình diễn ra công việc nhập. */
			readonly IsFirstRowHeader: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi sau cùng. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị tên của tệp nhập. Tên này dựa trên tên của tệp được tải lên. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu tệp nhập. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu tệp nhập. */
			readonly OwningUser: string;
			/** Hiển thị tiền tố được áp dụng cho từng cột sau khi tệp nhập được phân tích. */
			readonly ParsedTableColumnPrefix: string;
			/** Hiển thị số lượng cột được bao gồm trong tệp nhập được phân tích. */
			readonly ParsedTableColumnsNumber: string;
			/** Hiển thị tên bảng chứa dữ liệu được phân tích từ tệp nhập. */
			readonly ParsedTableName: string;
			/** Hiển thị số lượng bản ghi trong tệp này không nhập được trong quá trình nhập. */
			readonly PartialFailureCount: string;
			/** Cho biết liệu tệp nhập sẽ bị bỏ qua hay được xử lý trong quá trình nhập. */
			readonly ProcessCode: string;
			/** Hiển thị mã trạng thái xử lý của tệp nhập. Mã này cho biết liệu dữ liệu trong tệp nhập đã được phân tích, biến đổi hay được nhập. */
			readonly ProcessingStatus: string;
			/** Hiển thị mã tiến trình cho quá trình xử lý tệp nhập. Trường này được sử dụng khi công việc nhập tạm dừng được tiếp tục. */
			readonly ProgressCounter: string;
			/** Chọn người dùng mà bản ghi được tạo trong quá trình diễn ra công việc nhập sẽ được gán cho người dùng đó. */
			readonly recordsownerid_systemuser: string;
			/** Chọn người dùng mà bản ghi được tạo trong quá trình diễn ra công việc nhập sẽ được gán cho người dùng đó. */
			readonly recordsownerid_team: string;
			/** Hiển thị các cột được ánh xạ tới loại bản ghi (thực thể) có liên quan của loại bản ghi (thực thể) chính được bao gồm trong tệp nhập. */
			readonly RelatedEntityColumns: string;
			/** Hiển thị kích thước của tệp nhập, theo kilobyte. */
			readonly Size: string;
			/** Hiển thị tên của tệp nguồn dữ liệu được tải lên trong công việc nhập. */
			readonly Source: string;
			/** Hiển thị loại bản ghi (thực thể) của dữ liệu nguồn. */
			readonly SourceEntityName: string;
			/** Hiển thị trạng thái của bản ghi tệp nhập. Theo mặc định, tất cả các bản ghi đều hiện hoạt và không thể bị hủy kích hoạt. */
			readonly StateCode: string;
			/** Hiển thị mã lý do giải thích trạng thái của tệp nhập để xác định giai đoạn của quá trình nhập, từ khi phân tích dữ liệu cho tới khi hoàn tất. */
			readonly StatusCode: string;
			/** Hiển thị số lượng bản ghi trong tệp nhập được nhập thành công. */
			readonly SuccessCount: string;
			/** Chọn loại bản ghi (thực thể) đích cho các bản ghi sẽ được tạo trong quá trình diễn ra công việc nhập. */
			readonly TargetEntityName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị tổng số lượng bản ghi trong tệp nhập. */
			readonly TotalCount: string;
			/** Chọn dữ liệu được dùng để xác định chế độ upsert. Chế độ này theo mặc định là Tạo. */
			readonly UpsertModeCode: string;
			/** Cho biết liệu có áp dụng bản đồ hệ thống tự động cho tệp nhập hay không. Bản đồ này sẽ tự động ánh xạ dữ liệu nhập tới thực thể đích trong Microsoft Dynamics 365. */
			readonly UseSystemMap: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportFile {
		enum DataDelimiterCode {
			/** 1 */
			DoubleQuote,
			/** 2 */
			Khong,
			/** 3 */
			SingleQuote
		}
		enum FieldDelimiterCode {
			/** 4 */
			Dau_cham_phay,
			/** 1 */
			Dau_hai_cham,
			/** 2 */
			Dau_phay,
			/** 3 */
			Tab
		}
		enum FileTypeCode {
			/** 0 */
			CSV,
			/** 2 */
			Tep_dinh_kem,
			/** 1 */
			Trang_tinh_XML_2003,
			/** 3 */
			XLSX
		}
		enum ProcessCode {
			/** 2 */
			Bo_qua,
			/** 3 */
			Noi_bo,
			/** 1 */
			Quy_trinh
		}
		enum ProcessingStatus {
			/** 1 */
			Chua_bat_dau,
			/** 7 */
			Chuyen_doi_Chu_so_huu,
			/** 6 */
			Chuyen_doi_Danh_sach_chon,
			/** 8 */
			Chuyen_doi_Hoan_hanh,
			/** 12 */
			Chuyen_doi_Khoa_Chinh,
			/** 4 */
			Chuyen_doi_Phuc_hop,
			/** 5 */
			Chuyen_doi_Tra_cuu,
			/** 2 */
			Dang_phan_tich,
			/** 9 */
			Nhap_Chuyen_qua_1,
			/** 10 */
			Nhap_Chuyen_qua_2,
			/** 11 */
			Nhap_Hoan_thanh,
			/** 3 */
			Phan_tich_Hoan_thanh
		}
		enum RecordsOwnerIdType {
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
		enum UpsertModeCode {
			/** 2 */
			Bo_qua,
			/** 1 */
			Cap_nhat,
			/** 0 */
			Tao
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