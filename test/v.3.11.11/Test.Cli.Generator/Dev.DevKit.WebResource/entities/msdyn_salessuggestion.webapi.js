'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_salessuggestionApi = function (e) {
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
		var _msdyn_salessuggestion = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EmailAddress: { a: 'emailaddress' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_customdata: { a: 'msdyn_customdata' },
			msdyn_expirydate_UtcDateOnly: { a: 'msdyn_expirydate' },
			msdyn_feedbackreason: { a: 'msdyn_feedbackreason' },
			msdyn_insight: { a: 'msdyn_insight' },
			msdyn_modelid: { a: 'msdyn_modelid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_potentialrevenue: { a: 'msdyn_potentialrevenue' },
			msdyn_potentialrevenue_Base: { a: 'msdyn_potentialrevenue_base', r: true },
			msdyn_qualifiedrecord: { b: 'msdyn_qualifiedrecord', a: '_msdyn_qualifiedrecord_value', c: 'opportunities', d: 'opportunity' },
			msdyn_relatedrecord: { b: 'msdyn_relatedrecord', a: '_msdyn_relatedrecord_value', c: 'accounts', d: 'account' },
			msdyn_salesmotion: { a: 'msdyn_salesmotion' },
			msdyn_salesplay: { a: 'msdyn_salesplay' },
			msdyn_salessuggestionId: { a: 'msdyn_salessuggestionid' },
			msdyn_score: { a: 'msdyn_score' },
			msdyn_solutionarea: { a: 'msdyn_solutionarea' },
			msdyn_suggesteddate_UtcDateOnly: { a: 'msdyn_suggesteddate' },
			msdyn_suggestionreason: { a: 'msdyn_suggestionreason' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_salessuggestion = {};
		msdyn_salessuggestion.ODataEntity = e;
		msdyn_salessuggestion.FormattedValue = {};
		for (var field in _msdyn_salessuggestion) {
			var a = _msdyn_salessuggestion[field].a;
			var b = _msdyn_salessuggestion[field].b;
			var c = _msdyn_salessuggestion[field].c;
			var d = _msdyn_salessuggestion[field].d;
			var g = _msdyn_salessuggestion[field].g;
			var r = _msdyn_salessuggestion[field].r;
			webApiField(msdyn_salessuggestion, field, e, a, b, c, d, r, u, g);
		}
		msdyn_salessuggestion.Entity = u;
		msdyn_salessuggestion.EntityName = 'msdyn_salessuggestion';
		msdyn_salessuggestion.EntityCollectionName = 'msdyn_salessuggestions';
		msdyn_salessuggestion['@odata.etag'] = e['@odata.etag'];
		msdyn_salessuggestion.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_salessuggestion.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_salessuggestion;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_salessuggestion = {
		msdyn_qualifiedrecordIdType : {
		},
		msdyn_relatedrecordIdType : {
		},
		msdyn_salesmotion : {
			Default: 1
		},
		msdyn_salesplay : {
			Default: 1
		},
		msdyn_solutionarea : {
			Default: 1
		},
		OwnerIdType : {
		},
		statecode : {
			Closed: 1,
			Declined: 2,
			Open: 0,
			Qualified: 3
		},
		statuscode : {
			Created_Opportunity: 4,
			Open: 1,
			Others_2: 2,
			Others_3: 3
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