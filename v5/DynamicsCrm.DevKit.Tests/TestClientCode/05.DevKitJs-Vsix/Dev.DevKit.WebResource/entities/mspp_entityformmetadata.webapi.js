'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.mspp_entityformmetadataApi = function (e) {
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
		const _mspp_entityformmetadata = {
			mspp_adddescription: { a: 'mspp_adddescription', g: 'Boolean' },
			mspp_attributelogicalname: { a: 'mspp_attributelogicalname' },
			mspp_constantsummaximumtotal: { a: 'mspp_constantsummaximumtotal', g: 'Integer' },
			mspp_constantsumminimumtotal: { a: 'mspp_constantsumminimumtotal', g: 'Integer' },
			mspp_constantsumvalidationerrormessage: { a: 'mspp_constantsumvalidationerrormessage' },
			mspp_controlstyle: { a: 'mspp_controlstyle', g: 'Integer' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon', g: 'DateTime' },
			mspp_cssclass: { a: 'mspp_cssclass' },
			mspp_description: { a: 'mspp_description' },
			mspp_descriptionposition: { a: 'mspp_descriptionposition', g: 'Integer' },
			mspp_entityform: { b: 'mspp_entityform', a: '_mspp_entityform_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_entityformforcreate: { b: 'mspp_entityformforcreate', a: '_mspp_entityformforcreate_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_entityformmetadataId: { a: 'mspp_entityformmetadataid' },
			mspp_fieldisrequired: { a: 'mspp_fieldisrequired', g: 'Boolean' },
			mspp_geolocationvalidatorerrormessage: { a: 'mspp_geolocationvalidatorerrormessage' },
			mspp_groupname: { a: 'mspp_groupname' },
			mspp_ignoredefaultvalue: { a: 'mspp_ignoredefaultvalue', g: 'Boolean' },
			mspp_label: { a: 'mspp_label' },
			mspp_maxmultiplechoiceselectedcount: { a: 'mspp_maxmultiplechoiceselectedcount', g: 'Integer' },
			mspp_minmultiplechoiceselectedcount: { a: 'mspp_minmultiplechoiceselectedcount', g: 'Integer' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon', g: 'DateTime' },
			mspp_multiplechoicevalidationerrormessage: { a: 'mspp_multiplechoicevalidationerrormessage' },
			mspp_name: { a: 'mspp_name' },
			mspp_notes_settings: { a: 'mspp_notes_settings' },
			mspp_onsavefromattribute: { a: 'mspp_onsavefromattribute' },
			mspp_onsavetype: { a: 'mspp_onsavetype', g: 'Integer' },
			mspp_onsavevalue: { a: 'mspp_onsavevalue' },
			mspp_prepopulatefromattribute: { a: 'mspp_prepopulatefromattribute' },
			mspp_prepopulatetype: { a: 'mspp_prepopulatetype', g: 'Integer' },
			mspp_prepopulatevalue: { a: 'mspp_prepopulatevalue' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages', g: 'Integer' },
			mspp_randomizeoptionsetvalues: { a: 'mspp_randomizeoptionsetvalues', g: 'Boolean' },
			mspp_rangevalidationerrormessage: { a: 'mspp_rangevalidationerrormessage' },
			mspp_rankordernotiesvalidationerrormessage: { a: 'mspp_rankordernotiesvalidationerrormessage' },
			mspp_requiredfieldvalidationerrormessage: { a: 'mspp_requiredfieldvalidationerrormessage' },
			mspp_sectionname: { a: 'mspp_sectionname' },
			mspp_setvalueonsave: { a: 'mspp_setvalueonsave', g: 'Boolean' },
			mspp_subgrid_name: { a: 'mspp_subgrid_name' },
			mspp_subgrid_settings: { a: 'mspp_subgrid_settings' },
			mspp_tabname: { a: 'mspp_tabname' },
			mspp_timeline_settings: { a: 'mspp_timeline_settings' },
			mspp_type: { a: 'mspp_type', g: 'Integer' },
			mspp_useattributedescriptionproperty: { a: 'mspp_useattributedescriptionproperty', g: 'Boolean' },
			mspp_validationerrormessage: { a: 'mspp_validationerrormessage' },
			mspp_validationregularexpression: { a: 'mspp_validationregularexpression' },
			mspp_validationregularexpressionerrormessage: { a: 'mspp_validationregularexpressionerrormessage' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mspp_entityformmetadata = {};
		mspp_entityformmetadata.ODataEntity = e;
		mspp_entityformmetadata.FormattedValue = {};
		for (const field in _mspp_entityformmetadata) {
			const fieldConfig = _mspp_entityformmetadata[field];
			webApiField(mspp_entityformmetadata, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mspp_entityformmetadata.Entity = u;
		mspp_entityformmetadata.EntityName = 'mspp_entityformmetadata';
		mspp_entityformmetadata.EntityCollectionName = 'mspp_entityformmetadatas';
		mspp_entityformmetadata['@odata.etag'] = e?.['@odata.etag'];
		mspp_entityformmetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mspp_entityformmetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mspp_entityformmetadata;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_entityformmetadata = {
		mspp_controlstyle: { Code_component: 756150001, Group_Whole_Number_as_Constant_Sum: 100000003, Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties: 100000005, Group_Whole_Number_as_Rank_Order_Scale_No_Ties: 100000004, Group_Whole_Number_as_Stack_Rank: 100000008, Multiple_Choice: 100000007, Multiple_Choice_Matrix: 100000006, Option_Set_as_Horizontal_Radio_Button_List: 100000001, Option_Set_as_Vertical_Radio_Button_List: 100000000, Render_Lookup_as_Dropdown: 756150000, Single_Line_of_Text_as_Geolocation_Lookup_Validator: 100000002 },
		mspp_descriptionposition: { Above_the_field: 100000000, Above_the_label: 100000002, Below_the_field: 100000001 },
		mspp_onsavetype: { Current_Portal_User: 100000002, Todays_Date: 100000001, Value: 100000000 },
		mspp_prepopulatetype: { Current_Portal_User: 100000002, Todays_Date: 100000001, Value: 100000000 },
		mspp_type: { Attribute: 100000000, Notes: 100000005, Section: 100000001, Subgrid: 100000003, Tab: 100000002, Timeline: 756150000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));