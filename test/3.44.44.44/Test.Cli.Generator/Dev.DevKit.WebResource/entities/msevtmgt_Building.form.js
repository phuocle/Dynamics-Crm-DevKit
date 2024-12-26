'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBuilding = function(executionContext, defaultWebResourceName) {
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
			BuildingRooms: {},
			msevtmgt_AccessibleToilets: {},
			msevtmgt_AdditionalFacilities: {},
			msevtmgt_addresscomposite: {},
			msevtmgt_addresscomposite1: {},
			msevtmgt_AddressLine1: {},
			msevtmgt_AddressLine11: {},
			msevtmgt_AddressLine2: {},
			msevtmgt_AddressLine21: {},
			msevtmgt_AddressLine3: {},
			msevtmgt_AddressLine31: {},
			msevtmgt_City: {},
			msevtmgt_City1: {},
			msevtmgt_Cost: {},
			msevtmgt_Country: {},
			msevtmgt_Country1: {},
			msevtmgt_Description: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_DisabledParking: {},
			msevtmgt_Email: {},
			msevtmgt_EstimatedCapacity: {},
			msevtmgt_Name: {},
			msevtmgt_NumberOfRooms: {},
			msevtmgt_PostalCode: {},
			msevtmgt_PostalCode1: {},
			msevtmgt_PublicTelephoneAvailable: {},
			msevtmgt_StateProvince: {},
			msevtmgt_StateProvince1: {},
			msevtmgt_Telephone1: {},
			msevtmgt_Telephone2: {},
			msevtmgt_Telephone3: {},
			msevtmgt_Website: {},
			msevtmgt_WifiAvailable: {},
			msevtmgt_WifiPassword: {},
			msevtmgt_WifiSSID: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_3: {},
					_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_3_JP: {},
					_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_4: {},
					_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_5: {},
					_C99322B3_8280_4D62_AAA3_C019243C41A1: {}
				}
			},
			RoomsTab: {
				Section: {
					RoomsTab_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_NumberOfRooms: {},
			msevtmgt_PrimaryContact: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			BuildingRooms: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_building_msevtmgt_room_Building: {},
			msevtmgt_event_building: {},
			msevtmgt_msevtmgt_building_msevtmgt_venue: {},
			msevtmgt_session_building: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormBuilding_quick_create_form = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msevtmgt_AddressLine1: {},
			msevtmgt_City: {},
			msevtmgt_Cost: {},
			msevtmgt_EstimatedCapacity: {},
			msevtmgt_Name: {},
			msevtmgt_PostalCode: {},
			msevtmgt_Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_Building = {
		msevtmgt_AccessibleToilets : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_DisabledAccess : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_DisabledParking : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_PublicTelephoneAvailable : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_WifiAvailable : {
			No: 100000002,
			Yes: 100000001
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