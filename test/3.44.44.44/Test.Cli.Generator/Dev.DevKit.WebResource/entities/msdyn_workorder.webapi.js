﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workorderApi = function (e) {
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
		var _msdyn_workorder = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Address1: { a: 'msdyn_address1' },
			msdyn_Address2: { a: 'msdyn_address2' },
			msdyn_Address3: { a: 'msdyn_address3' },
			msdyn_AddressName: { a: 'msdyn_addressname' },
			msdyn_Agreement: { b: 'msdyn_Agreement', a: '_msdyn_agreement_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			msdyn_AutoNumbering: { a: 'msdyn_autonumbering' },
			msdyn_BillingAccount: { b: 'msdyn_BillingAccount', a: '_msdyn_billingaccount_value', c: 'accounts', d: 'account' },
			msdyn_BookingSummary: { a: 'msdyn_bookingsummary' },
			msdyn_ChildIndex: { a: 'msdyn_childindex' },
			msdyn_City: { a: 'msdyn_city' },
			msdyn_ClosedBy: { b: 'msdyn_ClosedBy', a: '_msdyn_closedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_completedon_UtcDateAndTime: { a: 'msdyn_completedon' },
			msdyn_CostNTEPercent: { a: 'msdyn_costntepercent' },
			msdyn_Country: { a: 'msdyn_country' },
			msdyn_CustomerAsset: { b: 'msdyn_CustomerAsset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_DateWindowEnd_UtcDateOnly: { a: 'msdyn_datewindowend' },
			msdyn_DateWindowStart_UtcDateOnly: { a: 'msdyn_datewindowstart' },
			msdyn_DisplayAddress: { a: 'msdyn_displayaddress', r: true },
			msdyn_EstimateSubtotalAmount: { a: 'msdyn_estimatesubtotalamount' },
			msdyn_estimatesubtotalamount_Base: { a: 'msdyn_estimatesubtotalamount_base', r: true },
			msdyn_firstarrivedon_UtcDateAndTime: { a: 'msdyn_firstarrivedon' },
			msdyn_FollowUpNote: { a: 'msdyn_followupnote' },
			msdyn_FollowUpRequired: { a: 'msdyn_followuprequired' },
			msdyn_FunctionalLocation: { b: 'msdyn_FunctionalLocation', a: '_msdyn_functionallocation_value', c: 'msdyn_functionallocations', d: 'msdyn_functionallocation' },
			msdyn_Instructions: { a: 'msdyn_instructions' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_IoTAlert: { b: 'msdyn_IoTAlert', a: '_msdyn_iotalert_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			msdyn_IsFollowUp: { a: 'msdyn_isfollowup' },
			msdyn_IsMobile: { a: 'msdyn_ismobile' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_mapcontrol: { a: 'msdyn_mapcontrol', r: true },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_nottoexceedcostamount: { a: 'msdyn_nottoexceedcostamount' },
			msdyn_nottoexceedcostamount_Base: { a: 'msdyn_nottoexceedcostamount_base', r: true },
			msdyn_nottoexceedpriceamount: { a: 'msdyn_nottoexceedpriceamount' },
			msdyn_nottoexceedpriceamount_Base: { a: 'msdyn_nottoexceedpriceamount_base', r: true },
			msdyn_OpportunityId: { b: 'msdyn_OpportunityId', a: '_msdyn_opportunityid_value', c: 'opportunities', d: 'opportunity' },
			msdyn_ParentWorkOrder: { b: 'msdyn_ParentWorkOrder', a: '_msdyn_parentworkorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_phoneNumber: { a: 'msdyn_phoneNumber' },
			msdyn_PostalCode: { a: 'msdyn_postalcode' },
			msdyn_PreferredResource: { b: 'msdyn_PreferredResource', a: '_msdyn_preferredresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_PriceList: { b: 'msdyn_PriceList', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_PriceNTEPercent: { a: 'msdyn_pricentepercent' },
			msdyn_PrimaryIncidentDescription: { a: 'msdyn_primaryincidentdescription' },
			msdyn_PrimaryIncidentEstimatedDuration: { a: 'msdyn_primaryincidentestimatedduration' },
			msdyn_PrimaryIncidentType: { b: 'msdyn_PrimaryIncidentType', a: '_msdyn_primaryincidenttype_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			msdyn_PrimaryResolution: { b: 'msdyn_PrimaryResolution', a: '_msdyn_primaryresolution_value', c: 'msdyn_resolutions', d: 'msdyn_resolution' },
			msdyn_Priority: { b: 'msdyn_Priority', a: '_msdyn_priority_value', c: 'msdyn_priorities', d: 'msdyn_priority' },
			msdyn_productsservicescost: { a: 'msdyn_productsservicescost' },
			msdyn_productsservicescost_Base: { a: 'msdyn_productsservicescost_base' },
			msdyn_productsservicesestimatedcost: { a: 'msdyn_productsservicesestimatedcost' },
			msdyn_productsservicesestimatedcost_Base: { a: 'msdyn_productsservicesestimatedcost_base' },
			msdyn_ReportedByContact: { b: 'msdyn_ReportedByContact', a: '_msdyn_reportedbycontact_value', c: 'contacts', d: 'contact' },
			msdyn_ServiceAccount: { b: 'msdyn_ServiceAccount', a: '_msdyn_serviceaccount_value', c: 'accounts', d: 'account' },
			msdyn_ServiceRequest: { b: 'msdyn_ServiceRequest', a: '_msdyn_servicerequest_value', c: 'incidents', d: 'incident' },
			msdyn_ServiceTerritory: { b: 'msdyn_ServiceTerritory', a: '_msdyn_serviceterritory_value', c: 'territories', d: 'territory' },
			msdyn_StateOrProvince: { a: 'msdyn_stateorprovince' },
			msdyn_SubStatus: { b: 'msdyn_SubStatus', a: '_msdyn_substatus_value', c: 'msdyn_workordersubstatuses', d: 'msdyn_workordersubstatus' },
			msdyn_SubtotalAmount: { a: 'msdyn_subtotalamount' },
			msdyn_subtotalamount_Base: { a: 'msdyn_subtotalamount_base', r: true },
			msdyn_SupportContact: { b: 'msdyn_SupportContact', a: '_msdyn_supportcontact_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_SystemStatus: { a: 'msdyn_systemstatus' },
			msdyn_Taxable: { a: 'msdyn_taxable' },
			msdyn_TaxCode: { b: 'msdyn_TaxCode', a: '_msdyn_taxcode_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			msdyn_TimeClosed_UtcDateAndTime: { a: 'msdyn_timeclosed' },
			msdyn_TimeFromPromised_UtcDateAndTime: { a: 'msdyn_timefrompromised' },
			msdyn_TimeGroup: { b: 'msdyn_TimeGroup', a: '_msdyn_timegroup_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			msdyn_TimeGroupDetailSelected: { b: 'msdyn_TimeGroupDetailSelected', a: '_msdyn_timegroupdetailselected_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			msdyn_TimeToPromised_UtcDateAndTime: { a: 'msdyn_timetopromised' },
			msdyn_TimeWindowEnd_UtcDateAndTime: { a: 'msdyn_timewindowend' },
			msdyn_TimeWindowStart_UtcDateAndTime: { a: 'msdyn_timewindowstart' },
			msdyn_TotalAmount: { a: 'msdyn_totalamount' },
			msdyn_totalamount_Base: { a: 'msdyn_totalamount_base', r: true },
			msdyn_totalestimatedaftertaxprice: { a: 'msdyn_totalestimatedaftertaxprice' },
			msdyn_totalestimatedaftertaxprice_Base: { a: 'msdyn_totalestimatedaftertaxprice_base' },
			msdyn_totalestimatedduration: { a: 'msdyn_totalestimatedduration' },
			msdyn_TotalSalesTax: { a: 'msdyn_totalsalestax' },
			msdyn_totalsalestax_Base: { a: 'msdyn_totalsalestax_base', r: true },
			msdyn_Trade: { b: 'msdyn_Trade', a: '_msdyn_trade_value', c: 'msdyn_trades', d: 'msdyn_trade' },
			msdyn_workhourtemplate: { b: 'msdyn_workhourtemplate', a: '_msdyn_workhourtemplate_value', c: 'msdyn_workhourtemplates', d: 'msdyn_workhourtemplate' },
			msdyn_WorkLocation: { a: 'msdyn_worklocation' },
			msdyn_workorderarrivaltimekpiid: { b: 'msdyn_workorderarrivaltimekpiid', a: '_msdyn_workorderarrivaltimekpiid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			msdyn_workorderId: { a: 'msdyn_workorderid' },
			msdyn_workorderresolutionkpiid: { b: 'msdyn_workorderresolutionkpiid', a: '_msdyn_workorderresolutionkpiid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
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
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_workorder = {};
		msdyn_workorder.ODataEntity = e;
		msdyn_workorder.FormattedValue = {};
		for (var field in _msdyn_workorder) {
			var a = _msdyn_workorder[field].a;
			var b = _msdyn_workorder[field].b;
			var c = _msdyn_workorder[field].c;
			var d = _msdyn_workorder[field].d;
			var g = _msdyn_workorder[field].g;
			var r = _msdyn_workorder[field].r;
			webApiField(msdyn_workorder, field, e, a, b, c, d, r, u, g);
		}
		msdyn_workorder.Entity = u;
		msdyn_workorder.EntityName = 'msdyn_workorder';
		msdyn_workorder.EntityCollectionName = 'msdyn_workorders';
		msdyn_workorder['@odata.etag'] = e['@odata.etag'];
		msdyn_workorder.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workorder.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workorder;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workorder = {
		msdyn_SystemStatus : {
			Canceled: 690970005,
			Completed: 690970003,
			In_Progress: 690970002,
			Posted: 690970004,
			Scheduled: 690970001,
			Unscheduled: 690970000
		},
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