//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_website_Information {
		interface tab__A36E3E44_6924_4722_8D78_44175EAD950B_Sections {
			_139917FD_C4F2_411C_BCAB_D810AD4B3A5A: DevKit.Controls.Section;
			_A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2: DevKit.Controls.Section;
			tab_13_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_advancedforms_Sections {
			tab_12_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_basicforms_Sections {
			tab_11_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_childpages_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_lists_Sections {
			tab_10_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_pagetemplates_Sections {
			tab_10_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_rootpages_Sections {
			tab_12_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_sitemarkers_Sections {
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_sitesettings_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_websiteaccesspermissions_Sections {
			tab_12_section_1: DevKit.Controls.Section;
		}
		interface tab__A36E3E44_6924_4722_8D78_44175EAD950B extends DevKit.Controls.ITab {
			Section: tab__A36E3E44_6924_4722_8D78_44175EAD950B_Sections;
		}
		interface tab_tab_advancedforms extends DevKit.Controls.ITab {
			Section: tab_tab_advancedforms_Sections;
		}
		interface tab_tab_basicforms extends DevKit.Controls.ITab {
			Section: tab_tab_basicforms_Sections;
		}
		interface tab_tab_childpages extends DevKit.Controls.ITab {
			Section: tab_tab_childpages_Sections;
		}
		interface tab_tab_lists extends DevKit.Controls.ITab {
			Section: tab_tab_lists_Sections;
		}
		interface tab_tab_pagetemplates extends DevKit.Controls.ITab {
			Section: tab_tab_pagetemplates_Sections;
		}
		interface tab_tab_rootpages extends DevKit.Controls.ITab {
			Section: tab_tab_rootpages_Sections;
		}
		interface tab_tab_sitemarkers extends DevKit.Controls.ITab {
			Section: tab_tab_sitemarkers_Sections;
		}
		interface tab_tab_sitesettings extends DevKit.Controls.ITab {
			Section: tab_tab_sitesettings_Sections;
		}
		interface tab_tab_websiteaccesspermissions extends DevKit.Controls.ITab {
			Section: tab_tab_websiteaccesspermissions_Sections;
		}
		interface Tabs {
			_A36E3E44_6924_4722_8D78_44175EAD950B: tab__A36E3E44_6924_4722_8D78_44175EAD950B;
			tab_advancedforms: tab_tab_advancedforms;
			tab_basicforms: tab_tab_basicforms;
			tab_childpages: tab_tab_childpages;
			tab_lists: tab_tab_lists;
			tab_pagetemplates: tab_tab_pagetemplates;
			tab_rootpages: tab_tab_rootpages;
			tab_sitemarkers: tab_tab_sitemarkers;
			tab_sitesettings: tab_tab_sitesettings;
			tab_websiteaccesspermissions: tab_tab_websiteaccesspermissions;
		}
		interface Body {
			Tab: Tabs;
			/** Tra cứu ngôn ngữ website – ngôn ngữ mặc định hiện tại của website */
			mspp_defaultlanguage: DevKit.Controls.Lookup;
			/** Mẫu web để dùng làm nội dung chân trang của website. */
			mspp_footerwebtemplateid: DevKit.Controls.Lookup;
			/** Mẫu web để dùng làm nội dung đầu trang của website. */
			mspp_headerwebtemplateid: DevKit.Controls.Lookup;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			/** Mã định danh duy nhất cho website được liên kết với website. */
			mspp_parentwebsiteid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Theo dõi tên miền chính của cổng thông tin */
			mspp_primarydomainname: DevKit.Controls.String;
			mspp_website_language: DevKit.Controls.Integer;
		}
		interface Navigation {
			mspp_columnpermissionprofile_website: DevKit.Controls.NavigationItem,
			mspp_mspp_website_mspp_websitelanguage: DevKit.Controls.NavigationItem,
			mspp_website_adplacement: DevKit.Controls.NavigationItem,
			mspp_website_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			mspp_website_adx_portalcomments: DevKit.Controls.NavigationItem,
			mspp_website_Appointments: DevKit.Controls.NavigationItem,
			mspp_website_contentsnippet: DevKit.Controls.NavigationItem,
			mspp_website_Emails: DevKit.Controls.NavigationItem,
			mspp_website_entityform: DevKit.Controls.NavigationItem,
			mspp_website_entitylist: DevKit.Controls.NavigationItem,
			mspp_website_mspp_entitypermission: DevKit.Controls.NavigationItem,
			mspp_website_mspp_webtemplate: DevKit.Controls.NavigationItem,
			mspp_website_pagetemplate: DevKit.Controls.NavigationItem,
			mspp_website_parentwebsite: DevKit.Controls.NavigationItem,
			mspp_website_PhoneCalls: DevKit.Controls.NavigationItem,
			mspp_website_pollplacement: DevKit.Controls.NavigationItem,
			mspp_website_publishingstate: DevKit.Controls.NavigationItem,
			mspp_website_publishingstatetransition: DevKit.Controls.NavigationItem,
			mspp_website_redirect: DevKit.Controls.NavigationItem,
			mspp_website_shortcut: DevKit.Controls.NavigationItem,
			mspp_website_sitemarker: DevKit.Controls.NavigationItem,
			mspp_website_sitesetting: DevKit.Controls.NavigationItem,
			mspp_website_Tasks: DevKit.Controls.NavigationItem,
			mspp_website_webfile: DevKit.Controls.NavigationItem,
			mspp_website_webform: DevKit.Controls.NavigationItem,
			mspp_website_weblinkset: DevKit.Controls.NavigationItem,
			mspp_website_webpage: DevKit.Controls.NavigationItem,
			mspp_website_webpageaccesscontrolrule: DevKit.Controls.NavigationItem,
			mspp_website_webrole: DevKit.Controls.NavigationItem,
			mspp_website_websiteaccess: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_advancedforms: DevKit.Controls.Grid;
			grid_basicforms: DevKit.Controls.Grid;
			grid_childpages: DevKit.Controls.Grid;
			grid_lists: DevKit.Controls.Grid;
			grid_pagetemplates: DevKit.Controls.Grid;
			grid_rootpages: DevKit.Controls.Grid;
			grid_sitemarkers: DevKit.Controls.Grid;
			grid_sitesettings: DevKit.Controls.Grid;
			grid_websiteaccesspermissions: DevKit.Controls.Grid;
			SupportedLanguagesSubgrid: DevKit.Controls.Grid;
		}
	}
	class Formmspp_website_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_website_Information */
		Body: DevKit.Formmspp_website_Information.Body;
		/** The Navigation of form mspp_website_Information */
		Navigation: DevKit.Formmspp_website_Information.Navigation;
		/** The Grid of form mspp_website_Information */
		Grid: DevKit.Formmspp_website_Information.Grid;
		/** The SidePanes of form mspp_website_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_websiteApi {
		/**
		* DynamicsCrm.DevKit mspp_websiteApi
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
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Tra cứu ngôn ngữ website – ngôn ngữ mặc định hiện tại của website */
		mspp_defaultlanguage: string;
		/** Mẫu web để dùng làm nội dung chân trang của website. */
		mspp_footerwebtemplateid: string;
		/** Mẫu web để dùng làm nội dung đầu trang của website. */
		mspp_headerwebtemplateid: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		/** Mã định danh duy nhất cho website được liên kết với website. */
		mspp_parentwebsiteid: string;
		mspp_partialurl: string;
		/** Theo dõi tên miền chính của cổng thông tin */
		mspp_primarydomainname: string;
		mspp_website_language: number;
		/** Phiên bản của bản ghi website */
		mspp_website_version: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_websiteId: string;
		/** Trạng thái của website */
		statecode: OptionSet.mspp_website.statecode;
		/** Lý do dẫn đến trạng thái của website */
		statuscode: OptionSet.mspp_website.statuscode;
		readonly FormattedValue: {
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Tra cứu ngôn ngữ website – ngôn ngữ mặc định hiện tại của website */
			readonly mspp_defaultlanguage: string;
			/** Mẫu web để dùng làm nội dung chân trang của website. */
			readonly mspp_footerwebtemplateid: string;
			/** Mẫu web để dùng làm nội dung đầu trang của website. */
			readonly mspp_headerwebtemplateid: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			/** Mã định danh duy nhất cho website được liên kết với website. */
			readonly mspp_parentwebsiteid: string;
			readonly mspp_partialurl: string;
			/** Theo dõi tên miền chính của cổng thông tin */
			readonly mspp_primarydomainname: string;
			readonly mspp_website_language: string;
			/** Phiên bản của bản ghi website */
			readonly mspp_website_version: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_websiteId: string;
			/** Trạng thái của website */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của website */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_website {
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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