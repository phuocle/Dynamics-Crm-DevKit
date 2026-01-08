'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.CanvasAppApi = function (e) {
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
		const _canvasapp = {
			AADCreatedById: { a: 'aadcreatedbyid' },
			AADLastModifiedById: { a: 'aadlastmodifiedbyid' },
			AADLastPublishedById: { a: 'aadlastpublishedbyid' },
			AdminControlBypassConsent: { a: 'admincontrolbypassconsent', g: 'Boolean' },
			AppComponentDependencies: { a: 'appcomponentdependencies' },
			AppComponents: { a: 'appcomponents' },
			AppOpenUri: { a: 'appopenuri' },
			AppVersion: { a: 'appversion' },
			Assets_name: { a: 'assets', r: true },
			AuthorizationReferences: { a: 'authorizationreferences' },
			BackgroundColor: { a: 'backgroundcolor' },
			BackgroundImage_name: { a: 'background_image', r: true },
			BypassConsent: { a: 'bypassconsent', g: 'Boolean' },
			CanConsumeAppPass: { a: 'canconsumeapppass', g: 'Boolean' },
			CanvasAppId: { a: 'canvasappid' },
			CanvasAppRowId: { a: 'canvasapprowid', r: true },
			CanvasAppType: { a: 'canvasapptype', g: 'Integer' },
			CdsDependencies: { a: 'cdsdependencies' },
			CommitMessage: { a: 'commitmessage' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			ConnectionReferences: { a: 'connectionreferences' },
			CreatedByClientVersion: { a: 'createdbyclientversion' },
			CreatedTime_UtcDateAndTime: { a: 'createdtime', g: 'DateTime' },
			DatabaseReferences: { a: 'databasereferences' },
			Description: { a: 'description' },
			DisplayName: { a: 'displayname' },
			Document_name: { a: 'document', r: true },
			EmbeddedApp: { a: 'embeddedapp' },
			GalleryItemId: { a: 'galleryitemid' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCdsUpgraded: { a: 'iscdsupgraded', g: 'Boolean' },
			IsCustomizable: { a: 'iscustomizable' },
			IsFeaturedApp: { a: 'isfeaturedapp', g: 'Boolean' },
			IsHeroApp: { a: 'isheroapp', g: 'Boolean' },
			IsHidden: { a: 'ishidden', g: 'Boolean' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			LargeIcon_name: { a: 'large_icon', r: true },
			LastModifiedTime_UtcDateAndTime: { a: 'lastmodifiedtime', g: 'DateTime' },
			LastPublishTime_UtcDateAndTime: { a: 'lastpublishtime', g: 'DateTime' },
			MediumIcon_name: { a: 'medium_icon', r: true },
			MinClientVersion: { a: 'minclientversion' },
			Name: { a: 'name' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Publisher: { a: 'publisher' },
			SmallIcon_name: { a: 'small_icon', r: true },
			SolutionId: { a: 'solutionid', r: true },
			Status: { a: 'status' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Tags: { a: 'tags' },
			TeamsIcon_name: { a: 'teams_icon', r: true },
			UniqueCanvasAppId: { a: 'uniquecanvasappid' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WideIcon_name: { a: 'wide_icon', r: true }
		};
		if (e === undefined) e = {};
		const u = {};
		const canvasapp = {};
		canvasapp.ODataEntity = e;
		canvasapp.FormattedValue = {};
		for (const field in _canvasapp) {
			const fieldConfig = _canvasapp[field];
			webApiField(canvasapp, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		canvasapp.Entity = u;
		canvasapp.EntityName = 'canvasapp';
		canvasapp.EntityCollectionName = 'canvasapps';
		canvasapp['@odata.etag'] = e?.['@odata.etag'];
		canvasapp.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		canvasapp.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return canvasapp;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.CanvasApp = {
		CanvasAppType: { App_Component_Library: 1, Classic_Canvas_App: 0, Code_App: 4, Custom_Canvas_Page: 2, Mobile_App: 5, Unified_App: 3 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));