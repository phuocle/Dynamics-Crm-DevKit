'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.CanvasAppApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var canvasapp = {
			AADCreatedById: { a: 'aadcreatedbyid' },
			AADLastModifiedById: { a: 'aadlastmodifiedbyid' },
			AADLastPublishedById: { a: 'aadlastpublishedbyid' },
			AdminControlBypassConsent: { a: 'admincontrolbypassconsent' },
			AppOpenUri: { a: 'appopenuri' },
			AppVersion: { a: 'appversion' },
			AuthorizationReferences: { a: 'authorizationreferences' },
			BackgroundColor: { a: 'backgroundcolor' },
			BypassConsent: { a: 'bypassconsent' },
			CanvasAppId: { a: 'canvasappid' },
			CanvasAppRowId: { a: 'canvasapprowid', r: true },
			CdsDependencies: { a: 'cdsdependencies' },
			CommitMessage: { a: 'commitmessage' },
			ComponentState: { a: 'componentstate', r: true },
			ConnectionReferences: { a: 'connectionreferences' },
			CreatedByClientVersion: { a: 'createdbyclientversion' },
			CreatedTime_UtcDateAndTime: { a: 'createdtime' },
			DatabaseReferences: { a: 'databasereferences' },
			Description: { a: 'description' },
			DisplayName: { a: 'displayname' },
			EmbeddedApp: { a: 'embeddedapp' },
			GalleryItemId: { a: 'galleryitemid' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCdsUpgraded: { a: 'iscdsupgraded' },
			IsFeaturedApp: { a: 'isfeaturedapp' },
			IsHeroApp: { a: 'isheroapp' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			LastModifiedTime_UtcDateAndTime: { a: 'lastmodifiedtime' },
			LastPublishTime_UtcDateAndTime: { a: 'lastpublishtime' },
			MinClientVersion: { a: 'minclientversion' },
			Name: { a: 'name' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Publisher: { a: 'publisher' },
			SolutionId: { a: 'solutionid', r: true },
			Status: { a: 'status' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Tags: { a: 'tags' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in canvasapp) {
			var a = canvasapp[field].a;
			var b = canvasapp[field].b;
			var c = canvasapp[field].c;
			var d = canvasapp[field].d;
			var g = canvasapp[field].g;
			var r = canvasapp[field].r;
			canvasapp[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		canvasapp.Entity = u;
		canvasapp.EntityName = 'canvasapp';
		canvasapp.EntityCollectionName = 'canvasapps';
		canvasapp['@odata.etag'] = e['@odata.etag'];
		canvasapp.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		canvasapp.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return canvasapp;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CanvasApp = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
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