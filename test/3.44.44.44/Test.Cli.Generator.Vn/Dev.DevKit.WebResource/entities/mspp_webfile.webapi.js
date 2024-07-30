'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_webfileApi = function (e) {
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
		var _mspp_webfile = {
			mspp_alloworigin: { a: 'mspp_alloworigin' },
			mspp_cloudblobaddress: { a: 'mspp_cloudblobaddress' },
			mspp_contentdisposition: { a: 'mspp_contentdisposition' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdbyipaddress: { a: 'mspp_createdbyipaddress' },
			mspp_createdbyusername: { a: 'mspp_createdbyusername' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_displaydate_UtcDateAndTime: { a: 'mspp_displaydate' },
			mspp_displayorder: { a: 'mspp_displayorder' },
			mspp_excludefromsearch: { a: 'mspp_excludefromsearch' },
			mspp_expirationdate_UtcDateAndTime: { a: 'mspp_expirationdate' },
			mspp_hiddenfromsitemap: { a: 'mspp_hiddenfromsitemap' },
			mspp_masterwebfileid: { b: 'mspp_masterwebfileid', a: '_mspp_masterwebfileid_value', c: 'mspp_webfiles', d: 'mspp_webfile' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedbyipaddress: { a: 'mspp_modifiedbyipaddress' },
			mspp_modifiedbyusername: { a: 'mspp_modifiedbyusername' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_name: { a: 'mspp_name' },
			mspp_parentpageid: { b: 'mspp_parentpageid', a: '_mspp_parentpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_partialurl: { a: 'mspp_partialurl' },
			mspp_publishingstateid: { b: 'mspp_publishingstateid', a: '_mspp_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_releasedate_UtcDateAndTime: { a: 'mspp_releasedate' },
			mspp_summary: { a: 'mspp_summary' },
			mspp_title: { a: 'mspp_title' },
			mspp_webfileId: { a: 'mspp_webfileid' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_webfile = {};
		mspp_webfile.ODataEntity = e;
		mspp_webfile.FormattedValue = {};
		for (var field in _mspp_webfile) {
			var a = _mspp_webfile[field].a;
			var b = _mspp_webfile[field].b;
			var c = _mspp_webfile[field].c;
			var d = _mspp_webfile[field].d;
			var g = _mspp_webfile[field].g;
			var r = _mspp_webfile[field].r;
			webApiField(mspp_webfile, field, e, a, b, c, d, r, u, g);
		}
		mspp_webfile.Entity = u;
		mspp_webfile.EntityName = 'mspp_webfile';
		mspp_webfile.EntityCollectionName = 'mspp_webfiles';
		mspp_webfile['@odata.etag'] = e['@odata.etag'];
		mspp_webfile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_webfile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_webfile;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webfile = {
		mspp_contentdisposition : {
			noi_tuyen: 756150000,
			tep_dinh_kem: 756150001
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