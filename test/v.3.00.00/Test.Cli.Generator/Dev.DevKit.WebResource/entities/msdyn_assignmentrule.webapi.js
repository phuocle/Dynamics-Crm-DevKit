'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_assignmentruleApi = function (e) {
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
		var _msdyn_assignmentrule = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_assignmentruleId: { a: 'msdyn_assignmentruleid' },
			msdyn_attributefilter: { a: 'msdyn_attributefilter' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_DistributeTo: { a: 'msdyn_distributeto' },
			msdyn_distributewithavailability: { a: 'msdyn_distributewithavailability' },
			msdyn_distributewithcapacity: { a: 'msdyn_distributewithcapacity' },
			msdyn_DistributionType: { a: 'msdyn_distributiontype' },
			msdyn_entityfilter: { a: 'msdyn_entityfilter' },
			msdyn_evaluationorder: { a: 'msdyn_evaluationorder' },
			msdyn_matchedrecords: { a: 'msdyn_matchedrecords' },
			msdyn_matchtype: { a: 'msdyn_matchtype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_objecttypecode: { a: 'msdyn_objecttypecode' },
			msdyn_segmentid: { b: 'msdyn_segmentid', a: '_msdyn_segmentid_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			msdyn_sellerfilter: { a: 'msdyn_sellerfilter' },
			msdyn_SpecificSellersOrTeams: { a: 'msdyn_SpecificSellersOrTeams' },
			msdyn_triggertype: { a: 'msdyn_triggertype' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_assignmentrule = {};
		msdyn_assignmentrule.ODataEntity = e;
		msdyn_assignmentrule.FormattedValue = {};
		for (var field in _msdyn_assignmentrule) {
			var a = _msdyn_assignmentrule[field].a;
			var b = _msdyn_assignmentrule[field].b;
			var c = _msdyn_assignmentrule[field].c;
			var d = _msdyn_assignmentrule[field].d;
			var g = _msdyn_assignmentrule[field].g;
			var r = _msdyn_assignmentrule[field].r;
			webApiField(msdyn_assignmentrule, field, e, a, b, c, d, r, u, g);
		}
		msdyn_assignmentrule.Entity = u;
		msdyn_assignmentrule.EntityName = 'msdyn_assignmentrule';
		msdyn_assignmentrule.EntityCollectionName = 'msdyn_assignmentrules';
		msdyn_assignmentrule['@odata.etag'] = e['@odata.etag'];
		msdyn_assignmentrule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_assignmentrule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_assignmentrule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_assignmentrule = {
		msdyn_DistributeTo : {
			Sellers: 0,
			Team: 1
		},
		msdyn_DistributionType : {
			Load_Balancing: 1,
			RoundRobin: 0
		},
		msdyn_matchtype : {
			Any_Sellers: 2,
			Filter_using_Attributes: 0,
			Specific_List: 1
		},
		msdyn_objecttypecode : {
			Lead: 4,
			Opportunity: 3
		},
		msdyn_triggertype : {
			Entity_Create: 0,
			FieldUpdate: 1
		},
		OwnerIdType : {
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