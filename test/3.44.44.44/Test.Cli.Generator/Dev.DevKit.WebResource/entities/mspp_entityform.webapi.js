'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_entityformApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _mspp_entityform = {
			mspp_appendquerystring: { a: 'mspp_appendquerystring' },
			mspp_associatecurrentportaluser: { a: 'mspp_associatecurrentportaluser' },
			mspp_attachfile: { a: 'mspp_attachfile' },
			mspp_attachfileaccept: { a: 'mspp_attachfileaccept' },
			mspp_attachfileacceptextensions: { a: 'mspp_attachfileacceptextensions' },
			mspp_attachfileallowmultiple: { a: 'mspp_attachfileallowmultiple' },
			mspp_attachfilelabel: { a: 'mspp_attachfilelabel' },
			mspp_attachfilemaxsize: { a: 'mspp_attachfilemaxsize' },
			mspp_attachfilerequired: { a: 'mspp_attachfilerequired' },
			mspp_attachfilerequirederrormessage: { a: 'mspp_attachfilerequirederrormessage' },
			mspp_attachfilerestrictaccept: { a: 'mspp_attachfilerestrictaccept' },
			mspp_attachfilesaveoption: { a: 'mspp_attachfilesaveoption' },
			mspp_attachfilesizeerrormessage: { a: 'mspp_attachfilesizeerrormessage' },
			mspp_attachfilestoragelocation: { a: 'mspp_attachfilestoragelocation' },
			mspp_attachfiletypeerrormessage: { a: 'mspp_attachfiletypeerrormessage' },
			mspp_autogeneratesteps: { a: 'mspp_autogeneratesteps' },
			mspp_captcharequired: { a: 'mspp_captcharequired' },
			mspp_containername: { a: 'mspp_containername' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_entityformId: { a: 'mspp_entityformid' },
			mspp_entityname: { a: 'mspp_entityname' },
			mspp_entitypermissionsenabled: { a: 'mspp_entitypermissionsenabled' },
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
			mspp_maximumnooffiles: { a: 'mspp_maximumnooffiles' },
			mspp_mode: { a: 'mspp_mode' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_name: { a: 'mspp_name' },
			mspp_nextbuttoncssclass: { a: 'mspp_nextbuttoncssclass' },
			mspp_nextbuttontext: { a: 'mspp_nextbuttontext' },
			mspp_onsuccess: { a: 'mspp_onsuccess' },
			mspp_populatereferenceentitylookupfield: { a: 'mspp_populatereferenceentitylookupfield' },
			mspp_portaluserlookupattributeisactivityparty: { a: 'mspp_portaluserlookupattributeisactivityparty' },
			mspp_previousbuttoncssclass: { a: 'mspp_previousbuttoncssclass' },
			mspp_previousbuttontext: { a: 'mspp_previousbuttontext' },
			mspp_primarykeyname: { a: 'mspp_primarykeyname' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages' },
			mspp_recommendedfieldsrequired: { a: 'mspp_recommendedfieldsrequired' },
			mspp_recordidquerystringparametername: { a: 'mspp_recordidquerystringparametername' },
			mspp_recordnotfoundmessage: { a: 'mspp_recordnotfoundmessage' },
			mspp_recordsourceallowcreateonnull: { a: 'mspp_recordsourceallowcreateonnull' },
			mspp_recordsourceentitylogicalname: { a: 'mspp_recordsourceentitylogicalname' },
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
			mspp_referencequeryattributelogicalname: { a: 'mspp_referencequeryattributelogicalname' },
			mspp_referencequerystringisprimarykey: { a: 'mspp_referencequerystringisprimarykey' },
			mspp_referencequerystringname: { a: 'mspp_referencequerystringname' },
			mspp_referencerecordsourcerelationshipname: { a: 'mspp_referencerecordsourcerelationshipname' },
			mspp_referencetargetlookupattributelogicalname: { a: 'mspp_referencetargetlookupattributelogicalname' },
			mspp_registerstartupscript: { a: 'mspp_registerstartupscript' },
			mspp_renderwebresourcesinline: { a: 'mspp_renderwebresourcesinline' },
			mspp_setentityreference: { a: 'mspp_setentityreference' },
			mspp_settings: { a: 'mspp_settings' },
			mspp_showcaptchaforauthenticatedusers: { a: 'mspp_showcaptchaforauthenticatedusers' },
			mspp_showownerfields: { a: 'mspp_showownerfields' },
			mspp_showunsupportedfields: { a: 'mspp_showunsupportedfields' },
			mspp_storageaccountname: { a: 'mspp_storageaccountname' },
			mspp_submitbuttonbusytext: { a: 'mspp_submitbuttonbusytext' },
			mspp_submitbuttoncssclass: { a: 'mspp_submitbuttoncssclass' },
			mspp_submitbuttontext: { a: 'mspp_submitbuttontext' },
			mspp_successmessage: { a: 'mspp_successmessage' },
			mspp_tabname: { a: 'mspp_tabname' },
			mspp_targetentityportaluserlookupattribute: { a: 'mspp_targetentityportaluserlookupattribute' },
			mspp_tooltipenabled: { a: 'mspp_tooltipenabled' },
			mspp_validationgroup: { a: 'mspp_validationgroup' },
			mspp_validationsummarycssclass: { a: 'mspp_validationsummarycssclass' },
			mspp_validationsummaryheadertext: { a: 'mspp_validationsummaryheadertext' },
			mspp_validationsummarylinksenabled: { a: 'mspp_validationsummarylinksenabled' },
			mspp_validationsummarylinktext: { a: 'mspp_validationsummarylinktext' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_entityform = {};
		mspp_entityform.ODataEntity = e;
		mspp_entityform.FormattedValue = {};
		for (var field in _mspp_entityform) {
			var a = _mspp_entityform[field].a;
			var b = _mspp_entityform[field].b;
			var c = _mspp_entityform[field].c;
			var d = _mspp_entityform[field].d;
			var g = _mspp_entityform[field].g;
			var r = _mspp_entityform[field].r;
			webApiField(mspp_entityform, field, e, a, b, c, d, r, u, g);
		}
		mspp_entityform.Entity = u;
		mspp_entityform.EntityName = 'mspp_entityform';
		mspp_entityform.EntityCollectionName = 'mspp_entityforms';
		mspp_entityform['@odata.etag'] = e['@odata.etag'];
		mspp_entityform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_entityform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_entityform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_entityform = {
		mspp_attachfilesaveoption : {
			Notes: 756150000,
			Portal_Comment: 756150001
		},
		mspp_attachfilestoragelocation : {
			Azure_Blob_Storage: 756150001,
			Note_Attachment: 756150000
		},
		mspp_entitysourcetype : {
			Current_Portal_User: 756150002,
			Query_String: 756150001,
			Record_Associated_to_Current_Portal_User: 756150003
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
		mspp_onsuccess : {
			Display_Success_Message: 756150000,
			Redirect: 756150001
		},
		mspp_referenceentitysourcetype : {
			Query_String: 756150000,
			Record_Associated_to_Current_Portal_User: 756150001
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