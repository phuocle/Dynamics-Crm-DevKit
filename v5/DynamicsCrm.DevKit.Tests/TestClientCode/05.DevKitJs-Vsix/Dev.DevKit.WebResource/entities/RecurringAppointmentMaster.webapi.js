'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.RecurringAppointmentMasterApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _recurringappointmentmaster = {
			ActivityId: { a: 'activityid' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DayOfMonth: { a: 'dayofmonth', g: 'Integer' },
			DaysOfWeekMask: { a: 'daysofweekmask', g: 'Integer' },
			DeletedExceptionsList: { a: 'deletedexceptionslist', r: true },
			Description: { a: 'description' },
			Duration: { a: 'duration', g: 'Integer' },
			EffectiveEndDate_UtcDateAndTime: { a: 'effectiveenddate', g: 'DateTime' },
			EffectiveStartDate_UtcDateOnly: { a: 'effectivestartdate', g: 'DateTime' },
			EndTime_UtcDateAndTime: { a: 'endtime', g: 'DateTime' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			ExpansionStateCode: { a: 'expansionstatecode', r: true, g: 'Integer' },
			FirstDayOfWeek: { a: 'firstdayofweek', g: 'Integer' },
			GlobalObjectId: { a: 'globalobjectid' },
			GroupId: { b: 'groupid', a: '_groupid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			Instance: { a: 'instance', g: 'Integer' },
			InstanceTypeCode: { a: 'instancetypecode', r: true, g: 'Integer' },
			Interval: { a: 'interval', g: 'Integer' },
			IsAllDayEvent: { a: 'isalldayevent', g: 'Boolean' },
			IsBilled: { a: 'isbilled', g: 'Boolean' },
			IsMapiPrivate: { a: 'ismapiprivate', g: 'Boolean' },
			IsNthMonthly: { a: 'isnthmonthly', g: 'Boolean' },
			IsNthYearly: { a: 'isnthyearly', g: 'Boolean' },
			IsOnlineMeeting: { a: 'isonlinemeeting', g: 'Boolean' },
			IsRegenerate: { a: 'isregenerate', g: 'Boolean' },
			IsRegularActivity: { a: 'isregularactivity', r: true, g: 'Boolean' },
			IsUnsafe: { a: 'isunsafe', r: true, g: 'Integer' },
			IsWeekDayPattern: { a: 'isweekdaypattern', g: 'Boolean' },
			IsWorkflowCreated: { a: 'isworkflowcreated', g: 'Boolean' },
			LastExpandedInstanceDate_UtcDateAndTime: { a: 'lastexpandedinstancedate', r: true, g: 'DateTime' },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MonthOfYear: { a: 'monthofyear', g: 'Integer' },
			NextExpansionInstanceDate_UtcDateAndTime: { a: 'nextexpansioninstancedate', r: true, g: 'DateTime' },
			Occurrences: { a: 'occurrences', g: 'Integer' },
			OnlineMeetingChatId: { a: 'onlinemeetingchatid' },
			OnlineMeetingId: { a: 'onlinemeetingid' },
			OnlineMeetingJoinUrl: { a: 'onlinemeetingjoinurl' },
			OnlineMeetingType: { a: 'onlinemeetingtype', g: 'Integer' },
			OutlookOwnerApptId: { a: 'outlookownerapptid', g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PatternEndDate_UtcDateOnly: { a: 'patternenddate', g: 'DateTime' },
			PatternEndType: { a: 'patternendtype', g: 'Integer' },
			PatternStartDate_UtcDateOnly: { a: 'patternstartdate', g: 'DateTime' },
			PriorityCode: { a: 'prioritycode', g: 'Integer' },
			ProcessId: { a: 'processid' },
			RecurrencePatternType: { a: 'recurrencepatterntype', g: 'Integer' },
			RuleId: { b: 'ruleid', a: '_ruleid_value', c: 'recurrencerules', d: 'recurrencerule', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend', r: true, g: 'DateTime' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart', r: true, g: 'DateTime' },
			SeriesStatus: { a: 'seriesstatus', g: 'Boolean' },
			SortDate_UtcDateAndTime: { a: 'sortdate', g: 'DateTime' },
			StageId: { a: 'stageid' },
			StartTime_UtcDateAndTime: { a: 'starttime', g: 'DateTime' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const recurringappointmentmaster = {};
		recurringappointmentmaster.ODataEntity = e;
		recurringappointmentmaster.FormattedValue = {};
		for (const field in _recurringappointmentmaster) {
			const fieldConfig = _recurringappointmentmaster[field];
			webApiField(recurringappointmentmaster, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		Object.defineProperty(recurringappointmentmaster, 'ActivityParties', {
			get: function () { return e?.['recurringappointmentmaster_activity_parties']; },
			set: function (value) {
				e['recurringappointmentmaster_activity_parties'] = value;
				u['recurringappointmentmaster_activity_parties'] = value;
			}
		});
		recurringappointmentmaster.Entity = u;
		recurringappointmentmaster.EntityName = 'recurringappointmentmaster';
		recurringappointmentmaster.EntityCollectionName = 'recurringappointmentmasters';
		recurringappointmentmaster['@odata.etag'] = e?.['@odata.etag'];
		recurringappointmentmaster.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		recurringappointmentmaster.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return recurringappointmentmaster;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurringAppointmentMaster = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		ExpansionStateCode: { Full: 2, Partial: 1, Unexpanded: 0 },
		Instance: { First: 1, Fourth: 4, Last: 5, Second: 2, Third: 3 },
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		MonthOfYear: { April: 4, August: 8, December: 12, February: 2, Invalid_Month_Of_Year: 0, January: 1, July: 7, June: 6, March: 3, May: 5, November: 11, October: 10, September: 9 },
		OnlineMeetingType: { Teams_Meeting: 1 },
		PatternEndType: { No_End_Date: 1, Occurrences: 2, Pattern_End_Date: 3 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RecurrencePatternType: { Daily: 0, Monthly: 2, Weekly: 1, Yearly: 3 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
		StatusCode: { Busy: 5, Canceled: 4, Completed: 3, Free: 1, Out_of_Office: 6, Tentative: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));