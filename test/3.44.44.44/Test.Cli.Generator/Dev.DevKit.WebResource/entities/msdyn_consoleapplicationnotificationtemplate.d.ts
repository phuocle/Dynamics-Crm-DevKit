//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_consoleapplicationnotificationtemplate_Information {
		interface tab__9730037D_AB23_4A34_9B05_5A0E50E1C401_Sections {
			_9730037D_AB23_4A34_9B05_5A0E50E1C401_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__9730037D_AB23_4A34_9B05_5A0E50E1C401 extends DevKit.Controls.ITab {
			Section: tab__9730037D_AB23_4A34_9B05_5A0E50E1C401_Sections;
		}
		interface Tabs {
			_9730037D_AB23_4A34_9B05_5A0E50E1C401: tab__9730037D_AB23_4A34_9B05_5A0E50E1C401;
		}
		interface Body {
			Tab: Tabs;
			/** Display label for the button to accept a notification */
			msdyn_AcceptButtonText: DevKit.Controls.String;
			msdyn_AutoAcceptNotification: DevKit.Controls.Boolean;
			/** Show desktop notifications when app is in background or never */
			msdyn_DesktopNotificationSettings: DevKit.Controls.OptionSet;
			/** Display icon for this notification. Can be either an image URL or a font-icon */
			msdyn_Icon: DevKit.Controls.String;
			msdyn_infosubheader: DevKit.Controls.ActionCards;
			/** The name of this Notification template. */
			msdyn_name: DevKit.Controls.String;
			msdyn_notificationbuttons: DevKit.Controls.ActionCards;
			msdyn_preview: DevKit.Controls.ActionCards;
			msdyn_RejectButtonAutoAccept: DevKit.Controls.Boolean;
			/** Display label for the button to reject a notification */
			msdyn_RejectButtonText: DevKit.Controls.String;
			/** Show countdown for when the notification will disappear */
			msdyn_Showtimeout: DevKit.Controls.OptionSet;
			/** Theme color for Notification template. */
			msdyn_Theme: DevKit.Controls.OptionSet;
			/** Notification time out period. */
			msdyn_Timeout: DevKit.Controls.Integer;
			/** The title to be displayed for this notification. */
			msdyn_Title: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate: DevKit.Controls.NavigationItem
		}
		interface Grid {
			NotificationFields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_consoleapplicationnotificationtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_consoleapplicationnotificationtemplate_Information */
		Body: DevKit.Formmsdyn_consoleapplicationnotificationtemplate_Information.Body;
		/** The Navigation of form msdyn_consoleapplicationnotificationtemplate_Information */
		Navigation: DevKit.Formmsdyn_consoleapplicationnotificationtemplate_Information.Navigation;
		/** The Grid of form msdyn_consoleapplicationnotificationtemplate_Information */
		Grid: DevKit.Formmsdyn_consoleapplicationnotificationtemplate_Information.Grid;
		/** The SidePanes of form msdyn_consoleapplicationnotificationtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_consoleapplicationnotificationtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_consoleapplicationnotificationtemplateApi
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
		/** Display label for the button to accept a notification */
		msdyn_AcceptButtonText: string;
		/** The action buttons to be displayed. (Deprecated) */
		msdyn_ActionButtons: Array<OptionSet.msdyn_consoleapplicationnotificationtemplate.msdyn_ActionButtons>;
		msdyn_AutoAcceptNotification: boolean;
		/** Unique identifier for entity instances */
		msdyn_consoleapplicationnotificationtemplateId: string;
		/** Show desktop notifications when app is in background or never */
		msdyn_DesktopNotificationSettings: OptionSet.msdyn_consoleapplicationnotificationtemplate.msdyn_DesktopNotificationSettings;
		/** Display icon for this notification. Can be either an image URL or a font-icon */
		msdyn_Icon: string;
		/** The name of this Notification template. */
		msdyn_name: string;
		/** JSON object to pass key-value pairs for action buttons that are to be present on the notification */
		msdyn_NotificationButtons: string;
		/** Deprecated field */
		msdyn_NotificationFieldsPlaceholder: string;
		msdyn_RejectButtonAutoAccept: boolean;
		/** Display label for the button to reject a notification */
		msdyn_RejectButtonText: string;
		/** Notification display order relative to other notification templates. */
		msdyn_RenderingOrder: number;
		/** Show countdown for when the notification will disappear */
		msdyn_Showtimeout: OptionSet.msdyn_consoleapplicationnotificationtemplate.msdyn_Showtimeout;
		/** Theme color for Notification template. */
		msdyn_Theme: OptionSet.msdyn_consoleapplicationnotificationtemplate.msdyn_Theme;
		/** Notification time out period. */
		msdyn_Timeout: number;
		/** The title to be displayed for this notification. */
		msdyn_Title: string;
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
		/** Status of the Notification Template */
		statecode: OptionSet.msdyn_consoleapplicationnotificationtemplate.statecode;
		/** Reason for the status of the Notification Template */
		statuscode: OptionSet.msdyn_consoleapplicationnotificationtemplate.statuscode;
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
			/** Display label for the button to accept a notification */
			readonly msdyn_AcceptButtonText: string;
			/** The action buttons to be displayed. (Deprecated) */
			readonly msdyn_ActionButtons: Array<string>;
			readonly msdyn_AutoAcceptNotification: string;
			/** Unique identifier for entity instances */
			readonly msdyn_consoleapplicationnotificationtemplateId: string;
			/** Show desktop notifications when app is in background or never */
			readonly msdyn_DesktopNotificationSettings: string;
			/** Display icon for this notification. Can be either an image URL or a font-icon */
			readonly msdyn_Icon: string;
			/** The name of this Notification template. */
			readonly msdyn_name: string;
			/** JSON object to pass key-value pairs for action buttons that are to be present on the notification */
			readonly msdyn_NotificationButtons: string;
			/** Deprecated field */
			readonly msdyn_NotificationFieldsPlaceholder: string;
			readonly msdyn_RejectButtonAutoAccept: string;
			/** Display label for the button to reject a notification */
			readonly msdyn_RejectButtonText: string;
			/** Notification display order relative to other notification templates. */
			readonly msdyn_RenderingOrder: string;
			/** Show countdown for when the notification will disappear */
			readonly msdyn_Showtimeout: string;
			/** Theme color for Notification template. */
			readonly msdyn_Theme: string;
			/** Notification time out period. */
			readonly msdyn_Timeout: string;
			/** The title to be displayed for this notification. */
			readonly msdyn_Title: string;
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
			/** Status of the Notification Template */
			readonly statecode: string;
			/** Reason for the status of the Notification Template */
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
	namespace msdyn_consoleapplicationnotificationtemplate {
		enum msdyn_ActionButtons {
			/** 100000000 */
			Allow,
			/** 100000001 */
			Deny
		}
		enum msdyn_DesktopNotificationSettings {
			/** 100000002 */
			Never,
			/** 100000003 */
			When_app_is_in_background
		}
		enum msdyn_Showtimeout {
			/** 100000001 */
			No,
			/** 100000000 */
			Yes
		}
		enum msdyn_Theme {
			/** 100000000 */
			Dark,
			/** 100000001 */
			Light
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