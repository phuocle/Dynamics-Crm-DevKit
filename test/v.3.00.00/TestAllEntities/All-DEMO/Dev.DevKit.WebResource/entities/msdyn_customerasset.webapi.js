'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_customerassetApi = function (e) {
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
		var msdyn_customerasset = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Account: { b: 'msdyn_Account', a: '_msdyn_account_value', c: 'accounts', d: 'account' },
			msdyn_alert: { a: 'msdyn_alert', r: true },
			msdyn_alertcount: { a: 'msdyn_alertcount', r: true },
			msdyn_alertcount_Date_UtcDateAndTime: { a: 'msdyn_alertcount_date', r: true },
			msdyn_alertcount_State: { a: 'msdyn_alertcount_state', r: true },
			msdyn_CustomerAssetCategory: { b: 'msdyn_CustomerAssetCategory', a: '_msdyn_customerassetcategory_value', c: 'msdyn_customerassetcategories', d: 'msdyn_customerassetcategory' },
			msdyn_customerassetId: { a: 'msdyn_customerassetid' },
			msdyn_DeviceId: { a: 'msdyn_deviceid' },
			msdyn_FunctionalLocation: { b: 'msdyn_FunctionalLocation', a: '_msdyn_functionallocation_value', c: 'msdyn_functionallocations', d: 'msdyn_functionallocation' },
			msdyn_LastAlertTime_UtcDateAndTime: { a: 'msdyn_lastalerttime', r: true },
			msdyn_LastAlertTime_Date_UtcDateAndTime: { a: 'msdyn_lastalerttime_date', r: true },
			msdyn_LastAlertTime_State: { a: 'msdyn_lastalerttime_state', r: true },
			msdyn_LastCommandSent: { b: 'msdyn_LastCommandSent', a: '_msdyn_lastcommandsent_value', c: 'msdyn_iotdevicecommands', d: 'msdyn_iotdevicecommand' },
			msdyn_LastCommandSentTime_UtcDateOnly: { a: 'msdyn_lastcommandsenttime' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_MasterAsset: { b: 'msdyn_MasterAsset', a: '_msdyn_masterasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ParentAsset: { b: 'msdyn_ParentAsset', a: '_msdyn_parentasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_RegistrationStatus: { a: 'msdyn_registrationstatus' },
			msdyn_WorkOrderProduct: { b: 'msdyn_WorkOrderProduct', a: '_msdyn_workorderproduct_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
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
		for (var field in msdyn_customerasset) {
			var a = msdyn_customerasset[field].a;
			var b = msdyn_customerasset[field].b;
			var c = msdyn_customerasset[field].c;
			var d = msdyn_customerasset[field].d;
			var g = msdyn_customerasset[field].g;
			var r = msdyn_customerasset[field].r;
			msdyn_customerasset[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_customerasset.Entity = u;
		msdyn_customerasset.EntityName = 'msdyn_customerasset';
		msdyn_customerasset.EntityCollectionName = 'msdyn_customerassets';
		msdyn_customerasset['@odata.etag'] = e['@odata.etag'];
		msdyn_customerasset.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_customerasset.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_customerasset;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_customerasset = {
		msdyn_RegistrationStatus : {
			Error: 192350004,
			In_Progress: 192350002,
			Registered: 192350003,
			Unknown: 192350000,
			Unregistered: 192350001
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