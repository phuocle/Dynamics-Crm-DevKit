'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_weblinkApi = function (e) {
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
		var _mspp_weblink = {
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdbyipaddress: { a: 'mspp_createdbyipaddress' },
			mspp_createdbyusername: { a: 'mspp_createdbyusername' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_description: { a: 'mspp_description' },
			mspp_disablepagevalidation: { a: 'mspp_disablepagevalidation' },
			mspp_displayimageonly: { a: 'mspp_displayimageonly' },
			mspp_displayorder: { a: 'mspp_displayorder' },
			mspp_displaypagechildlinks: { a: 'mspp_displaypagechildlinks' },
			mspp_externalurl: { a: 'mspp_externalurl' },
			mspp_imagealttext: { a: 'mspp_imagealttext' },
			mspp_imageheight: { a: 'mspp_imageheight' },
			mspp_imageurl: { a: 'mspp_imageurl' },
			mspp_imagewidth: { a: 'mspp_imagewidth' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedbyipaddress: { a: 'mspp_modifiedbyipaddress' },
			mspp_modifiedbyusername: { a: 'mspp_modifiedbyusername' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_name: { a: 'mspp_name' },
			mspp_openinnewwindow: { a: 'mspp_openinnewwindow' },
			mspp_pageid: { b: 'mspp_pageid', a: '_mspp_pageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_parentweblinkid: { b: 'mspp_parentweblinkid', a: '_mspp_parentweblinkid_value', c: 'mspp_weblinks', d: 'mspp_weblink' },
			mspp_publishingstateid: { b: 'mspp_publishingstateid', a: '_mspp_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_robotsfollowlink: { a: 'mspp_robotsfollowlink' },
			mspp_weblinkId: { a: 'mspp_weblinkid' },
			mspp_weblinksetid: { b: 'mspp_weblinksetid', a: '_mspp_weblinksetid_value', c: 'mspp_weblinksets', d: 'mspp_weblinkset' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_weblink = {};
		mspp_weblink.ODataEntity = e;
		mspp_weblink.FormattedValue = {};
		for (var field in _mspp_weblink) {
			var a = _mspp_weblink[field].a;
			var b = _mspp_weblink[field].b;
			var c = _mspp_weblink[field].c;
			var d = _mspp_weblink[field].d;
			var g = _mspp_weblink[field].g;
			var r = _mspp_weblink[field].r;
			webApiField(mspp_weblink, field, e, a, b, c, d, r, u, g);
		}
		mspp_weblink.Entity = u;
		mspp_weblink.EntityName = 'mspp_weblink';
		mspp_weblink.EntityCollectionName = 'mspp_weblinks';
		mspp_weblink['@odata.etag'] = e['@odata.etag'];
		mspp_weblink.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_weblink.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_weblink;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_weblink = {
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