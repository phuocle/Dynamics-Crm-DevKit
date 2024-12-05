'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_webformstep_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_accept: {},
			mspp_allowmultiplefiles: {},
			mspp_appendquerystring: {},
			mspp_associatecurrentportaluser: {},
			mspp_attachfile: {},
			mspp_attachfilelabel: {},
			mspp_attachfilemaxsize: {},
			mspp_attachfilerequired: {},
			mspp_attachfilerequirederrormessage: {},
			mspp_attachfilerestrictaccept: {},
			mspp_attachfilesizeerrormessage: {},
			mspp_attachfilestoragelocation: {},
			mspp_attachfiletypeerrormessage: {},
			mspp_autogeneratesteps: {},
			mspp_autonumberattributelogicalname: {},
			mspp_autonumberdefinitionname: {},
			mspp_captcharequired: {},
			mspp_condition: {},
			mspp_conditiondefaultnextstep: {},
			mspp_createautonumber: {},
			mspp_entitypermissionsenabled: {},
			mspp_entitysourcestep: {},
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
			mspp_loadeventkeyname: {},
			mspp_loguser: {},
			mspp_mode: {},
			mspp_movepreviouseventkeyname: {},
			mspp_movepreviouspermitted: {},
			mspp_name: {},
			mspp_nextbuttoncssclass: {},
			mspp_nextbuttontext: {},
			mspp_nextstep: {},
			mspp_populatereferenceentitylookupfield: {},
			mspp_portaluserlookupattributeisactivityparty: {},
			mspp_previousbuttoncssclass: {},
			mspp_previousbuttontext: {},
			mspp_primarykeyattributelogicalname: {},
			mspp_primarykeyquerystringparametername: {},
			mspp_provisionedlanguages: {},
			mspp_recommendedfieldsrequired: {},
			mspp_recordnotfoundmessage: {},
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
			mspp_referenceentitystep: {},
			mspp_referencequeryattributelogicalname: {},
			mspp_referencequerystringisprimarykey: {},
			mspp_referencequerystringname: {},
			mspp_referencerecordsourcerelationshipname: {},
			mspp_referencetargetlookupattributelogicalname: {},
			mspp_registerstartupscript: {},
			mspp_registerstartupscript1: {},
			mspp_renderwebresourcesinline: {},
			mspp_savedeventkeyname: {},
			mspp_savingeventkeyname: {},
			mspp_setentityreference: {},
			mspp_settings: {},
			mspp_showcaptchaforauthenticatedusers: {},
			mspp_showownerfields: {},
			mspp_showunsupportedfields: {},
			mspp_submitbuttonbusytext: {},
			mspp_submitbuttoncssclass: {},
			mspp_submitbuttontext: {},
			mspp_submiteventkeyname: {},
			mspp_successmessage: {},
			mspp_tabname: {},
			mspp_targetentitylogicalname: {},
			mspp_targetentityportaluserlookupattribute: {},
			mspp_title: {},
			mspp_tooltipenabled: {},
			mspp_type: {},
			mspp_usercontrolpath: {},
			mspp_usercontroltitle: {},
			mspp_userhostaddressattributelogicalname: {},
			mspp_useridentitynameattributelogicalname: {},
			mspp_validationgroup: {},
			mspp_validationsummarycssclass: {},
			mspp_validationsummaryheadertext: {},
			mspp_validationsummarylinksenabled: {},
			mspp_validationsummarylinktext: {},
			mspp_webform: {},
			WebResource_condition: {},
			WebResource_geolocationaddresslinefieldnameselector: {},
			WebResource_geolocationcityfieldnameselector: {},
			WebResource_geolocationcountryfieldnameselector: {},
			WebResource_geolocationcountyfieldnameselector: {},
			WebResource_geolocationformattedaddressfieldnameselector: {},
			WebResource_geolocationlatitudefieldnameselector: {},
			WebResource_geolocationlongitudefieldnameselector: {},
			WebResource_geolocationneighborhoodfieldnameselector: {},
			WebResource_geolocationpostalcodefieldname: {},
			WebResource_geolocationstatefieldnameselector: {},
			WebResource_instructions: {},
			WebResource_localize_attachfilelabel: {},
			WebResource_localize_attachfilerequirederrormessage: {},
			WebResource_localize_nextbuttontext: {},
			WebResource_localize_previousbuttontext: {},
			WebResource_localize_submitbuttonbusytext: {},
			WebResource_localize_submitbuttontext: {},
			WebResource_localize_successmessage: {},
			WebResource_localize_title: {},
			WebResource_localize_usercontroltitle: {},
			WebResource_localized_recordnotfoundmessage: {},
			WebResource_mspp_attachfilesizeerrormessage: {},
			WebResource_mspp_attachfiletypeerrormessage: {},
			WebResource_mspp_autonumberattributelogicalname: {},
			WebResource_mspp_formname: {},
			WebResource_mspp_primarykeyattributelogicalname: {},
			WebResource_mspp_recordsourcerelationshipname: {},
			WebResource_mspp_redirecturlquerystringattribute: {},
			WebResource_mspp_referenceentitylogicalname: {},
			WebResource_mspp_referenceentityreadonlyformname: {},
			WebResource_mspp_referenceentityrelationshipname_selector: {},
			WebResource_mspp_referencequeryattributelogicalname: {},
			WebResource_mspp_referencerecordsourcerelationshipname: {},
			WebResource_mspp_referencetargetlookupattributelogicalname: {},
			WebResource_mspp_settings: {},
			WebResource_mspp_tabname: {},
			WebResource_mspp_targetentitylogicalname: {},
			WebResource_mspp_targetentityportaluserlookupattribute: {},
			WebResource_mspp_userhostaddressattributelogicalname: {},
			WebResource_mspp_useridentitynameattributelogicalname: {},
			WebResource_mspp_validationsummaryheadertext: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_10: {
				Section: {
					tab_10_section_2: {}
				}
			},
			tab_additional_functionality: {
				Section: {
					section_geolocation: {},
					section_settings: {},
					tab_7_section_1: {},
					tab_7_section_4: {},
					tab_8_section_1: {}
				}
			},
			tab_condition: {
				Section: {
					tab_5_section_1: {}
				}
			},
			tab_entity_reference: {
				Section: {
					section_entity_reference_details: {},
					section_entity_reference_readonly: {},
					section_entity_reference_source: {},
					section_entity_source_query_string: {},
					section_entity_source_step: {},
					section_reference_entity_source_relationship: {},
					tab_9_section_1: {}
				}
			},
			tab_form: {
				Section: {
					section_additionalsettings: {},
					section_associateportaluser: {},
					section_entity_source: {},
					section_entity_source_querystring: {},
					section_entity_source_relationship: {},
					section_formdefinition: {},
					section_mode: {}
				}
			},
			tab_form_options: {
				Section: {
					mspp_webformstep_registerstartupscript_MonacoEditor: {},
					section_formtabusercontroloptions: {},
					section_javascript: {},
					tab_10_section_1: {},
					tab_form_section_3: {}
				}
			},
			tab_redirect: {
				Section: {
					tab_4_section_1: {},
					tab_redirect_section_2: {}
				}
			},
			tab_usercontrol: {
				Section: {
					tab_8_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mspp_webform_startstep: {},
			mspp_webformmetadata_webformstep: {},
			mspp_webformstep_conditiondefaultnextstep: {},
			mspp_webformstep_entitysourcestep: {},
			mspp_webformstep_nextstep: {},
			mspp_webformstep_previousstep: {},
			mspp_webformstep_referenceentitystep: {}
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
	OptionSet.mspp_webformstep = {
		mspp_attachfilestoragelocation : {
			Azure_Blob_Storage: 756150001,
			Note_Document: 756150000
		},
		mspp_entitysourcetype : {
			Current_Portal_User: 100000002,
			Query_String: 100000001,
			Record_Associated_to_Current_Portal_User: 100000004,
			Result_From_Previous_Step: 100000003
		},
		mspp_geolocation_maptype : {
			Bing: 756150000,
			Esri: 756150002,
			Google: 756150001
		},
		mspp_mode : {
			Edit: 100000001,
			Insert: 100000000,
			ReadOnly: 100000002
		},
		mspp_referenceentitysourcetype : {
			Previous_Step: 100000001,
			Query_String: 100000000,
			Record_Associated_to_Current_Portal_User: 100000002
		},
		mspp_type : {
			Condition: 100000000,
			Load_Form: 100000001,
			Load_Tab: 100000002,
			Load_User_Control: 100000004,
			Redirect: 100000003
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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