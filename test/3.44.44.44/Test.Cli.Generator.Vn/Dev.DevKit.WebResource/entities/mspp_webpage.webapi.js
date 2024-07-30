'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_webpageApi = function (e) {
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
		var _mspp_webpage = {
			mspp_alloworigin: { a: 'mspp_alloworigin' },
			mspp_category: { a: 'mspp_category' },
			mspp_copy: { a: 'mspp_copy' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdbyipaddress: { a: 'mspp_createdbyipaddress' },
			mspp_createdbyusername: { a: 'mspp_createdbyusername' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_customcss: { a: 'mspp_customcss' },
			mspp_customjavascript: { a: 'mspp_customjavascript' },
			mspp_displaydate_UtcDateAndTime: { a: 'mspp_displaydate' },
			mspp_displayorder: { a: 'mspp_displayorder' },
			mspp_editorialcomments: { a: 'mspp_editorialcomments' },
			mspp_enablerating: { a: 'mspp_enablerating' },
			mspp_entityform: { b: 'mspp_entityform', a: '_mspp_entityform_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_entitylist: { b: 'mspp_entitylist', a: '_mspp_entitylist_value', c: 'mspp_entitylists', d: 'mspp_entitylist' },
			mspp_excludefromsearch: { a: 'mspp_excludefromsearch' },
			mspp_expirationdate_UtcDateAndTime: { a: 'mspp_expirationdate' },
			mspp_feedbackpolicy: { a: 'mspp_feedbackpolicy' },
			mspp_hiddenfromsitemap: { a: 'mspp_hiddenfromsitemap' },
			mspp_image: { b: 'mspp_image', a: '_mspp_image_value', c: 'mspp_webfiles', d: 'mspp_webfile' },
			mspp_imageurl: { a: 'mspp_imageurl' },
			mspp_isofflinecached: { a: 'mspp_isofflinecached' },
			mspp_isroot: { a: 'mspp_isroot' },
			mspp_masterwebpageid: { b: 'mspp_masterwebpageid', a: '_mspp_masterwebpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_meta_description: { a: 'mspp_meta_description' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedbyipaddress: { a: 'mspp_modifiedbyipaddress' },
			mspp_modifiedbyusername: { a: 'mspp_modifiedbyusername' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_name: { a: 'mspp_name' },
			mspp_navigation: { b: 'mspp_navigation', a: '_mspp_navigation_value', c: 'mspp_weblinksets', d: 'mspp_weblinkset' },
			mspp_pagetemplateid: { b: 'mspp_pagetemplateid', a: '_mspp_pagetemplateid_value', c: 'mspp_pagetemplates', d: 'mspp_pagetemplate' },
			mspp_parentpageid: { b: 'mspp_parentpageid', a: '_mspp_parentpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_partialurl: { a: 'mspp_partialurl' },
			mspp_publishingstateid: { b: 'mspp_publishingstateid', a: '_mspp_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_releasedate_UtcDateAndTime: { a: 'mspp_releasedate' },
			mspp_rootwebpageid: { b: 'mspp_rootwebpageid', a: '_mspp_rootwebpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_sharedpageconfiguration: { a: 'mspp_sharedpageconfiguration' },
			mspp_summary: { a: 'mspp_summary' },
			mspp_title: { a: 'mspp_title' },
			mspp_webform: { b: 'mspp_webform', a: '_mspp_webform_value', c: 'mspp_webforms', d: 'mspp_webform' },
			mspp_webpageId: { a: 'mspp_webpageid' },
			mspp_webpagelanguageid: { b: 'mspp_webpagelanguageid', a: '_mspp_webpagelanguageid_value', c: 'mspp_websitelanguages', d: 'mspp_websitelanguage' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_webpage = {};
		mspp_webpage.ODataEntity = e;
		mspp_webpage.FormattedValue = {};
		for (var field in _mspp_webpage) {
			var a = _mspp_webpage[field].a;
			var b = _mspp_webpage[field].b;
			var c = _mspp_webpage[field].c;
			var d = _mspp_webpage[field].d;
			var g = _mspp_webpage[field].g;
			var r = _mspp_webpage[field].r;
			webApiField(mspp_webpage, field, e, a, b, c, d, r, u, g);
		}
		mspp_webpage.Entity = u;
		mspp_webpage.EntityName = 'mspp_webpage';
		mspp_webpage.EntityCollectionName = 'mspp_webpages';
		mspp_webpage['@odata.etag'] = e['@odata.etag'];
		mspp_webpage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_webpage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_webpage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webpage = {
		mspp_category : {
			Tin_tuc: 1
		},
		mspp_feedbackpolicy : {
			Da_dong: 756150005,
			Da_kiem_duyet: 756150004,
			Ke_thua: 756150000,
			Khong_co: 756150001,
			Mo: 756150002,
			Muc: 756150003
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