//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannel_Instance {
		interface Tabs {
		}
		interface Body {
			extended_form: DevKit.Controls.ActionCards;
			msdyn_channeldefinitionid: DevKit.Controls.ActionCards;
			msdyn_contactpoint: DevKit.Controls.ELSE3???;//msdyn_contactpoint - B73EDE05-5BEB-4818-BCAF-E99CB00B220D -- FOR DEBUG 
			msdyn_Description: DevKit.Controls.String;
			/** LookUp for Extended Entities brought in by custom channels. */
			msdyn_extendedentityId: DevKit.Controls.Lookup;
			msdyn_Name: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocsession_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_transcript_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormChannel_Instance extends DevKit.IForm {
		/**
		* Channel Instance [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Channel_Instance */
		Body: DevKit.FormChannel_Instance.Body;
		/** The Navigation of form Channel_Instance */
		Navigation: DevKit.FormChannel_Instance.Navigation;
		/** The SidePanes of form Channel_Instance */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_ChannelInstance_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocsession_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_transcript_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ChannelInstance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ChannelInstance_Information */
		Body: DevKit.Formmsdyn_ChannelInstance_Information.Body;
		/** The Navigation of form msdyn_ChannelInstance_Information */
		Navigation: DevKit.Formmsdyn_ChannelInstance_Information.Navigation;
		/** The SidePanes of form msdyn_ChannelInstance_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMobile_app_configuration {
		interface tab_tab_mobile_devices_Sections {
			tab_mobile_devices_section: DevKit.Controls.Section;
		}
		interface tab_tab_mobile_devices extends DevKit.Controls.ITab {
			Section: tab_tab_mobile_devices_Sections;
		}
		interface Tabs {
			tab_mobile_devices: tab_tab_mobile_devices;
		}
		interface Body {
			Tab: Tabs;
			devinfo_form: DevKit.Controls.ActionCards;
			extended_form: DevKit.Controls.ActionCards;
			msdyn_channeldefinitionid: DevKit.Controls.ActionCards;
			/** Channel contact point, eg. social handle */
			msdyn_ContactPoint: DevKit.Controls.String;
			msdyn_Description: DevKit.Controls.String;
			/** LookUp for Extended Entities brought in by custom channels. */
			msdyn_extendedentityId: DevKit.Controls.Lookup;
			msdyn_Name: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocsession_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_transcript_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_mobile_devices: DevKit.Controls.Grid;
		}
	}
	class FormMobile_app_configuration extends DevKit.IForm {
		/**
		* Mobile app configuration [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mobile_app_configuration */
		Body: DevKit.FormMobile_app_configuration.Body;
		/** The Navigation of form Mobile_app_configuration */
		Navigation: DevKit.FormMobile_app_configuration.Navigation;
		/** The Grid of form Mobile_app_configuration */
		Grid: DevKit.FormMobile_app_configuration.Grid;
		/** The SidePanes of form Mobile_app_configuration */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMobile_app_wizard {
		interface Header extends DevKit.Controls.IHeader {
			msdyn_Name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			wizard_main: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocsession_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_transcript_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormMobile_app_wizard extends DevKit.IForm {
		/**
		* Mobile app wizard [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mobile_app_wizard */
		Body: DevKit.FormMobile_app_wizard.Body;
		/** The Header section of form Mobile_app_wizard */
		Header: DevKit.FormMobile_app_wizard.Header;
		/** The Navigation of form Mobile_app_wizard */
		Navigation: DevKit.FormMobile_app_wizard.Navigation;
		/** The SidePanes of form Mobile_app_wizard */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPhone_Number_Properties {
		interface tab_PhoneNumber_Sections {
			PhoneNumberProperties: DevKit.Controls.Section;
		}
		interface tab_PhoneNumber extends DevKit.Controls.ITab {
			Section: tab_PhoneNumber_Sections;
		}
		interface Tabs {
			PhoneNumber: tab_PhoneNumber;
		}
		interface Body {
			Tab: Tabs;
			/** Channel contact point, eg. social handle */
			msdyn_ContactPoint: DevKit.Controls.String;
			msdyn_Name: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocsession_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_transcript_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormPhone_Number_Properties extends DevKit.IForm {
		/**
		* Phone Number Properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Phone_Number_Properties */
		Body: DevKit.FormPhone_Number_Properties.Body;
		/** The Navigation of form Phone_Number_Properties */
		Navigation: DevKit.FormPhone_Number_Properties.Navigation;
		/** The SidePanes of form Phone_Number_Properties */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_ChannelInstance_Wizard {
		interface Header extends DevKit.Controls.IHeader {
			msdyn_Name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			wizard_main: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocsession_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_transcript_msdyn_channelinstance: DevKit.Controls.NavigationItem,
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ChannelInstance_Wizard extends DevKit.IForm {
		/**
		* Wizard [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ChannelInstance_Wizard */
		Body: DevKit.Formmsdyn_ChannelInstance_Wizard.Body;
		/** The Header section of form msdyn_ChannelInstance_Wizard */
		Header: DevKit.Formmsdyn_ChannelInstance_Wizard.Header;
		/** The Navigation of form msdyn_ChannelInstance_Wizard */
		Navigation: DevKit.Formmsdyn_ChannelInstance_Wizard.Navigation;
		/** The SidePanes of form msdyn_ChannelInstance_Wizard */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ChannelInstanceApi {
		/**
		* DynamicsCrm.DevKit msdyn_ChannelInstanceApi
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
		/** Reference to Channel Definition of this Channel Instance */
		msdyn_ChannelDefinitionId: string;
		/** Lookup to Channel Instance Account */
		msdyn_ChannelInstanceAccountId: string;
		/** Unique identifier for entity instances */
		msdyn_ChannelInstanceId: string;
		/** Consuming Applications using channel extensibility */
		msdyn_ConsumingApplicationId: string;
		/** Channel contact point, eg. social handle */
		msdyn_ContactPoint: string;
		msdyn_Description: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_byoacschannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_infobipchannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_mobileappchannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_telesignchannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_twiliochannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityid_msdynmkt_vibeschannelinstance: string;
		/** LookUp for Extended Entities brought in by custom channels. */
		msdyn_extendedentityId_msdyn_defextendedchannelinstance: string;
		msdyn_Name: string;
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
		/** Status of the Channel Instance */
		statecode: OptionSet.msdyn_ChannelInstance.statecode;
		/** Reason for the status of the Channel Instance */
		statuscode: OptionSet.msdyn_ChannelInstance.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Reference to Channel Definition of this Channel Instance */
			readonly msdyn_ChannelDefinitionId: string;
			/** Lookup to Channel Instance Account */
			readonly msdyn_ChannelInstanceAccountId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ChannelInstanceId: string;
			/** Consuming Applications using channel extensibility */
			readonly msdyn_ConsumingApplicationId: string;
			/** Channel contact point, eg. social handle */
			readonly msdyn_ContactPoint: string;
			readonly msdyn_Description: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_byoacschannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_infobipchannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_mobileappchannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_telesignchannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_twiliochannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityid_msdynmkt_vibeschannelinstance: string;
			/** LookUp for Extended Entities brought in by custom channels. */
			readonly msdyn_extendedentityId_msdyn_defextendedchannelinstance: string;
			readonly msdyn_Name: string;
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
			/** Status of the Channel Instance */
			readonly statecode: string;
			/** Reason for the status of the Channel Instance */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ChannelInstance {
		enum msdyn_extendedentityIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}