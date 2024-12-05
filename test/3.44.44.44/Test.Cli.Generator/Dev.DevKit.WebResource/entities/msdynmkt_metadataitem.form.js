'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_metadataitem_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdynmkt_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_metadataitem = {
		msdynmkt_DataType : {
			BigInt: 534120000,
			Boolean: 534120015,
			DateTime: 534120002,
			Decimal: 534120003,
			Double: 534120007,
			EntityCollection: 534120020,
			EntityValue: 534120019,
			File: 534120006,
			Image: 534120008,
			Integer: 534120004,
			Lookup: 534120009,
			ManyToManyRelationship: 534120018,
			ManyToOneRelationship: 534120022,
			Memo: 534120011,
			Money: 534120001,
			MultiSelectPicklist: 534120010,
			OneToManyRelationship: 534120017,
			Other: 534120021,
			Picklist: 534120012,
			State: 534120014,
			Status: 534120013,
			String: 534120005,
			Uniqueidentifier: 534120016
		},
		msdynmkt_DateTimeBehavior : {
			DateOnly: 534120001,
			TimeZoneIndependent: 534120000,
			UserLocal: 534120002
		},
		msdynmkt_SourceType : {
			CJO_Business_Event: 534120002,
			CJO_Custom_Event: 534120003,
			CJO_Interaction_Event: 534120001,
			Dataverse_Table: 534120000,
			External: 534120005,
			Legal: 534120004
		},
		msdynmkt_SourceVirtualTableType : {
			Elastic: 534120001,
			None: 534120000,
			Other: 534120002
		},
		msdynmkt_StringFormatType : {
			Email: 534120000,
			Json: 534120008,
			Phone: 534120007,
			PhoneticGuide: 534120005,
			RichText: 534120009,
			Text: 534120001,
			TextArea: 534120002,
			TickerSymbol: 534120004,
			Url: 534120003,
			VersionNumber: 534120006
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