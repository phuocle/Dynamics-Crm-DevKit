'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_entityform_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			grid_entityformmetadata: {},
			mspp_appendquerystring: {},
			mspp_associatecurrentportaluser: {},
			mspp_attachfile: {},
			mspp_attachfileaccept: {},
			mspp_attachfileacceptextensions: {},
			mspp_attachfileallowmultiple: {},
			mspp_attachfilelabel: {},
			mspp_attachfilemaxsize: {},
			mspp_attachfilerequired: {},
			mspp_attachfilerequirederrormessage: {},
			mspp_attachfilerestrictaccept: {},
			mspp_attachfilesaveoption: {},
			mspp_attachfilesizeerrormessage: {},
			mspp_attachfilestoragelocation: {},
			mspp_attachfiletypeerrormessage: {},
			mspp_autogeneratesteps: {},
			mspp_captcharequired: {},
			mspp_entityname: {},
			mspp_entitypermissionsenabled: {},
			mspp_entitysourcetype: {},
			mspp_forceallfieldsrequired: {},
			mspp_formname: {},
			mspp_geolocation_addresslinefieldname: {},
			mspp_geolocation_cityfieldname: {},
			mspp_geolocation_countryfieldname: {},
			mspp_geolocation_countyfieldname: {},
			mspp_geolocation_displaymap: {},
			mspp_geolocation_enabled: {},
			mspp_geolocation_formattedaddressfieldname: {},
			mspp_geolocation_latitudefieldname: {},
			mspp_geolocation_longitudefieldname: {},
			mspp_geolocation_neighborhoodfieldname: {},
			mspp_geolocation_postalcodefieldname: {},
			mspp_geolocation_statefieldname: {},
			mspp_hideformonsuccess: {},
			mspp_instructions: {},
			mspp_mode: {},
			mspp_name: {},
			mspp_nextbuttoncssclass: {},
			mspp_nextbuttontext: {},
			mspp_onsuccess: {},
			mspp_populatereferenceentitylookupfield: {},
			mspp_portaluserlookupattributeisactivityparty: {},
			mspp_previousbuttoncssclass: {},
			mspp_previousbuttontext: {},
			mspp_primarykeyname: {},
			mspp_provisionedlanguages: {},
			mspp_recommendedfieldsrequired: {},
			mspp_recordidquerystringparametername: {},
			mspp_recordnotfoundmessage: {},
			mspp_recordsourceallowcreateonnull: {},
			mspp_recordsourcerelationshipname: {},
			mspp_redirecturl: {},
			mspp_redirecturlappendentityidquerystring: {},
			mspp_redirecturlcustomquerystring: {},
			mspp_redirecturlquerystringattribute: {},
			mspp_redirecturlquerystringattributeparamname: {},
			mspp_redirecturlquerystringname: {},
			mspp_redirectwebpage: {},
			mspp_referenceentitylogicalname: {},
			mspp_referenceentityreadonlyformname: {},
			mspp_referenceentityrelationshipname: {},
			mspp_referenceentityshowreadonlyform: {},
			mspp_referenceentitysourcetype: {},
			mspp_referencequeryattributelogicalname: {},
			mspp_referencequerystringisprimarykey: {},
			mspp_referencequerystringname: {},
			mspp_referencerecordsourcerelationshipname: {},
			mspp_referencetargetlookupattributelogicalname: {},
			mspp_registerstartupscript: {},
			mspp_renderwebresourcesinline: {},
			mspp_setentityreference: {},
			mspp_settings: {},
			mspp_showcaptchaforauthenticatedusers: {},
			mspp_showownerfields: {},
			mspp_showunsupportedfields: {},
			mspp_submitbuttonbusytext: {},
			mspp_submitbuttoncssclass: {},
			mspp_submitbuttontext: {},
			mspp_successmessage: {},
			mspp_tabname: {},
			mspp_targetentityportaluserlookupattribute: {},
			mspp_tooltipenabled: {},
			mspp_validationgroup: {},
			mspp_validationsummarycssclass: {},
			mspp_validationsummaryheadertext: {},
			mspp_validationsummarylinksenabled: {},
			mspp_validationsummarylinktext: {},
			mspp_websiteid: {},
			WebResource_entityreferencequerystringattributeselector: {},
			WebResource_entityreferencereadonlyformselector: {},
			WebResource_geolocation_addresslinefieldnameselector: {},
			WebResource_geolocationcityfieldnameselector: {},
			WebResource_geolocationcountryfieldnameselector: {},
			WebResource_geolocationcountyfieldnameselector: {},
			WebResource_geolocationformattedaddressfieldnameselector: {},
			WebResource_geolocationlatitudefieldnameselector: {},
			WebResource_geolocationlongitudefieldnameselector: {},
			WebResource_geolocationneighborhoodfieldnameselector: {},
			WebResource_geolocationpostalcodefieldnameselector: {},
			WebResource_geolocationstatefieldnameselector: {},
			WebResource_instructions: {},
			WebResource_localize_attachfilelabel: {},
			WebResource_localize_attachfilerequirederrormessage: {},
			WebResource_localize_attachfiletypeerrormessage: {},
			WebResource_localize_attachmentfilesizeerrormessage: {},
			WebResource_localized_recordnotfoundmessage: {},
			WebResource_lookupattributeselector: {},
			WebResource_mspp_entityname: {},
			WebResource_mspp_formname: {},
			WebResource_mspp_recordsourcerelationshipname: {},
			WebResource_mspp_referenceentityrelationshipname_selector: {},
			WebResource_mspp_referencerecordsourcerelationshipname: {},
			WebResource_mspp_registerstartupscript_editor: {},
			WebResource_mspp_settings: {},
			WebResource_mspp_tabname: {},
			WebResource_mspp_validationsummaryheadertext: {},
			WebResource_referenceentityselector: {},
			WebResource_targetlookupportaluserselector: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_additionalsettings: {
				Section: {
					section_customjavascript: {},
					section_geolocation: {},
					section_settings: {},
					tab_4_section_1: {},
					tab_additionalsettings_section_2: {},
					tab_formoptions_section_3: {}
				}
			},
			tab_entityformmetadata: {
				Section: {
					tab_5_section_1: {}
				}
			},
			tab_entityreference: {
				Section: {
					section_entity_reference_details: {},
					section_entity_reference_readonly: {},
					section_entity_reference_source: {},
					section_entity_source_query_string: {},
					section_reference_entity_source_relationship: {},
					tab_6_section_1: {}
				}
			},
			tab_formoptions: {
				Section: {
					tab_2_section_1: {},
					tab_formoptions_section_2: {}
				}
			},
			tab_onsuccess: {
				Section: {
					tab_3_section_1: {},
					tab_onsuccess_section_2: {},
					tab_onsuccess_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_entityformmetadata: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspp_entityform_entityformmetadata_entityformforcreate: {},
			mspp_entityform_webformmetadata_entityformforcreate: {},
			mspp_entityformmetadata_entityform: {},
			mspp_webpage_entityform: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_entityform = {
		mspp_attachfilesaveoption : {
			Ghi_chu: 756150000,
			Nhan_xet_tren_cong_thong_tin: 756150001
		},
		mspp_attachfilestoragelocation : {
			Azure_Blob_Storage: 756150001,
			Tep_dinh_kem_ghi_chu: 756150000
		},
		mspp_entitysourcetype : {
			Ban_ghi_lien_ket_voi_nguoi_dung_hien_tai_cua_cong_thong_tin: 756150003,
			Chuoi_truy_van: 756150001,
			Nguoi_dung_hien_tai_cua_cong_thong_tin: 756150002
		},
		mspp_geolocation_maptype : {
			Bing: 756150000,
			Esri: 756150002,
			Google: 756150001
		},
		mspp_mode : {
			Chen: 100000000,
			Chi_doc: 100000002,
			Chinh_sua: 100000001
		},
		mspp_onsuccess : {
			Chuyen_huong: 756150001,
			Hien_thi_thong_bao_thanh_cong: 756150000
		},
		mspp_referenceentitysourcetype : {
			Ban_ghi_lien_ket_voi_nguoi_dung_hien_tai_cua_cong_thong_tin: 756150001,
			Chuoi_truy_van: 756150000
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));