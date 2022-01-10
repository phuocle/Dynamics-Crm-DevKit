'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_contractlinescheduleofvalueApi = function (e) {
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
		var msdyn_contractlinescheduleofvalue = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_amount: { a: 'msdyn_amount' },
			msdyn_amount_after_tax: { a: 'msdyn_amount_after_tax', r: true },
			msdyn_amount_after_tax_Base: { a: 'msdyn_amount_after_tax_base', r: true },
			msdyn_amount_Base: { a: 'msdyn_amount_base', r: true },
			msdyn_contract: { b: 'msdyn_contract', a: '_msdyn_contract_value', c: 'salesorders', d: 'salesorder' },
			msdyn_ContractLine: { a: 'msdyn_contractline' },
			msdyn_ContractLineDescription: { a: 'msdyn_contractlinedescription' },
			msdyn_ContractLineId: { b: 'msdyn_ContractLineId', a: '_msdyn_contractlineid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			msdyn_contractlinescheduleofvalueId: { a: 'msdyn_contractlinescheduleofvalueid' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_externaldescription: { a: 'msdyn_externaldescription' },
			msdyn_Invoicedate_UtcDateOnly: { a: 'msdyn_invoicedate' },
			msdyn_Invoicestatus: { a: 'msdyn_invoicestatus' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_price: { a: 'msdyn_price' },
			msdyn_price_Base: { a: 'msdyn_price_base', r: true },
			msdyn_project: { b: 'msdyn_project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_projecttask: { b: 'msdyn_projecttask', a: '_msdyn_projecttask_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_startdatetime_UtcDateAndTime: { a: 'msdyn_startdatetime' },
			msdyn_tax: { a: 'msdyn_tax' },
			msdyn_tax_Base: { a: 'msdyn_tax_base', r: true },
			msdyn_TransactionClassification: { a: 'msdyn_transactionclassification' },
			msdyn_TransactionTypeCode: { a: 'msdyn_transactiontypecode' },
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
		for (var field in msdyn_contractlinescheduleofvalue) {
			var a = msdyn_contractlinescheduleofvalue[field].a;
			var b = msdyn_contractlinescheduleofvalue[field].b;
			var c = msdyn_contractlinescheduleofvalue[field].c;
			var d = msdyn_contractlinescheduleofvalue[field].d;
			var g = msdyn_contractlinescheduleofvalue[field].g;
			var r = msdyn_contractlinescheduleofvalue[field].r;
			msdyn_contractlinescheduleofvalue[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_contractlinescheduleofvalue.Entity = u;
		msdyn_contractlinescheduleofvalue.EntityName = 'msdyn_contractlinescheduleofvalue';
		msdyn_contractlinescheduleofvalue.EntityCollectionName = 'msdyn_contractlinescheduleofvalues';
		msdyn_contractlinescheduleofvalue['@odata.etag'] = e['@odata.etag'];
		msdyn_contractlinescheduleofvalue.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_contractlinescheduleofvalue.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_contractlinescheduleofvalue;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_contractlinescheduleofvalue = {
		msdyn_Invoicestatus : {
			Customer_invoice_created: 192350002,
			Customer_invoice_posted: 192350003,
			Not_Ready_for_invoicing: 192350000,
			Ready_for_invoicing: 192350001
		},
		msdyn_TransactionClassification : {
			Additional: 690970001,
			Commission: 690970000,
			Expense: 192350001,
			Fee: 192350004,
			Material: 192350002,
			Milestone: 192350003,
			Tax: 690970002,
			Time: 192350000
		},
		msdyn_TransactionTypeCode : {
			Billed_Sales: 192350006,
			Cost: 192350000,
			Inter_Organizational_Sales: 192350008,
			Project_Contract: 192350004,
			Resourcing_Unit_Cost: 192350007,
			Unbilled_Sales: 192350005
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