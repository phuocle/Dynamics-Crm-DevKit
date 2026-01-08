'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMobile_Offline_Profile_Item = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CreatedOn", "Name", "profileassociationgrid", "RecordDistributionCriteria", "RecordsOwnedByMe", "RecordsOwnedByMyBusinessUnit", "RecordsOwnedByMyTeam", "SelectedEntityTypeCode"],
			bpf: [],
			dialog: [],
			grid: ["profileassociationgrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["GENERALINFORMATION_TAB___Entity_Selection", "GENERALINFORMATION_TAB___MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MobileOfflineProfileItem = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RecordDistributionCriteria: { All_records: 1, Custom_data_filter: 3, Download_related_data_only: 0, Other_data_filter: 2 },
		SelectedEntityTypeCode: { Account: 1, AccountBPF: 10919, Activity_File_Attachment: 10252, Appointment: 4201, Attachment: 1001, Contact: 2, Email: 4202, Image_Descriptor: 1007, Interim_Update_Knowledge_Article: 10705, Knowledge_Article_Attachment: 10267, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_Harvest_Job_Record: 10275, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Note: 5, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, PowerPagesDDOSAlert: 10451, Queue: 2020, Queue_Item: 2029, Reserve_entity_10701ed370: 10604, Reserve_entity_1bfb649ef5: 10488, Reserve_entity_26a8ef60be: 10810, Reserve_entity_2de89d6f96: 10819, Reserve_entity_2f931a2c87: 10468, Reserve_entity_3d0e4d135d: 10799, Reserve_entity_49318bf520: 10675, Reserve_entity_56035df1f6: 10571, Reserve_entity_58265009a3: 10822, Reserve_entity_6356b0c104: 10524, Reserve_entity_6a32540060: 10585, Reserve_entity_702362ceb4: 10787, Reserve_entity_7aab32d91e: 10669, Reserve_entity_878256b1bd: 10506, Reserve_entity_9520b6e405: 10807, Reserve_entity_9eafbd660d: 10686, Reserve_entity_a8cd77b9ac: 10825, Reserve_entity_af3e0052ac: 10816, Reserve_entity_b3331f12e0: 10715, Reserve_entity_ba02296c07: 10542, Reserve_entity_bbc4b9fafc: 10655, Reserve_entity_c15f669578: 10718, Reserve_entity_c21749bb70: 10621, Reserve_entity_cd9cd968cc: 10712, Reserve_entity_dc212544db: 10638, Reserve_entity_dfef254c8f: 10590, Reserve_entity_dff8308cc9: 10813, Reserve_entity_e113384c28: 10828, Reserve_entity_e4227f9f0f: 10557, Reserve_entity_ed7de5dd0b: 10700, SLA_KPI_Instance: 9752, Task: 4212, Team: 9, User: 8 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));