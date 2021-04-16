'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.SocialActivityApi = function (e) {
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
		var socialactivity = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			Community: { a: 'community' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InResponseTo: { a: 'inresponseto' },
			IsBilled: { a: 'isbilled' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			postauthor_account: { b: 'postauthor_account', a: '_postauthor_value', c: 'accounts', d: 'account' },
			postauthor_contact: { b: 'postauthor_contact', a: '_postauthor_value', c: 'contacts', d: 'contact' },
			postauthoraccount_account: { b: 'postauthoraccount_account', a: '_postauthoraccount_value', c: 'accounts', d: 'account' },
			postauthoraccount_contact: { b: 'postauthoraccount_contact', a: '_postauthoraccount_value', c: 'contacts', d: 'contact' },
			PostedOn_UtcDateAndTime: { a: 'postedon' },
			PostFromProfileId: { b: 'postfromprofileid', a: '_postfromprofileid_value', c: 'socialprofiles', d: 'socialprofile' },
			PostFromProfileIdName: { a: 'postedbyname', r: true },
			PostId: { a: 'postid' },
			PostMessageType: { a: 'postmessagetype' },
			PostToProfileId: { a: 'posttoprofileid' },
			PostURL: { a: 'posturl' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_socialactivity: { b: 'regardingobjectid_account_socialactivity', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_asyncoperation: { b: 'regardingobjectid_asyncoperation', a: '_regardingobjectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			regardingobjectid_contact_socialactivity: { b: 'regardingobjectid_contact_socialactivity', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_devkit_azureaccount_socialactivity: { b: 'regardingobjectid_devkit_azureaccount_socialactivity', a: '_regardingobjectid_value', c: 'devkit_azureaccounts', d: 'devkit_azureaccount' },
			regardingobjectid_devkit_webapi_socialactivity: { b: 'regardingobjectid_devkit_webapi_socialactivity', a: '_regardingobjectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			regardingobjectid_knowledgearticle_socialactivity: { b: 'regardingobjectid_knowledgearticle_socialactivity', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_socialactivity: { b: 'regardingobjectid_knowledgebaserecord_socialactivity', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			SentimentValue: { a: 'sentimentvalue' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
			SocialAdditionalParams: { a: 'socialadditionalparams' },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subject: { a: 'subject' },
			ThreadId: { a: 'threadid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in socialactivity) {
			var a = socialactivity[field].a;
			var b = socialactivity[field].b;
			var c = socialactivity[field].c;
			var d = socialactivity[field].d;
			var g = socialactivity[field].g;
			var r = socialactivity[field].r;
			socialactivity[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(socialactivity, 'ActivityParties', {
			get: function () { return e['socialactivity_activity_parties']; },
			set: function (value) {
				e['socialactivity_activity_parties'] = value;
				u['socialactivity_activity_parties'] = value;
			}
		});
		socialactivity.Entity = u;
		socialactivity.EntityName = 'socialactivity';
		socialactivity.EntityCollectionName = 'socialactivities';
		socialactivity['@odata.etag'] = e['@odata.etag'];
		socialactivity.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		socialactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return socialactivity;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SocialActivity = {
		Community : {
			Facebook: 1,
			Other: 0,
			Twitter: 2
		},
		PostMessageType : {
			Private_Message: 1,
			Public_Message: 0
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 5,
			Completed: 1,
			Failed: 2,
			Open: 4,
			Processing: 3
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