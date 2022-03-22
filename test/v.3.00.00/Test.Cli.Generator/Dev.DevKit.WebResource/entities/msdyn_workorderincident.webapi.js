'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workorderincidentApi = function (e) {
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
		var _msdyn_workorderincident = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AgreementBookingIncident: { b: 'msdyn_AgreementBookingIncident', a: '_msdyn_agreementbookingincident_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			msdyn_CustomerAsset: { b: 'msdyn_CustomerAsset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_EstimatedDuration: { a: 'msdyn_estimatedduration' },
			msdyn_FunctionalLocation: { b: 'msdyn_FunctionalLocation', a: '_msdyn_functionallocation_value', c: 'msdyn_functionallocations', d: 'msdyn_functionallocation' },
			msdyn_IncidentResolved: { a: 'msdyn_incidentresolved' },
			msdyn_IncidentType: { b: 'msdyn_IncidentType', a: '_msdyn_incidenttype_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_IsMobile: { a: 'msdyn_ismobile' },
			msdyn_IsPrimary: { a: 'msdyn_isprimary' },
			msdyn_ItemsPopulated: { a: 'msdyn_itemspopulated' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PrimaryResolution: { b: 'msdyn_PrimaryResolution', a: '_msdyn_primaryresolution_value', c: 'msdyn_resolutions', d: 'msdyn_resolution' },
			msdyn_ResourceRequirement: { b: 'msdyn_ResourceRequirement', a: '_msdyn_resourcerequirement_value', c: 'msdyn_resourcerequirements', d: 'msdyn_resourcerequirement' },
			msdyn_TasksPercentCompleted: { a: 'msdyn_taskspercentcompleted' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_workorderincidentId: { a: 'msdyn_workorderincidentid' },
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
		var msdyn_workorderincident = {};
		msdyn_workorderincident.ODataEntity = e;
		msdyn_workorderincident.FormattedValue = {};
		for (var field in _msdyn_workorderincident) {
			var a = _msdyn_workorderincident[field].a;
			var b = _msdyn_workorderincident[field].b;
			var c = _msdyn_workorderincident[field].c;
			var d = _msdyn_workorderincident[field].d;
			var g = _msdyn_workorderincident[field].g;
			var r = _msdyn_workorderincident[field].r;
			webApiField(msdyn_workorderincident, field, e, a, b, c, d, r, u, g);
		}
		msdyn_workorderincident.Entity = u;
		msdyn_workorderincident.EntityName = 'msdyn_workorderincident';
		msdyn_workorderincident.EntityCollectionName = 'msdyn_workorderincidents';
		msdyn_workorderincident['@odata.etag'] = e['@odata.etag'];
		msdyn_workorderincident.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workorderincident.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workorderincident;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workorderincident = {
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