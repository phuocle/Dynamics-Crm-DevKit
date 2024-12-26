//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCalendar_Information {
		interface tab_general_Sections {
			Holidays_List: DevKit.Controls.Section;
			section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Lịch được hệ thống lên lịch dùng để xác định thời điểm cuộc hẹn hoặc hoạt động diễn ra. */
			Description: DevKit.Controls.String;
			/** Tên của lịch. */
			Name: DevKit.Controls.String;
			holidayListcontrol_id: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			calendar_calendar_rules: DevKit.Controls.NavigationItem,
			calendar_slaitem: DevKit.Controls.NavigationItem,
			calendar_system_users: DevKit.Controls.NavigationItem,
			inner_calendar_calendar_rules: DevKit.Controls.NavigationItem,
			slabase_businesshoursid: DevKit.Controls.NavigationItem
		}
	}
	class FormCalendar_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Calendar_Information */
		Body: DevKit.FormCalendar_Information.Body;
		/** The Navigation of form Calendar_Information */
		Navigation: DevKit.FormCalendar_Information.Navigation;
		/** The SidePanes of form Calendar_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CalendarApi {
		/**
		* DynamicsCrm.DevKit CalendarApi
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
		/** Mã định danh duy nhất của đơn vị kinh doanh có lịch được liên kết. */
		BusinessUnitId: string;
		/** Mã định danh duy nhất của lịch. */
		CalendarId: string;
		/** Mã định danh duy nhất của người dùng đã tạo lịch. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo lịch. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo lịch. */
		readonly CreatedOnBehalfBy: string;
		/** Lịch được hệ thống lên lịch dùng để xác định thời điểm cuộc hẹn hoặc hoạt động diễn ra. */
		Description: string;
		/** CalendarId Kế hoạch Nghỉ lễ */
		HolidayScheduleCalendarId: string;
		/** Lịch được các lịch khác chia sẻ, chẳng hạn như lịch tổ chức. */
		IsShared: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi lịch lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lịch lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lịch lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của lịch. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có lịch được liên kết. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của người dùng chính của lịch này. */
		PrimaryUserId: string;
		/** Loại lịch, chẳng hạn như lịch giờ làm việc của Người dùng hoặc lịch giờ dịch vụ Khách hàng. */
		Type: OptionSet.Calendar.Type;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của đơn vị kinh doanh có lịch được liên kết. */
			readonly BusinessUnitId: string;
			/** Mã định danh duy nhất của lịch. */
			readonly CalendarId: string;
			/** Mã định danh duy nhất của người dùng đã tạo lịch. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo lịch. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo lịch. */
			readonly CreatedOnBehalfBy: string;
			/** Lịch được hệ thống lên lịch dùng để xác định thời điểm cuộc hẹn hoặc hoạt động diễn ra. */
			readonly Description: string;
			/** CalendarId Kế hoạch Nghỉ lễ */
			readonly HolidayScheduleCalendarId: string;
			/** Lịch được các lịch khác chia sẻ, chẳng hạn như lịch tổ chức. */
			readonly IsShared: string;
			/** Mã định danh duy nhất của người dùng sửa đổi lịch lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lịch lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lịch lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của lịch. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có lịch được liên kết. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của người dùng chính của lịch này. */
			readonly PrimaryUserId: string;
			/** Loại lịch, chẳng hạn như lịch giờ làm việc của Người dùng hoặc lịch giờ dịch vụ Khách hàng. */
			readonly Type: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Calendar {
		enum Type {
			/** 1 */
			Dich_vu_khach_hang,
			/** 2 */
			Lich_nghi_le,
			/** 0 */
			Mac_dinh
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