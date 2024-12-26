﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formuii_option_Information {
		interface tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC_Sections {
			_706FA85F_131A_40EB_814D_5FEBD225D232: DevKit.Controls.Section;
		}
		interface tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284_Sections {
			_9E1248BB_174F_4004_AA6A_1A1CD184AC5D: DevKit.Controls.Section;
		}
		interface tab__B1D11343_999F_4087_9639_B174555F8DD1_Sections {
			_B091D713_73A9_4924_A907_F758B24ED473: DevKit.Controls.Section;
		}
		interface tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC extends DevKit.Controls.ITab {
			Section: tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC_Sections;
		}
		interface tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284 extends DevKit.Controls.ITab {
			Section: tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284_Sections;
		}
		interface tab__B1D11343_999F_4087_9639_B174555F8DD1 extends DevKit.Controls.ITab {
			Section: tab__B1D11343_999F_4087_9639_B174555F8DD1_Sections;
		}
		interface Tabs {
			_5AD926F2_BA35_49BB_A8E1_5F145D5E93BC: tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC;
			_90B52AA5_E49E_48DF_B94F_D75C1FC1A284: tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284;
			_B1D11343_999F_4087_9639_B174555F8DD1: tab__B1D11343_999F_4087_9639_B174555F8DD1;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_PrivacyHelp: DevKit.Controls.IFrame;
			msdyusd_GlobalOption: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			uii_name: DevKit.Controls.String;
			uii_value: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Option */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formuii_option_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form uii_option_Information */
		Body: DevKit.Formuii_option_Information.Body;
		/** The Footer section of form uii_option_Information */
		Footer: DevKit.Formuii_option_Information.Footer;
		/** The Process of form uii_option_Information */
		Process: DevKit.Formuii_option_Information.Process;
		/** The SidePanes of form uii_option_Information */
		SidePanes: DevKit.SidePanes;
	}
	class uii_optionApi {
		/**
		* DynamicsCrm.DevKit uii_optionApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyusd_GlobalOption: OptionSet.uii_option.msdyusd_GlobalOption;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the UII Option */
		statecode: OptionSet.uii_option.statecode;
		/** Reason for the status of the UII Option */
		statuscode: OptionSet.uii_option.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** The name of the custom entity. */
		uii_name: string;
		/** Unique identifier for entity instances */
		uii_optionId: string;
		uii_value: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyusd_GlobalOption: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the UII Option */
			readonly statecode: string;
			/** Reason for the status of the UII Option */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** The name of the custom entity. */
			readonly uii_name: string;
			/** Unique identifier for entity instances */
			readonly uii_optionId: string;
			readonly uii_value: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace uii_option {
		enum msdyusd_GlobalOption {
			/** 100000000 */
			ClientCacheVersionNumber,
			/** 100000001 */
			CRM_UI_Base_Url,
			/** 100000007 */
			DiagnosticsConfiguration,
			/** 100000002 */
			HelpImproveUSD,
			/** 100000006 */
			IEProcessKeyboardShortcut,
			/** 100000011 */
			InternetExplorerPooling,
			/** 100000003 */
			maxNumberOfSessions,
			/** 1000000040 */
			Others,
			/** 100000008 */
			PanelNavigationShortcut,
			/** 100000009 */
			PopupNavigationShortcut,
			/** 100000004 */
			ProcessTerminationThreshold,
			/** 100000010 */
			ShowNPSDialog,
			/** 100000005 */
			ShowScriptErrors
		}
		enum OwnerIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}