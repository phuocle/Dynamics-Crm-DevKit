﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_TeamsCollaborationApi = function (e) {
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
		var _msdyn_teamscollaboration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AppId: { a: 'msdyn_appid' },
			msdyn_ChannelFolderRelativeUrl: { a: 'msdyn_channelfolderrelativeurl' },
			msdyn_ChannelId: { a: 'msdyn_channelid' },
			msdyn_ChannelName: { a: 'msdyn_channelname' },
			msdyn_channelType: { a: 'msdyn_channeltype' },
			msdyn_ContentUrl: { a: 'msdyn_contenturl' },
			msdyn_GroupId: { a: 'msdyn_groupid' },
			msdyn_pipedEntityId: { a: 'msdyn_pipedentityid' },
			msdyn_TeamId: { a: 'msdyn_teamid' },
			msdyn_TeamName: { a: 'msdyn_teamname' },
			msdyn_TeamsCollaborationId: { a: 'msdyn_teamscollaborationid' },
			msdyn_TeamSiteUrl: { a: 'msdyn_teamsiteurl' },
			msdyn_TenantId: { a: 'msdyn_tenantid' },
			msdyn_WebUrl: { a: 'msdyn_weburl' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			RegardingObjectId: { a: 'regardingobjectid' },
			RegardingObjectTypeCode: { a: 'regardingobjecttypecode' },
			RegardingObjectTypeName: { a: 'regardingobjecttypename' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_teamscollaboration = {};
		msdyn_teamscollaboration.ODataEntity = e;
		msdyn_teamscollaboration.FormattedValue = {};
		for (var field in _msdyn_teamscollaboration) {
			var a = _msdyn_teamscollaboration[field].a;
			var b = _msdyn_teamscollaboration[field].b;
			var c = _msdyn_teamscollaboration[field].c;
			var d = _msdyn_teamscollaboration[field].d;
			var g = _msdyn_teamscollaboration[field].g;
			var r = _msdyn_teamscollaboration[field].r;
			webApiField(msdyn_teamscollaboration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_teamscollaboration.Entity = u;
		msdyn_teamscollaboration.EntityName = 'msdyn_teamscollaboration';
		msdyn_teamscollaboration.EntityCollectionName = 'msdyn_teamscollaborations';
		msdyn_teamscollaboration['@odata.etag'] = e['@odata.etag'];
		msdyn_teamscollaboration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_teamscollaboration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_teamscollaboration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_TeamsCollaboration = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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