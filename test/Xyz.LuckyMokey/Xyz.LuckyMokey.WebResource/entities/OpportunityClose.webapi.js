'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.OpportunityCloseApi = function (e) {
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
		var opportunityclose = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualRevenue: { a: 'actualrevenue' },
			ActualRevenue_Base: { a: 'actualrevenue_base', r: true },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			Category: { a: 'category' },
			Community: { a: 'community' },
			CompetitorId: { b: 'competitorid', a: '_competitorid_value', c: 'competitors', d: 'competitor' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DeliveryLastAttemptedOn_UtcDateAndTime: { a: 'deliverylastattemptedon', r: true },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			Description: { a: 'description' },
			ExchangeItemId: { a: 'exchangeitemid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExchangeWebLink: { a: 'exchangeweblink' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LeftVoiceMail: { a: 'leftvoicemail' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpportunityId: { b: 'opportunityid', a: '_opportunityid_value', c: 'opportunities', d: 'opportunity' },
			OpportunityStateCode: { a: 'opportunitystatecode' },
			OpportunityStatusCode: { a: 'opportunitystatuscode' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PostponeActivityProcessingUntil_UtcDateAndTime: { a: 'postponeactivityprocessinguntil', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_opportunityclose: { b: 'regardingobjectid_account_opportunityclose', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_opportunityclose: { b: 'regardingobjectid_bookableresourcebooking_opportunityclose', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_opportunityclose: { b: 'regardingobjectid_bookableresourcebookingheader_opportunityclose', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_opportunityclose: { b: 'regardingobjectid_bulkoperation_opportunityclose', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_opportunityclose: { b: 'regardingobjectid_campaign_opportunityclose', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_opportunityclose: { b: 'regardingobjectid_campaignactivity_opportunityclose', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_entitlement_opportunityclose: { b: 'regardingobjectid_entitlement_opportunityclose', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_opportunityclose: { b: 'regardingobjectid_entitlementtemplate_opportunityclose', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_opportunityclose: { b: 'regardingobjectid_incident_opportunityclose', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_opportunityclose: { b: 'regardingobjectid_new_interactionforemail_opportunityclose', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_knowledgearticle_opportunityclose: { b: 'regardingobjectid_knowledgearticle_opportunityclose', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_opportunityclose: { b: 'regardingobjectid_knowledgebaserecord_opportunityclose', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_opportunityclose: { b: 'regardingobjectid_lead_opportunityclose', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_playbookinstance_opportunityclose: { b: 'regardingobjectid_msdyn_playbookinstance_opportunityclose', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_opportunity_opportunityclose: { b: 'regardingobjectid_opportunity_opportunityclose', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_site_opportunityclose: { b: 'regardingobjectid_site_opportunityclose', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateOnly: { a: 'scheduledend' },
			ScheduledStart_UtcDateOnly: { a: 'scheduledstart' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SeriesId: { a: 'seriesid', r: true },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in opportunityclose) {
			var a = opportunityclose[field].a;
			var b = opportunityclose[field].b;
			var c = opportunityclose[field].c;
			var d = opportunityclose[field].d;
			var g = opportunityclose[field].g;
			var r = opportunityclose[field].r;
			opportunityclose[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(opportunityclose, 'ActivityParties', {
			get: function () { return e['opportunityclose_activity_parties']; },
			set: function (value) {
				e['opportunityclose_activity_parties'] = value;
				u['opportunityclose_activity_parties'] = value;
			}
		});
		opportunityclose.Entity = u;
		opportunityclose.EntityName = 'opportunityclose';
		opportunityclose.EntityCollectionName = 'opportunitycloses';
		opportunityclose['@odata.etag'] = e['@odata.etag'];
		opportunityclose.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		opportunityclose.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return opportunityclose;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.OpportunityClose = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		OpportunityStateCode : {
			Open: 0,
			Won: 1,
			Lost: 2
		},
		OpportunityStatusCode : {
			In_Progress: 1,
			On_Hold: 2,
			Won: 3,
			Canceled: 4,
			Out_Sold: 5
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Completed: 1,
			Canceled: 2
		},
		StatusCode : {
			Open: 1,
			Completed: 2,
			Canceled: 3
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