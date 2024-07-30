'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_webformstepApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _mspp_webformstep = {
			mspp_accept: { a: 'mspp_accept' },
			mspp_allowmultiplefiles: { a: 'mspp_allowmultiplefiles' },
			mspp_appendquerystring: { a: 'mspp_appendquerystring' },
			mspp_associatecurrentportaluser: { a: 'mspp_associatecurrentportaluser' },
			mspp_attachfile: { a: 'mspp_attachfile' },
			mspp_attachfilelabel: { a: 'mspp_attachfilelabel' },
			mspp_attachfilemaxsize: { a: 'mspp_attachfilemaxsize' },
			mspp_attachfilerequired: { a: 'mspp_attachfilerequired' },
			mspp_attachfilerequirederrormessage: { a: 'mspp_attachfilerequirederrormessage' },
			mspp_attachfilerestrictaccept: { a: 'mspp_attachfilerestrictaccept' },
			mspp_attachfilesizeerrormessage: { a: 'mspp_attachfilesizeerrormessage' },
			mspp_attachfilestoragelocation: { a: 'mspp_attachfilestoragelocation' },
			mspp_attachfiletypeerrormessage: { a: 'mspp_attachfiletypeerrormessage' },
			mspp_autogeneratesteps: { a: 'mspp_autogeneratesteps' },
			mspp_autonumberattributelogicalname: { a: 'mspp_autonumberattributelogicalname' },
			mspp_autonumberdefinitionname: { a: 'mspp_autonumberdefinitionname' },
			mspp_captcharequired: { a: 'mspp_captcharequired' },
			mspp_condition: { a: 'mspp_condition' },
			mspp_conditiondefaultnextstep: { b: 'mspp_conditiondefaultnextstep', a: '_mspp_conditiondefaultnextstep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			mspp_containername: { a: 'mspp_containername' },
			mspp_createautonumber: { a: 'mspp_createautonumber' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_editexistingrecordpermitted: { a: 'mspp_editexistingrecordpermitted' },
			mspp_editexpiredmessage: { a: 'mspp_editexpiredmessage' },
			mspp_editexpiredstatecode: { a: 'mspp_editexpiredstatecode' },
			mspp_editexpiredstatusreason: { a: 'mspp_editexpiredstatusreason' },
			mspp_editnotpermittedmessage: { a: 'mspp_editnotpermittedmessage' },
			mspp_entitypermissionsenabled: { a: 'mspp_entitypermissionsenabled' },
			mspp_entitysourcestep: { b: 'mspp_entitysourcestep', a: '_mspp_entitysourcestep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			mspp_entitysourcetype: { a: 'mspp_entitysourcetype' },
			mspp_forceallfieldsrequired: { a: 'mspp_forceallfieldsrequired' },
			mspp_formname: { a: 'mspp_formname' },
			mspp_geolocation_addresslinefieldname: { a: 'mspp_geolocation_addresslinefieldname' },
			mspp_geolocation_cityfieldname: { a: 'mspp_geolocation_cityfieldname' },
			mspp_geolocation_countryfieldname: { a: 'mspp_geolocation_countryfieldname' },
			mspp_geolocation_countyfieldname: { a: 'mspp_geolocation_countyfieldname' },
			mspp_geolocation_displaymap: { a: 'mspp_geolocation_displaymap' },
			mspp_geolocation_enabled: { a: 'mspp_geolocation_enabled' },
			mspp_geolocation_formattedaddressfieldname: { a: 'mspp_geolocation_formattedaddressfieldname' },
			mspp_geolocation_latitudefieldname: { a: 'mspp_geolocation_latitudefieldname' },
			mspp_geolocation_longitudefieldname: { a: 'mspp_geolocation_longitudefieldname' },
			mspp_geolocation_maptype: { a: 'mspp_geolocation_maptype' },
			mspp_geolocation_neighborhoodfieldname: { a: 'mspp_geolocation_neighborhoodfieldname' },
			mspp_geolocation_postalcodefieldname: { a: 'mspp_geolocation_postalcodefieldname' },
			mspp_geolocation_statefieldname: { a: 'mspp_geolocation_statefieldname' },
			mspp_hideformonsuccess: { a: 'mspp_hideformonsuccess' },
			mspp_instructions: { a: 'mspp_instructions' },
			mspp_loadeventkeyname: { a: 'mspp_loadeventkeyname' },
			mspp_loguser: { a: 'mspp_loguser' },
			mspp_maximumnooffiles: { a: 'mspp_maximumnooffiles' },
			mspp_mode: { a: 'mspp_mode' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_movepreviouseventkeyname: { a: 'mspp_movepreviouseventkeyname' },
			mspp_movepreviouspermitted: { a: 'mspp_movepreviouspermitted' },
			mspp_multiplerecordsperuserpermitted: { a: 'mspp_multiplerecordsperuserpermitted' },
			mspp_name: { a: 'mspp_name' },
			mspp_nextbuttoncssclass: { a: 'mspp_nextbuttoncssclass' },
			mspp_nextbuttontext: { a: 'mspp_nextbuttontext' },
			mspp_nextstep: { b: 'mspp_nextstep', a: '_mspp_nextstep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			mspp_populatereferenceentitylookupfield: { a: 'mspp_populatereferenceentitylookupfield' },
			mspp_portaluserlookupattributeisactivityparty: { a: 'mspp_portaluserlookupattributeisactivityparty' },
			mspp_postbackurl: { a: 'mspp_postbackurl' },
			mspp_previousbuttoncssclass: { a: 'mspp_previousbuttoncssclass' },
			mspp_previousbuttontext: { a: 'mspp_previousbuttontext' },
			mspp_previousstep: { b: 'mspp_previousstep', a: '_mspp_previousstep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			mspp_primarykeyattributelogicalname: { a: 'mspp_primarykeyattributelogicalname' },
			mspp_primarykeyquerystringparametername: { a: 'mspp_primarykeyquerystringparametername' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages' },
			mspp_recommendedfieldsrequired: { a: 'mspp_recommendedfieldsrequired' },
			mspp_recordnotfoundmessage: { a: 'mspp_recordnotfoundmessage' },
			mspp_recordsourcerelationshipname: { a: 'mspp_recordsourcerelationshipname' },
			mspp_redirecturl: { a: 'mspp_redirecturl' },
			mspp_redirecturlappendentityidquerystring: { a: 'mspp_redirecturlappendentityidquerystring' },
			mspp_redirecturlcustomquerystring: { a: 'mspp_redirecturlcustomquerystring' },
			mspp_redirecturlquerystringattribute: { a: 'mspp_redirecturlquerystringattribute' },
			mspp_redirecturlquerystringattributeparamname: { a: 'mspp_redirecturlquerystringattributeparamname' },
			mspp_redirecturlquerystringname: { a: 'mspp_redirecturlquerystringname' },
			mspp_redirectwebpage: { b: 'mspp_redirectwebpage', a: '_mspp_redirectwebpage_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_referenceentitylogicalname: { a: 'mspp_referenceentitylogicalname' },
			mspp_referenceentityprimarykeylogicalname: { a: 'mspp_referenceentityprimarykeylogicalname' },
			mspp_referenceentityreadonlyformname: { a: 'mspp_referenceentityreadonlyformname' },
			mspp_referenceentityrelationshipname: { a: 'mspp_referenceentityrelationshipname' },
			mspp_referenceentityshowreadonlyform: { a: 'mspp_referenceentityshowreadonlyform' },
			mspp_referenceentitysourcetype: { a: 'mspp_referenceentitysourcetype' },
			mspp_referenceentitystep: { b: 'mspp_referenceentitystep', a: '_mspp_referenceentitystep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			mspp_referencequeryattributelogicalname: { a: 'mspp_referencequeryattributelogicalname' },
			mspp_referencequerystringisprimarykey: { a: 'mspp_referencequerystringisprimarykey' },
			mspp_referencequerystringname: { a: 'mspp_referencequerystringname' },
			mspp_referencerecordsourcerelationshipname: { a: 'mspp_referencerecordsourcerelationshipname' },
			mspp_referencesourceentitylogicalname: { a: 'mspp_referencesourceentitylogicalname' },
			mspp_referencetargetlookupattributelogicalname: { a: 'mspp_referencetargetlookupattributelogicalname' },
			mspp_registerstartupscript: { a: 'mspp_registerstartupscript' },
			mspp_renderwebresourcesinline: { a: 'mspp_renderwebresourcesinline' },
			mspp_savedeventkeyname: { a: 'mspp_savedeventkeyname' },
			mspp_savingeventkeyname: { a: 'mspp_savingeventkeyname' },
			mspp_setentityreference: { a: 'mspp_setentityreference' },
			mspp_settings: { a: 'mspp_settings' },
			mspp_showcaptchaforauthenticatedusers: { a: 'mspp_showcaptchaforauthenticatedusers' },
			mspp_showownerfields: { a: 'mspp_showownerfields' },
			mspp_showunsupportedfields: { a: 'mspp_showunsupportedfields' },
			mspp_storageaccountname: { a: 'mspp_storageaccountname' },
			mspp_submitbuttonbusytext: { a: 'mspp_submitbuttonbusytext' },
			mspp_submitbuttoncssclass: { a: 'mspp_submitbuttoncssclass' },
			mspp_submitbuttontext: { a: 'mspp_submitbuttontext' },
			mspp_submiteventkeyname: { a: 'mspp_submiteventkeyname' },
			mspp_successmessage: { a: 'mspp_successmessage' },
			mspp_tabname: { a: 'mspp_tabname' },
			mspp_targetentitylogicalname: { a: 'mspp_targetentitylogicalname' },
			mspp_targetentityportaluserlookupattribute: { a: 'mspp_targetentityportaluserlookupattribute' },
			mspp_targetentityprimarykeylogicalname: { a: 'mspp_targetentityprimarykeylogicalname' },
			mspp_title: { a: 'mspp_title' },
			mspp_tooltipenabled: { a: 'mspp_tooltipenabled' },
			mspp_type: { a: 'mspp_type' },
			mspp_usercontrolpath: { a: 'mspp_usercontrolpath' },
			mspp_usercontroltitle: { a: 'mspp_usercontroltitle' },
			mspp_userhostaddressattributelogicalname: { a: 'mspp_userhostaddressattributelogicalname' },
			mspp_useridentitynameattributelogicalname: { a: 'mspp_useridentitynameattributelogicalname' },
			mspp_validationgroup: { a: 'mspp_validationgroup' },
			mspp_validationsummarycssclass: { a: 'mspp_validationsummarycssclass' },
			mspp_validationsummaryheadertext: { a: 'mspp_validationsummaryheadertext' },
			mspp_validationsummarylinksenabled: { a: 'mspp_validationsummarylinksenabled' },
			mspp_validationsummarylinktext: { a: 'mspp_validationsummarylinktext' },
			mspp_webform: { b: 'mspp_webform', a: '_mspp_webform_value', c: 'mspp_webforms', d: 'mspp_webform' },
			mspp_webformstepId: { a: 'mspp_webformstepid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_webformstep = {};
		mspp_webformstep.ODataEntity = e;
		mspp_webformstep.FormattedValue = {};
		for (var field in _mspp_webformstep) {
			var a = _mspp_webformstep[field].a;
			var b = _mspp_webformstep[field].b;
			var c = _mspp_webformstep[field].c;
			var d = _mspp_webformstep[field].d;
			var g = _mspp_webformstep[field].g;
			var r = _mspp_webformstep[field].r;
			webApiField(mspp_webformstep, field, e, a, b, c, d, r, u, g);
		}
		mspp_webformstep.Entity = u;
		mspp_webformstep.EntityName = 'mspp_webformstep';
		mspp_webformstep.EntityCollectionName = 'mspp_webformsteps';
		mspp_webformstep['@odata.etag'] = e['@odata.etag'];
		mspp_webformstep.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_webformstep.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_webformstep;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webformstep = {
		mspp_attachfilestoragelocation : {
			Azure_Blob_Storage: 756150001,
			Tai_lieu_ghi_chu: 756150000
		},
		mspp_entitysourcetype : {
			Ban_ghi_lien_ket_voi_nguoi_dung_hien_tai_cua_cong_thong_tin: 100000004,
			Chuoi_truy_van: 100000001,
			Ket_qua_tu_buoc_truoc: 100000003,
			Nguoi_dung_hien_tai_cua_cong_thong_tin: 100000002
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
		mspp_referenceentitysourcetype : {
			Ban_ghi_lien_ket_voi_nguoi_dung_hien_tai_cua_cong_thong_tin: 100000002,
			Buoc_truoc: 100000001,
			Chuoi_truy_van: 100000000
		},
		mspp_type : {
			Chuyen_huong: 100000003,
			Dieu_kien: 100000000,
			Tab_tai: 100000002,
			Tai_bieu_mau: 100000001,
			Tai_kiem_soat_nguoi_dung: 100000004
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