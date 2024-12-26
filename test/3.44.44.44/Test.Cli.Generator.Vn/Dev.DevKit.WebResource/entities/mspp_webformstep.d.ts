//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webformstep_Information {
		interface tab_tab_10_Sections {
			tab_10_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_additional_functionality_Sections {
			section_geolocation: DevKit.Controls.Section;
			section_settings: DevKit.Controls.Section;
			tab_7_section_1: DevKit.Controls.Section;
			tab_7_section_4: DevKit.Controls.Section;
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_condition_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_entity_reference_Sections {
			section_entity_reference_details: DevKit.Controls.Section;
			section_entity_reference_readonly: DevKit.Controls.Section;
			section_entity_reference_source: DevKit.Controls.Section;
			section_entity_source_query_string: DevKit.Controls.Section;
			section_entity_source_step: DevKit.Controls.Section;
			section_reference_entity_source_relationship: DevKit.Controls.Section;
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_form_Sections {
			section_additionalsettings: DevKit.Controls.Section;
			section_associateportaluser: DevKit.Controls.Section;
			section_entity_source: DevKit.Controls.Section;
			section_entity_source_querystring: DevKit.Controls.Section;
			section_entity_source_relationship: DevKit.Controls.Section;
			section_formdefinition: DevKit.Controls.Section;
			section_mode: DevKit.Controls.Section;
		}
		interface tab_tab_form_options_Sections {
			section_formtabusercontroloptions: DevKit.Controls.Section;
			section_javascript: DevKit.Controls.Section;
			tab_10_section_1: DevKit.Controls.Section;
			tab_form_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_redirect_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_redirect_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_usercontrol_Sections {
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_10 extends DevKit.Controls.ITab {
			Section: tab_tab_10_Sections;
		}
		interface tab_tab_additional_functionality extends DevKit.Controls.ITab {
			Section: tab_tab_additional_functionality_Sections;
		}
		interface tab_tab_condition extends DevKit.Controls.ITab {
			Section: tab_tab_condition_Sections;
		}
		interface tab_tab_entity_reference extends DevKit.Controls.ITab {
			Section: tab_tab_entity_reference_Sections;
		}
		interface tab_tab_form extends DevKit.Controls.ITab {
			Section: tab_tab_form_Sections;
		}
		interface tab_tab_form_options extends DevKit.Controls.ITab {
			Section: tab_tab_form_options_Sections;
		}
		interface tab_tab_redirect extends DevKit.Controls.ITab {
			Section: tab_tab_redirect_Sections;
		}
		interface tab_tab_usercontrol extends DevKit.Controls.ITab {
			Section: tab_tab_usercontrol_Sections;
		}
		interface Tabs {
			tab_10: tab_tab_10;
			tab_additional_functionality: tab_tab_additional_functionality;
			tab_condition: tab_tab_condition;
			tab_entity_reference: tab_tab_entity_reference;
			tab_form: tab_tab_form;
			tab_form_options: tab_tab_form_options;
			tab_redirect: tab_tab_redirect;
			tab_usercontrol: tab_tab_usercontrol;
		}
		interface Body {
			Tab: Tabs;
			/** Thuộc tính chấp nhận chỉ định loại MIME của tệp mà máy chủ chấp nhận thông qua thao tác tải tệp lên. Để chỉ định nhiều giá trị, hãy dùng dấu phẩy để phân tách các giá trị (ví dụ: audio/*,video/*,image/*). */
			mspp_accept: DevKit.Controls.String;
			mspp_allowmultiplefiles: DevKit.Controls.Boolean;
			mspp_appendquerystring: DevKit.Controls.Boolean;
			mspp_associatecurrentportaluser: DevKit.Controls.Boolean;
			mspp_attachfile: DevKit.Controls.Boolean;
			mspp_attachfilelabel: DevKit.Controls.String;
			mspp_attachfilemaxsize: DevKit.Controls.Integer;
			mspp_attachfilerequired: DevKit.Controls.Boolean;
			mspp_attachfilerequirederrormessage: DevKit.Controls.String;
			mspp_attachfilerestrictaccept: DevKit.Controls.Boolean;
			mspp_attachfilesizeerrormessage: DevKit.Controls.String;
			mspp_attachfilestoragelocation: DevKit.Controls.OptionSet;
			mspp_attachfiletypeerrormessage: DevKit.Controls.String;
			mspp_autogeneratesteps: DevKit.Controls.Boolean;
			mspp_autonumberattributelogicalname: DevKit.Controls.String;
			mspp_autonumberdefinitionname: DevKit.Controls.String;
			mspp_captcharequired: DevKit.Controls.Boolean;
			mspp_condition: DevKit.Controls.String;
			/** Nếu kiểm tra điều kiện không thành công thì đây là bước tiếp theo. */
			mspp_conditiondefaultnextstep: DevKit.Controls.Lookup;
			mspp_createautonumber: DevKit.Controls.Boolean;
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Bước biểu mẫu. */
			mspp_entitysourcestep: DevKit.Controls.Lookup;
			mspp_entitysourcetype: DevKit.Controls.OptionSet;
			mspp_forceallfieldsrequired: DevKit.Controls.Boolean;
			/** Hiển thị tên của biểu mẫu thực thể để kết xuất. */
			mspp_formname: DevKit.Controls.String;
			mspp_geolocation_addresslinefieldname: DevKit.Controls.String;
			mspp_geolocation_cityfieldname: DevKit.Controls.String;
			mspp_geolocation_countryfieldname: DevKit.Controls.String;
			mspp_geolocation_countyfieldname: DevKit.Controls.String;
			mspp_geolocation_displaymap: DevKit.Controls.Boolean;
			mspp_geolocation_enabled: DevKit.Controls.Boolean;
			mspp_geolocation_formattedaddressfieldname: DevKit.Controls.String;
			mspp_geolocation_latitudefieldname: DevKit.Controls.String;
			mspp_geolocation_longitudefieldname: DevKit.Controls.String;
			mspp_geolocation_neighborhoodfieldname: DevKit.Controls.String;
			mspp_geolocation_postalcodefieldname: DevKit.Controls.String;
			mspp_geolocation_statefieldname: DevKit.Controls.String;
			mspp_hideformonsuccess: DevKit.Controls.Boolean;
			mspp_instructions: DevKit.Controls.String;
			mspp_loadeventkeyname: DevKit.Controls.String;
			mspp_loguser: DevKit.Controls.Boolean;
			mspp_mode: DevKit.Controls.OptionSet;
			mspp_movepreviouseventkeyname: DevKit.Controls.String;
			mspp_movepreviouspermitted: DevKit.Controls.Boolean;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_nextbuttoncssclass: DevKit.Controls.String;
			mspp_nextbuttontext: DevKit.Controls.String;
			/** Con trỏ tới bước tiếp theo. */
			mspp_nextstep: DevKit.Controls.Lookup;
			mspp_populatereferenceentitylookupfield: DevKit.Controls.Boolean;
			mspp_portaluserlookupattributeisactivityparty: DevKit.Controls.Boolean;
			mspp_previousbuttoncssclass: DevKit.Controls.String;
			mspp_previousbuttontext: DevKit.Controls.String;
			/** Tên lô-gic của thuộc tính khóa chính cho thực thể mục tiêu. */
			mspp_primarykeyattributelogicalname: DevKit.Controls.String;
			mspp_primarykeyquerystringparametername: DevKit.Controls.String;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			mspp_recommendedfieldsrequired: DevKit.Controls.Boolean;
			mspp_recordnotfoundmessage: DevKit.Controls.String;
			mspp_recordsourcerelationshipname: DevKit.Controls.String;
			/** Hiển thị URL để chuyển hướng tới. */
			mspp_redirecturl: DevKit.Controls.String;
			mspp_redirecturlappendentityidquerystring: DevKit.Controls.Boolean;
			mspp_redirecturlcustomquerystring: DevKit.Controls.String;
			/** Thêm một giá trị thuộc tính dưới dạng giá trị chuỗi truy vấn bằng cách chỉ định tên lô-gic của thuộc tính để gán giá trị cho chuỗi truy vấn đó. */
			mspp_redirecturlquerystringattribute: DevKit.Controls.String;
			mspp_redirecturlquerystringattributeparamname: DevKit.Controls.String;
			/** URL để chuyển hướng tới được tự động truy xuất từ chuỗi truy vấn bằng cách sử dụng tên tham số này */
			mspp_redirecturlquerystringname: DevKit.Controls.String;
			/** Trang web để chuyển hướng tới. */
			mspp_redirectwebpage: DevKit.Controls.Lookup;
			mspp_referenceentitylogicalname: DevKit.Controls.String;
			mspp_referenceentityreadonlyformname: DevKit.Controls.String;
			mspp_referenceentityrelationshipname: DevKit.Controls.String;
			mspp_referenceentityshowreadonlyform: DevKit.Controls.Boolean;
			mspp_referenceentitysourcetype: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Bước biểu mẫu. */
			mspp_referenceentitystep: DevKit.Controls.Lookup;
			mspp_referencequeryattributelogicalname: DevKit.Controls.String;
			mspp_referencequerystringisprimarykey: DevKit.Controls.Boolean;
			mspp_referencequerystringname: DevKit.Controls.String;
			mspp_referencerecordsourcerelationshipname: DevKit.Controls.String;
			mspp_referencetargetlookupattributelogicalname: DevKit.Controls.String;
			/** Hiển thị JavaScript tùy chỉnh sẽ được đặt ngay trước phần tử </form> đóng ở cuối trang. */
			mspp_registerstartupscript: DevKit.Controls.String;
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			mspp_savedeventkeyname: DevKit.Controls.String;
			mspp_savingeventkeyname: DevKit.Controls.String;
			mspp_setentityreference: DevKit.Controls.Boolean;
			mspp_settings: DevKit.Controls.String;
			mspp_showcaptchaforauthenticatedusers: DevKit.Controls.Boolean;
			mspp_showownerfields: DevKit.Controls.Boolean;
			mspp_showunsupportedfields: DevKit.Controls.Boolean;
			mspp_submitbuttonbusytext: DevKit.Controls.String;
			mspp_submitbuttoncssclass: DevKit.Controls.String;
			mspp_submitbuttontext: DevKit.Controls.String;
			mspp_submiteventkeyname: DevKit.Controls.String;
			mspp_successmessage: DevKit.Controls.String;
			/** Tên của tab trên một biểu mẫu thực thể để kết xuất. */
			mspp_tabname: DevKit.Controls.String;
			mspp_targetentitylogicalname: DevKit.Controls.String;
			mspp_targetentityportaluserlookupattribute: DevKit.Controls.String;
			mspp_title: DevKit.Controls.String;
			mspp_tooltipenabled: DevKit.Controls.Boolean;
			mspp_type: DevKit.Controls.OptionSet;
			mspp_usercontrolpath: DevKit.Controls.String;
			mspp_usercontroltitle: DevKit.Controls.String;
			mspp_userhostaddressattributelogicalname: DevKit.Controls.String;
			mspp_useridentitynameattributelogicalname: DevKit.Controls.String;
			mspp_validationgroup: DevKit.Controls.String;
			mspp_validationsummarycssclass: DevKit.Controls.String;
			mspp_validationsummaryheadertext: DevKit.Controls.String;
			mspp_validationsummarylinksenabled: DevKit.Controls.Boolean;
			mspp_validationsummarylinktext: DevKit.Controls.String;
			/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với Bước biểu mẫu. */
			mspp_webform: DevKit.Controls.Lookup;
			WebResource_condition: DevKit.Controls.WebResource;
			WebResource_geolocationaddresslinefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcityfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcountryfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcountyfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationformattedaddressfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationlatitudefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationlongitudefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationneighborhoodfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationpostalcodefieldname: DevKit.Controls.WebResource;
			WebResource_geolocationstatefieldnameselector: DevKit.Controls.WebResource;
			WebResource_instructions: DevKit.Controls.WebResource;
			WebResource_localize_attachfilelabel: DevKit.Controls.WebResource;
			WebResource_localize_attachfilerequirederrormessage: DevKit.Controls.WebResource;
			WebResource_localize_nextbuttontext: DevKit.Controls.WebResource;
			WebResource_localize_previousbuttontext: DevKit.Controls.WebResource;
			WebResource_localize_submitbuttonbusytext: DevKit.Controls.WebResource;
			WebResource_localize_submitbuttontext: DevKit.Controls.WebResource;
			WebResource_localize_successmessage: DevKit.Controls.WebResource;
			WebResource_localize_title: DevKit.Controls.WebResource;
			WebResource_localize_usercontroltitle: DevKit.Controls.WebResource;
			WebResource_localized_recordnotfoundmessage: DevKit.Controls.WebResource;
			WebResource_mspp_attachfilesizeerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_attachfiletypeerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_autonumberattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_formname: DevKit.Controls.WebResource;
			WebResource_mspp_primarykeyattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_recordsourcerelationshipname: DevKit.Controls.WebResource;
			WebResource_mspp_redirecturlquerystringattribute: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentitylogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentityreadonlyformname: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentityrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_referencequeryattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_referencerecordsourcerelationshipname: DevKit.Controls.WebResource;
			WebResource_mspp_referencetargetlookupattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_registerstartupscript_editor: DevKit.Controls.WebResource;
			WebResource_mspp_settings: DevKit.Controls.WebResource;
			WebResource_mspp_tabname: DevKit.Controls.WebResource;
			WebResource_mspp_targetentitylogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_targetentityportaluserlookupattribute: DevKit.Controls.WebResource;
			WebResource_mspp_userhostaddressattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_useridentitynameattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_validationsummaryheadertext: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_webform_startstep: DevKit.Controls.NavigationItem,
			mspp_webformmetadata_webformstep: DevKit.Controls.NavigationItem,
			mspp_webformstep_conditiondefaultnextstep: DevKit.Controls.NavigationItem,
			mspp_webformstep_entitysourcestep: DevKit.Controls.NavigationItem,
			mspp_webformstep_nextstep: DevKit.Controls.NavigationItem,
			mspp_webformstep_previousstep: DevKit.Controls.NavigationItem,
			mspp_webformstep_referenceentitystep: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_webformstep_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webformstep_Information */
		Body: DevKit.Formmspp_webformstep_Information.Body;
		/** The Navigation of form mspp_webformstep_Information */
		Navigation: DevKit.Formmspp_webformstep_Information.Navigation;
		/** The SidePanes of form mspp_webformstep_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webformstepApi {
		/**
		* DynamicsCrm.DevKit mspp_webformstepApi
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
		/** Thuộc tính chấp nhận chỉ định loại MIME của tệp mà máy chủ chấp nhận thông qua thao tác tải tệp lên. Để chỉ định nhiều giá trị, hãy dùng dấu phẩy để phân tách các giá trị (ví dụ: audio/*,video/*,image/*). */
		mspp_accept: string;
		mspp_allowmultiplefiles: boolean;
		mspp_appendquerystring: boolean;
		mspp_associatecurrentportaluser: boolean;
		mspp_attachfile: boolean;
		mspp_attachfilelabel: string;
		mspp_attachfilemaxsize: number;
		mspp_attachfilerequired: boolean;
		mspp_attachfilerequirederrormessage: string;
		mspp_attachfilerestrictaccept: boolean;
		mspp_attachfilesizeerrormessage: string;
		mspp_attachfilestoragelocation: OptionSet.mspp_webformstep.mspp_attachfilestoragelocation;
		mspp_attachfiletypeerrormessage: string;
		mspp_autogeneratesteps: boolean;
		mspp_autonumberattributelogicalname: string;
		mspp_autonumberdefinitionname: string;
		mspp_captcharequired: boolean;
		mspp_condition: string;
		/** Nếu kiểm tra điều kiện không thành công thì đây là bước tiếp theo. */
		mspp_conditiondefaultnextstep: string;
		mspp_containername: string;
		mspp_createautonumber: boolean;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_editexistingrecordpermitted: boolean;
		mspp_editexpiredmessage: string;
		mspp_editexpiredstatecode: number;
		mspp_editexpiredstatusreason: number;
		mspp_editnotpermittedmessage: string;
		mspp_entitypermissionsenabled: boolean;
		/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Bước biểu mẫu. */
		mspp_entitysourcestep: string;
		mspp_entitysourcetype: OptionSet.mspp_webformstep.mspp_entitysourcetype;
		mspp_forceallfieldsrequired: boolean;
		/** Hiển thị tên của biểu mẫu thực thể để kết xuất. */
		mspp_formname: string;
		mspp_geolocation_addresslinefieldname: string;
		mspp_geolocation_cityfieldname: string;
		mspp_geolocation_countryfieldname: string;
		mspp_geolocation_countyfieldname: string;
		mspp_geolocation_displaymap: boolean;
		mspp_geolocation_enabled: boolean;
		mspp_geolocation_formattedaddressfieldname: string;
		mspp_geolocation_latitudefieldname: string;
		mspp_geolocation_longitudefieldname: string;
		mspp_geolocation_maptype: OptionSet.mspp_webformstep.mspp_geolocation_maptype;
		mspp_geolocation_neighborhoodfieldname: string;
		mspp_geolocation_postalcodefieldname: string;
		mspp_geolocation_statefieldname: string;
		mspp_hideformonsuccess: boolean;
		mspp_instructions: string;
		mspp_loadeventkeyname: string;
		mspp_loguser: boolean;
		mspp_maximumnooffiles: number;
		mspp_mode: OptionSet.mspp_webformstep.mspp_mode;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_movepreviouseventkeyname: string;
		mspp_movepreviouspermitted: boolean;
		mspp_multiplerecordsperuserpermitted: boolean;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_nextbuttoncssclass: string;
		mspp_nextbuttontext: string;
		/** Con trỏ tới bước tiếp theo. */
		mspp_nextstep: string;
		mspp_populatereferenceentitylookupfield: boolean;
		mspp_portaluserlookupattributeisactivityparty: boolean;
		mspp_postbackurl: string;
		mspp_previousbuttoncssclass: string;
		mspp_previousbuttontext: string;
		/** Con trỏ tới bước trước đó. */
		mspp_previousstep: string;
		/** Tên lô-gic của thuộc tính khóa chính cho thực thể mục tiêu. */
		mspp_primarykeyattributelogicalname: string;
		mspp_primarykeyquerystringparametername: string;
		mspp_provisionedlanguages: number;
		mspp_recommendedfieldsrequired: boolean;
		mspp_recordnotfoundmessage: string;
		mspp_recordsourcerelationshipname: string;
		/** Hiển thị URL để chuyển hướng tới. */
		mspp_redirecturl: string;
		mspp_redirecturlappendentityidquerystring: boolean;
		mspp_redirecturlcustomquerystring: string;
		/** Thêm một giá trị thuộc tính dưới dạng giá trị chuỗi truy vấn bằng cách chỉ định tên lô-gic của thuộc tính để gán giá trị cho chuỗi truy vấn đó. */
		mspp_redirecturlquerystringattribute: string;
		mspp_redirecturlquerystringattributeparamname: string;
		/** URL để chuyển hướng tới được tự động truy xuất từ chuỗi truy vấn bằng cách sử dụng tên tham số này */
		mspp_redirecturlquerystringname: string;
		/** Trang web để chuyển hướng tới. */
		mspp_redirectwebpage: string;
		mspp_referenceentitylogicalname: string;
		mspp_referenceentityprimarykeylogicalname: string;
		mspp_referenceentityreadonlyformname: string;
		mspp_referenceentityrelationshipname: string;
		mspp_referenceentityshowreadonlyform: boolean;
		mspp_referenceentitysourcetype: OptionSet.mspp_webformstep.mspp_referenceentitysourcetype;
		/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Bước biểu mẫu. */
		mspp_referenceentitystep: string;
		mspp_referencequeryattributelogicalname: string;
		mspp_referencequerystringisprimarykey: boolean;
		mspp_referencequerystringname: string;
		mspp_referencerecordsourcerelationshipname: string;
		mspp_referencesourceentitylogicalname: string;
		mspp_referencetargetlookupattributelogicalname: string;
		/** Hiển thị JavaScript tùy chỉnh sẽ được đặt ngay trước phần tử </form> đóng ở cuối trang. */
		mspp_registerstartupscript: string;
		mspp_renderwebresourcesinline: boolean;
		mspp_savedeventkeyname: string;
		mspp_savingeventkeyname: string;
		mspp_setentityreference: boolean;
		mspp_settings: string;
		mspp_showcaptchaforauthenticatedusers: boolean;
		mspp_showownerfields: boolean;
		mspp_showunsupportedfields: boolean;
		mspp_storageaccountname: string;
		mspp_submitbuttonbusytext: string;
		mspp_submitbuttoncssclass: string;
		mspp_submitbuttontext: string;
		mspp_submiteventkeyname: string;
		mspp_successmessage: string;
		/** Tên của tab trên một biểu mẫu thực thể để kết xuất. */
		mspp_tabname: string;
		mspp_targetentitylogicalname: string;
		mspp_targetentityportaluserlookupattribute: string;
		mspp_targetentityprimarykeylogicalname: string;
		mspp_title: string;
		mspp_tooltipenabled: boolean;
		mspp_type: OptionSet.mspp_webformstep.mspp_type;
		mspp_usercontrolpath: string;
		mspp_usercontroltitle: string;
		mspp_userhostaddressattributelogicalname: string;
		mspp_useridentitynameattributelogicalname: string;
		mspp_validationgroup: string;
		mspp_validationsummarycssclass: string;
		mspp_validationsummaryheadertext: string;
		mspp_validationsummarylinksenabled: boolean;
		mspp_validationsummarylinktext: string;
		/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với Bước biểu mẫu. */
		mspp_webform: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_webformstepId: string;
		/** Trạng thái của Bước biểu mẫu */
		statecode: OptionSet.mspp_webformstep.statecode;
		/** Lý do dẫn đến trạng thái của Bước biểu mẫu */
		statuscode: OptionSet.mspp_webformstep.statuscode;
		readonly FormattedValue: {
			/** Thuộc tính chấp nhận chỉ định loại MIME của tệp mà máy chủ chấp nhận thông qua thao tác tải tệp lên. Để chỉ định nhiều giá trị, hãy dùng dấu phẩy để phân tách các giá trị (ví dụ: audio/*,video/*,image/*). */
			readonly mspp_accept: string;
			readonly mspp_allowmultiplefiles: string;
			readonly mspp_appendquerystring: string;
			readonly mspp_associatecurrentportaluser: string;
			readonly mspp_attachfile: string;
			readonly mspp_attachfilelabel: string;
			readonly mspp_attachfilemaxsize: string;
			readonly mspp_attachfilerequired: string;
			readonly mspp_attachfilerequirederrormessage: string;
			readonly mspp_attachfilerestrictaccept: string;
			readonly mspp_attachfilesizeerrormessage: string;
			readonly mspp_attachfilestoragelocation: string;
			readonly mspp_attachfiletypeerrormessage: string;
			readonly mspp_autogeneratesteps: string;
			readonly mspp_autonumberattributelogicalname: string;
			readonly mspp_autonumberdefinitionname: string;
			readonly mspp_captcharequired: string;
			readonly mspp_condition: string;
			/** Nếu kiểm tra điều kiện không thành công thì đây là bước tiếp theo. */
			readonly mspp_conditiondefaultnextstep: string;
			readonly mspp_containername: string;
			readonly mspp_createautonumber: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_editexistingrecordpermitted: string;
			readonly mspp_editexpiredmessage: string;
			readonly mspp_editexpiredstatecode: string;
			readonly mspp_editexpiredstatusreason: string;
			readonly mspp_editnotpermittedmessage: string;
			readonly mspp_entitypermissionsenabled: string;
			/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Bước biểu mẫu. */
			readonly mspp_entitysourcestep: string;
			readonly mspp_entitysourcetype: string;
			readonly mspp_forceallfieldsrequired: string;
			/** Hiển thị tên của biểu mẫu thực thể để kết xuất. */
			readonly mspp_formname: string;
			readonly mspp_geolocation_addresslinefieldname: string;
			readonly mspp_geolocation_cityfieldname: string;
			readonly mspp_geolocation_countryfieldname: string;
			readonly mspp_geolocation_countyfieldname: string;
			readonly mspp_geolocation_displaymap: string;
			readonly mspp_geolocation_enabled: string;
			readonly mspp_geolocation_formattedaddressfieldname: string;
			readonly mspp_geolocation_latitudefieldname: string;
			readonly mspp_geolocation_longitudefieldname: string;
			readonly mspp_geolocation_maptype: string;
			readonly mspp_geolocation_neighborhoodfieldname: string;
			readonly mspp_geolocation_postalcodefieldname: string;
			readonly mspp_geolocation_statefieldname: string;
			readonly mspp_hideformonsuccess: string;
			readonly mspp_instructions: string;
			readonly mspp_loadeventkeyname: string;
			readonly mspp_loguser: string;
			readonly mspp_maximumnooffiles: string;
			readonly mspp_mode: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_movepreviouseventkeyname: string;
			readonly mspp_movepreviouspermitted: string;
			readonly mspp_multiplerecordsperuserpermitted: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_nextbuttoncssclass: string;
			readonly mspp_nextbuttontext: string;
			/** Con trỏ tới bước tiếp theo. */
			readonly mspp_nextstep: string;
			readonly mspp_populatereferenceentitylookupfield: string;
			readonly mspp_portaluserlookupattributeisactivityparty: string;
			readonly mspp_postbackurl: string;
			readonly mspp_previousbuttoncssclass: string;
			readonly mspp_previousbuttontext: string;
			/** Con trỏ tới bước trước đó. */
			readonly mspp_previousstep: string;
			/** Tên lô-gic của thuộc tính khóa chính cho thực thể mục tiêu. */
			readonly mspp_primarykeyattributelogicalname: string;
			readonly mspp_primarykeyquerystringparametername: string;
			readonly mspp_provisionedlanguages: string;
			readonly mspp_recommendedfieldsrequired: string;
			readonly mspp_recordnotfoundmessage: string;
			readonly mspp_recordsourcerelationshipname: string;
			/** Hiển thị URL để chuyển hướng tới. */
			readonly mspp_redirecturl: string;
			readonly mspp_redirecturlappendentityidquerystring: string;
			readonly mspp_redirecturlcustomquerystring: string;
			/** Thêm một giá trị thuộc tính dưới dạng giá trị chuỗi truy vấn bằng cách chỉ định tên lô-gic của thuộc tính để gán giá trị cho chuỗi truy vấn đó. */
			readonly mspp_redirecturlquerystringattribute: string;
			readonly mspp_redirecturlquerystringattributeparamname: string;
			/** URL để chuyển hướng tới được tự động truy xuất từ chuỗi truy vấn bằng cách sử dụng tên tham số này */
			readonly mspp_redirecturlquerystringname: string;
			/** Trang web để chuyển hướng tới. */
			readonly mspp_redirectwebpage: string;
			readonly mspp_referenceentitylogicalname: string;
			readonly mspp_referenceentityprimarykeylogicalname: string;
			readonly mspp_referenceentityreadonlyformname: string;
			readonly mspp_referenceentityrelationshipname: string;
			readonly mspp_referenceentityshowreadonlyform: string;
			readonly mspp_referenceentitysourcetype: string;
			/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Bước biểu mẫu. */
			readonly mspp_referenceentitystep: string;
			readonly mspp_referencequeryattributelogicalname: string;
			readonly mspp_referencequerystringisprimarykey: string;
			readonly mspp_referencequerystringname: string;
			readonly mspp_referencerecordsourcerelationshipname: string;
			readonly mspp_referencesourceentitylogicalname: string;
			readonly mspp_referencetargetlookupattributelogicalname: string;
			/** Hiển thị JavaScript tùy chỉnh sẽ được đặt ngay trước phần tử </form> đóng ở cuối trang. */
			readonly mspp_registerstartupscript: string;
			readonly mspp_renderwebresourcesinline: string;
			readonly mspp_savedeventkeyname: string;
			readonly mspp_savingeventkeyname: string;
			readonly mspp_setentityreference: string;
			readonly mspp_settings: string;
			readonly mspp_showcaptchaforauthenticatedusers: string;
			readonly mspp_showownerfields: string;
			readonly mspp_showunsupportedfields: string;
			readonly mspp_storageaccountname: string;
			readonly mspp_submitbuttonbusytext: string;
			readonly mspp_submitbuttoncssclass: string;
			readonly mspp_submitbuttontext: string;
			readonly mspp_submiteventkeyname: string;
			readonly mspp_successmessage: string;
			/** Tên của tab trên một biểu mẫu thực thể để kết xuất. */
			readonly mspp_tabname: string;
			readonly mspp_targetentitylogicalname: string;
			readonly mspp_targetentityportaluserlookupattribute: string;
			readonly mspp_targetentityprimarykeylogicalname: string;
			readonly mspp_title: string;
			readonly mspp_tooltipenabled: string;
			readonly mspp_type: string;
			readonly mspp_usercontrolpath: string;
			readonly mspp_usercontroltitle: string;
			readonly mspp_userhostaddressattributelogicalname: string;
			readonly mspp_useridentitynameattributelogicalname: string;
			readonly mspp_validationgroup: string;
			readonly mspp_validationsummarycssclass: string;
			readonly mspp_validationsummaryheadertext: string;
			readonly mspp_validationsummarylinksenabled: string;
			readonly mspp_validationsummarylinktext: string;
			/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với Bước biểu mẫu. */
			readonly mspp_webform: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_webformstepId: string;
			/** Trạng thái của Bước biểu mẫu */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Bước biểu mẫu */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webformstep {
		enum mspp_attachfilestoragelocation {
			/** 756150001 */
			Azure_Blob_Storage,
			/** 756150000 */
			Tai_lieu_ghi_chu
		}
		enum mspp_entitysourcetype {
			/** 100000004 */
			Ban_ghi_lien_ket_voi_nguoi_dung_hien_tai_cua_cong_thong_tin,
			/** 100000001 */
			Chuoi_truy_van,
			/** 100000003 */
			Ket_qua_tu_buoc_truoc,
			/** 100000002 */
			Nguoi_dung_hien_tai_cua_cong_thong_tin
		}
		enum mspp_geolocation_maptype {
			/** 756150000 */
			Bing,
			/** 756150002 */
			Esri,
			/** 756150001 */
			Google
		}
		enum mspp_mode {
			/** 100000000 */
			Chen,
			/** 100000002 */
			Chi_doc,
			/** 100000001 */
			Chinh_sua
		}
		enum mspp_referenceentitysourcetype {
			/** 100000002 */
			Ban_ghi_lien_ket_voi_nguoi_dung_hien_tai_cua_cong_thong_tin,
			/** 100000001 */
			Buoc_truoc,
			/** 100000000 */
			Chuoi_truy_van
		}
		enum mspp_type {
			/** 100000003 */
			Chuyen_huong,
			/** 100000000 */
			Dieu_kien,
			/** 100000002 */
			Tab_tai,
			/** 100000001 */
			Tai_bieu_mau,
			/** 100000004 */
			Tai_kiem_soat_nguoi_dung
		}
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