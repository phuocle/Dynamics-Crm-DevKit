'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.msdyn_agreementbookingsetupApi = function (e) {
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
		var msdyn_agreementbookingsetup = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Agreement: { b: 'msdyn_Agreement', a: '_msdyn_agreement_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			msdyn_agreementbookingsetupId: { a: 'msdyn_agreementbookingsetupid' },
			msdyn_AutoGenerateBooking: { a: 'msdyn_autogeneratebooking' },
			msdyn_AutoGenerateWO: { a: 'msdyn_autogeneratewo' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_EstimatedDuration: { a: 'msdyn_estimatedduration' },
			msdyn_GenerateWODaysInAdvance: { a: 'msdyn_generatewodaysinadvance' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PostBookingFlexibility: { a: 'msdyn_postbookingflexibility' },
			msdyn_PostponeGenerationUntil_TimezoneDateAndTime: { a: 'msdyn_postponegenerationuntil' },
			msdyn_PreBookingFlexibility: { a: 'msdyn_prebookingflexibility' },
			msdyn_PreferredResource: { b: 'msdyn_PreferredResource', a: '_msdyn_preferredresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_PreferredStartTime_UtcDateAndTime: { a: 'msdyn_preferredstarttime' },
			msdyn_Priority: { b: 'msdyn_Priority', a: '_msdyn_priority_value', c: 'msdyn_priorities', d: 'msdyn_priority' },
			msdyn_ProcessStartedOn_TimezoneDateAndTime: { a: 'msdyn_processstartedon' },
			msdyn_RecurrenceSettings: { a: 'msdyn_recurrencesettings' },
			msdyn_Revision: { a: 'msdyn_revision' },
			msdyn_TimeWindowEnd_UtcDateAndTime: { a: 'msdyn_timewindowend' },
			msdyn_TimeWindowStart_UtcDateAndTime: { a: 'msdyn_timewindowstart' },
			msdyn_WorkLocation: { a: 'msdyn_worklocation' },
			msdyn_WorkOrderSummary: { a: 'msdyn_workordersummary' },
			msdyn_WorkOrderType: { b: 'msdyn_WorkOrderType', a: '_msdyn_workordertype_value', c: 'msdyn_workordertypes', d: 'msdyn_workordertype' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_agreementbookingsetup) {
			var a = msdyn_agreementbookingsetup[field].a;
			var b = msdyn_agreementbookingsetup[field].b;
			var c = msdyn_agreementbookingsetup[field].c;
			var d = msdyn_agreementbookingsetup[field].d;
			var g = msdyn_agreementbookingsetup[field].g;
			var r = msdyn_agreementbookingsetup[field].r;
			msdyn_agreementbookingsetup[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_agreementbookingsetup.Entity = u;
		msdyn_agreementbookingsetup.EntityName = 'msdyn_agreementbookingsetup';
		msdyn_agreementbookingsetup.EntityCollectionName = 'msdyn_agreementbookingsetups';
		msdyn_agreementbookingsetup['@odata.etag'] = e['@odata.etag'];
		msdyn_agreementbookingsetup.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_agreementbookingsetup.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_agreementbookingsetup;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_agreementbookingsetup = {
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
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