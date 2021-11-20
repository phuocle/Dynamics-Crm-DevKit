'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workorderservicetaskApi = function (e) {
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
		var msdyn_workorderservicetask = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ActualDuration: { a: 'msdyn_actualduration' },
			msdyn_AgreementBookingServiceTask: { b: 'msdyn_AgreementBookingServiceTask', a: '_msdyn_agreementbookingservicetask_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			msdyn_Booking: { b: 'msdyn_Booking', a: '_msdyn_booking_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			msdyn_CustomerAsset: { b: 'msdyn_CustomerAsset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_EstimatedDuration: { a: 'msdyn_estimatedduration' },
			msdyn_Inspection: { b: 'msdyn_Inspection', a: '_msdyn_inspection_value', c: 'msdyn_inspections', d: 'msdyn_inspection' },
			msdyn_inspectiondefinitionid: { b: 'msdyn_inspectiondefinitionid', a: '_msdyn_inspectiondefinitionid_value', c: 'msdyn_inspectiondefinitions', d: 'msdyn_inspectiondefinition' },
			msdyn_InspectionEnabled: { a: 'msdyn_inspectionenabled' },
			msdyn_inspectionresponseid: { b: 'msdyn_inspectionresponseid', a: '_msdyn_inspectionresponseid_value', c: 'msdyn_inspectionresponses', d: 'msdyn_inspectionresponse' },
			msdyn_InspectionResult: { a: 'msdyn_inspectionresult' },
			msdyn_inspectiontaskresult: { a: 'msdyn_inspectiontaskresult' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_LineOrder: { a: 'msdyn_lineorder' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PercentComplete: { a: 'msdyn_percentcomplete' },
			msdyn_surveyboundedoutput: { a: 'msdyn_surveyboundedoutput' },
			msdyn_TaskType: { b: 'msdyn_TaskType', a: '_msdyn_tasktype_value', c: 'msdyn_servicetasktypes', d: 'msdyn_servicetasktype' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_WorkOrderIncident: { b: 'msdyn_WorkOrderIncident', a: '_msdyn_workorderincident_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			msdyn_workorderservicetaskId: { a: 'msdyn_workorderservicetaskid' },
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
		for (var field in msdyn_workorderservicetask) {
			var a = msdyn_workorderservicetask[field].a;
			var b = msdyn_workorderservicetask[field].b;
			var c = msdyn_workorderservicetask[field].c;
			var d = msdyn_workorderservicetask[field].d;
			var g = msdyn_workorderservicetask[field].g;
			var r = msdyn_workorderservicetask[field].r;
			msdyn_workorderservicetask[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_workorderservicetask.Entity = u;
		msdyn_workorderservicetask.EntityName = 'msdyn_workorderservicetask';
		msdyn_workorderservicetask.EntityCollectionName = 'msdyn_workorderservicetasks';
		msdyn_workorderservicetask['@odata.etag'] = e['@odata.etag'];
		msdyn_workorderservicetask.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workorderservicetask.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workorderservicetask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_workorderservicetask = {
			msdyn_InspectionResult : {
				Fail: 100000001,
				Invalid: 100000002,
				Pass: 100000000
			},
			msdyn_inspectiontaskresult : {
				Fail: 192350001,
				NA: 192350003,
				Partial_Success: 192350002,
				Pass: 192350000
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