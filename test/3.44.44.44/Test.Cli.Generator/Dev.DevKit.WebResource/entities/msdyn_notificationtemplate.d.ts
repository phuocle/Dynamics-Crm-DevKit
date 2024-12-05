//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_notificationtemplate_Information {
		interface tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9_Sections {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9 extends DevKit.Controls.ITab {
			Section: tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9_Sections;
		}
		interface Tabs {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9: tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9;
		}
		interface Body {
			Tab: Tabs;
			/** Display label for the button to accept a notification */
			msdyn_acceptbuttontext: DevKit.Controls.String;
			/** Enables auto accept of the notification. */
			msdyn_autoacceptnotification: DevKit.Controls.Boolean;
			/** disable auto popup session. */
			msdyn_autopopupsession: DevKit.Controls.Boolean;
			/** Show desktop notifications when app is in background or never */
			msdyn_desktopnotificationmode: DevKit.Controls.OptionSet;
			/** Display icon for this notification. Path to the webresource */
			msdyn_icon: DevKit.Controls.String;
			/** The name of the notification. */
			msdyn_name: DevKit.Controls.String;
			/** Display label for the button to reject a notification */
			msdyn_rejectbuttontext: DevKit.Controls.String;
			/** Toggle this to enable or disable the reject button from notification. */
			msdyn_showrejectbutton: DevKit.Controls.Boolean;
			/** Do you want to show a countdown of when this notification will close? */
			msdyn_showtimeout: DevKit.Controls.Boolean;
			/** Notification time out period. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** The title to be displayed for this notification. */
			msdyn_title: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
		interface Grid {
			NotificationFields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_notificationtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_notificationtemplate_Information */
		Body: DevKit.Formmsdyn_notificationtemplate_Information.Body;
		/** The Navigation of form msdyn_notificationtemplate_Information */
		Navigation: DevKit.Formmsdyn_notificationtemplate_Information.Navigation;
		/** The Grid of form msdyn_notificationtemplate_Information */
		Grid: DevKit.Formmsdyn_notificationtemplate_Information.Grid;
		/** The SidePanes of form msdyn_notificationtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_notificationtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_notificationtemplateApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_notificationtemplate.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Display label for the button to accept a notification */
		msdyn_acceptbuttontext: string;
		/** Enables auto accept of the notification. */
		msdyn_autoacceptnotification: boolean;
		/** disable auto popup session. */
		msdyn_autopopupsession: boolean;
		/** Description of the Notification. */
		msdyn_description: string;
		/** Show desktop notifications when app is in background or never */
		msdyn_desktopnotificationmode: OptionSet.msdyn_notificationtemplate.msdyn_desktopnotificationmode;
		/** Display icon for this notification. Path to the webresource */
		msdyn_icon: string;
		/** The name of the notification. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_notificationtemplateId: string;
		/** Display label for the button to reject a notification */
		msdyn_rejectbuttontext: string;
		/** Toggle this to enable or disable the reject button from notification. */
		msdyn_showrejectbutton: boolean;
		/** Do you want to show a countdown of when this notification will close? */
		msdyn_showtimeout: boolean;
		/** Theme color for Notification template. */
		msdyn_theme: OptionSet.msdyn_notificationtemplate.msdyn_theme;
		/** Notification time out period. */
		msdyn_timeout: number;
		/** The title to be displayed for this notification. */
		msdyn_title: string;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Notification Template */
		statecode: OptionSet.msdyn_notificationtemplate.statecode;
		/** Reason for the status of the Notification Template */
		statuscode: OptionSet.msdyn_notificationtemplate.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Display label for the button to accept a notification */
			readonly msdyn_acceptbuttontext: string;
			/** Enables auto accept of the notification. */
			readonly msdyn_autoacceptnotification: string;
			/** disable auto popup session. */
			readonly msdyn_autopopupsession: string;
			/** Description of the Notification. */
			readonly msdyn_description: string;
			/** Show desktop notifications when app is in background or never */
			readonly msdyn_desktopnotificationmode: string;
			/** Display icon for this notification. Path to the webresource */
			readonly msdyn_icon: string;
			/** The name of the notification. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_notificationtemplateId: string;
			/** Display label for the button to reject a notification */
			readonly msdyn_rejectbuttontext: string;
			/** Toggle this to enable or disable the reject button from notification. */
			readonly msdyn_showrejectbutton: string;
			/** Do you want to show a countdown of when this notification will close? */
			readonly msdyn_showtimeout: string;
			/** Theme color for Notification template. */
			readonly msdyn_theme: string;
			/** Notification time out period. */
			readonly msdyn_timeout: string;
			/** The title to be displayed for this notification. */
			readonly msdyn_title: string;
			/** Unique Name for the entity. */
			readonly msdyn_UniqueName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Notification Template */
			readonly statecode: string;
			/** Reason for the status of the Notification Template */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_notificationtemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_desktopnotificationmode {
			/** 509180002 */
			Always,
			/** 509180000 */
			Never,
			/** 509180001 */
			When_app_is_in_background
		}
		enum msdyn_theme {
			/** 509180000 */
			Dark,
			/** 509180001 */
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