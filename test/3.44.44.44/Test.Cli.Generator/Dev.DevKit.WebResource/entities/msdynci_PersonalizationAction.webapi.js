'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynci_PersonalizationActionApi = function (e) {
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
		var _msdynci_personalizationaction = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynci_ActionElapsedTime: { a: 'msdynci_actionelapsedtime' },
			msdynci_ActionElapsedTimeMs: { a: 'msdynci_actionelapsedtimems' },
			msdynci_ActionElementId: { a: 'msdynci_actionelementid' },
			msdynci_ActionIsOutbound: { a: 'msdynci_actionisoutbound' },
			msdynci_ActionName: { a: 'msdynci_actionname' },
			msdynci_ActionTarget: { a: 'msdynci_actiontarget' },
			msdynci_ActionType: { a: 'msdynci_actiontype' },
			msdynci_AlternateKeyReference: { b: 'msdynci_AlternateKeyReference', a: '_msdynci_alternatekeyreference_value', c: 'msdynci_alternatekeies', d: 'msdynci_alternatekey' },
			msdynci_ClickCoordinates: { a: 'msdynci_clickcoordinates' },
			msdynci_HostDomain: { a: 'msdynci_hostdomain' },
			msdynci_OptimizelyCampaignId: { a: 'msdynci_optimizelycampaignid' },
			msdynci_OptimizelyCampaignIdentifier: { a: 'msdynci_optimizelycampaignidentifier' },
			msdynci_OptimizelyExperimentId: { a: 'msdynci_optimizelyexperimentid' },
			msdynci_OptimizelyExperimentIdentifier: { a: 'msdynci_optimizelyexperimentidentifier' },
			msdynci_OrgId: { a: 'msdynci_orgid' },
			msdynci_OrgTenantId: { a: 'msdynci_orgtenantid' },
			msdynci_PersonalizationActionId: { a: 'msdynci_personalizationactionid' },
			msdynci_personalizationcookiereference: { b: 'msdynci_personalizationcookiereference', a: '_msdynci_personalizationcookiereference_value', c: 'msdynci_personalizationcookies', d: 'msdynci_personalizationcookie' },
			msdynci_ReferrerUri: { a: 'msdynci_referreruri' },
			msdynci_SDKVersion: { a: 'msdynci_sdkversion' },
			msdynci_SessionDuration: { a: 'msdynci_sessionduration' },
			msdynci_SessionDurationMs: { a: 'msdynci_sessiondurationms' },
			msdynci_SessionId: { a: 'msdynci_sessionid' },
			msdynci_SignalId: { a: 'msdynci_signalid' },
			msdynci_SignalName: { a: 'msdynci_signalname' },
			msdynci_SignalSource: { a: 'msdynci_signalsource' },
			msdynci_SignalTimestamp: { a: 'msdynci_signaltimestamp' },
			msdynci_SignalTimezone: { a: 'msdynci_signaltimezone' },
			msdynci_SignalVersion: { a: 'msdynci_signalversion' },
			msdynci_UserAuthId: { a: 'msdynci_userauthid' },
			msdynci_UserEntityId: { a: 'msdynci_userentityid' },
			msdynci_UserEntityType: { a: 'msdynci_userentitytype' },
			msdynci_UserLocalId: { a: 'msdynci_userlocalid' },
			msdynci_UserState: { a: 'msdynci_userstate' },
			msdynci_UserTrackingContext: { a: 'msdynci_usertrackingcontext' },
			msdynci_ViewName: { a: 'msdynci_viewname' },
			msdynci_ViewPreviousViews: { a: 'msdynci_viewpreviousviews' },
			msdynci_ViewTitle: { a: 'msdynci_viewtitle' },
			msdynci_viewtype: { a: 'msdynci_viewtype' },
			msdynci_ViewUri: { a: 'msdynci_viewuri' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynci_personalizationaction = {};
		msdynci_personalizationaction.ODataEntity = e;
		msdynci_personalizationaction.FormattedValue = {};
		for (var field in _msdynci_personalizationaction) {
			var a = _msdynci_personalizationaction[field].a;
			var b = _msdynci_personalizationaction[field].b;
			var c = _msdynci_personalizationaction[field].c;
			var d = _msdynci_personalizationaction[field].d;
			var g = _msdynci_personalizationaction[field].g;
			var r = _msdynci_personalizationaction[field].r;
			webApiField(msdynci_personalizationaction, field, e, a, b, c, d, r, u, g);
		}
		msdynci_personalizationaction.Entity = u;
		msdynci_personalizationaction.EntityName = 'msdynci_personalizationaction';
		msdynci_personalizationaction.EntityCollectionName = 'msdynci_personalizationactions';
		msdynci_personalizationaction['@odata.etag'] = e['@odata.etag'];
		msdynci_personalizationaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynci_personalizationaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynci_personalizationaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynci_PersonalizationAction = {
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