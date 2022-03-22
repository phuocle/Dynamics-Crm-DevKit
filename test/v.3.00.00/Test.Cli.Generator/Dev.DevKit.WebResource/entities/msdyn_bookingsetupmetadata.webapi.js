'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_bookingsetupmetadataApi = function (e) {
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
		var _msdyn_bookingsetupmetadata = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AvailableDurationMinimumPercentage: { a: 'msdyn_availabledurationminimumpercentage' },
			msdyn_BookingRelationshipLogicalName: { a: 'msdyn_bookingrelationshiplogicalname' },
			msdyn_bookingsetupmetadataId: { a: 'msdyn_bookingsetupmetadataid' },
			msdyn_BookingStatusFieldLogicalName: { a: 'msdyn_bookingstatusfieldlogicalname' },
			msdyn_CancelBookingsWhenMoving: { a: 'msdyn_cancelbookingswhenmoving' },
			msdyn_CloneEntityQuery: { b: 'msdyn_CloneEntityQuery', a: '_msdyn_cloneentityquery_value', c: 'msdyn_configurations', d: 'msdyn_configuration' },
			msdyn_DefaultBookingCanceledStatus: { b: 'msdyn_DefaultBookingCanceledStatus', a: '_msdyn_defaultbookingcanceledstatus_value', c: 'bookingstatuses', d: 'bookingstatus' },
			msdyn_DefaultBookingCommittedStatus: { b: 'msdyn_DefaultBookingCommittedStatus', a: '_msdyn_defaultbookingcommittedstatus_value', c: 'bookingstatuses', d: 'bookingstatus' },
			msdyn_DefaultBookingDuration: { a: 'msdyn_defaultbookingduration' },
			msdyn_DefaultRequirementActiveStatus: { b: 'msdyn_DefaultRequirementActiveStatus', a: '_msdyn_defaultrequirementactivestatus_value', c: 'msdyn_requirementstatuses', d: 'msdyn_requirementstatus' },
			msdyn_DefaultRequirementCanceledStatus: { b: 'msdyn_DefaultRequirementCanceledStatus', a: '_msdyn_defaultrequirementcanceledstatus_value', c: 'msdyn_requirementstatuses', d: 'msdyn_requirementstatus' },
			msdyn_DefaultRequirementCompletedStatus: { b: 'msdyn_DefaultRequirementCompletedStatus', a: '_msdyn_defaultrequirementcompletedstatus_value', c: 'msdyn_requirementstatuses', d: 'msdyn_requirementstatus' },
			msdyn_DisableRequirementAutoCreation: { a: 'msdyn_disablerequirementautocreation' },
			msdyn_enablequickbook: { a: 'msdyn_enablequickbook' },
			msdyn_EntityLogicalName: { a: 'msdyn_entitylogicalname' },
			msdyn_RequirementRelationshipLogicalName: { a: 'msdyn_requirementrelationshiplogicalname' },
			msdyn_ResourceAvailabilityRetrievalLimit: { a: 'msdyn_resourceavailabilityretrievallimit' },
			msdyn_RetrieveConstraintsQuery: { b: 'msdyn_RetrieveConstraintsQuery', a: '_msdyn_retrieveconstraintsquery_value', c: 'msdyn_configurations', d: 'msdyn_configuration' },
			msdyn_RetrieveResourcesQuery: { b: 'msdyn_RetrieveResourcesQuery', a: '_msdyn_retrieveresourcesquery_value', c: 'msdyn_configurations', d: 'msdyn_configuration' },
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
		var msdyn_bookingsetupmetadata = {};
		msdyn_bookingsetupmetadata.ODataEntity = e;
		msdyn_bookingsetupmetadata.FormattedValue = {};
		for (var field in _msdyn_bookingsetupmetadata) {
			var a = _msdyn_bookingsetupmetadata[field].a;
			var b = _msdyn_bookingsetupmetadata[field].b;
			var c = _msdyn_bookingsetupmetadata[field].c;
			var d = _msdyn_bookingsetupmetadata[field].d;
			var g = _msdyn_bookingsetupmetadata[field].g;
			var r = _msdyn_bookingsetupmetadata[field].r;
			webApiField(msdyn_bookingsetupmetadata, field, e, a, b, c, d, r, u, g);
		}
		msdyn_bookingsetupmetadata.Entity = u;
		msdyn_bookingsetupmetadata.EntityName = 'msdyn_bookingsetupmetadata';
		msdyn_bookingsetupmetadata.EntityCollectionName = 'msdyn_bookingsetupmetadatas';
		msdyn_bookingsetupmetadata['@odata.etag'] = e['@odata.etag'];
		msdyn_bookingsetupmetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_bookingsetupmetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_bookingsetupmetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_bookingsetupmetadata = {
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