'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.mspp_entityformApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _mspp_entityform = {
			mspp_appendquerystring: { a: 'mspp_appendquerystring', g: 'Boolean' },
			mspp_associatecurrentportaluser: { a: 'mspp_associatecurrentportaluser', g: 'Boolean' },
			mspp_attachfile: { a: 'mspp_attachfile', g: 'Boolean' },
			mspp_attachfileaccept: { a: 'mspp_attachfileaccept' },
			mspp_attachfileacceptextensions: { a: 'mspp_attachfileacceptextensions' },
			mspp_attachfileallowmultiple: { a: 'mspp_attachfileallowmultiple', g: 'Boolean' },
			mspp_attachfilelabel: { a: 'mspp_attachfilelabel' },
			mspp_attachfilemaxsize: { a: 'mspp_attachfilemaxsize', g: 'Integer' },
			mspp_attachfilerequired: { a: 'mspp_attachfilerequired', g: 'Boolean' },
			mspp_attachfilerequirederrormessage: { a: 'mspp_attachfilerequirederrormessage' },
			mspp_attachfilerestrictaccept: { a: 'mspp_attachfilerestrictaccept', g: 'Boolean' },
			mspp_attachfilesaveoption: { a: 'mspp_attachfilesaveoption', g: 'Integer' },
			mspp_attachfilesizeerrormessage: { a: 'mspp_attachfilesizeerrormessage' },
			mspp_attachfilestoragelocation: { a: 'mspp_attachfilestoragelocation', g: 'Integer' },
			mspp_attachfiletypeerrormessage: { a: 'mspp_attachfiletypeerrormessage' },
			mspp_autogeneratesteps: { a: 'mspp_autogeneratesteps', g: 'Boolean' },
			mspp_captcharequired: { a: 'mspp_captcharequired', g: 'Boolean' },
			mspp_containername: { a: 'mspp_containername' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon', g: 'DateTime' },
			mspp_entityformId: { a: 'mspp_entityformid' },
			mspp_entityname: { a: 'mspp_entityname' },
			mspp_entitypermissionsenabled: { a: 'mspp_entitypermissionsenabled', g: 'Boolean' },
			mspp_entitysourcetype: { a: 'mspp_entitysourcetype', g: 'Integer' },
			mspp_forceallfieldsrequired: { a: 'mspp_forceallfieldsrequired', g: 'Boolean' },
			mspp_formname: { a: 'mspp_formname' },
			mspp_geolocation_addresslinefieldname: { a: 'mspp_geolocation_addresslinefieldname' },
			mspp_geolocation_cityfieldname: { a: 'mspp_geolocation_cityfieldname' },
			mspp_geolocation_countryfieldname: { a: 'mspp_geolocation_countryfieldname' },
			mspp_geolocation_countyfieldname: { a: 'mspp_geolocation_countyfieldname' },
			mspp_geolocation_displaymap: { a: 'mspp_geolocation_displaymap', g: 'Boolean' },
			mspp_geolocation_enabled: { a: 'mspp_geolocation_enabled', g: 'Boolean' },
			mspp_geolocation_formattedaddressfieldname: { a: 'mspp_geolocation_formattedaddressfieldname' },
			mspp_geolocation_latitudefieldname: { a: 'mspp_geolocation_latitudefieldname' },
			mspp_geolocation_longitudefieldname: { a: 'mspp_geolocation_longitudefieldname' },
			mspp_geolocation_maptype: { a: 'mspp_geolocation_maptype', g: 'Integer' },
			mspp_geolocation_neighborhoodfieldname: { a: 'mspp_geolocation_neighborhoodfieldname' },
			mspp_geolocation_postalcodefieldname: { a: 'mspp_geolocation_postalcodefieldname' },
			mspp_geolocation_statefieldname: { a: 'mspp_geolocation_statefieldname' },
			mspp_hideformonsuccess: { a: 'mspp_hideformonsuccess', g: 'Boolean' },
			mspp_instructions: { a: 'mspp_instructions' },
			mspp_maximumnooffiles: { a: 'mspp_maximumnooffiles', g: 'Integer' },
			mspp_mode: { a: 'mspp_mode', g: 'Integer' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon', g: 'DateTime' },
			mspp_name: { a: 'mspp_name' },
			mspp_nextbuttoncssclass: { a: 'mspp_nextbuttoncssclass' },
			mspp_nextbuttontext: { a: 'mspp_nextbuttontext' },
			mspp_onsuccess: { a: 'mspp_onsuccess', g: 'Integer' },
			mspp_populatereferenceentitylookupfield: { a: 'mspp_populatereferenceentitylookupfield', g: 'Boolean' },
			mspp_portaluserlookupattributeisactivityparty: { a: 'mspp_portaluserlookupattributeisactivityparty', g: 'Boolean' },
			mspp_previousbuttoncssclass: { a: 'mspp_previousbuttoncssclass' },
			mspp_previousbuttontext: { a: 'mspp_previousbuttontext' },
			mspp_primarykeyname: { a: 'mspp_primarykeyname' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages', g: 'Integer' },
			mspp_recommendedfieldsrequired: { a: 'mspp_recommendedfieldsrequired', g: 'Boolean' },
			mspp_recordidquerystringparametername: { a: 'mspp_recordidquerystringparametername' },
			mspp_recordnotfoundmessage: { a: 'mspp_recordnotfoundmessage' },
			mspp_recordsourceallowcreateonnull: { a: 'mspp_recordsourceallowcreateonnull', g: 'Boolean' },
			mspp_recordsourceentitylogicalname: { a: 'mspp_recordsourceentitylogicalname' },
			mspp_recordsourcerelationshipname: { a: 'mspp_recordsourcerelationshipname' },
			mspp_redirecturl: { a: 'mspp_redirecturl' },
			mspp_redirecturlappendentityidquerystring: { a: 'mspp_redirecturlappendentityidquerystring', g: 'Boolean' },
			mspp_redirecturlcustomquerystring: { a: 'mspp_redirecturlcustomquerystring' },
			mspp_redirecturlquerystringattribute: { a: 'mspp_redirecturlquerystringattribute' },
			mspp_redirecturlquerystringattributeparamname: { a: 'mspp_redirecturlquerystringattributeparamname' },
			mspp_redirecturlquerystringname: { a: 'mspp_redirecturlquerystringname' },
			mspp_redirectwebpage: { b: 'mspp_redirectwebpage', a: '_mspp_redirectwebpage_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_referenceentitylogicalname: { a: 'mspp_referenceentitylogicalname' },
			mspp_referenceentityprimarykeylogicalname: { a: 'mspp_referenceentityprimarykeylogicalname' },
			mspp_referenceentityreadonlyformname: { a: 'mspp_referenceentityreadonlyformname' },
			mspp_referenceentityrelationshipname: { a: 'mspp_referenceentityrelationshipname' },
			mspp_referenceentityshowreadonlyform: { a: 'mspp_referenceentityshowreadonlyform', g: 'Boolean' },
			mspp_referenceentitysourcetype: { a: 'mspp_referenceentitysourcetype', g: 'Integer' },
			mspp_referencequeryattributelogicalname: { a: 'mspp_referencequeryattributelogicalname' },
			mspp_referencequerystringisprimarykey: { a: 'mspp_referencequerystringisprimarykey', g: 'Boolean' },
			mspp_referencequerystringname: { a: 'mspp_referencequerystringname' },
			mspp_referencerecordsourcerelationshipname: { a: 'mspp_referencerecordsourcerelationshipname' },
			mspp_referencetargetlookupattributelogicalname: { a: 'mspp_referencetargetlookupattributelogicalname' },
			mspp_registerstartupscript: { a: 'mspp_registerstartupscript' },
			mspp_renderwebresourcesinline: { a: 'mspp_renderwebresourcesinline', g: 'Boolean' },
			mspp_setentityreference: { a: 'mspp_setentityreference', g: 'Boolean' },
			mspp_settings: { a: 'mspp_settings' },
			mspp_showcaptchaforauthenticatedusers: { a: 'mspp_showcaptchaforauthenticatedusers', g: 'Boolean' },
			mspp_showownerfields: { a: 'mspp_showownerfields', g: 'Boolean' },
			mspp_showunsupportedfields: { a: 'mspp_showunsupportedfields', g: 'Boolean' },
			mspp_storageaccountname: { a: 'mspp_storageaccountname' },
			mspp_submitbuttonbusytext: { a: 'mspp_submitbuttonbusytext' },
			mspp_submitbuttoncssclass: { a: 'mspp_submitbuttoncssclass' },
			mspp_submitbuttontext: { a: 'mspp_submitbuttontext' },
			mspp_successmessage: { a: 'mspp_successmessage' },
			mspp_tabname: { a: 'mspp_tabname' },
			mspp_targetentityportaluserlookupattribute: { a: 'mspp_targetentityportaluserlookupattribute' },
			mspp_tooltipenabled: { a: 'mspp_tooltipenabled', g: 'Boolean' },
			mspp_validationgroup: { a: 'mspp_validationgroup' },
			mspp_validationsummarycssclass: { a: 'mspp_validationsummarycssclass' },
			mspp_validationsummaryheadertext: { a: 'mspp_validationsummaryheadertext' },
			mspp_validationsummarylinksenabled: { a: 'mspp_validationsummarylinksenabled', g: 'Boolean' },
			mspp_validationsummarylinktext: { a: 'mspp_validationsummarylinktext' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mspp_entityform = {};
		mspp_entityform.ODataEntity = e;
		mspp_entityform.FormattedValue = {};
		for (const field in _mspp_entityform) {
			const fieldConfig = _mspp_entityform[field];
			webApiField(mspp_entityform, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mspp_entityform.Entity = u;
		mspp_entityform.EntityName = 'mspp_entityform';
		mspp_entityform.EntityCollectionName = 'mspp_entityforms';
		mspp_entityform['@odata.etag'] = e?.['@odata.etag'];
		mspp_entityform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mspp_entityform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mspp_entityform;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_entityform = {
		mspp_attachfilesaveoption: { Notes: 756150000, Portal_Comment: 756150001 },
		mspp_attachfilestoragelocation: { Azure_Blob_Storage: 756150001, Note_Attachment: 756150000 },
		mspp_entitysourcetype: { Current_Portal_User: 756150002, Query_String: 756150001, Record_Associated_to_Current_Portal_User: 756150003 },
		mspp_geolocation_maptype: { Bing: 756150000, Esri: 756150002, Google: 756150001 },
		mspp_mode: { Edit: 100000001, Insert: 100000000, ReadOnly: 100000002 },
		mspp_onsuccess: { Display_Success_Message: 756150000, Redirect: 756150001 },
		mspp_referenceentitysourcetype: { Query_String: 756150000, Record_Associated_to_Current_Portal_User: 756150001 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));