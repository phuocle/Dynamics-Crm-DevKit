'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_projectapprovalApi = function (e) {
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
		var msdyn_projectapproval = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ApprovalSet: { b: 'msdyn_ApprovalSet', a: '_msdyn_approvalset_value', c: 'msdyn_approvalsets', d: 'msdyn_approvalset' },
			msdyn_ApprovedBy: { b: 'msdyn_ApprovedBy', a: '_msdyn_approvedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_ApprovedOn_UtcDateOnly: { a: 'msdyn_approvedon' },
			msdyn_BillingType: { a: 'msdyn_billingtype' },
			msdyn_bookableresource: { b: 'msdyn_bookableresource', a: '_msdyn_bookableresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_costamount: { a: 'msdyn_costamount', r: true },
			msdyn_costamount_Base: { a: 'msdyn_costamount_base', r: true },
			msdyn_CostPrice: { a: 'msdyn_costprice' },
			msdyn_costprice_Base: { a: 'msdyn_costprice_base', r: true },
			msdyn_CostQuantity: { a: 'msdyn_costquantity' },
			msdyn_date_UtcDateOnly: { a: 'msdyn_date' },
			msdyn_EntryType: { a: 'msdyn_entrytype' },
			msdyn_ExpenseCategory: { b: 'msdyn_ExpenseCategory', a: '_msdyn_expensecategory_value', c: 'msdyn_expensecategories', d: 'msdyn_expensecategory' },
			msdyn_ExpenseEntry: { b: 'msdyn_ExpenseEntry', a: '_msdyn_expenseentry_value', c: 'msdyn_expenses', d: 'msdyn_expense' },
			msdyn_ExternalComments: { a: 'msdyn_externalcomments' },
			msdyn_hasreceipt: { a: 'msdyn_hasreceipt' },
			msdyn_InternalComments: { a: 'msdyn_internalcomments' },
			msdyn_JournalTransaction: { a: 'msdyn_journaltransaction' },
			msdyn_Manager: { b: 'msdyn_Manager', a: '_msdyn_manager_value', c: 'systemusers', d: 'systemuser' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Project: { b: 'msdyn_Project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_projectapprovalId: { a: 'msdyn_projectapprovalid' },
			msdyn_ProjectTask: { b: 'msdyn_ProjectTask', a: '_msdyn_projecttask_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_recordstage: { a: 'msdyn_recordstage' },
			msdyn_referenceexpenseid: { a: 'msdyn_referenceexpenseid' },
			msdyn_referencejournalline: { b: 'msdyn_referencejournalline', a: '_msdyn_referencejournalline_value', c: 'msdyn_journallines', d: 'msdyn_journalline' },
			msdyn_referencetimeid: { a: 'msdyn_referencetimeid' },
			msdyn_ResourceCategory: { b: 'msdyn_ResourceCategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_salesamount: { a: 'msdyn_salesamount', r: true },
			msdyn_salesamount_Base: { a: 'msdyn_salesamount_base', r: true },
			msdyn_SalesPrice: { a: 'msdyn_salesprice' },
			msdyn_salesprice_Base: { a: 'msdyn_salesprice_base', r: true },
			msdyn_SalesQuantity: { a: 'msdyn_salesquantity' },
			msdyn_SubmittedBy: { b: 'msdyn_SubmittedBy', a: '_msdyn_submittedby_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_TimeEntry: { b: 'msdyn_TimeEntry', a: '_msdyn_timeentry_value', c: 'msdyn_timeentries', d: 'msdyn_timeentry' },
			msdyn_TransactionCategory: { b: 'msdyn_TransactionCategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
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
		for (var field in msdyn_projectapproval) {
			var a = msdyn_projectapproval[field].a;
			var b = msdyn_projectapproval[field].b;
			var c = msdyn_projectapproval[field].c;
			var d = msdyn_projectapproval[field].d;
			var g = msdyn_projectapproval[field].g;
			var r = msdyn_projectapproval[field].r;
			msdyn_projectapproval[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_projectapproval.Entity = u;
		msdyn_projectapproval.EntityName = 'msdyn_projectapproval';
		msdyn_projectapproval.EntityCollectionName = 'msdyn_projectapprovals';
		msdyn_projectapproval['@odata.etag'] = e['@odata.etag'];
		msdyn_projectapproval.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_projectapproval.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_projectapproval;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_projectapproval = {
		msdyn_BillingType : {
			Chargeable: 192350001,
			Complimentary: 192350002,
			Non_Chargeable: 192350000,
			Not_Available: 192350003
		},
		msdyn_EntryType : {
			Expense: 1,
			Time: 0
		},
		msdyn_recordstage : {
			Approved: 2,
			Pending: 3,
			Recall_Request_Approved: 5,
			Recall_Request_Rejected: 6,
			Recall_Requested: 4,
			Rejected: 1,
			Submitted: 0
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