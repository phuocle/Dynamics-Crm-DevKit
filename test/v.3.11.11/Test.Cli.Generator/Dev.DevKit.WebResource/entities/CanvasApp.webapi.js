'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.CanvasAppApi = function (e) {
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
		var _canvasapp = {
			AADCreatedById: { a: 'aadcreatedbyid' },
			AADLastModifiedById: { a: 'aadlastmodifiedbyid' },
			AADLastPublishedById: { a: 'aadlastpublishedbyid' },
			AdminControlBypassConsent: { a: 'admincontrolbypassconsent' },
			AppComponentDependencies: { a: 'appcomponentdependencies' },
			AppComponents: { a: 'appcomponents' },
			AppOpenUri: { a: 'appopenuri' },
			AppVersion: { a: 'appversion' },
			Assets: { a: 'assets', r: true },
			AuthorizationReferences: { a: 'authorizationreferences' },
			BackgroundColor: { a: 'backgroundcolor' },
			BackgroundImage: { a: 'background_image', r: true },
			BypassConsent: { a: 'bypassconsent' },
			CanConsumeAppPass: { a: 'canconsumeapppass' },
			CanvasAppId: { a: 'canvasappid' },
			CanvasAppRowId: { a: 'canvasapprowid', r: true },
			CanvasAppType: { a: 'canvasapptype' },
			CdsDependencies: { a: 'cdsdependencies' },
			CommitMessage: { a: 'commitmessage' },
			ComponentState: { a: 'componentstate', r: true },
			ConnectionReferences: { a: 'connectionreferences' },
			CreatedByClientVersion: { a: 'createdbyclientversion' },
			CreatedTime_UtcDateAndTime: { a: 'createdtime' },
			DatabaseReferences: { a: 'databasereferences' },
			Description: { a: 'description' },
			DisplayName: { a: 'displayname' },
			Document: { a: 'document', r: true },
			EmbeddedApp: { a: 'embeddedapp' },
			GalleryItemId: { a: 'galleryitemid' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCdsUpgraded: { a: 'iscdsupgraded' },
			IsCustomizable: { a: 'iscustomizable' },
			IsFeaturedApp: { a: 'isfeaturedapp' },
			IsHeroApp: { a: 'isheroapp' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			LargeIcon: { a: 'large_icon', r: true },
			LastModifiedTime_UtcDateAndTime: { a: 'lastmodifiedtime' },
			LastPublishTime_UtcDateAndTime: { a: 'lastpublishtime' },
			MediumIcon: { a: 'medium_icon', r: true },
			MinClientVersion: { a: 'minclientversion' },
			Name: { a: 'name' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Publisher: { a: 'publisher' },
			SmallIcon: { a: 'small_icon', r: true },
			SolutionId: { a: 'solutionid', r: true },
			Status: { a: 'status' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Tags: { a: 'tags' },
			TeamsIcon: { a: 'teams_icon', r: true },
			UniqueCanvasAppId: { a: 'uniquecanvasappid' },
			VersionNumber: { a: 'versionnumber', r: true },
			WideIcon: { a: 'wide_icon', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var canvasapp = {};
		canvasapp.ODataEntity = e;
		canvasapp.FormattedValue = {};
		for (var field in _canvasapp) {
			var a = _canvasapp[field].a;
			var b = _canvasapp[field].b;
			var c = _canvasapp[field].c;
			var d = _canvasapp[field].d;
			var g = _canvasapp[field].g;
			var r = _canvasapp[field].r;
			webApiField(canvasapp, field, e, a, b, c, d, r, u, g);
		}
		canvasapp.Entity = u;
		canvasapp.EntityName = 'canvasapp';
		canvasapp.EntityCollectionName = 'canvasapps';
		canvasapp['@odata.etag'] = e['@odata.etag'];
		canvasapp.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		canvasapp.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return canvasapp;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CanvasApp = {
		CanvasAppType : {
			App_Component_Library: 1,
			Classic_Canvas_App: 0,
			Custom_Canvas_Page: 2,
			Unified_App: 3
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		OwnerIdType : {
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