'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.mspp_weblinkApi = function (e) {
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
		const _mspp_weblink = {
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdbyipaddress: { a: 'mspp_createdbyipaddress' },
			mspp_createdbyusername: { a: 'mspp_createdbyusername' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon', g: 'DateTime' },
			mspp_description: { a: 'mspp_description' },
			mspp_disablepagevalidation: { a: 'mspp_disablepagevalidation', g: 'Boolean' },
			mspp_displayimageonly: { a: 'mspp_displayimageonly', g: 'Boolean' },
			mspp_displayorder: { a: 'mspp_displayorder', g: 'Integer' },
			mspp_displaypagechildlinks: { a: 'mspp_displaypagechildlinks', g: 'Boolean' },
			mspp_externalurl: { a: 'mspp_externalurl' },
			mspp_imagealttext: { a: 'mspp_imagealttext' },
			mspp_imageheight: { a: 'mspp_imageheight', g: 'Integer' },
			mspp_imageurl: { a: 'mspp_imageurl' },
			mspp_imagewidth: { a: 'mspp_imagewidth', g: 'Integer' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedbyipaddress: { a: 'mspp_modifiedbyipaddress' },
			mspp_modifiedbyusername: { a: 'mspp_modifiedbyusername' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon', g: 'DateTime' },
			mspp_name: { a: 'mspp_name' },
			mspp_openinnewwindow: { a: 'mspp_openinnewwindow', g: 'Boolean' },
			mspp_pageid: { b: 'mspp_pageid', a: '_mspp_pageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_parentweblinkid: { b: 'mspp_parentweblinkid', a: '_mspp_parentweblinkid_value', c: 'mspp_weblinks', d: 'mspp_weblink' },
			mspp_publishingstateid: { b: 'mspp_publishingstateid', a: '_mspp_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_robotsfollowlink: { a: 'mspp_robotsfollowlink', g: 'Boolean' },
			mspp_weblinkId: { a: 'mspp_weblinkid' },
			mspp_weblinksetid: { b: 'mspp_weblinksetid', a: '_mspp_weblinksetid_value', c: 'mspp_weblinksets', d: 'mspp_weblinkset' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mspp_weblink = {};
		mspp_weblink.ODataEntity = e;
		mspp_weblink.FormattedValue = {};
		for (const field in _mspp_weblink) {
			const fieldConfig = _mspp_weblink[field];
			webApiField(mspp_weblink, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mspp_weblink.Entity = u;
		mspp_weblink.EntityName = 'mspp_weblink';
		mspp_weblink.EntityCollectionName = 'mspp_weblinks';
		mspp_weblink['@odata.etag'] = e?.['@odata.etag'];
		mspp_weblink.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mspp_weblink.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mspp_weblink;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_weblink = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));