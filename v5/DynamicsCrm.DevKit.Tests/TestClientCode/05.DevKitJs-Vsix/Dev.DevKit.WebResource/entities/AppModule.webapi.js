'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.AppModuleApi = function (e) {
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
		const _appmodule = {
			aiappdescription: { a: 'aiappdescription' },
			aidescriptiongeneratedon_UtcDateAndTime: { a: 'aidescriptiongeneratedon', g: 'DateTime' },
			appgraph: { a: 'appgraph' },
			AppModuleId: { a: 'appmoduleid' },
			AppModuleIdUnique: { a: 'appmoduleidunique' },
			AppModuleVersion: { a: 'appmoduleversion' },
			AppModuleXmlManaged: { a: 'appmodulexmlmanaged' },
			ClientType: { a: 'clienttype', g: 'Integer' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			ConfigXML: { a: 'configxml' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			Descriptor: { a: 'descriptor', r: true },
			EventHandlers: { a: 'eventhandlers' },
			FormFactor: { a: 'formfactor', g: 'Integer' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IntroducedVersion: { a: 'introducedversion' },
			IsDefault: { a: 'isdefault', g: 'Boolean' },
			IsFeatured: { a: 'isfeatured', g: 'Boolean' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NavigationType: { a: 'navigationtype', g: 'Integer' },
			OptimizedFor: { a: 'optimizedfor' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			PublishedOn_UtcDateAndTime: { a: 'publishedon', g: 'DateTime' },
			PublisherId: { b: 'publisherid', a: '_publisherid_value', c: 'publishers', d: 'publisher' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			UniqueName: { a: 'uniquename' },
			URL: { a: 'url' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WebResourceId: { a: 'webresourceid' },
			WelcomePageId: { a: 'welcomepageid' }
		};
		if (e === undefined) e = {};
		const u = {};
		const appmodule = {};
		appmodule.ODataEntity = e;
		appmodule.FormattedValue = {};
		for (const field in _appmodule) {
			const fieldConfig = _appmodule[field];
			webApiField(appmodule, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		appmodule.Entity = u;
		appmodule.EntityName = 'appmodule';
		appmodule.EntityCollectionName = 'appmodules';
		appmodule['@odata.etag'] = e?.['@odata.etag'];
		appmodule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		appmodule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return appmodule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModule = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		NavigationType: { Multi_session: 1, Single_session: 0 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Deleted: 3, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));