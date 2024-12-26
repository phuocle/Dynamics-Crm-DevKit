'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_consentproviderApi = function (e) {
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
		var _msdynmkt_consentprovider = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_consentcheckurltemplate: { a: 'msdynmkt_consentcheckurltemplate' },
			msdynmkt_consentproviderexternalentity: { a: 'msdynmkt_consentproviderexternalentity' },
			msdynmkt_consentproviderexternalformidentifier: { a: 'msdynmkt_consentproviderexternalformidentifier' },
			msdynmkt_consentproviderexternalpurposeentity: { a: 'msdynmkt_consentproviderexternalpurposeentity' },
			msdynmkt_consentproviderexternalpurposeformidentifier: { a: 'msdynmkt_consentproviderexternalpurposeformidentifier' },
			msdynmkt_consentproviderId: { a: 'msdynmkt_consentproviderid' },
			msdynmkt_consentresolutionmessageoptions: { a: 'msdynmkt_consentresolutionmessageoptions' },
			msdynmkt_consentresolutiontrackingoptions: { a: 'msdynmkt_consentresolutiontrackingoptions' },
			msdynmkt_email_consentresolutionmessageoverride: { a: 'msdynmkt_email_consentresolutionmessageoverride' },
			msdynmkt_email_consentresolutiontrackingoverride: { a: 'msdynmkt_email_consentresolutiontrackingoverride' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_oneclickunsubscribesupported: { a: 'msdynmkt_oneclickunsubscribesupported' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_consentprovider = {};
		msdynmkt_consentprovider.ODataEntity = e;
		msdynmkt_consentprovider.FormattedValue = {};
		for (var field in _msdynmkt_consentprovider) {
			var a = _msdynmkt_consentprovider[field].a;
			var b = _msdynmkt_consentprovider[field].b;
			var c = _msdynmkt_consentprovider[field].c;
			var d = _msdynmkt_consentprovider[field].d;
			var g = _msdynmkt_consentprovider[field].g;
			var r = _msdynmkt_consentprovider[field].r;
			webApiField(msdynmkt_consentprovider, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_consentprovider.Entity = u;
		msdynmkt_consentprovider.EntityName = 'msdynmkt_consentprovider';
		msdynmkt_consentprovider.EntityCollectionName = 'msdynmkt_consentproviders';
		msdynmkt_consentprovider['@odata.etag'] = e['@odata.etag'];
		msdynmkt_consentprovider.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_consentprovider.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_consentprovider;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_consentprovider = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_consentresolutionmessageoptions : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
		msdynmkt_consentresolutiontrackingoptions : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
		msdynmkt_email_consentresolutionmessageoverride : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			No_override: 238550000,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
		msdynmkt_email_consentresolutiontrackingoverride : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			No_override: 238550000,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
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