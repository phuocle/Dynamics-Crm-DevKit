'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.SystemFormApi = function (e) {
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
		const _systemform = {
			AncestorFormId: { b: 'ancestorformid', a: '_ancestorformid_value', c: 'systemforms', d: 'systemform' },
			CanBeDeleted: { a: 'canbedeleted' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			Description: { a: 'description' },
			FormActivationState: { a: 'formactivationstate', g: 'Integer' },
			FormId: { a: 'formid' },
			FormIdUnique: { a: 'formidunique', r: true },
			FormJson: { a: 'formjson' },
			FormPresentation: { a: 'formpresentation', g: 'Integer' },
			FormXml: { a: 'formxml' },
			FormXmlManaged: { a: 'formxmlmanaged', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsAIRMerged: { a: 'isairmerged', g: 'Boolean' },
			IsCustomizable: { a: 'iscustomizable' },
			IsDefault: { a: 'isdefault', g: 'Boolean' },
			IsDesktopEnabled: { a: 'isdesktopenabled', g: 'Boolean' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			IsTabletEnabled: { a: 'istabletenabled', g: 'Boolean' },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			PublishedOn_UtcDateAndTime: { a: 'publishedon', r: true, g: 'DateTime' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Type: { a: 'type', g: 'Integer' },
			UniqueName: { a: 'uniquename' },
			Version: { a: 'version', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const systemform = {};
		systemform.ODataEntity = e;
		systemform.FormattedValue = {};
		for (const field in _systemform) {
			const fieldConfig = _systemform[field];
			webApiField(systemform, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		systemform.Entity = u;
		systemform.EntityName = 'systemform';
		systemform.EntityCollectionName = 'systemforms';
		systemform['@odata.etag'] = e?.['@odata.etag'];
		systemform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		systemform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return systemform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemForm = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		FormActivationState: { Active: 1, Inactive: 0 },
		FormPresentation: { AirForm: 1, ClassicForm: 0, ConvertedICForm: 2 },
		ObjectTypeCode: { },
		Type: { AppointmentBook: 1, AppointmentBookBackup: 102, Card: 11, Contextual_Dashboard: 13, Dashboard: 0, Dialog: 8, InteractionCentricDashboard: 10, Main: 2, Main_Interactive_experience: 12, MainBackup: 101, MiniCampaignBO: 3, Mobile_Express: 5, Other: 100, Power_BI_Dashboard: 103, Preview: 4, Quick_Create: 7, Quick_View_Form: 6, Task_Flow_Form: 9 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));