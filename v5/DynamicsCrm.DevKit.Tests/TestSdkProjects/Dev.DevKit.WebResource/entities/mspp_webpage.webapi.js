'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.mspp_webpageApi = function (e) {
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
		const _mspp_webpage = {
			mspp_alloworigin: { a: 'mspp_alloworigin' },
			mspp_category: { a: 'mspp_category', g: 'Integer' },
			mspp_copy: { a: 'mspp_copy' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdbyipaddress: { a: 'mspp_createdbyipaddress' },
			mspp_createdbyusername: { a: 'mspp_createdbyusername' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon', g: 'DateTime' },
			mspp_customcss: { a: 'mspp_customcss' },
			mspp_customjavascript: { a: 'mspp_customjavascript' },
			mspp_displaydate_UtcDateAndTime: { a: 'mspp_displaydate', g: 'DateTime' },
			mspp_displayorder: { a: 'mspp_displayorder', g: 'Integer' },
			mspp_editorialcomments: { a: 'mspp_editorialcomments' },
			mspp_enablerating: { a: 'mspp_enablerating', g: 'Boolean' },
			mspp_entityform: { b: 'mspp_entityform', a: '_mspp_entityform_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_entitylist: { b: 'mspp_entitylist', a: '_mspp_entitylist_value', c: 'mspp_entitylists', d: 'mspp_entitylist' },
			mspp_excludefromsearch: { a: 'mspp_excludefromsearch', g: 'Boolean' },
			mspp_expirationdate_UtcDateAndTime: { a: 'mspp_expirationdate', g: 'DateTime' },
			mspp_feedbackpolicy: { a: 'mspp_feedbackpolicy', g: 'Integer' },
			mspp_hiddenfromsitemap: { a: 'mspp_hiddenfromsitemap', g: 'Boolean' },
			mspp_image: { b: 'mspp_image', a: '_mspp_image_value', c: 'mspp_webfiles', d: 'mspp_webfile' },
			mspp_imageurl: { a: 'mspp_imageurl' },
			mspp_isofflinecached: { a: 'mspp_isofflinecached', g: 'Boolean' },
			mspp_isroot: { a: 'mspp_isroot', g: 'Boolean' },
			mspp_masterwebpageid: { b: 'mspp_masterwebpageid', a: '_mspp_masterwebpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_meta_description: { a: 'mspp_meta_description' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedbyipaddress: { a: 'mspp_modifiedbyipaddress' },
			mspp_modifiedbyusername: { a: 'mspp_modifiedbyusername' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon', g: 'DateTime' },
			mspp_name: { a: 'mspp_name' },
			mspp_navigation: { b: 'mspp_navigation', a: '_mspp_navigation_value', c: 'mspp_weblinksets', d: 'mspp_weblinkset' },
			mspp_pagetemplateid: { b: 'mspp_pagetemplateid', a: '_mspp_pagetemplateid_value', c: 'mspp_pagetemplates', d: 'mspp_pagetemplate' },
			mspp_parentpageid: { b: 'mspp_parentpageid', a: '_mspp_parentpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_partialurl: { a: 'mspp_partialurl' },
			mspp_publishingstateid: { b: 'mspp_publishingstateid', a: '_mspp_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_releasedate_UtcDateAndTime: { a: 'mspp_releasedate', g: 'DateTime' },
			mspp_rootwebpageid: { b: 'mspp_rootwebpageid', a: '_mspp_rootwebpageid_value', c: 'mspp_webpages', d: 'mspp_webpage' },
			mspp_sharedpageconfiguration: { a: 'mspp_sharedpageconfiguration', g: 'Boolean' },
			mspp_summary: { a: 'mspp_summary' },
			mspp_title: { a: 'mspp_title' },
			mspp_webform: { b: 'mspp_webform', a: '_mspp_webform_value', c: 'mspp_webforms', d: 'mspp_webform' },
			mspp_webpageId: { a: 'mspp_webpageid' },
			mspp_webpagelanguageid: { b: 'mspp_webpagelanguageid', a: '_mspp_webpagelanguageid_value', c: 'mspp_websitelanguages', d: 'mspp_websitelanguage' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mspp_webpage = {};
		mspp_webpage.ODataEntity = e;
		mspp_webpage.FormattedValue = {};
		for (const field in _mspp_webpage) {
			const fieldConfig = _mspp_webpage[field];
			webApiField(mspp_webpage, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mspp_webpage.Entity = u;
		mspp_webpage.EntityName = 'mspp_webpage';
		mspp_webpage.EntityCollectionName = 'mspp_webpages';
		mspp_webpage['@odata.etag'] = e?.['@odata.etag'];
		mspp_webpage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mspp_webpage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mspp_webpage;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_webpage = {
		mspp_category: { News: 1 },
		mspp_feedbackpolicy: { Closed: 756150005, Inherit: 756150000, Item: 756150003, Moderated: 756150004, None: 756150001, Open: 756150002 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));