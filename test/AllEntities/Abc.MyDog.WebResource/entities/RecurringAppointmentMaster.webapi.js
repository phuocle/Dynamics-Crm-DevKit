'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.RecurringAppointmentMasterApi = function (e) {
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
		var recurringappointmentmaster = {
			ActivityId: { a: 'activityid' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DayOfMonth: { a: 'dayofmonth' },
			DaysOfWeekMask: { a: 'daysofweekmask' },
			DeletedExceptionsList: { a: 'deletedexceptionslist', r: true },
			Description: { a: 'description' },
			Duration: { a: 'duration' },
			EffectiveEndDate_UtcDateAndTime: { a: 'effectiveenddate' },
			EffectiveStartDate_UtcDateOnly: { a: 'effectivestartdate' },
			EndTime_UtcDateAndTime: { a: 'endtime' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpansionStateCode: { a: 'expansionstatecode', r: true },
			FirstDayOfWeek: { a: 'firstdayofweek' },
			GlobalObjectId: { a: 'globalobjectid' },
			GroupId: { b: 'groupid', a: '_groupid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			Instance: { a: 'instance' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			Interval: { a: 'interval' },
			IsAllDayEvent: { a: 'isalldayevent' },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsNthMonthly: { a: 'isnthmonthly' },
			IsNthYearly: { a: 'isnthyearly' },
			IsRegenerate: { a: 'isregenerate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsUnsafe: { a: 'isunsafe', r: true },
			IsWeekDayPattern: { a: 'isweekdaypattern' },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastExpandedInstanceDate_UtcDateAndTime: { a: 'lastexpandedinstancedate', r: true },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MonthOfYear: { a: 'monthofyear' },
			NextExpansionInstanceDate_UtcDateAndTime: { a: 'nextexpansioninstancedate', r: true },
			Occurrences: { a: 'occurrences' },
			OutlookOwnerApptId: { a: 'outlookownerapptid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PatternEndDate_UtcDateOnly: { a: 'patternenddate' },
			PatternEndType: { a: 'patternendtype' },
			PatternStartDate_UtcDateOnly: { a: 'patternstartdate' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			RecurrencePatternType: { a: 'recurrencepatterntype' },
			regardingobjectid_account_recurringappointmentmaster: { b: 'regardingobjectid_account_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_contact_recurringappointmentmaster: { b: 'regardingobjectid_contact_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_devkit_azureaccount_recurringappointmentmaster: { b: 'regardingobjectid_devkit_azureaccount_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'devkit_azureaccounts', d: 'devkit_azureaccount' },
			regardingobjectid_devkit_webapi_recurringappointmentmaster: { b: 'regardingobjectid_devkit_webapi_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			regardingobjectid_knowledgearticle_recurringappointmentmaster: { b: 'regardingobjectid_knowledgearticle_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_recurringappointmentmaster: { b: 'regardingobjectid_knowledgebaserecord_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			RuleId: { b: 'ruleid', a: '_ruleid_value', c: 'recurrencerules', d: 'recurrencerule', r: true },
			SafeDescription: { a: 'safedescription', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend', r: true },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart', r: true },
			SeriesStatus: { a: 'seriesstatus' },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in recurringappointmentmaster) {
			var a = recurringappointmentmaster[field].a;
			var b = recurringappointmentmaster[field].b;
			var c = recurringappointmentmaster[field].c;
			var d = recurringappointmentmaster[field].d;
			var g = recurringappointmentmaster[field].g;
			var r = recurringappointmentmaster[field].r;
			recurringappointmentmaster[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(recurringappointmentmaster, 'ActivityParties', {
			get: function () { return e['recurringappointmentmaster_activity_parties']; },
			set: function (value) {
				e['recurringappointmentmaster_activity_parties'] = value;
				u['recurringappointmentmaster_activity_parties'] = value;
			}
		});
		recurringappointmentmaster.Entity = u;
		recurringappointmentmaster.EntityName = 'recurringappointmentmaster';
		recurringappointmentmaster.EntityCollectionName = 'recurringappointmentmasters';
		recurringappointmentmaster['@odata.etag'] = e['@odata.etag'];
		recurringappointmentmaster.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		recurringappointmentmaster.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return recurringappointmentmaster;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurringAppointmentMaster = {
		ExpansionStateCode : {
			Full: 2,
			Partial: 1,
			Unexpanded: 0
		},
		Instance : {
			First: 1,
			Fourth: 4,
			Last: 5,
			Second: 2,
			Third: 3
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		MonthOfYear : {
			April: 4,
			August: 8,
			December: 12,
			February: 2,
			Invalid_Month_Of_Year: 0,
			January: 1,
			July: 7,
			June: 6,
			March: 3,
			May: 5,
			November: 11,
			October: 10,
			September: 9
		},
		PatternEndType : {
			No_End_Date: 1,
			Occurrences: 2,
			Pattern_End_Date: 3
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RecurrencePatternType : {
			Daily: 0,
			Monthly: 2,
			Weekly: 1,
			Yearly: 3
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0,
			Scheduled: 3
		},
		StatusCode : {
			Busy: 5,
			Canceled: 4,
			Completed: 3,
			Free: 1,
			Out_of_Office: 6,
			Tentative: 2
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