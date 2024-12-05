'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ServiceEndpoint = {
		AuthType : {
			Access_Key: 8,
			ACS: 1,
			Connection_String: 7,
			Http_Header: 5,
			Http_Query_String: 6,
			SAS_Key: 2,
			SAS_Token: 3,
			Webhook_Key: 4
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ConnectionMode : {
			Federated: 2,
			Normal: 1
		},
		Contract : {
			Event_Grid: 9,
			Event_Hub: 7,
			Managed_Data_Lake: 10,
			OneWay: 1,
			Queue: 2,
			Queue_Persistent: 6,
			Rest: 3,
			Topic: 5,
			TwoWay: 4,
			Webhook: 8
		},
		MessageCharset : {
			Default: 0,
			UTF8: 1
		},
		MessageFormat : {
			Binary_XML: 1,
			Json: 2,
			Text_XML: 3
		},
		NamespaceFormat : {
			Namespace_Address: 2,
			Namespace_Name: 1
		},
		SchemaType : {
			Cloud_Events: 2,
			Event_Grid: 1
		},
		UserClaim : {
			None: 1,
			UserId: 2,
			UserInfo: 3
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