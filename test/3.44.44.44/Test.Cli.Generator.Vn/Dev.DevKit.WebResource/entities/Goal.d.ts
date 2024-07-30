//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections {
			_8ECDE6CB_085B_46D1_97A9_E357C5799076: DevKit.Controls.Section;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections {
			_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0 extends DevKit.Controls.ITab {
			Section: tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA extends DevKit.Controls.ITab {
			Section: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			_242FCD83_2A50_478E_922A_F4641920DDE0: tab__242FCD83_2A50_478E_922A_F4641920DDE0;
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA;
			general: tab_general;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Hiển thị giá trị thực tế (loại Thập phân) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền và loại dữ liệu số tiền là Thập phân. */
			ActualDecimal: DevKit.Controls.Decimal;
			/** Hiển thị giá trị thực tế (số nguyên) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền hoặc Số lượng và loại dữ liệu số tiền là Số nguyên. */
			ActualInteger: DevKit.Controls.Integer;
			/** Hiển thị giá trị thực tế (loại Tiền) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền và loại dữ liệu số tiền là Tiền. */
			ActualMoney: DevKit.Controls.Money;
			/** Chọn liệu chỉ các bản ghi của chủ sở hữu mục tiêu hay tất cả các bản ghi sẽ được tính tổng cho kết quả mục tiêu. */
			ConsiderOnlyGoalOwnersRecords: DevKit.Controls.Boolean;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị thập phân để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			CustomRollupFieldDecimal: DevKit.Controls.Decimal;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị số nguyên để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			CustomRollupFieldInteger: DevKit.Controls.Integer;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị tiền để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			CustomRollupFieldMoney: DevKit.Controls.Money;
			/** Chọn kỳ tài chính cho mục tiêu. */
			FiscalPeriod: DevKit.Controls.OptionSet;
			/** Chọn năm tài chính cho mục tiêu đang được theo dõi. */
			FiscalYear: DevKit.Controls.OptionSet;
			/** Nhập ngày kết thúc mục tiêu. */
			GoalEndDate: DevKit.Controls.Date;
			/** Chọn người dùng hoặc nhóm chịu trách nhiệm đạt được mục tiêu. */
			GoalOwnerId: DevKit.Controls.Lookup;
			/** Nhập ngày và giờ bắt đầu thời gian theo dõi mục tiêu. */
			GoalStartDate: DevKit.Controls.Date;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (thập phân) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
			InProgressDecimal: DevKit.Controls.Decimal;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (số nguyên) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
			InProgressInteger: DevKit.Controls.Integer;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (số tiền) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
			InProgressMoney: DevKit.Controls.Money;
			/** Chọn liệu kỳ mục tiêu là kỳ tài chính hay kỳ tùy chỉnh. */
			IsFiscalPeriodGoal: DevKit.Controls.Boolean;
			/** Cho biết ngày và giờ tính tổng số lần cuối mục tiêu. Ngày và giờ được hiển thị theo múi giờ đã chọn trong tùy chọn Microsoft Dynamics 365. */
			LastRolledupDate: DevKit.Controls.DateTime;
			/** Chọn số liệu cho mục tiêu. Số liệu này xác định cách mục tiêu được theo dõi. */
			MetricId: DevKit.Controls.Lookup;
			participatingrecordcontrol: DevKit.Controls.ActionCards;
			notescontrol: DevKit.Controls.Note;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mục tiêu cha nếu mục tiêu hiện tại là mục tiêu con. Tùy chọn này thiết lập mối quan hệ cha-con cho báo cáo và phân tích. */
			ParentGoalId: DevKit.Controls.Lookup;
			/** Hiển thị phần trăm đã đạt so với mục tiêu đích. */
			Percentage: DevKit.Controls.Decimal;
			/** Hiển thị phần trăm đã đạt so với mục tiêu đích. */
			Percentage1: DevKit.Controls.Decimal;
			/** Hiển thị phần trăm đã đạt so với mục tiêu đích. */
			Percentage2: DevKit.Controls.Decimal;
			/** Chọn liệu có chỉ tính tổng số dữ liệu của các mục tiêu con hay không. */
			RollupOnlyFromChildGoals: DevKit.Controls.Boolean;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (thập phân). */
			RollUpQueryActualDecimalId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (số nguyên). */
			RollupQueryActualIntegerId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (tiền). */
			RollUpQueryActualMoneyId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (thập phân). */
			RollUpQueryCustomDecimalId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (số nguyên). */
			RollUpQueryCustomIntegerId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (tiền). */
			RollUpQueryCustomMoneyId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (thập phân). */
			RollUpQueryInprogressDecimalId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (số nguyên). */
			RollUpQueryInprogressIntegerId: DevKit.Controls.Lookup;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (tiền). */
			RollUpQueryInprogressMoneyId: DevKit.Controls.Lookup;
			/** Chọn đích dài hạn (thập phân) của mục tiêu để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			StretchTargetDecimal: DevKit.Controls.Decimal;
			/** Chọn đích dài hạn (số nguyên) của mục tiêu để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			StretchTargetInteger: DevKit.Controls.Integer;
			/** Chọn đích dài hạn (tiền) để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			StretchTargetMoney: DevKit.Controls.Money;
			/** Chọn đích theo mục tiêu thuộc loại thập phân để theo dõi các dữ liệu bao gồm một phần số, chẳng hạn như số cân nặng đã bán của sản phẩm được bán theo trọng lượng. */
			TargetDecimal: DevKit.Controls.Decimal;
			/** Chọn đích theo mục tiêu thuộc loại số nguyên để theo dõi bất kỳ dữ liệu nào có thể tính theo số nguyên, chẳng hạn số chiếc đã bán. */
			TargetInteger: DevKit.Controls.Integer;
			/** Chọn đích theo mục tiêu (tiền) để theo dõi số tiền chẳng hạn như doanh thu từ một sản phẩm. */
			TargetMoney: DevKit.Controls.Money;
			/** Nhập tiêu đề hoặc tên mô tả mục tiêu. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			goal_parent_goal: DevKit.Controls.NavigationItem
		}
		interface Grid {
			child_goals: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class GoalApi {
		/**
		* DynamicsCrm.DevKit GoalApi
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
		/** Hiển thị giá trị thực tế (loại Thập phân) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền và loại dữ liệu số tiền là Thập phân. */
		ActualDecimal: number;
		/** Hiển thị giá trị thực tế (số nguyên) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền hoặc Số lượng và loại dữ liệu số tiền là Số nguyên. */
		ActualInteger: number;
		/** Hiển thị giá trị thực tế (loại Tiền) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền và loại dữ liệu số tiền là Tiền. */
		ActualMoney: number;
		/** Hiển thị giá trị thực tế (loại tiền) tính theo loại tiền gốc để theo dõi các kết quả mục tiêu so với đích đề ra. */
		readonly ActualMoney_Base: number;
		/** Giá trị Thực tế theo mục tiêu. */
		readonly ActualString: string;
		/** Loại dữ liệu của số tiền. */
		AmountDataType: OptionSet.Goal.AmountDataType;
		/** Hiển thị số tiền dự kiến cho giá trị thực tế (loại thập phân) so với giá trị mục tiêu đích. */
		readonly ComputedTargetAsOfTodayDecimal: number;
		/** Hiển thị số tiền dự kiến cho giá trị thực tế (loại số nguyên) so với giá trị mục tiêu đích kể từ ngày hiện tại. */
		readonly ComputedTargetAsOfTodayInteger: number;
		/** Hiển thị số tiền dự kiến cho giá trị thực tế (loại tiền) so với giá trị mục tiêu đích kể từ ngày hiện tại. */
		readonly ComputedTargetAsOfTodayMoney: number;
		/** Hiển thị số tiền dự kiến tính theo loại tiền gốc cho giá trị thực tế (loại tiền) so với giá trị mục tiêu đích kể từ ngày hiện tại. */
		readonly ComputedTargetAsOfTodayMoney_Base: number;
		/** Hiển thị giá trị dự kiến cho phần trăm đạt được so với giá trị mục tiêu đích kể từ ngày hiện tại. */
		readonly ComputedTargetAsOfTodayPercentageAchieved: number;
		/** Chọn liệu chỉ các bản ghi của chủ sở hữu mục tiêu hay tất cả các bản ghi sẽ được tính tổng cho kết quả mục tiêu. */
		ConsiderOnlyGoalOwnersRecords: boolean;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ ra trường tổng số giữ chỗ cho giá trị thập phân để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
		CustomRollupFieldDecimal: number;
		/** Chỉ ra trường tổng số giữ chỗ cho giá trị số nguyên để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
		CustomRollupFieldInteger: number;
		/** Chỉ ra trường tổng số giữ chỗ cho giá trị tiền để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
		CustomRollupFieldMoney: number;
		/** Chỉ ra trường tổng số giữ chỗ cho giá trị tiền theo loại tiền gốc để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
		readonly CustomRollupFieldMoney_Base: number;
		/** Trường tổng số giữ chỗ cho mục tiêu. */
		readonly CustomRollupFieldString: string;
		/** Độ sâu của mục tiêu trong cây. */
		readonly Depth: number;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Chọn kỳ tài chính cho mục tiêu. */
		FiscalPeriod: OptionSet.Goal.FiscalPeriod;
		/** Chọn năm tài chính cho mục tiêu đang được theo dõi. */
		FiscalYear: OptionSet.Goal.FiscalYear;
		/** Nhập ngày kết thúc mục tiêu. */
		GoalEndDate_UtcDateOnly: Date;
		/** Mã định danh duy nhất của mục tiêu. */
		GoalId: string;
		/** Chọn người dùng hoặc nhóm chịu trách nhiệm đạt được mục tiêu. */
		goalownerid_systemuser: string;
		/** Chọn người dùng hoặc nhóm chịu trách nhiệm đạt được mục tiêu. */
		goalownerid_team: string;
		/** Nhập ngày và giờ bắt đầu thời gian theo dõi mục tiêu. */
		GoalStartDate_UtcDateOnly: Date;
		/** Mã định danh duy nhất của mục tiêu gây ra lỗi trong trường tổng số của hệ thống cấp bậc mục tiêu. */
		GoalWithErrorId: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Hiển thị giá trị ở trạng thái đang tiến hành (thập phân) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
		InProgressDecimal: number;
		/** Hiển thị giá trị ở trạng thái đang tiến hành (số nguyên) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
		InProgressInteger: number;
		/** Hiển thị giá trị ở trạng thái đang tiến hành (số tiền) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
		InProgressMoney: number;
		/** Hiển thị giá trị ở trạng thái đang tiến hành (tiền) tính theo loại tiền gốc để theo dõi các kết quả mục tiêu so với giá trị đích. */
		readonly InProgressMoney_Base: number;
		/** Giá trị ở trạng thái đang tiến hành theo mục tiêu. */
		readonly InProgressString: string;
		/** Cho biết loại số liệu là Số lượng hay Số tiền. */
		IsAmount: boolean;
		/** Chọn liệu kỳ mục tiêu là kỳ tài chính hay kỳ tùy chỉnh. */
		IsFiscalPeriodGoal: boolean;
		/** Chọn liệu có cập nhật các trường tổng số hệ thống hay không. Nếu được đặt thành Có, lần tính tổng số hệ thống tiếp theo sẽ không cập nhật giá trị của các trường tổng số với giá trị được tính toán của hệ thống. */
		IsOverridden: boolean;
		/** Cho biết liệu có thể cập nhật giá trị của trường tổng số hệ thống hay không. */
		IsOverride: boolean;
		/** Cho biết ngày và giờ tính tổng số lần cuối mục tiêu. Ngày và giờ được hiển thị theo múi giờ đã chọn trong tùy chọn Microsoft Dynamics 365. */
		LastRolledupDate_UtcDateAndTime: Date;
		/** Chọn số liệu cho mục tiêu. Số liệu này xác định cách mục tiêu được theo dõi. */
		MetricId: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu mục tiêu. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Chọn mục tiêu cha nếu mục tiêu hiện tại là mục tiêu con. Tùy chọn này thiết lập mối quan hệ cha-con cho báo cáo và phân tích. */
		ParentGoalId: string;
		/** Hiển thị phần trăm đã đạt so với mục tiêu đích. */
		Percentage: number;
		/** Mã lỗi được liên kết với trường tổng số. */
		RollupErrorCode: number;
		/** Chọn liệu có chỉ tính tổng số dữ liệu của các mục tiêu con hay không. */
		RollupOnlyFromChildGoals: boolean;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (thập phân). */
		RollUpQueryActualDecimalId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (số nguyên). */
		RollupQueryActualIntegerId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (tiền). */
		RollUpQueryActualMoneyId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (thập phân). */
		RollUpQueryCustomDecimalId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (số nguyên). */
		RollUpQueryCustomIntegerId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (tiền). */
		RollUpQueryCustomMoneyId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (thập phân). */
		RollUpQueryInprogressDecimalId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (số nguyên). */
		RollUpQueryInprogressIntegerId: string;
		/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (tiền). */
		RollUpQueryInprogressMoneyId: string;
		/** Cho biết mục tiêu đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các mục tiêu đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
		StateCode: OptionSet.Goal.StateCode;
		/** Chọn trạng thái của mục tiêu. */
		StatusCode: OptionSet.Goal.StatusCode;
		/** Chọn đích dài hạn (thập phân) của mục tiêu để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
		StretchTargetDecimal: number;
		/** Chọn đích dài hạn (số nguyên) của mục tiêu để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
		StretchTargetInteger: number;
		/** Chọn đích dài hạn (tiền) để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
		StretchTargetMoney: number;
		/** Hiển thị đích dài hạn (tiền) theo loại tiền gốc để chỉ ra cấp độ mục tiêu khó hoặc cao hơn thông thường. */
		readonly StretchTargetMoney_Base: number;
		/** Giá trị đích dài hạn cho tất cả các loại dữ liệu. */
		readonly StretchTargetString: string;
		/** Chọn đích theo mục tiêu thuộc loại thập phân để theo dõi các dữ liệu bao gồm một phần số, chẳng hạn như số cân nặng đã bán của sản phẩm được bán theo trọng lượng. */
		TargetDecimal: number;
		/** Chọn đích theo mục tiêu thuộc loại số nguyên để theo dõi bất kỳ dữ liệu nào có thể tính theo số nguyên, chẳng hạn số chiếc đã bán. */
		TargetInteger: number;
		/** Chọn đích theo mục tiêu (tiền) để theo dõi số tiền chẳng hạn như doanh thu từ một sản phẩm. */
		TargetMoney: number;
		/** Hiển thị đích theo mục tiêu của loại tiền, tính theo loại tiền gốc. */
		readonly TargetMoney_Base: number;
		/** Giá trị đích của mục tiêu. */
		readonly TargetString: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Nhập tiêu đề hoặc tên mô tả mục tiêu. */
		Title: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		readonly TransactionCurrencyId: string;
		/** Mã định danh duy nhất của cây mục tiêu. */
		readonly TreeId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của mục tiêu. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Hiển thị giá trị thực tế (loại Thập phân) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền và loại dữ liệu số tiền là Thập phân. */
			readonly ActualDecimal: string;
			/** Hiển thị giá trị thực tế (số nguyên) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền hoặc Số lượng và loại dữ liệu số tiền là Số nguyên. */
			readonly ActualInteger: string;
			/** Hiển thị giá trị thực tế (loại Tiền) đã đạt được hướng tới giá trị đích kể từ ngày tính tổng số lần cuối. Trường này hiển thị khi loại số liệu của mục tiêu là Số tiền và loại dữ liệu số tiền là Tiền. */
			readonly ActualMoney: string;
			/** Hiển thị giá trị thực tế (loại tiền) tính theo loại tiền gốc để theo dõi các kết quả mục tiêu so với đích đề ra. */
			readonly ActualMoney_Base: string;
			/** Giá trị Thực tế theo mục tiêu. */
			readonly ActualString: string;
			/** Loại dữ liệu của số tiền. */
			readonly AmountDataType: string;
			/** Hiển thị số tiền dự kiến cho giá trị thực tế (loại thập phân) so với giá trị mục tiêu đích. */
			readonly ComputedTargetAsOfTodayDecimal: string;
			/** Hiển thị số tiền dự kiến cho giá trị thực tế (loại số nguyên) so với giá trị mục tiêu đích kể từ ngày hiện tại. */
			readonly ComputedTargetAsOfTodayInteger: string;
			/** Hiển thị số tiền dự kiến cho giá trị thực tế (loại tiền) so với giá trị mục tiêu đích kể từ ngày hiện tại. */
			readonly ComputedTargetAsOfTodayMoney: string;
			/** Hiển thị số tiền dự kiến tính theo loại tiền gốc cho giá trị thực tế (loại tiền) so với giá trị mục tiêu đích kể từ ngày hiện tại. */
			readonly ComputedTargetAsOfTodayMoney_Base: string;
			/** Hiển thị giá trị dự kiến cho phần trăm đạt được so với giá trị mục tiêu đích kể từ ngày hiện tại. */
			readonly ComputedTargetAsOfTodayPercentageAchieved: string;
			/** Chọn liệu chỉ các bản ghi của chủ sở hữu mục tiêu hay tất cả các bản ghi sẽ được tính tổng cho kết quả mục tiêu. */
			readonly ConsiderOnlyGoalOwnersRecords: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị thập phân để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			readonly CustomRollupFieldDecimal: string;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị số nguyên để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			readonly CustomRollupFieldInteger: string;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị tiền để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			readonly CustomRollupFieldMoney: string;
			/** Chỉ ra trường tổng số giữ chỗ cho giá trị tiền theo loại tiền gốc để theo dõi loại kết quả thứ ba không phải là các kết quả thực tế và các kết quả ở trạng thái đang tiến hành. */
			readonly CustomRollupFieldMoney_Base: string;
			/** Trường tổng số giữ chỗ cho mục tiêu. */
			readonly CustomRollupFieldString: string;
			/** Độ sâu của mục tiêu trong cây. */
			readonly Depth: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Chọn kỳ tài chính cho mục tiêu. */
			readonly FiscalPeriod: string;
			/** Chọn năm tài chính cho mục tiêu đang được theo dõi. */
			readonly FiscalYear: string;
			/** Nhập ngày kết thúc mục tiêu. */
			readonly GoalEndDate_UtcDateOnly: string;
			/** Mã định danh duy nhất của mục tiêu. */
			readonly GoalId: string;
			/** Chọn người dùng hoặc nhóm chịu trách nhiệm đạt được mục tiêu. */
			readonly goalownerid_systemuser: string;
			/** Chọn người dùng hoặc nhóm chịu trách nhiệm đạt được mục tiêu. */
			readonly goalownerid_team: string;
			/** Nhập ngày và giờ bắt đầu thời gian theo dõi mục tiêu. */
			readonly GoalStartDate_UtcDateOnly: string;
			/** Mã định danh duy nhất của mục tiêu gây ra lỗi trong trường tổng số của hệ thống cấp bậc mục tiêu. */
			readonly GoalWithErrorId: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (thập phân) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
			readonly InProgressDecimal: string;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (số nguyên) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
			readonly InProgressInteger: string;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (số tiền) so với giá trị đích. Giá trị này có thể đóng góp vào mục tiêu nhưng chưa được tính là giá trị thực tế. */
			readonly InProgressMoney: string;
			/** Hiển thị giá trị ở trạng thái đang tiến hành (tiền) tính theo loại tiền gốc để theo dõi các kết quả mục tiêu so với giá trị đích. */
			readonly InProgressMoney_Base: string;
			/** Giá trị ở trạng thái đang tiến hành theo mục tiêu. */
			readonly InProgressString: string;
			/** Cho biết loại số liệu là Số lượng hay Số tiền. */
			readonly IsAmount: string;
			/** Chọn liệu kỳ mục tiêu là kỳ tài chính hay kỳ tùy chỉnh. */
			readonly IsFiscalPeriodGoal: string;
			/** Chọn liệu có cập nhật các trường tổng số hệ thống hay không. Nếu được đặt thành Có, lần tính tổng số hệ thống tiếp theo sẽ không cập nhật giá trị của các trường tổng số với giá trị được tính toán của hệ thống. */
			readonly IsOverridden: string;
			/** Cho biết liệu có thể cập nhật giá trị của trường tổng số hệ thống hay không. */
			readonly IsOverride: string;
			/** Cho biết ngày và giờ tính tổng số lần cuối mục tiêu. Ngày và giờ được hiển thị theo múi giờ đã chọn trong tùy chọn Microsoft Dynamics 365. */
			readonly LastRolledupDate_UtcDateAndTime: string;
			/** Chọn số liệu cho mục tiêu. Số liệu này xác định cách mục tiêu được theo dõi. */
			readonly MetricId: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu mục tiêu. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Chọn mục tiêu cha nếu mục tiêu hiện tại là mục tiêu con. Tùy chọn này thiết lập mối quan hệ cha-con cho báo cáo và phân tích. */
			readonly ParentGoalId: string;
			/** Hiển thị phần trăm đã đạt so với mục tiêu đích. */
			readonly Percentage: string;
			/** Mã lỗi được liên kết với trường tổng số. */
			readonly RollupErrorCode: string;
			/** Chọn liệu có chỉ tính tổng số dữ liệu của các mục tiêu con hay không. */
			readonly RollupOnlyFromChildGoals: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (thập phân). */
			readonly RollUpQueryActualDecimalId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (số nguyên). */
			readonly RollupQueryActualIntegerId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu thực tế cho mục tiêu (tiền). */
			readonly RollUpQueryActualMoneyId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (thập phân). */
			readonly RollUpQueryCustomDecimalId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (số nguyên). */
			readonly RollUpQueryCustomIntegerId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số tùy chỉnh (tiền). */
			readonly RollUpQueryCustomMoneyId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (thập phân). */
			readonly RollUpQueryInprogressDecimalId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (số nguyên). */
			readonly RollUpQueryInprogressIntegerId: string;
			/** Chọn truy vấn sẽ được sử dụng để tính toán dữ liệu cho trường tổng số ở trạng thái đang tiến hành (tiền). */
			readonly RollUpQueryInprogressMoneyId: string;
			/** Cho biết mục tiêu đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các mục tiêu đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của mục tiêu. */
			readonly StatusCode: string;
			/** Chọn đích dài hạn (thập phân) của mục tiêu để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			readonly StretchTargetDecimal: string;
			/** Chọn đích dài hạn (số nguyên) của mục tiêu để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			readonly StretchTargetInteger: string;
			/** Chọn đích dài hạn (tiền) để xác định cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			readonly StretchTargetMoney: string;
			/** Hiển thị đích dài hạn (tiền) theo loại tiền gốc để chỉ ra cấp độ mục tiêu khó hoặc cao hơn thông thường. */
			readonly StretchTargetMoney_Base: string;
			/** Giá trị đích dài hạn cho tất cả các loại dữ liệu. */
			readonly StretchTargetString: string;
			/** Chọn đích theo mục tiêu thuộc loại thập phân để theo dõi các dữ liệu bao gồm một phần số, chẳng hạn như số cân nặng đã bán của sản phẩm được bán theo trọng lượng. */
			readonly TargetDecimal: string;
			/** Chọn đích theo mục tiêu thuộc loại số nguyên để theo dõi bất kỳ dữ liệu nào có thể tính theo số nguyên, chẳng hạn số chiếc đã bán. */
			readonly TargetInteger: string;
			/** Chọn đích theo mục tiêu (tiền) để theo dõi số tiền chẳng hạn như doanh thu từ một sản phẩm. */
			readonly TargetMoney: string;
			/** Hiển thị đích theo mục tiêu của loại tiền, tính theo loại tiền gốc. */
			readonly TargetMoney_Base: string;
			/** Giá trị đích của mục tiêu. */
			readonly TargetString: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Nhập tiêu đề hoặc tên mô tả mục tiêu. */
			readonly Title: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Mã định danh duy nhất của cây mục tiêu. */
			readonly TreeId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của mục tiêu. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Goal {
		enum AmountDataType {
			/** 0 */
			Loai_tien,
			/** 2 */
			So_nguyen,
			/** 1 */
			Thap_phan
		}
		enum FiscalPeriod {
			/** 301 */
			Hang_nam,
			/** 401 */
			Ky_1,
			/** 410 */
			Ky_10,
			/** 411 */
			Ky_11,
			/** 412 */
			Ky_12,
			/** 413 */
			Ky_13,
			/** 402 */
			Ky_2,
			/** 403 */
			Ky_3,
			/** 404 */
			Ky_4,
			/** 405 */
			Ky_5,
			/** 406 */
			Ky_6,
			/** 407 */
			Ky_7,
			/** 408 */
			Ky_8,
			/** 409 */
			Ky_9,
			/** 201 */
			Ky_sau_thang_1,
			/** 202 */
			Ky_sau_thang_2,
			/** 1 */
			Quy_1,
			/** 2 */
			Quy_2,
			/** 3 */
			Quy_3,
			/** 4 */
			Quy_4,
			/** 101 */
			Thang_1,
			/** 110 */
			Thang_10,
			/** 111 */
			Thang_11,
			/** 112 */
			Thang_12,
			/** 102 */
			Thang_2,
			/** 103 */
			Thang_3,
			/** 104 */
			Thang_4,
			/** 105 */
			Thang_5,
			/** 106 */
			Thang_6,
			/** 107 */
			Thang_7,
			/** 108 */
			Thang_8,
			/** 109 */
			Thang_9
		}
		enum FiscalYear {
			/** 1970 */
			Nam_Tai_chinh1970,
			/** 1971 */
			Nam_Tai_chinh1971,
			/** 1972 */
			Nam_Tai_chinh1972,
			/** 1973 */
			Nam_Tai_chinh1973,
			/** 1974 */
			Nam_Tai_chinh1974,
			/** 1975 */
			Nam_Tai_chinh1975,
			/** 1976 */
			Nam_Tai_chinh1976,
			/** 1977 */
			Nam_Tai_chinh1977,
			/** 1978 */
			Nam_Tai_chinh1978,
			/** 1979 */
			Nam_Tai_chinh1979,
			/** 1980 */
			Nam_Tai_chinh1980,
			/** 1981 */
			Nam_Tai_chinh1981,
			/** 1982 */
			Nam_Tai_chinh1982,
			/** 1983 */
			Nam_Tai_chinh1983,
			/** 1984 */
			Nam_Tai_chinh1984,
			/** 1985 */
			Nam_Tai_chinh1985,
			/** 1986 */
			Nam_Tai_chinh1986,
			/** 1987 */
			Nam_Tai_chinh1987,
			/** 1988 */
			Nam_Tai_chinh1988,
			/** 1989 */
			Nam_Tai_chinh1989,
			/** 1990 */
			Nam_Tai_chinh1990,
			/** 1991 */
			Nam_Tai_chinh1991,
			/** 1992 */
			Nam_Tai_chinh1992,
			/** 1993 */
			Nam_Tai_chinh1993,
			/** 1994 */
			Nam_Tai_chinh1994,
			/** 1995 */
			Nam_Tai_chinh1995,
			/** 1996 */
			Nam_Tai_chinh1996,
			/** 1997 */
			Nam_Tai_chinh1997,
			/** 1998 */
			Nam_Tai_chinh1998,
			/** 1999 */
			Nam_Tai_chinh1999,
			/** 2000 */
			Nam_Tai_chinh2000,
			/** 2001 */
			Nam_Tai_chinh2001,
			/** 2002 */
			Nam_Tai_chinh2002,
			/** 2003 */
			Nam_Tai_chinh2003,
			/** 2004 */
			Nam_Tai_chinh2004,
			/** 2005 */
			Nam_Tai_chinh2005,
			/** 2006 */
			Nam_Tai_chinh2006,
			/** 2007 */
			Nam_Tai_chinh2007,
			/** 2008 */
			Nam_Tai_chinh2008,
			/** 2009 */
			Nam_Tai_chinh2009,
			/** 2010 */
			Nam_Tai_chinh2010,
			/** 2011 */
			Nam_Tai_chinh2011,
			/** 2012 */
			Nam_Tai_chinh2012,
			/** 2013 */
			Nam_Tai_chinh2013,
			/** 2014 */
			Nam_Tai_chinh2014,
			/** 2015 */
			Nam_Tai_chinh2015,
			/** 2016 */
			Nam_Tai_chinh2016,
			/** 2017 */
			Nam_Tai_chinh2017,
			/** 2018 */
			Nam_Tai_chinh2018,
			/** 2019 */
			Nam_Tai_chinh2019,
			/** 2020 */
			Nam_Tai_chinh2020,
			/** 2021 */
			Nam_Tai_chinh2021,
			/** 2022 */
			Nam_Tai_chinh2022,
			/** 2023 */
			Nam_Tai_chinh2023,
			/** 2024 */
			Nam_Tai_chinh2024,
			/** 2025 */
			Nam_Tai_chinh2025,
			/** 2026 */
			Nam_Tai_chinh2026,
			/** 2027 */
			Nam_Tai_chinh2027,
			/** 2028 */
			Nam_Tai_chinh2028,
			/** 2029 */
			Nam_Tai_chinh2029,
			/** 2030 */
			Nam_Tai_chinh2030,
			/** 2031 */
			Nam_Tai_chinh2031,
			/** 2032 */
			Nam_Tai_chinh2032,
			/** 2033 */
			Nam_Tai_chinh2033,
			/** 2034 */
			Nam_Tai_chinh2034,
			/** 2035 */
			Nam_Tai_chinh2035,
			/** 2036 */
			Nam_Tai_chinh2036,
			/** 2037 */
			Nam_Tai_chinh2037,
			/** 2038 */
			Nam_Tai_chinh2038
		}
		enum GoalOwnerIdType {
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Da_dong,
			/** 2 */
			Da_loai_bo,
			/** 0 */
			Mo
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