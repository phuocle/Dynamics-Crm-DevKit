'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_opportunitykpiitemApi = function (e) {
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
		var _msdyn_opportunitykpiitem = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_acilastupdatetimestamp_UtcDateAndTime: { a: 'msdyn_acilastupdatetimestamp' },
			msdyn_averagefirstresponsetimebytheminhrs: { a: 'msdyn_averagefirstresponsetimebytheminhrs' },
			msdyn_averagefirstresponsetimebyusinhrs: { a: 'msdyn_averagefirstresponsetimebyusinhrs' },
			msdyn_computationaccuracy: { a: 'msdyn_computationaccuracy' },
			msdyn_date_UtcDateAndTime: { a: 'msdyn_date' },
			msdyn_emailattachmentopens: { a: 'msdyn_emailattachmentopens' },
			msdyn_emaillinksclicked: { a: 'msdyn_emaillinksclicked' },
			msdyn_emailsreceived: { a: 'msdyn_emailsreceived' },
			msdyn_emailssent: { a: 'msdyn_emailssent' },
			msdyn_facetimewithcustomer: { a: 'msdyn_facetimewithcustomer' },
			msdyn_lastactivitybyteam_UtcDateAndTime: { a: 'msdyn_lastactivitybyteam' },
			msdyn_lastactivitydirection: { a: 'msdyn_lastactivitydirection' },
			msdyn_lastactivityid: { a: 'msdyn_lastactivityid' },
			msdyn_lastactivitytype: { a: 'msdyn_lastactivitytype' },
			msdyn_liemailssent: { a: 'msdyn_liemailssent' },
			msdyn_meetingsreceived: { a: 'msdyn_meetingsreceived' },
			msdyn_meetingssent: { a: 'msdyn_meetingssent' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_nextactivitybyteam_UtcDateAndTime: { a: 'msdyn_nextactivitybyteam' },
			msdyn_nextactivitydirection: { a: 'msdyn_nextactivitydirection' },
			msdyn_nextactivityid: { a: 'msdyn_nextactivityid' },
			msdyn_nextactivitytype: { a: 'msdyn_nextactivitytype' },
			msdyn_openedemails: { a: 'msdyn_openedemails' },
			msdyn_opportunityid: { b: 'msdyn_opportunityid', a: '_msdyn_opportunityid_value', c: 'opportunities', d: 'opportunity' },
			msdyn_opportunitykpiitemId: { a: 'msdyn_opportunitykpiitemid' },
			msdyn_phonecallsmade: { a: 'msdyn_phonecallsmade' },
			msdyn_phonecallsreceived: { a: 'msdyn_phonecallsreceived' },
			msdyn_relationshiphealthscorestate: { a: 'msdyn_relationshiphealthscorestate' },
			msdyn_relationshiphealthscorevalue: { a: 'msdyn_relationshiphealthscorevalue' },
			msdyn_relationshiphealthtrend: { a: 'msdyn_relationshiphealthtrend' },
			msdyn_responseratebythem: { a: 'msdyn_responseratebythem' },
			msdyn_responseratebyus: { a: 'msdyn_responseratebyus' },
			msdyn_timespentbycustomer: { a: 'msdyn_timespentbycustomer' },
			msdyn_timespentbycustomer_calculated: { a: 'msdyn_timespentbycustomer_calculated', r: true },
			msdyn_timespentbyteam: { a: 'msdyn_timespentbyteam' },
			msdyn_timespentbyteam_calculated: { a: 'msdyn_timespentbyteam_calculated', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_opportunitykpiitem = {};
		msdyn_opportunitykpiitem.ODataEntity = e;
		msdyn_opportunitykpiitem.FormattedValue = {};
		for (var field in _msdyn_opportunitykpiitem) {
			var a = _msdyn_opportunitykpiitem[field].a;
			var b = _msdyn_opportunitykpiitem[field].b;
			var c = _msdyn_opportunitykpiitem[field].c;
			var d = _msdyn_opportunitykpiitem[field].d;
			var g = _msdyn_opportunitykpiitem[field].g;
			var r = _msdyn_opportunitykpiitem[field].r;
			webApiField(msdyn_opportunitykpiitem, field, e, a, b, c, d, r, u, g);
		}
		msdyn_opportunitykpiitem.Entity = u;
		msdyn_opportunitykpiitem.EntityName = 'msdyn_opportunitykpiitem';
		msdyn_opportunitykpiitem.EntityCollectionName = 'msdyn_opportunitykpiitems';
		msdyn_opportunitykpiitem['@odata.etag'] = e['@odata.etag'];
		msdyn_opportunitykpiitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_opportunitykpiitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_opportunitykpiitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_opportunitykpiitem = {
		msdyn_computationaccuracy : {
			Complete: 100000000,
			Partial: 100000001
		},
		msdyn_lastactivitydirection : {
			Incoming: 0,
			Outgoing: 1
		},
		msdyn_nextactivitydirection : {
			Incoming: 0,
			Outgoing: 1
		},
		msdyn_relationshiphealthscorestate : {
			Entity_older_than_2_years: 7,
			Fair: 1,
			Good: 0,
			Health_Computation_In_Progress: 5,
			No_Closed_Activities: 4,
			Not_enough_info: 3,
			Poor: 2,
			Something_went_wrong: 6
		},
		msdyn_relationshiphealthtrend : {
			Declining: 2,
			Health_not_applicable: 5,
			Improving: 0,
			Not_enough_info: 3,
			Something_went_wrong: 4,
			Steady: 1
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