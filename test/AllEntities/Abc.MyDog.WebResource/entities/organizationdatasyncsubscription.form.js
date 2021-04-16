'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formorganizationdatasyncsubscription_Information = function(executionContext, defaultWebResourceName) {
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
			name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.organizationdatasyncsubscription = {
		BlobPartitionBy : {
			Day: 1,
			Month: 2,
			None: 0,
			Year: 3
		},
		DataEndpointPostingType : {
			DefaultEndpoint: 0,
			HTTPS: 2,
			ServiceBusEventHub: 3,
			ServiceBusTopic: 1
		},
		DataProcessingType : {
			Batch: 2,
			Mixed: 3,
			NotificationOnly: 4,
			Streaming: 1,
			Unknown: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Activated: 4,
			Deactivated: 5,
			Uninitialized: 3
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